import { NextRequest, NextResponse } from 'next/server';
import { createLead } from '@/lib/store';
import { sendLeadNotificationEmail } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, phone, email, message, location } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone are required' }, { status: 400 });
    }

    const lead = await createLead({
      name,
      company: company || '',
      phone,
      email: email || '',
      location: location || 'Vapi',
      service: 'General Contact Inquiry',
      requirement: message || 'General contact inquiry from website',
      status: 'New'
    });

    // Fire email notification asynchronously
    sendLeadNotificationEmail({
      name,
      company,
      phone,
      email,
      location,
      requirement: message,
      type: 'Contact'
    }).catch(err => console.error('Contact email error:', err));

    return NextResponse.json({ success: true, lead });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}