import { NextResponse } from 'next/server';
import { isLeadSource, leadSourceLabel } from '@/lib/leadSources';

/*
  Contact form and popup → one email via Resend (https://resend.com). Nothing is stored,
  so if the email can't be sent the visitor sees an error and can call/WhatsApp instead.

  Environment variables:
    RESEND_API_KEY      required, from https://resend.com/api-keys
    CONTACT_FROM_EMAIL  sender on a domain verified in Resend,
                        e.g. "Euroasia Website <website@euroasias.com>".
                        Until a domain is verified, the default onboarding@resend.dev
                        only delivers to the email address of your own Resend account.
    CONTACT_TO_EMAIL    inbox that receives enquiries (default info@euroasias.com)
*/

const FROM = process.env.CONTACT_FROM_EMAIL || 'Euroasia Website <onboarding@resend.dev>';
const TO = process.env.CONTACT_TO_EMAIL || 'info@euroasias.com';
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const clean = (value, max) =>
  typeof value === 'string' ? value.trim().slice(0, max) : '';

const escapeHtml = (value) =>
  value.replace(
    /[&<>"']/g,
    (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch]
  );

const fail = (error, status) => NextResponse.json({ error }, { status });

export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return fail('Invalid request', 400);
  }

  // Bots fill the hidden field; pretend it worked and send nothing.
  if (data?.honeypot) {
    return NextResponse.json({ success: true });
  }

  const name = clean(data.name, 100);
  const email = clean(data.email, 255);
  const phone = clean(data.phone, 20);
  const service = clean(data.serviceInterest, 100);
  const message = clean(data.message, 5000);
  const source = isLeadSource(data.source) ? data.source : 'website';

  if (!name || !phone || !EMAIL_PATTERN.test(email)) {
    return fail('Missing or invalid fields', 400);
  }

  // DPDP: contact only with an explicit, recorded consent.
  if (data.consent !== true) {
    return fail('Consent is required', 400);
  }
  const consentNote = `Agreed to be contacted about this enquiry via the website form, ${new Date().toISOString()}`;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('Contact form: RESEND_API_KEY is not set, enquiry not sent.');
    return fail('Email is not configured', 500);
  }

  const rows = [
    ['Name', name],
    ['Email', email],
    ['Phone', phone],
    ['Service', service || 'Not specified'],
    ['Came from', leadSourceLabel(source)],
    ['Consent', consentNote],
  ];

  const html = `
    <h2 style="margin:0 0 16px;font-family:sans-serif;color:#002152">New enquiry from the website</h2>
    <table cellpadding="6" style="font-family:sans-serif;font-size:14px;border-collapse:collapse">
      ${rows
        .map(
          ([label, value]) =>
            `<tr><td style="color:#4B5563;padding-right:16px"><strong>${label}</strong></td><td>${escapeHtml(value)}</td></tr>`
        )
        .join('')}
    </table>
    <p style="font-family:sans-serif;font-size:14px;color:#4B5563;margin:20px 0 6px"><strong>Message</strong></p>
    <p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap;margin:0">${
      message ? escapeHtml(message) : '<em>No message</em>'
    }</p>
    <p style="font-family:sans-serif;font-size:12px;color:#A9AEB7;margin-top:24px">Reply to this email to answer ${escapeHtml(name)} directly.</p>
  `;

  const text = [
    ...rows.map(([label, value]) => `${label}: ${value}`),
    '',
    `Message: ${message || 'No message'}`,
  ].join('\n');

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: email,
        subject: `New enquiry: ${service || 'General'} – ${name}`.replace(/[\r\n]+/g, ' '),
        html,
        text,
      }),
    });

    if (!response.ok) {
      console.error('Contact form: Resend error', response.status, await response.text());
      return fail('Could not send your message', 502);
    }
  } catch (error) {
    console.error('Contact form: could not reach Resend', error);
    return fail('Could not send your message', 502);
  }

  return NextResponse.json({ success: true });
}
