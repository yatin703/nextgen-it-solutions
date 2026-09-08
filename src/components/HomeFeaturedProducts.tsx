'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Star, 
  ShieldCheck, 
  Layers,
  ChevronRight
} from 'lucide-react';
import { ProductItem } from '@/lib/types';
import { INITIAL_PRODUCTS } from '@/lib/data';
import ProductCard from './ProductCard';
import Product3DVisual from './Product3DVisual';

export default function HomeFeaturedProducts() {
  const [products, setProducts] = useState<ProductItem[]>(INITIAL_PRODUCTS);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.products && data.products.length > 0) {
          setProducts(data.products);
        }
      })
      .catch(err => console.error('Failed to load products on home:', err));
  }, []);

  const featured = products.filter(p => p.featured);
  const displayProducts = featured.length >= 3 ? featured : products.slice(0, 6);
  const activeProduct = displayProducts[activeIndex] || displayProducts[0];

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-spin-slow" />
            <span>Interactive 3D Hardware Catalog</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Featured Commercial IT & Network Products
          </h2>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
            Authorized B2B supply of enterprise switches, AI surveillance, compute servers, and power protection. Hover and tilt to inspect equipment in 3D before requesting commercial quotation.
          </p>
        </div>
        <Link
          href="/products"
          className="theme-btn-primary text-xs font-bold px-4 py-2.5 rounded-lg flex items-center gap-1.5 shadow-sm transition shrink-0"
        >
          <span>Explore All Products</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* 3D Interactive Spotlight Showcase */}
      {activeProduct && (
        <div className="bg-gradient-to-br from-slate-900 via-[#0f172a] to-[#1e293b] rounded-3xl p-6 sm:p-10 text-white shadow-2xl border border-slate-700/60 relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Interactive 3D Model Stage (Takes 6 cols) */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <div className="w-full max-w-lg">
                <Product3DVisual product={activeProduct} size="lg" interactive={true} />
              </div>
              <div className="mt-3 flex items-center gap-2 text-[11px] font-mono text-cyan-300/80">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>Move mouse over card to rotate & inspect in 3D space</span>
              </div>
            </div>

            {/* Right: Technical Specs & Quick Quotation (Takes 6 cols) */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold uppercase tracking-wider">
                  {activeProduct.brand}
                </span>
                <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 text-xs font-mono">
                  {activeProduct.modelNumber}
                </span>
                <span className="px-2.5 py-1 rounded bg-teal-500/20 text-teal-300 border border-teal-400/30 text-xs font-semibold">
                  {activeProduct.category}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                  {activeProduct.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  {activeProduct.shortDesc}
                </p>
              </div>

              {/* Specs Grid */}
              {activeProduct.specs && Object.keys(activeProduct.specs).length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-slate-800/60 rounded-xl p-3.5 border border-slate-700/60 text-xs">
                  {Object.entries(activeProduct.specs).slice(0, 4).map(([key, val]) => (
                    <div key={key} className="flex justify-between items-center text-slate-300 py-0.5 border-b border-slate-700/40 last:border-0">
                      <span className="text-slate-400 font-medium truncate mr-2">{key}:</span>
                      <span className="font-semibold text-white truncate text-right max-w-[150px]">{val}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Stock status & Action */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-semibold">
                  {activeProduct.isAvailable ? (
                    <div className="flex items-center gap-1.5 text-emerald-400">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>In Stock (Vapi / Silvassa Dispatch Ready)</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 text-amber-400">
                      <Clock className="w-4 h-4 text-amber-400" />
                      <span>OEM Factory Dispatch (3-5 Days)</span>
                    </div>
                  )}
                </div>

                <Link
                  href={`/quote?service=Products%20%26%20Hardware&requirement=${encodeURIComponent(`Quotation request for ${activeProduct.brand} ${activeProduct.modelNumber} (${activeProduct.name})`)}`}
                  className="theme-btn-primary font-bold text-xs px-6 py-3 rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-center"
                >
                  <span>Request Best B2B Price</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Hardware Quick Selectors Carousel Tabs */}
              <div className="pt-4 border-t border-slate-800">
                <div className="text-[11px] font-mono text-slate-400 mb-2 uppercase tracking-wider">
                  Quick Select 3D Hardware:
                </div>
                <div className="flex flex-wrap gap-2">
                  {displayProducts.slice(0, 5).map((prod, idx) => (
                    <button
                      key={prod.id}
                      onClick={() => setActiveIndex(idx)}
                      className={`text-xs px-3 py-1.5 rounded-lg font-medium transition flex items-center gap-1.5 ${
                        activeIndex === idx
                          ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-500/30'
                          : 'bg-slate-800/90 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      <span>{prod.brand}</span>
                      <span className="font-mono text-[10px] text-slate-400">({prod.category})</span>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Grid of 3D Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayProducts.slice(0, 6).map((prod) => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  );
}
