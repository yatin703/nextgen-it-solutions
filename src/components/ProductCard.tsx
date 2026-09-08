import React from 'react';
import Link from 'next/link';
import { Cpu, CheckCircle2, Clock, ArrowRight, Star } from 'lucide-react';
import { ProductItem } from '@/lib/types';
import Product3DVisual from './Product3DVisual';

interface ProductCardProps {
  product: ProductItem;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white border border-slate-200 hover:border-blue-400 rounded-xl p-5 transition duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between relative group">
      {product.featured && (
        <div className="absolute -top-2.5 right-4 z-20 bg-amber-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-sm">
          <Star className="w-2.5 h-2.5 fill-current" />
          <span>Featured</span>
        </div>
      )}

      <div>
        {/* 3D Animated Product Visual Stage */}
        <div className="mb-4">
          <Product3DVisual product={product} size="sm" />
        </div>

        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
            {product.brand}
          </span>
          <span className="text-xs text-slate-500">
            Model: <strong className="text-slate-800 font-mono">{product.modelNumber}</strong>
          </span>
        </div>

        <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>

        <p className="text-xs text-slate-600 mb-4 line-clamp-2 leading-relaxed">
          {product.shortDesc}
        </p>

        {/* Specifications Table */}
        {product.specs && Object.keys(product.specs).length > 0 && (
          <div className="bg-slate-50 rounded-lg p-3 border border-slate-200 mb-5 space-y-1.5 text-xs">
            {Object.entries(product.specs).slice(0, 4).map(([key, val]) => (
              <div key={key} className="flex justify-between items-center text-slate-700">
                <span className="text-slate-500 font-medium">{key}:</span>
                <span className="font-semibold text-slate-900 text-right truncate ml-2 max-w-[160px]">{val}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
        {product.isAvailable ? (
          <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>In Stock</span>
          </div>
        ) : (
          <div className="flex items-center gap-1.5 text-xs text-amber-700 font-semibold">
            <Clock className="w-3.5 h-3.5 text-amber-600" />
            <span>On Demand</span>
          </div>
        )}

        <Link
          href={`/quote?service=Products%20%26%20Hardware&requirement=${encodeURIComponent(`Quotation request for ${product.brand} ${product.modelNumber} (${product.name})`)}`}
          className="theme-btn-primary text-xs font-bold px-3.5 py-2 rounded-lg transition flex items-center gap-1.5 shadow-sm hover:shadow"
        >
          <span>Request Best Price</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}