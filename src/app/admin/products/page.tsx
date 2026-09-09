'use client';

import React, { useEffect, useState } from 'react';
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  CheckCircle2, 
  Clock, 
  Star, 
  RefreshCw, 
  X, 
  Save, 
  Cpu, 
  AlertCircle,
  Sparkles
} from 'lucide-react';
import { ProductItem } from '@/lib/types';
import { INITIAL_PRODUCTS } from '@/lib/data';
import Product3DVisual from '@/components/Product3DVisual';

export default function AdminProductsPage() {
  const [products, setProducts] = useState<ProductItem[]>(INITIAL_PRODUCTS);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  
  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'create' | 'edit'>('create');
  const [currentId, setCurrentId] = useState<string | null>(null);
  
  // Form fields
  const [formData, setFormData] = useState<{
    name: string;
    brand: string;
    modelNumber: string;
    category: string;
    shortDesc: string;
    isAvailable: boolean;
    featured: boolean;
    animation3d: string;
    animationUrl: string;
    specs: { key: string; val: string }[];
  }>({
    name: '',
    brand: '',
    modelNumber: '',
    category: 'Switches',
    shortDesc: '',
    isAvailable: true,
    featured: false,
    animation3d: 'switch-3d',
    animationUrl: '',
    specs: [{ key: '', val: '' }]
  });

  const [saving, setSaving] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const categories = ['All', 'Switches', 'CCTV', 'Servers', 'Firewalls', 'UPS', 'Hardware', 'Wireless', 'Biometrics'];
  const formCategories = ['Switches', 'CCTV', 'Servers', 'Firewalls', 'UPS', 'Hardware', 'Wireless', 'Biometrics', 'Networking'];

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/products');
      const data = await res.json();
      if (data.success && data.products) {
        setProducts(data.products);
      }
    } catch (err) {
      console.error('Error loading products:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const openCreateModal = () => {
    setModalMode('create');
    setCurrentId(null);
    setFormData({
      name: '',
      brand: '',
      modelNumber: '',
      category: 'Switches',
      shortDesc: '',
      isAvailable: true,
      featured: false,
      animation3d: 'switch-3d',
      animationUrl: '',
      specs: [
        { key: 'Port Count / Spec', val: '' },
        { key: 'Throughput / Capacity', val: '' }
      ]
    });
    setErrorMsg('');
    setIsModalOpen(true);
  };

  const openEditModal = (prod: ProductItem) => {
    setModalMode('edit');
    setCurrentId(prod.id);
    const specEntries = prod.specs ? Object.entries(prod.specs).map(([key, val]) => ({ key, val })) : [];
    if (specEntries.length === 0) {
      specEntries.push({ key: '', val: '' });
    }

    setFormData({
      name: prod.name,
      brand: prod.brand,
      modelNumber: prod.modelNumber,
      category: prod.category,
      shortDesc: prod.shortDesc,
      isAvailable: prod.isAvailable,
      featured: !!prod.featured,
      animation3d: prod.animation3d || '',
      animationUrl: prod.animationUrl || '',
      specs: specEntries
    });
    setErrorMsg('');
    setIsModalOpen(true);
  };

  const handleSpecChange = (index: number, field: 'key' | 'val', value: string) => {
    const updated = [...formData.specs];
    updated[index][field] = value;
    setFormData({ ...formData, specs: updated });
  };

  const addSpecRow = () => {
    setFormData({ ...formData, specs: [...formData.specs, { key: '', val: '' }] });
  };

  const removeSpecRow = (index: number) => {
    const updated = formData.specs.filter((_, i) => i !== index);
    setFormData({ ...formData, specs: updated });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.brand) {
      setErrorMsg('Product name and brand are required.');
      return;
    }

    setSaving(true);
    setErrorMsg('');

    // Convert specs array back to dictionary
    const specsDict: { [key: string]: string } = {};
    formData.specs.forEach(s => {
      if (s.key.trim()) {
        specsDict[s.key.trim()] = s.val.trim();
      }
    });

    const payload = {
      name: formData.name,
      brand: formData.brand,
      modelNumber: formData.modelNumber,
      category: formData.category,
      shortDesc: formData.shortDesc,
      isAvailable: formData.isAvailable,
      featured: formData.featured,
      animation3d: formData.animation3d,
      animationUrl: formData.animationUrl,
      specs: specsDict
    };

    try {
      if (modalMode === 'create') {
        const res = await fetch('/api/products', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        const data = await res.json();
        if (data.success) {
          setProducts([data.product, ...products]);
          setIsModalOpen(false);
        } else {
          setErrorMsg(data.error || 'Failed to create product');
        }
      } else if (modalMode === 'edit' && currentId) {
        const res = await fetch(`/api/products/${currentId}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        const data = await res.json();
        if (data.success) {
          setProducts(products.map(p => p.id === currentId ? data.product : p));
          setIsModalOpen(false);
        } else {
          setErrorMsg(data.error || 'Failed to update product');
        }
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Error occurred while saving');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete "${name}" from the database?`)) return;

    try {
      const res = await fetch(`/api/products/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setProducts(products.filter(p => p.id !== id));
      } else {
        alert('Failed to delete product: ' + data.error);
      }
    } catch (err) {
      alert('Error communicating with server');
    }
  };

  const toggleAvailability = async (prod: ProductItem) => {
    const updatedStatus = !prod.isAvailable;
    try {
      const res = await fetch(`/api/products/${prod.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isAvailable: updatedStatus })
      });
      const data = await res.json();
      if (data.success) {
        setProducts(products.map(p => p.id === prod.id ? { ...p, isAvailable: updatedStatus } : p));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const filteredProducts = products.filter(p => {
    const matchCat = categoryFilter === 'All' || p.category.toLowerCase() === categoryFilter.toLowerCase();
    const matchSearch = 
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.brand.toLowerCase().includes(search.toLowerCase()) ||
      p.modelNumber.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="space-y-6 max-w-7xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-6">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">Product Catalog Database Manager</h1>
          <p className="text-xs text-slate-600">
            Create, update, and organize enterprise IT and surveillance hardware items in the live database.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={fetchProducts}
            className="flex items-center gap-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs px-3 py-2 rounded-lg transition shadow-sm"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span>Sync</span>
          </button>
          <button
            onClick={openCreateModal}
            className="theme-btn-primary flex items-center gap-1.5 font-bold text-xs px-4 py-2 rounded-lg shadow-sm hover:shadow"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Product</span>
          </button>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white border border-slate-200 p-4 rounded-xl shadow-sm">
        <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`text-xs px-3 py-1.5 rounded-lg font-medium transition ${
                categoryFilter === cat
                  ? 'theme-btn-primary shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="w-full sm:w-64 relative">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search model, brand, name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
          />
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-slate-50 text-slate-600 uppercase tracking-wider text-[10px] border-b border-slate-200 font-bold">
              <tr>
                <th className="p-4">3D Visual</th>
                <th className="p-4">Brand & Model</th>
                <th className="p-4">Product Name & Category</th>
                <th className="p-4">Specifications</th>
                <th className="p-4">Stock Status</th>
                <th className="p-4">Featured</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredProducts.map((prod) => (
                <tr key={prod.id} className="hover:bg-slate-50/80 transition">
                  {/* 3D Visual thumbnail */}
                  <td className="p-4 w-28">
                    <div className="w-24">
                      <Product3DVisual product={prod} size="sm" interactive={false} />
                    </div>
                  </td>

                  {/* Brand & Model */}
                  <td className="p-4">
                    <span className="font-bold text-slate-900 block">{prod.brand}</span>
                    <span className="font-mono text-[11px] text-slate-500">{prod.modelNumber}</span>
                  </td>

                  {/* Name & Category */}
                  <td className="p-4 max-w-xs">
                    <div className="font-semibold text-slate-900 leading-snug">{prod.name}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-medium text-[10px] border border-blue-100">
                        {prod.category}
                      </span>
                      <span className="text-[10px] text-cyan-600 font-mono flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5" />
                        {prod.animation3d || 'auto-3d'}
                      </span>
                    </div>
                  </td>

                  {/* Specs preview */}
                  <td className="p-4">
                    <div className="text-[11px] text-slate-600 space-y-0.5 max-w-[200px]">
                      {prod.specs && Object.entries(prod.specs).slice(0, 2).map(([k, v]) => (
                        <div key={k} className="truncate">
                          <strong className="text-slate-700">{k}:</strong> {v}
                        </div>
                      ))}
                      {prod.specs && Object.keys(prod.specs).length > 2 && (
                        <span className="text-slate-400 text-[10px]">+{Object.keys(prod.specs).length - 2} more specs</span>
                      )}
                    </div>
                  </td>

                  {/* Stock Status */}
                  <td className="p-4">
                    <button
                      onClick={() => toggleAvailability(prod)}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold border transition ${
                        prod.isAvailable
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100'
                          : 'bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100'
                      }`}
                    >
                      {prod.isAvailable ? (
                        <>
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          <span>Available</span>
                        </>
                      ) : (
                        <>
                          <Clock className="w-3 h-3 text-amber-600" />
                          <span>On Demand</span>
                        </>
                      )}
                    </button>
                  </td>

                  {/* Featured */}
                  <td className="p-4">
                    {prod.featured ? (
                      <span className="inline-flex items-center gap-1 text-amber-600 font-semibold text-[11px]">
                        <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                        <span>Featured</span>
                      </span>
                    ) : (
                      <span className="text-slate-400 text-[11px]">Standard</span>
                    )}
                  </td>

                  {/* Actions */}
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        onClick={() => openEditModal(prod)}
                        className="p-1.5 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition"
                        title="Edit product"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(prod.id, prod.name)}
                        className="p-1.5 rounded-lg text-slate-600 hover:text-rose-600 hover:bg-rose-50 transition"
                        title="Delete product"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CREATE / EDIT MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-2xl my-8 overflow-hidden animate-fadeIn">
            {/* Modal Header */}
            <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-blue-600" />
                <h2 className="text-base font-bold text-slate-900">
                  {modalMode === 'create' ? 'Add New Product to Catalog' : 'Edit Product Details'}
                </h2>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSave} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
              {errorMsg && (
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg text-xs text-rose-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Brand *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Cisco, Hikvision, Dell"
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Model Number *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. CBS350-24P-4G"
                    value={formData.modelNumber}
                    onChange={(e) => setFormData({ ...formData, modelNumber: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Full Product Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Cisco CBS350-24P-4G Managed Gigabit PoE Switch"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white"
                  >
                    {formCategories.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-6 pt-5">
                  <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-700">
                    <input
                      type="checkbox"
                      checked={formData.isAvailable}
                      onChange={(e) => setFormData({ ...formData, isAvailable: e.target.checked })}
                      className="rounded text-blue-600 w-4 h-4"
                    />
                    <span>Stock Ready</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-700">
                    <input
                      type="checkbox"
                      checked={formData.featured}
                      onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                      className="rounded text-amber-600 w-4 h-4"
                    />
                    <span>Featured Product</span>
                  </label>
                </div>
              </div>

              {/* 3D Hardware Animation & Picture Visual Stage */}
              <div className="bg-slate-900 rounded-xl p-4 border border-slate-800 text-white space-y-3 shadow-inner">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-400">
                    <Sparkles className="w-4 h-4 text-cyan-400 animate-spin-slow" />
                    <span>3D Animation Picture / Model Configuration</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">Shown on Main Page & Catalog</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                  <div className="space-y-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                        Select 3D Animation Model Preset
                      </label>
                      <select
                        value={formData.animation3d || 'switch-3d'}
                        onChange={(e) => setFormData({ ...formData, animation3d: e.target.value })}
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-400"
                      >
                        <option value="switch-3d">3D Gigabit Switch (Active PoE Ports)</option>
                        <option value="cctv-3d">3D CCTV Camera (Rotating Lens + IR Diode)</option>
                        <option value="server-3d">3D Enterprise Server (Hot-Swap Caddies)</option>
                        <option value="firewall-3d">3D Cyber Firewall (Holographic Shield)</option>
                        <option value="ups-3d">3D Online UPS (Digital LCD Voltage Meter)</option>
                        <option value="wireless-3d">3D Wi-Fi 6 AP (Radiating Signal Waves)</option>
                        <option value="biometric-3d">3D Biometric Scanner (Laser Scan Beam)</option>
                        <option value="workstation-3d">3D CAD Workstation (Tower Spec Grid)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                        Or Custom 3D Animation / Picture URL (Optional)
                      </label>
                      <input
                        type="url"
                        placeholder="https://.../product-3d.gif, .webp, or .png"
                        value={formData.animationUrl || ''}
                        onChange={(e) => setFormData({ ...formData, animationUrl: e.target.value })}
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-mono text-[11px]"
                      />
                      <p className="text-[10px] text-slate-400 mt-1">
                        Leave blank to use the animated 3D procedural model chosen above.
                      </p>
                    </div>
                  </div>

                  {/* Real-time 3D Viewport inside modal */}
                  <div className="flex flex-col items-center justify-center">
                    <div className="text-[10px] text-slate-400 mb-1 font-mono">Live 3D Viewport</div>
                    <div className="w-full max-w-[200px]">
                      <Product3DVisual
                        product={{
                          id: 'modal-preview',
                          name: formData.name || 'Preview Hardware',
                          slug: 'preview',
                          brand: formData.brand || 'Brand',
                          modelNumber: formData.modelNumber || 'Model',
                          category: formData.category,
                          shortDesc: '',
                          specs: {},
                          isAvailable: true,
                          animation3d: formData.animation3d || 'switch-3d',
                          animationUrl: formData.animationUrl || undefined
                        }}
                        size="sm"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Short Description</label>
                <textarea
                  rows={2}
                  placeholder="Summarize the product capacity, warranty, or application..."
                  value={formData.shortDesc}
                  onChange={(e) => setFormData({ ...formData, shortDesc: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white"
                />
              </div>

              {/* Dynamic Key-Value Specs Builder */}
              <div className="border-t border-slate-200 pt-4 space-y-2">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-bold text-slate-800">
                    Technical Specifications
                  </label>
                  <button
                    type="button"
                    onClick={addSpecRow}
                    className="text-xs text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Spec Field</span>
                  </button>
                </div>

                <div className="space-y-2">
                  {formData.specs.map((row, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <input
                        type="text"
                        placeholder="Spec Name (e.g. Ports, Wattage)"
                        value={row.key}
                        onChange={(e) => handleSpecChange(idx, 'key', e.target.value)}
                        className="w-1/2 bg-slate-50 border border-slate-300 rounded-lg px-3 py-1.5 text-xs text-slate-900 focus:outline-none focus:border-blue-500"
                      />
                      <input
                        type="text"
                        placeholder="Spec Value (e.g. 24 x Gigabit, 370W)"
                        value={row.val}
                        onChange={(e) => handleSpecChange(idx, 'val', e.target.value)}
                        className="w-1/2 bg-slate-50 border border-slate-300 rounded-lg px-3 py-1.5 text-xs text-slate-900 focus:outline-none focus:border-blue-500"
                      />
                      {formData.specs.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeSpecRow(idx)}
                          className="text-slate-400 hover:text-rose-600 p-1"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="border-t border-slate-200 pt-4 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="theme-btn-primary px-5 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm transition"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>{saving ? 'Saving...' : 'Save Product'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}