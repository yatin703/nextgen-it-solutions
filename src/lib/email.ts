import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;
const TO_EMAIL = process.env.NOTIFICATION_EMAIL || process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'delivered@resend.dev';

interface LeadEmailData {
  name: string;
  phone: string;
  email?: string;
  company?: string;
  location?: string;
  service?: string;
  requirement?: string;
  type: 'Quote' | 'Contact';
  fileAttachment?: {
    filename: string;
    content: Buffer;
  };
}

export async function sendLeadNotificationEmail(data: LeadEmailData) {
  if (!resend) {
    console.warn('[Email Warning] RESEND_API_KEY is not configured in environment variables. Email notification skipped.');
    return { skipped: true, message: 'RESEND_API_KEY missing' };
  }

  const subject = `🔔 New ${data.type} Request: ${data.name} (${data.company || 'Individual'})`;

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #ffffff;">
      <h2 style="color: #0f172a; border-bottom: 2px solid #3b82f6; padding-bottom: 8px; margin-top: 0;">
        NextGen IT Solutions - New ${data.type} Alert
      </h2>
      
      <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
        <tr>
          <td style="padding: 8px 0; color: #64748b; width: 140px; font-weight: bold;">Client Name:</td>
          <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${data.name}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Phone:</td>
          <td style="padding: 8px 0; color: #0f172a;">
            <a href="tel:${data.phone}" style="color: #2563eb; text-decoration: none; font-weight: bold;">${data.phone}</a>
            <a href="https://wa.me/${data.phone.replace(/[^0-9]/g, '')}" style="margin-left: 10px; background-color: #22c55e; color: white; padding: 3px 8px; border-radius: 4px; text-decoration: none; font-size: 12px;">WhatsApp</a>
          </td>
        </tr>
        ${data.email ? `
        <tr>
          <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Email:</td>
          <td style="padding: 8px 0; color: #0f172a;">
            <a href="mailto:${data.email}" style="color: #2563eb;">${data.email}</a>
          </td>
        </tr>` : ''}
        ${data.company ? `
        <tr>
          <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Company / Plant:</td>
          <td style="padding: 8px 0; color: #0f172a;">${data.company}</td>
        </tr>` : ''}
        ${data.location ? `
        <tr>
          <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Location / Area:</td>
          <td style="padding: 8px 0; color: #0f172a;">${data.location}</td>
        </tr>` : ''}
        ${data.service ? `
        <tr>
          <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Requested Service:</td>
          <td style="padding: 8px 0; color: #0f172a; font-weight: bold; color: #1d4ed8;">${data.service}</td>
        </tr>` : ''}
      </table>

      <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-radius: 6px; border-left: 4px solid #3b82f6;">
        <h4 style="margin: 0 0 8px 0; color: #334155;">Requirements / Message:</h4>
        <p style="margin: 0; color: #1e293b; white-space: pre-wrap; line-height: 1.5;">${data.requirement || 'No additional details provided.'}</p>
      </div>

      <div style="margin-top: 25px; font-size: 12px; color: #94a3b8; text-align: center; border-top: 1px solid #f1f5f9; padding-top: 10px;">
        Sent automatically from NextGen IT Solutions website lead engine.
      </div>
    </div>
  `;

  try {
    const attachments = data.fileAttachment ? [
      {
        filename: data.fileAttachment.filename,
        content: data.fileAttachment.content
      }
    ] : undefined;

    const response = await resend.emails.send({
      from: 'NextGen Inquiries <onboarding@resend.dev>',
      to: [TO_EMAIL],
      subject,
      html,
      attachments
    });

    return { success: true, response };
  } catch (error: any) {
    console.error('[Resend Error] Failed to dispatch email:', error);
    return { success: false, error: error.message };
  }
}
