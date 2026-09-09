'use client';

import React, { useState, useEffect } from 'react';
import { 
  CreditCard, 
  Save, 
  Printer, 
  ExternalLink, 
  Plus, 
  Trash2, 
  CheckCircle, 
  AlertCircle, 
  Loader2, 
  Building, 
  Users, 
  Phone, 
  FileText,
  Sparkles,
  RotateCcw
} from 'lucide-react';
import Link from 'next/link';
import { VisitingCardConfig, VisitingCardPartner } from '@/lib/types';

export default function AdminVisitingCardPage() {
  const [config, setConfig] = useState<VisitingCardConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    fetchConfig();
  }, []);

  async function fetchConfig() {
    try {
      setLoading(true);
      const res = await fetch('/api/visiting-card');
      const data = await res.json();
      if (data.success && data.card) {
        setConfig(data.card);
      }
    } catch (err) {
      setMessage({ text: 'Failed to load visiting card settings', type: 'error' });
    } finally {
      setLoading(false);
    }
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!config) return;

    try {
      setSaving(true);
      setMessage(null);
      const res = await fetch('/api/visiting-card', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(config)
      });
      const data = await res.json();
      if (data.success) {
        setConfig(data.card);
        setMessage({ text: 'Visiting card configuration saved successfully! The print PDF page is updated.', type: 'success' });
      } else {
        setMessage({ text: data.error || 'Failed to save configuration', type: 'error' });
      }
    } catch (err: any) {
      setMessage({ text: err.message || 'Error saving changes', type: 'error' });
    } finally {
      setSaving(false);
    }
  }

  const updatePartner = (index: number, field: keyof VisitingCardPartner, value: string) => {
    if (!config) return;
    const updated = [...config.partners];
    updated[index] = { ...updated[index], [field]: value };
    setConfig({ ...config, partners: updated });
  };

  const addPartner = () => {
    if (!config) return;
    setConfig({
      ...config,
      partners: [...config.partners, { name: 'New Partner', designation: 'Director', phone: config.primaryPhone, email: config.email }]
    });
  };

  const removePartner = (index: number) => {
    if (!config || config.partners.length <= 1) return;
    const updated = config.partners.filter((_, i) => i !== index);
    setConfig({ ...config, partners: updated });
  };

  const updateService = (index: number, value: string) => {
    if (!config) return;
    const updated = [...config.services];
    updated[index] = value;
    setConfig({ ...config, services: updated });
  };

  const addService = () => {
    if (!config) return;
    setConfig({
      ...config,
      services: [...config.services, 'New Specialized IT Service']
    });
  };

  const removeService = (index: number) => {
    if (!config || config.services.length <= 1) return;
    const updated = config.services.filter((_, i) => i !== index);
    setConfig({ ...config, services: updated });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
      </div>
    );
  }

  if (!config) {
    return (
      <div className="bg-rose-50 border border-rose-200 text-rose-700 p-6 rounded-2xl">
        Failed to load visiting card settings. Please refresh the page.
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-16">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
            <CreditCard className="w-3.5 h-3.5" />
            <span>Card CMS & Print Manager</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Visiting Card Content Editor
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Edit the partner names, designations, contact numbers, and capabilities on your official visiting cards.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/visiting-card"
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs sm:text-sm font-semibold transition"
          >
            <Printer className="w-4 h-4 text-blue-600" />
            <span>Open PDF Print View</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </Link>
          
          <button
            onClick={handleSave}
            disabled={saving}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-xl shadow-md transition flex items-center gap-2 disabled:opacity-50 cursor-pointer"
          >
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            <span>{saving ? 'Saving...' : 'Save Changes'}</span>
          </button>
        </div>
      </div>

      {message && (
        <div className={`p-4 rounded-xl flex items-center gap-3 text-sm font-medium ${
          message.type === 'success' 
            ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
            : 'bg-rose-50 text-rose-800 border border-rose-200'
        }`}>
          {message.type === 'success' ? <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" /> : <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />}
          <span>{message.text}</span>
        </div>
      )}

      {/* 2-Column Layout: Left = Editor Form, Right = Live Visual Card Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Col (7 cols): Form Inputs */}
        <form onSubmit={handleSave} className="lg:col-span-7 space-y-6">
          
          {/* Section 1: Executive Partners (Yatin, Bhavesh, Pankaj) */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-600" />
                <h2 className="text-base font-bold text-slate-900">Executive Partners & Leadership</h2>
              </div>
              <button
                type="button"
                onClick={addPartner}
                className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Partner</span>
              </button>
            </div>

            <div className="space-y-4">
              {config.partners.map((partner, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3 relative group">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                      Partner 0{idx + 1}
                    </span>
                    {config.partners.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removePartner(idx)}
                        className="text-slate-400 hover:text-rose-600 transition"
                        title="Remove Partner"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        value={partner.name}
                        onChange={(e) => updatePartner(idx, 'name', e.target.value)}
                        className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold"
                        placeholder="e.g. Yatin Patel"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Designation / Role</label>
                      <input
                        type="text"
                        value={partner.designation}
                        onChange={(e) => updatePartner(idx, 'designation', e.target.value)}
                        className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g. Director — Solutions Architecture"
                        required
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Company Header Details */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <Building className="w-4 h-4 text-blue-600" />
              <h2 className="text-base font-bold text-slate-900">Company & Brand Information</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Company Name</label>
                <input
                  type="text"
                  value={config.companyName}
                  onChange={(e) => setConfig({ ...config, companyName: e.target.value })}
                  className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Location Badge</label>
                <input
                  type="text"
                  value={config.locationBadge}
                  onChange={(e) => setConfig({ ...config, locationBadge: e.target.value })}
                  className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
                  placeholder="e.g. VAPI GIDC"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Subtitle / Category</label>
              <input
                type="text"
                value={config.subtitle}
                onChange={(e) => setConfig({ ...config, subtitle: e.target.value })}
                className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g. Industrial IT Infrastructure & Security"
                required
              />
            </div>
          </div>

          {/* Section 3: Contact & Address */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <Phone className="w-4 h-4 text-blue-600" />
              <h2 className="text-base font-bold text-slate-900">Direct Contact & Address Information</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Phone / WhatsApp</label>
                <input
                  type="text"
                  value={config.primaryPhone}
                  onChange={(e) => setConfig({ ...config, primaryPhone: e.target.value })}
                  className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Official Email</label>
                <input
                  type="email"
                  value={config.email}
                  onChange={(e) => setConfig({ ...config, email: e.target.value })}
                  className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Website URL</label>
                <input
                  type="text"
                  value={config.website}
                  onChange={(e) => setConfig({ ...config, website: e.target.value })}
                  className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Regional Hubs Covered</label>
                <input
                  type="text"
                  value={config.regionalHubs}
                  onChange={(e) => setConfig({ ...config, regionalHubs: e.target.value })}
                  className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Vapi • Silvassa • Daman • Sarigam"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Registered Address</label>
              <input
                type="text"
                value={config.address}
                onChange={(e) => setConfig({ ...config, address: e.target.value })}
                className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* Section 4: Back Side Services & Quality Badges */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-600" />
                <h2 className="text-base font-bold text-slate-900">Back Side Capabilities & Badges</h2>
              </div>
              <button
                type="button"
                onClick={addService}
                className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Bullet</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Back Section Title</label>
                <input
                  type="text"
                  value={config.backCapabilitiesTitle}
                  onChange={(e) => setConfig({ ...config, backCapabilitiesTitle: e.target.value })}
                  className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Onsite SLA Badge</label>
                <input
                  type="text"
                  value={config.backSlaBadge}
                  onChange={(e) => setConfig({ ...config, backSlaBadge: e.target.value })}
                  className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Quality / Audit Verification Stamp</label>
              <input
                type="text"
                value={config.qualityStamp}
                onChange={(e) => setConfig({ ...config, qualityStamp: e.target.value })}
                className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="space-y-2 pt-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Services Checklist (Back Side)
              </label>
              <div className="space-y-2">
                {config.services.map((service, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-teal-600 font-bold text-xs">✓</span>
                    <input
                      type="text"
                      value={service}
                      onChange={(e) => updateService(idx, e.target.value)}
                      className="flex-1 text-xs sm:text-sm px-3 py-1.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    {config.services.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeService(idx)}
                        className="text-slate-400 hover:text-rose-600 transition p-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 5: Printing Press Specifications */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <Printer className="w-4 h-4 text-blue-600" />
              <h2 className="text-base font-bold text-slate-900">Printing Press Specifications (For Vapi Printers)</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Paper GSM Stock</label>
                <input
                  type="text"
                  value={config.printSpecGsm}
                  onChange={(e) => setConfig({ ...config, printSpecGsm: e.target.value })}
                  className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Cut Size & Bleed</label>
                <input
                  type="text"
                  value={config.printSpecSize}
                  onChange={(e) => setConfig({ ...config, printSpecSize: e.target.value })}
                  className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Lamination & Effects</label>
                <input
                  type="text"
                  value={config.printSpecFinish}
                  onChange={(e) => setConfig({ ...config, printSpecFinish: e.target.value })}
                  className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              type="submit"
              disabled={saving}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-8 py-3 rounded-xl shadow-md transition flex items-center gap-2 cursor-pointer"
            >
              {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
              <span>{saving ? 'Saving All Settings...' : 'Save Visiting Card Settings'}</span>
            </button>
          </div>

        </form>

        {/* Right Col (5 cols): Live Visual Preview */}
        <div className="lg:col-span-5 sticky top-8 space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-teal-600" />
                <h3 className="text-sm font-bold text-slate-900">Live Card Preview (WYSIWYG)</h3>
              </div>
              <span className="text-[11px] font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200">
                Auto-Updating
              </span>
            </div>

            {/* LIVE FRONT PREVIEW */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                Front Side (3.5" × 2.0")
              </span>
              <div className="w-full aspect-[1.75/1] bg-white border border-slate-300 rounded-xl p-3.5 sm:p-4 flex flex-col justify-between shadow-md relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-teal-500 to-cyan-400"></div>

                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded bg-gradient-to-tr from-blue-600 to-teal-500 flex items-center justify-center text-white font-extrabold text-[10px]">
                        {config.companyName ? config.companyName.charAt(0) : 'N'}
                      </div>
                      <span className="font-extrabold text-slate-900 text-xs sm:text-sm tracking-tight">
                        {config.companyName.split(' ')[0]} <span className="text-blue-600">{config.companyName.split(' ').slice(1).join(' ')}</span>
                      </span>
                    </div>
                    <span className="text-[7px] sm:text-[7.5px] font-semibold text-slate-500 block uppercase tracking-wider mt-0.5">
                      {config.subtitle}
                    </span>
                  </div>
                  <span className="text-[7px] font-bold px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded border border-blue-200">
                    {config.locationBadge}
                  </span>
                </div>

                {/* 3 Partner Names Grid */}
                <div className="grid grid-cols-3 gap-1 my-auto pt-1 pb-1 border-y border-slate-100 text-center">
                  {config.partners.slice(0, 3).map((p, idx) => (
                    <div key={idx}>
                      <div className="font-extrabold text-slate-900 text-[8.5px] sm:text-[9.5px] leading-tight truncate">
                        {p.name}
                      </div>
                      <div className="text-[6.5px] sm:text-[7px] text-blue-600 font-semibold mt-0.5 truncate">
                        {p.designation.split('—')[0].trim()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Contact Footer */}
                <div className="grid grid-cols-2 gap-x-2 gap-y-0.5 text-[6.5px] sm:text-[7px] text-slate-600 font-medium">
                  <div className="flex items-center gap-1 truncate">
                    <span className="text-blue-600 font-bold">📞</span>
                    <span className="font-bold text-slate-900 truncate">{config.primaryPhone}</span>
                  </div>
                  <div className="flex items-center gap-1 truncate">
                    <span className="text-teal-600 font-bold">🌐</span>
                    <span className="truncate">{config.website}</span>
                  </div>
                  <div className="flex items-center gap-1 truncate">
                    <span className="text-blue-600 font-bold">✉️</span>
                    <span className="truncate">{config.email}</span>
                  </div>
                  <div className="flex items-center gap-1 truncate">
                    <span className="text-teal-600 font-bold">📍</span>
                    <span className="truncate">{config.address}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* LIVE BACK PREVIEW */}
            <div className="space-y-1.5 pt-3">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                Back Side (Tech Midnight)
              </span>
              <div className="w-full aspect-[1.75/1] bg-slate-900 text-white border border-slate-800 rounded-xl p-3.5 sm:p-4 flex flex-col justify-between shadow-md relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-800 pb-1">
                  <span className="text-[8px] sm:text-[8.5px] font-extrabold tracking-wider text-teal-400 uppercase truncate">
                    {config.backCapabilitiesTitle}
                  </span>
                  <span className="text-[6.5px] text-slate-400 font-medium">{config.backSlaBadge}</span>
                </div>

                {/* Services List */}
                <div className="grid grid-cols-2 gap-x-2 gap-y-0.5 text-[6.5px] sm:text-[7px] text-slate-300 my-auto">
                  {config.services.slice(0, 6).map((srv, idx) => (
                    <div key={idx} className="flex items-center gap-1 truncate">
                      <span className="text-teal-400 font-bold">✓</span>
                      <span className="truncate">{srv}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-1 border-t border-slate-800/80 flex items-center justify-between text-[6.5px] text-slate-400">
                  <span className="truncate"><strong>Regions:</strong> {config.regionalHubs}</span>
                  <span className="text-teal-300 font-bold shrink-0">{config.qualityStamp}</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/visiting-card"
                target="_blank"
                className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition flex items-center justify-center gap-2"
              >
                <Printer className="w-4 h-4 text-blue-600" />
                <span>Test Print / Export PDF</span>
              </Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
