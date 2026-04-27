import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, phone, serviceInterest, message, honeypot } = data;

    // Honeypot check for spam
    if (honeypot) {
      return NextResponse.json({ success: true });
    }

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Save to database
    try {
      const { Lead } = await import('@/lib/models');
      await Lead.create({
        name,
        email,
        phone,
        serviceInterest: serviceInterest || null,
        message,
        status: 'new',
        source: 'website',
      });
    } catch (dbError) {
      console.error('Database error:', dbError);
      // Continue even if DB fails - still try to send email
    }

    // Send email notification
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.ADMIN_EMAIL || 'info@euroasias.com',
        subject: `New Contact Form Submission - ${serviceInterest || 'General Inquiry'}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Service Interest:</strong> ${serviceInterest || 'Not specified'}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      });
    } catch (emailError) {
      console.error('Email error:', emailError);
      // Continue even if email fails - lead is saved
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
