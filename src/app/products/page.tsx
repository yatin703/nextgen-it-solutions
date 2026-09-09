'use client';

import React, { useEffect, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { INITIAL_PRODUCTS } from '@/lib/data';
import { ProductItem } from '@/lib/types';
import { Cpu, Search, Filter, RefreshCw, CheckCircle2 } from 'lucide-react';

export default function ProductsPage() {
  const [products, setProducts] = useState<ProductItem[]>(INITIAL_PRODUCTS);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyInStock, setOnlyInStock] = useState(false);

  const categories = ['All', 'Switches', 'CCTV', 'Servers', 'Firewalls', 'UPS', 'Hardware', 'Wireless', 'Biometrics'];

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/products');
      const data = await res.json();
      if (data.success && data.products) {
        setProducts(data.products);
      }
    } catch (err) {
      console.error('Failed to fetch live products:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((prod) => {
    const matchesCategory = selectedCategory === 'All' || prod.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesStock = !onlyInStock || prod.isAvailable;
    const matchesSearch = 
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.modelNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesStock && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      {/* Header */}
      <div className="border-b border-slate-200 pb-8 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5 text-teal-600" />
            <span>B2B Commercial Procurement</span>
          </div>

          <button
            onClick={fetchProducts}
            className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 transition"
          >
            <RefreshCw className={`w-3 h-3 ${loading ? 'animate-spin' : ''}`} />
            <span>Sync Catalog</span>
          </button>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Enterprise IT & Network Hardware Catalog
        </h1>
        <p className="text-base text-slate-600 max-w-3xl leading-relaxed">
          Authorized supply of managed switches, surveillance cameras, enterprise servers, and power backup. As a commercial B2B supplier, we provide customized competitive pricing based on manufacturer volume discounts and project BOQs.
        </p>
      </div>

      {/* Filters & Search Bar */}
      <div className="flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-4 bg-white border border-slate-200 p-4 rounded-2xl shadow-sm">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 items-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs px-3.5 py-1.5 rounded-lg font-medium transition ${
                selectedCategory === cat
                  ? 'theme-btn-primary shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative min-w-[260px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search Cisco, Hikvision, Dell..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
          />
        </div>
      </div>

      {/* Catalog Status Bar */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-1">
        <span>
          Showing <strong className="text-slate-800 font-semibold">{filteredProducts.length}</strong> items
          {selectedCategory !== 'All' ? ` in ${selectedCategory}` : ''}
        </span>
        {loading && <span className="text-blue-600">Updating catalog from database...</span>}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((prod) => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 space-y-3">
          <p className="text-slate-700 font-medium text-sm">
            No hardware products matched your current filters.
          </p>
          <p className="text-slate-500 text-xs max-w-md mx-auto">
            Need special models or bulk BOQ quotation? Our sales engineers can procure enterprise hardware directly through authorized distribution channels.
          </p>
          <button
            onClick={() => { setSelectedCategory('All'); setSearchQuery(''); setOnlyInStock(false); }}
            className="mt-2 text-xs text-blue-600 font-bold hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}