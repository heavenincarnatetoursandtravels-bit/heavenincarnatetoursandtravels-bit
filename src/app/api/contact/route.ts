import { NextResponse } from 'next/server';
import { Resend } from 'resend';

function isValidString(val: any, maxLength: number): boolean {
  return typeof val === 'string' && val.trim().length > 0 && val.trim().length <= maxLength;
}

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields and types
    if (
      !isValidString(name, 100) ||
      !isValidString(email, 100) ||
      !isValidString(phone, 20) ||
      !isValidString(subject, 150) ||
      !isValidString(message, 5000)
    ) {
      return NextResponse.json(
        { error: 'Invalid input. Please check your fields and try again.' },
        { status: 400 }
      );
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: 'Invalid email format.' },
        { status: 400 }
      );
    }

    const safeName = name.trim();
    const safeEmail = email.trim();
    const safePhone = phone.trim();
    const safeSubject = subject.trim();
    const safeMessage = message.trim();

    const currentDateTime = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'medium',
    });

    // Escape basic HTML for safeMessage to prevent injection in HTML email
    const escapeHtml = (unsafe: string) => {
        return unsafe
             .replace(/&/g, "&amp;")
             .replace(/</g, "&lt;")
             .replace(/>/g, "&gt;")
             .replace(/"/g, "&quot;")
             .replace(/'/g, "&#039;");
    };

    const textContent = `--------------------------------------------------
New Website Contact Enquiry

Name: ${safeName}
Email: ${safeEmail}
Phone: ${safePhone}

Subject: ${safeSubject}

Message:
${safeMessage}

Submitted On: ${currentDateTime}
--------------------------------------------------`;

    const htmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>New Website Contact Enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(safeName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(safeEmail)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(safePhone)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(safeSubject)}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap; background: #f4f4f4; padding: 12px; border-radius: 4px;">${escapeHtml(safeMessage)}</p>
        <br/>
        <p><small>Submitted On: ${currentDateTime}</small></p>
      </div>
    `;

    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

    const data = await resend.emails.send({
      from: `Website Enquiry <${fromEmail}>`,
      to: 'heavenincarnatetoursandtravels@gmail.com',
      replyTo: safeEmail,
      subject: `New Website Contact Enquiry: ${safeSubject}`,
      text: textContent,
      html: htmlContent,
    });

    if (data.error) {
      console.error('Resend error:', data.error);
      return NextResponse.json(
        { error: 'Unable to send your enquiry. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Email sending failed:', error);
    return NextResponse.json(
      { error: 'Unable to send your enquiry. Please try again.' },
      { status: 500 }
    );
  }
}
