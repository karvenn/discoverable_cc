export async function onRequestPost(context) {
  const { request, env } = context;
  
  try {
    // Parse request body
    const body = await request.json();
    
    // Basic validation
    if (!body.name || !body.email || !body.website) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return new Response(JSON.stringify({ error: 'Invalid email format' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Send email using Resend API
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Discoverable <onboarding@resend.dev>',
        to: env.NOTIFICATION_EMAIL || 'hello@discoverable.cc',
        subject: `New Enquiry: ${body.name} - ${body.package || 'General'}`,
        reply_to: body.email,
        html: `
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
                  <div class="value">${body.name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value">${body.email}</div>
                </div>
                <div class="field">
                  <div class="label">Website:</div>
                  <div class="value">${body.website}</div>
                </div>
                <div class="field">
                  <div class="label">Package Selected:</div>
                  <div class="value">${body.package || 'No package selected'}</div>
                </div>
                ${body.message ? `
                <div class="field">
                  <div class="label">Message:</div>
                  <div class="value">${body.message}</div>
                </div>
                ` : ''}
                <div class="footer">
                  <p>This enquiry was submitted at ${new Date().toLocaleString()}</p>
                </div>
              </div>
            </div>
          </body>
          </html>
        `
      })
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error('Resend error:', resendData);
      return new Response(JSON.stringify({ error: 'Failed to send email' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Send auto-reply to user
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
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
        `
      })
    });

    // Return success response
    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Enquiry submitted successfully',
      id: resendData.id 
    }), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });

  } catch (error) {
    console.error('API error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// Handle CORS preflight
export async function onRequestOptions() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}