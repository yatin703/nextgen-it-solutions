import { NextRequest, NextResponse } from 'next/server';
import { getProducts, createProduct } from '@/lib/store';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category') || undefined;
    const search = searchParams.get('search') || undefined;
    const featuredParam = searchParams.get('featured');
    const featured = featuredParam !== null ? featuredParam === 'true' : undefined;

    const products = await getProducts({ category, search, featured });
    return NextResponse.json({ success: true, products });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to fetch products' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, brand, modelNumber, category, shortDesc, specs, isAvailable, featured, price, description, animation3d, animationUrl, imageUrl } = body;

    if (!name || !brand || !category) {
      return NextResponse.json({ error: 'Name, Brand, and Category are required' }, { status: 400 });
    }

    const newProduct = await createProduct({
      name,
      slug: body.slug || '',
      brand,
      modelNumber: modelNumber || 'N/A',
      category,
      shortDesc: shortDesc || '',
      specs: specs || {},
      isAvailable: isAvailable !== undefined ? isAvailable : true,
      featured: featured || false,
      price: price || 'Quote on Request',
      description: description || shortDesc || '',
      animation3d: animation3d || undefined,
      animationUrl: animationUrl || undefined,
      imageUrl: imageUrl || undefined
    });

    return NextResponse.json({ success: true, product: newProduct }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to create product' }, { status: 500 });
  }
}
