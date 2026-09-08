import { NextRequest, NextResponse } from 'next/server';
import { createLead } from '@/lib/store';

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

    return NextResponse.json({ success: true, lead });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}