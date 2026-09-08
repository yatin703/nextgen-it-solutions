import { NextRequest, NextResponse } from 'next/server';
import { createLead } from '@/lib/store';
import fs from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get('content-type') || '';
    let name = '';
    let company = '';
    let phone = '';
    let email = '';
    let location = 'Vapi GIDC';
    let service = 'General IT Inquiry';
    let requirement = '';
    let attachmentUrl = '';

    if (contentType.includes('multipart/form-data') || contentType.includes('application/x-www-form-urlencoded')) {
      const formData = await req.formData();
      name = (formData.get('name') as string) || '';
      company = (formData.get('company') as string) || '';
      phone = (formData.get('phone') as string) || '';
      email = (formData.get('email') as string) || '';
      location = (formData.get('location') as string) || 'Vapi GIDC';
      service = (formData.get('service') as string) || 'General IT Inquiry';
      requirement = (formData.get('requirement') as string) || '';
      const file = formData.get('file') as File | null;

      if (file && file.size > 0) {
        const uploadDir = path.join(process.cwd(), 'public', 'uploads');
        if (!fs.existsSync(uploadDir)) {
          fs.mkdirSync(uploadDir, { recursive: true });
        }

        const safeFileName = `${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
        const filePath = path.join(uploadDir, safeFileName);
        
        const buffer = Buffer.from(await file.arrayBuffer());
        fs.writeFileSync(filePath, buffer);
        attachmentUrl = `/uploads/${safeFileName}`;
      }
    } else {
      const body = await req.json();
      name = body.name || '';
      company = body.company || '';
      phone = body.phone || '';
      email = body.email || '';
      location = body.location || 'Vapi GIDC';
      service = body.service || 'General IT Inquiry';
      requirement = body.requirement || '';
      attachmentUrl = body.attachmentUrl || '';
    }

    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and Phone number are required' }, { status: 400 });
    }

    const newLead = await createLead({
      name,
      company,
      phone,
      email,
      location,
      service,
      requirement,
      attachmentUrl: attachmentUrl || undefined,
      status: 'New',
      notes: 'Submitted via website quote form'
    });

    return NextResponse.json({ success: true, lead: newLead });
  } catch (error: any) {
    console.error('Quote submission error:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}