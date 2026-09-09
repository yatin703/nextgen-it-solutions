import { NextRequest, NextResponse } from 'next/server';
import { getVisitingCardConfig, updateVisitingCardConfig } from '@/lib/store';

export async function GET() {
  try {
    const card = await getVisitingCardConfig();
    return NextResponse.json({ success: true, card });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to fetch visiting card config' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const updated = await updateVisitingCardConfig(body);
    return NextResponse.json({ success: true, card: updated });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to update visiting card config' }, { status: 500 });
  }
}
