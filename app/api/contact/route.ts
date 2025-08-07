import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Form data interface
interface FormData {
  name: string;
  email: string;
  website: string;
  package?: string;
  message?: string;
}

// Email template for notification
const createEmailHTML = (data: FormData) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #9333ea 0%, #3b82f6 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f7f7f7; padding: 20px; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #666; }
    .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; }
    .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; color: #888; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin: 0;">New Enquiry from Discoverable</h2>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Name:</div>
        <div class="value">${data.name}</div>
      </div>
      <div class="field">
        <div class="label">Email:</div>
        <div class="value">${data.email}</div>
      </div>
      <div class="field">
        <div class="label">Website:</div>
        <div class="value">${data.website}</div>
      </div>
      <div class="field">
        <div class="label">Package Selected:</div>
        <div class="value">${data.package || 'No package selected'}</div>
      </div>
      ${data.message ? `
      <div class="field">
        <div class="label">Message:</div>
        <div class="value">${data.message}</div>
      </div>
      ` : ''}
      <div class="footer">
        <p>This enquiry was submitted at ${new Date().toLocaleString()}</p>
      </div>
    </div>
  </div>
</body>
</html>
`;

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    
    // Basic validation
    if (!body.name || !body.email || !body.website) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send email notification using Resend
    const { data, error } = await resend.emails.send({
      from: 'Discoverable <onboarding@resend.dev>', // Use your verified domain in production
      to: process.env.NOTIFICATION_EMAIL || 'hello@discoverable.cc',
      subject: `New Enquiry: ${body.name} - ${body.package || 'General'}`,
      html: createEmailHTML(body),
      replyTo: body.email,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Send auto-reply to user (optional)
    await resend.emails.send({
      from: 'Discoverable <onboarding@resend.dev>',
      to: body.email,
      subject: 'Thank you for your enquiry - Discoverable',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #9333ea;">Thank you for contacting Discoverable!</h2>
          <p>Hi ${body.name},</p>
          <p>We've received your enquiry and will get back to you within 24 hours.</p>
          <p>Here's what you submitted:</p>
          <ul>
            <li><strong>Website:</strong> ${body.website}</li>
            <li><strong>Package:</strong> ${body.package || 'To be discussed'}</li>
          </ul>
          <p>In the meantime, feel free to reply to this email if you have any questions.</p>
          <p>Best regards,<br>The Discoverable Team</p>
        </div>
      `,
    });

    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Enquiry submitted successfully',
        id: data?.id 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}