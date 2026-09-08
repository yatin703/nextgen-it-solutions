'use client';

import React, { useEffect, useState } from 'react';
import { Palette, Check, Save, Phone, Mail, MapPin, Building, Sparkles, RefreshCw } from 'lucide-react';
import { ThemeConfig, ThemePreset } from '@/lib/types';
import { useTheme } from '@/components/ThemeProvider';

export default function AdminThemePage() {
  const { theme, setThemePreset, updateTheme, loading: themeLoading } = useTheme();

  const [formData, setFormData] = useState<ThemeConfig>(theme);
  const [saving, setSaving] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  useEffect(() => {
    setFormData(theme);
  }, [theme]);

  const presets: {
    id: ThemePreset;
    name: string;
    desc: string;
    primaryHex: string;
    accentHex: string;
    bgStyle: string;
  }[] = [
    {
      id: 'corporate-blue',
      name: 'Corporate Blue (Default)',
      desc: 'High-trust enterprise look ideal for corporate IT, servers, and multi-tenant networks.',
      primaryHex: '#2563EB',
      accentHex: '#0D9488',
      bgStyle: 'from-blue-600 to-indigo-700'
    },
    {
      id: 'industrial-teal',
      name: 'Industrial Teal',
      desc: 'Engineered for manufacturing hubs, plant automation, GIDC factories, and security systems.',
      primaryHex: '#0F766E',
      accentHex: '#2563EB',
      bgStyle: 'from-teal-700 to-emerald-800'
    },
    {
      id: 'cyber-emerald',
      name: 'Cyber Emerald',
      desc: 'High-tech cybersecurity palette highlighting defense, firewall protection, and CCTV uptime.',
      primaryHex: '#059669',
      accentHex: '#0284C7',
      bgStyle: 'from-emerald-600 to-teal-700'
    },
    {
      id: 'midnight-navy',
      name: 'Midnight Navy',
      desc: 'Premium deep navy finish offering an executive, serious industrial infrastructure feel.',
      primaryHex: '#1E3A8A',
      accentHex: '#0D9488',
      bgStyle: 'from-slate-900 to-blue-950'
    }
  ];

  const handleSelectPreset = async (presetId: ThemePreset) => {
    setFormData(prev => ({ ...prev, themePreset: presetId }));
    await setThemePreset(presetId);
    setSuccessMsg(`Switched active theme preset to ${presetId}.`);
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      await updateTheme(formData);
      setSuccessMsg('Branding and theme settings successfully saved to database.');
      setTimeout(() => setSuccessMsg(''), 4000);
    } catch (err) {
      alert('Failed to save theme settings.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-8 max-w-5xl">
      {/* Header */}
      <div className="border-b border-slate-200 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2">
            <Palette className="w-6 h-6 text-blue-600" />
            <span>Theme & Brand Customizer</span>
          </h1>
          <p className="text-xs text-slate-600 mt-1">
            Configure visual themes, brand accents, and regional contact information across NextGen IT Solution.
          </p>
        </div>

        {successMsg && (
          <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 px-3 py-1.5 rounded-lg text-xs font-semibold animate-fadeIn">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>{successMsg}</span>
          </div>
        )}
      </div>

      {/* Theme Presets Selector */}
      <div className="space-y-4">
        <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-xs">
          1. Select Active Theme Preset
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {presets.map((preset) => {
            const isSelected = formData.themePreset === preset.id;
            return (
              <div
                key={preset.id}
                onClick={() => handleSelectPreset(preset.id)}
                className={`cursor-pointer rounded-2xl p-5 border-2 transition relative overflow-hidden shadow-sm hover:shadow-md ${
                  isSelected 
                    ? 'border-blue-600 bg-white ring-2 ring-blue-600/20' 
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span 
                      className="w-5 h-5 rounded-full shadow-inner border border-white"
                      style={{ backgroundColor: preset.primaryHex }}
                    />
                    <span 
                      className="w-5 h-5 rounded-full shadow-inner border border-white -ml-3"
                      style={{ backgroundColor: preset.accentHex }}
                    />
                    <h3 className="font-bold text-slate-900 text-sm ml-1">{preset.name}</h3>
                  </div>

                  {isSelected && (
                    <span className="bg-blue-600 text-white p-1 rounded-full">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {preset.desc}
                </p>

                {/* Swatch & Button Preview */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono text-slate-500">
                    Primary: {preset.primaryHex}
                  </span>
                  <button
                    type="button"
                    style={{ backgroundColor: preset.primaryHex }}
                    className="text-white text-[11px] font-bold px-3 py-1 rounded shadow-sm"
                  >
                    Sample Button
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Brand & Regional Contact Information Form */}
      <form onSubmit={handleSaveSettings} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-xs">
            2. Regional Brand & Sales Desk Contact Details
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            These values update the top contact bar, sticky mobile action bar, quotation receipts, and WhatsApp routing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Company Display Name</label>
            <div className="relative">
              <Building className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Brand Tagline</label>
            <input
              type="text"
              value={formData.tagline}
              onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Primary Hotline Phone</label>
            <div className="relative">
              <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={formData.primaryPhone}
                onChange={(e) => setFormData({ ...formData, primaryPhone: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">WhatsApp Business Number</label>
            <div className="relative">
              <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={formData.whatsappNumber}
                onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Support / Sales Email</label>
            <div className="relative">
              <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Serving Regional Corridors</label>
            <div className="relative">
              <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={formData.regionalCorridor}
                onChange={(e) => setFormData({ ...formData, regionalCorridor: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Registered Industrial Address</label>
          <input
            type="text"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white"
          />
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="text-[11px] text-slate-500">
            Last modified: {formData.updatedAt ? new Date(formData.updatedAt).toLocaleString() : 'Just now'}
          </div>
          <button
            type="submit"
            disabled={saving}
            className="theme-btn-primary font-bold text-xs px-5 py-2.5 rounded-lg shadow-sm flex items-center gap-1.5 transition"
          >
            <Save className="w-3.5 h-3.5" />
            <span>{saving ? 'Saving...' : 'Save Theme & Brand Settings'}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
