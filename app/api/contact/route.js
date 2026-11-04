
import { NextResponse } from 'next/server';
import { isLeadSource, leadSourceLabel } from '@/lib/leadSources';

export const runtime = 'nodejs';

const FROM =
  process.env.CONTACT_FROM_EMAIL ||
  'Euroasia Website <noreply@mail.euroasias.com>';

const TO = process.env.CONTACT_TO_EMAIL || 'info@euroasias.com';

const LOGO_WHITE = 'https://euroasias.com/logo-white.png';
const LOGO = 'https://euroasias.com/logo.png';
const WEBSITE = 'https://euroasias.com';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const BRAND = {
  navy: '#0B1F3A',
  gold: '#C9A24D',
  cream: '#FAF9F6',
  text: '#343B45',
  muted: '#6B7280',
};

const clean = (value, max) =>
  typeof value === 'string' ? value.trim().slice(0, max) : '';

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (ch) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[ch]);

const fail = (error, status) =>
  NextResponse.json({ success: false, error }, { status });

const emailLayout = ({ title, preheader, content }) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta name="color-scheme" content="light"/>
  <title>${escapeHtml(title)}</title>
</head>

<body style="margin:0;padding:0;background:${BRAND.cream};font-family:Arial,Helvetica,sans-serif;color:${BRAND.text}">

  <div style="display:none;font-size:1px;color:${BRAND.cream};line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden">
    ${escapeHtml(preheader)}
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
    style="background:${BRAND.cream};padding:35px 12px">
    <tr>
      <td align="center">

        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
          style="max-width:620px;background:#ffffff;border-radius:12px;overflow:hidden">

          <!-- Branded Header -->
          <tr>
            <td align="center" style="background:${BRAND.navy};padding:30px 20px">

              <img
                src="${LOGO_WHITE}"
                alt="Euroasia"
                width="190"
                style="display:block;width:190px;max-width:80%;height:auto;margin:0 auto;border:0"
              />

              <div style="width:45px;height:3px;background:${BRAND.gold};margin:20px auto 0"></div>

            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding:38px 32px 35px">

              ${content}

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:${BRAND.cream};padding:25px 25px;text-align:center;border-top:1px solid #eee">

              <img
                src="${LOGO}"
                alt="Euroasia"
                width="125"
                style="display:block;width:125px;max-width:70%;height:auto;margin:0 auto 15px;border:0"
              />

              <p style="font-size:12px;color:${BRAND.muted};margin:0 0 10px">
                Professional business solutions.
              </p>

              <a href="${WEBSITE}"
                style="font-size:13px;color:${BRAND.navy};text-decoration:none;font-weight:bold">
                Visit Our Website
              </a>

              <p style="font-size:11px;color:#999;margin:20px 0 0">
                © ${new Date().getFullYear()} Euroasia. All rights reserved.
              </p>

            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`;

async function sendEmail(apiKey, payload) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
    cache: 'no-store',
  });

  const result = await response.json().catch(() => ({}));

  if (!response.ok) {
    console.error('Resend error:', response.status, result);

    throw new Error(
      result.message || `Resend failed with status ${response.status}`
    );
  }

  return result;
}

export async function POST(request) {
  let data;

  // Parse request
  try {
    data = await request.json();
  } catch {
    return fail('Invalid request', 400);
  }

  // Honeypot spam protection
  if (data?.honeypot) {
    return NextResponse.json({ success: true });
  }

  // Extract and sanitize form values
  const name = clean(data.name, 100);
  const email = clean(data.email, 255);
  const phone = clean(data.phone, 20);
  const service = clean(data.serviceInterest, 100);
  const message = clean(data.message, 5000);

  const source = isLeadSource(data.source)
    ? data.source
    : 'website';

  // Validate fields
  if (!name || !phone || !EMAIL_PATTERN.test(email)) {
    return fail('Please provide valid contact details.', 400);
  }

  // Require explicit consent
  if (data.consent !== true) {
    return fail('Consent is required.', 400);
  }

  // API configuration
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error('RESEND_API_KEY is missing.');
    return fail('Email service is not configured.', 500);
  }

  const consentNote =
    `Agreed to be contacted about this enquiry via the website form, ${new Date().toISOString()}`;

  // Escape all visitor-provided values
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const safeService = escapeHtml(service || 'Not specified');
  const safeMessage = escapeHtml(message || 'No message provided');
  const safeSource = escapeHtml(leadSourceLabel(source));
  const safeConsent = escapeHtml(consentNote);

  // ============================================
  // EMAIL 1: ADMIN NOTIFICATION
  // ============================================

  const adminRows = [
    ['Name', safeName],
    ['Email', safeEmail],
    ['Phone', safePhone],
    ['Service', safeService],
    ['Lead Source', safeSource],
    ['Consent', safeConsent],
  ];

  const adminTable = `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
      style="border-collapse:collapse;font-size:14px">

      ${adminRows.map(([label, value]) => `
        <tr>
          <td style="padding:12px 10px 12px 0;border-bottom:1px solid #eee;color:${BRAND.muted};width:115px;vertical-align:top">
            <strong>${label}</strong>
          </td>

          <td style="padding:12px 0;border-bottom:1px solid #eee;color:${BRAND.text};vertical-align:top">
            ${value}
          </td>
        </tr>
      `).join('')}

    </table>
  `;

  const adminContent = `
    <p style="font-size:12px;letter-spacing:1.5px;text-transform:uppercase;color:${BRAND.gold};font-weight:bold;margin:0 0 12px">
      Website enquiry
    </p>

    <h1 style="font-size:25px;line-height:1.3;color:${BRAND.navy};margin:0 0 12px">
      New enquiry received
    </h1>

    <p style="font-size:14px;line-height:1.7;color:${BRAND.muted};margin:0 0 25px">
      A visitor has submitted a new enquiry through the Euroasia website.
    </p>

    <h3 style="font-size:15px;color:${BRAND.navy};margin:0 0 12px">
      Contact Information
    </h3>

    ${adminTable}

    <h3 style="font-size:15px;color:${BRAND.navy};margin:25px 0 12px">
      Enquiry Message
    </h3>

    <div style="background:${BRAND.cream};padding:18px;border-left:3px solid ${BRAND.gold};border-radius:4px;font-size:14px;line-height:1.8;white-space:pre-wrap">
      ${safeMessage}
    </div>

    <p style="font-size:12px;color:${BRAND.muted};line-height:1.7;margin:25px 0 0">
      You can reply directly to this email to respond to the visitor.
    </p>
  `;

  const adminHtml = emailLayout({
    title: `New enquiry: ${name}`,
    preheader: 'A new enquiry has been submitted on the Euroasia website.',
    content: adminContent,
  });

  const adminText = [
    'NEW EUROASIA WEBSITE ENQUIRY',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Service: ${service || 'Not specified'}`,
    `Lead Source: ${leadSourceLabel(source)}`,
    `Consent: ${consentNote}`,
    '',
    'MESSAGE:',
    message || 'No message provided',
  ].join('\n');

  // Send admin email first
  try {
    await sendEmail(apiKey, {
      from: FROM,
      to: [TO],
      reply_to: email,
      subject: `New enquiry: ${service || 'General'} - ${name}`.replace(
        /[\r\n]+/g,
        ' '
      ),
      html: adminHtml,
      text: adminText,
    });
  } catch (error) {
    console.error('Admin notification failed:', error);

    return fail(
      'We could not submit your enquiry. Please try again.',
      502
    );
  }

  // ============================================
  // EMAIL 2: VISITOR CONFIRMATION
  // ============================================

  const confirmationContent = `
    <p style="font-size:12px;letter-spacing:1.5px;text-transform:uppercase;color:${BRAND.gold};font-weight:bold;margin:0 0 12px">
      Enquiry confirmation
    </p>

    <h1 style="font-size:27px;line-height:1.35;color:${BRAND.navy};margin:0 0 15px">
      Thank you, ${safeName}!
    </h1>

    <p style="font-size:15px;line-height:1.8;color:${BRAND.text};margin:0 0 15px">
      Thank you for reaching out to Euroasia. We have successfully received your enquiry.
    </p>

    <p style="font-size:14px;line-height:1.8;color:${BRAND.muted};margin:0 0 25px">
      Our team will review your requirements and get in touch with you shortly.
      We appreciate your interest in our services.
    </p>

    <div style="background:${BRAND.cream};border-radius:8px;padding:22px;margin:25px 0">

      <h3 style="font-size:15px;color:${BRAND.navy};margin:0 0 16px">
        Your Enquiry Summary
      </h3>

      <p style="font-size:14px;color:${BRAND.muted};margin:8px 0">
        <strong style="color:${BRAND.text}">Service:</strong>
        ${safeService}
      </p>

      <p style="font-size:14px;color:${BRAND.muted};margin:8px 0">
        <strong style="color:${BRAND.text}">Contact number:</strong>
        ${safePhone}
      </p>

      <p style="font-size:14px;color:${BRAND.muted};margin:8px 0">
        <strong style="color:${BRAND.text}">Email:</strong>
        ${safeEmail}
      </p>

      <div style="display:inline-block;background:#e9f2e9;color:#28633b;padding:7px 12px;border-radius:20px;font-size:12px;font-weight:bold;margin-top:10px">
        Enquiry successfully received
      </div>

    </div>

    <p style="font-size:14px;line-height:1.8;color:${BRAND.muted};margin:0 0 25px">
      Have additional information to share? Simply reply to this email.
    </p>

    <p style="font-size:14px;line-height:1.8;color:${BRAND.text};margin:0">
      Warm regards,<br/>
      <strong style="color:${BRAND.navy}">Team Euroasia</strong>
    </p>
  `;

  const confirmationHtml = emailLayout({
    title: 'Thank you for contacting Euroasia',
    preheader: 'We have received your enquiry and our team will contact you shortly.',
    content: confirmationContent,
  });

  const confirmationText = `
Hello ${name},

Thank you for contacting Euroasia!

We have successfully received your enquiry. Our team will review your requirements and get in touch with you shortly.

YOUR ENQUIRY SUMMARY

Service: ${service || 'Not specified'}
Contact number: ${phone}
Email: ${email}

Your enquiry has been successfully received.

If you have additional information to share, simply reply to this email.

Warm regards,
Team Euroasia

${WEBSITE}
  `.trim();

  // Send confirmation to the visitor
  let confirmationSent = false;

  try {
    const result = await sendEmail(apiKey, {
      from: FROM,
      to: [email],
      subject: 'Thank you for contacting Euroasia!',
      html: confirmationHtml,
      text: confirmationText,
    });

    confirmationSent = true;

    console.log('Visitor confirmation accepted by Resend:', result.id);

  } catch (error) {
    // Admin notification has already succeeded.
    // Do not report the whole enquiry as failed.

    console.error('Visitor confirmation failed:', error);
  }

  // Final response
  return NextResponse.json({
    success: true,
    message: confirmationSent
      ? 'Your enquiry has been submitted successfully.'
      : 'Your enquiry has been received. Confirmation email could not be sent.',
    confirmationSent,
  });
}
