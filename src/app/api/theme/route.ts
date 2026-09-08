import { NextRequest, NextResponse } from 'next/server';
import { getThemeConfig, updateThemeConfig } from '@/lib/store';

export async function GET() {
  try {
    const theme = await getThemeConfig();
    return NextResponse.json({ success: true, theme });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to fetch theme settings' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const updated = await updateThemeConfig(body);
    return NextResponse.json({ success: true, theme: updated });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to update theme settings' }, { status: 500 });
  }
}
