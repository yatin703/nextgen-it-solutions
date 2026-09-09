'use client';

import React, { useState, useEffect } from 'react';
import { Printer, ShieldCheck, Phone, Mail, Globe, MapPin, CheckCircle2, ArrowLeft, Edit, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { VisitingCardConfig } from '@/lib/types';
import { INITIAL_VISITING_CARD } from '@/lib/data';

export default function VisitingCardPage() {
  const [config, setConfig] = useState<VisitingCardConfig>(INITIAL_VISITING_CARD);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadConfig() {
      try {
        const res = await fetch('/api/visiting-card');
        const data = await res.json();
        if (data.success && data.card) {
          setConfig(data.card);
        }
      } catch (err) {
        console.error('Failed to load dynamic card config, using defaults', err);
      } finally {
        setLoading(false);
      }
    }
    loadConfig();
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-slate-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      {/* Control Bar (Hidden when printing/saving to PDF) */}
      <div className="max-w-4xl mx-auto mb-8 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 print:hidden">
        <div className="space-y-1 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Official Executive Print Sheet</span>
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            {config.companyName} — Visiting Card PDF
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Print-ready layout for {config.partners.map(p => p.name).join(', ')}.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/admin/visiting-card"
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
          >
            <Edit className="w-3.5 h-3.5 text-blue-600" />
            <span>Edit in Admin</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Site</span>
          </Link>
          <button
            onClick={handlePrint}
            className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold px-6 py-2.5 rounded-xl shadow-md hover:shadow-lg transition flex items-center gap-2 cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Save as PDF / Print</span>
          </button>
        </div>
      </div>

      {/* Main Print Container */}
      <div className="max-w-4xl mx-auto space-y-10 print:m-0 print:p-0 print:space-y-6">

        {/* SET 1: JOINT EXECUTIVE CARD */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6 print:border-none print:shadow-none print:p-0">
          <div className="border-b border-slate-100 pb-4 flex items-center justify-between print:hidden">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Set 1: Joint Executive Card (All Partners)</h2>
              <p className="text-xs text-slate-500">Standard 3.5" × 2.0" (89mm × 51mm) with 3mm bleed.</p>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md">
              Front & Back Set
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center print:grid-cols-2 print:gap-6">
            
            {/* FRONT SIDE */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block text-center print:hidden">
                Front Side (Executive White)
              </span>
              <div className="w-[3.5in] h-[2in] bg-white border border-slate-300 rounded-xl p-4 flex flex-col justify-between shadow-md relative overflow-hidden print:border print:border-slate-300 print:shadow-none">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-teal-500 to-cyan-400 z-10"></div>

                {/* Round Background Light Watermark Logo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full opacity-[0.20] pointer-events-none overflow-hidden select-none flex items-center justify-center z-0">
                  <img 
                    src="/images/nextgen-logo-it-solution-3d.jpg" 
                    alt="" 
                    className="w-full h-full object-cover rounded-full filter contrast-125" 
                  />
                </div>

                {/* Header */}
                <div className="flex items-start justify-between relative z-10">
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full overflow-hidden shadow-sm border border-blue-200/80 bg-white flex items-center justify-center shrink-0">
                        <img 
                          src="/images/nextgen-logo-it-solution-3d.jpg" 
                          alt="NextGen Logo" 
                          className="w-full h-full object-cover rounded-full" 
                        />
                      </div>
                      <span className="font-extrabold text-slate-900 text-sm tracking-tight">
                        {config.companyName.split(' ')[0]} <span className="text-blue-600">{config.companyName.split(' ').slice(1).join(' ')}</span>
                      </span>
                    </div>
                    <span className="text-[7.5px] font-semibold text-slate-500 block uppercase tracking-wider mt-0.5 pl-9">
                      {config.subtitle}
                    </span>
                  </div>
                  <span className="text-[7px] font-bold px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded border border-blue-200">
                    {config.locationBadge}
                  </span>
                </div>

                {/* Partner Names Grid */}
                <div className={`grid grid-cols-${Math.min(config.partners.length, 3)} gap-1 my-auto pt-1 pb-1 border-y border-slate-100 text-center relative z-10`}>
                  {config.partners.slice(0, 3).map((partner, idx) => (
                    <div key={idx}>
                      <div className="font-extrabold text-slate-900 text-[9px] leading-tight truncate">{partner.name}</div>
                      <div className="text-[7px] text-blue-600 font-semibold mt-0.5 truncate">{partner.designation.split('—')[0].trim()}</div>
                    </div>
                  ))}
                </div>

                {/* Contact Footer */}
                <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[7.5px] text-slate-600 font-medium relative z-10">
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

            {/* BACK SIDE */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block text-center print:hidden">
                Back Side (Tech Midnight Navy)
              </span>
              <div className="w-[3.5in] h-[2in] bg-slate-900 text-white border border-slate-800 rounded-xl p-4 flex flex-col justify-between shadow-md relative overflow-hidden print:border print:border-slate-800 print:shadow-none">
                {/* Round Background Light Watermark Logo (Back side) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full opacity-[0.20] pointer-events-none overflow-hidden select-none flex items-center justify-center z-0">
                  <img 
                    src="/images/nextgen-logo-it-solution-3d.jpg" 
                    alt="" 
                    className="w-full h-full object-cover rounded-full filter contrast-150 invert brightness-125" 
                  />
                </div>

                <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 relative z-10">
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded-full overflow-hidden border border-teal-500/40 shrink-0">
                      <img 
                        src="/images/nextgen-logo-it-solution-3d.jpg" 
                        alt="" 
                        className="w-full h-full object-cover rounded-full" 
                      />
                    </div>
                    <span className="text-[9px] font-extrabold tracking-wider text-teal-400 uppercase">
                      {config.backCapabilitiesTitle}
                    </span>
                  </div>
                  <span className="text-[7px] text-slate-400 font-medium">{config.backSlaBadge}</span>
                </div>

                {/* Services List */}
                <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[7.5px] text-slate-300 my-auto">
                  {config.services.slice(0, 6).map((srv, idx) => (
                    <div key={idx} className="flex items-center gap-1 truncate">
                      <span className="text-teal-400 font-bold">✓</span>
                      <span className="truncate">{srv}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-1.5 border-t border-slate-800/80 flex items-center justify-between text-[7px] text-slate-400">
                  <span className="truncate"><strong>Regions:</strong> {config.regionalHubs}</span>
                  <span className="text-teal-300 font-bold shrink-0">{config.qualityStamp}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* SET 2: INDIVIDUAL PERSONALIZED CARDS */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6 print:border-none print:shadow-none print:p-0">
          <div className="border-b border-slate-100 pb-4 print:hidden">
            <h2 className="text-lg font-bold text-slate-900">Set 2: Individual Executive Cards</h2>
            <p className="text-xs text-slate-500">Dedicated card for each executive partner with their specific designation.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center print:grid-cols-3 print:gap-4">
            {config.partners.map((partner, idx) => (
              <div key={idx} className="space-y-2">
                <span className="text-xs font-bold text-slate-500 block text-center print:hidden">
                  {partner.name}
                </span>
                <div className="w-[3.5in] h-[2in] bg-white border border-slate-300 rounded-xl p-3.5 flex flex-col justify-between shadow-sm relative overflow-hidden print:border print:border-slate-300 print:shadow-none">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-blue-600 z-10"></div>

                  {/* Round Background Light Watermark Logo */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full opacity-[0.20] pointer-events-none overflow-hidden select-none flex items-center justify-center z-0">
                    <img 
                      src="/images/nextgen-logo-it-solution-3d.jpg" 
                      alt="" 
                      className="w-full h-full object-cover rounded-full filter contrast-125" 
                    />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-full overflow-hidden shadow-sm border border-blue-200 bg-white flex items-center justify-center shrink-0">
                        <img 
                          src="/images/nextgen-logo-it-solution-3d.jpg" 
                          alt="NextGen Logo" 
                          className="w-full h-full object-cover rounded-full" 
                        />
                      </div>
                      <span className="font-extrabold text-slate-900 text-xs">
                        {config.companyName.split(' ')[0]} <span className="text-blue-600">{config.companyName.split(' ').slice(1).join(' ')}</span>
                      </span>
                    </div>
                    <span className="text-[7px] text-slate-500 block uppercase tracking-wider font-semibold pl-6.5">
                      {config.subtitle}
                    </span>
                  </div>

                  <div className="my-auto py-1 relative z-10">
                    <div className="font-extrabold text-slate-900 text-xs">{partner.name}</div>
                    <div className="text-[8px] text-blue-600 font-bold">{partner.designation}</div>
                  </div>

                  <div className="text-[7.5px] text-slate-600 space-y-0.5 border-t border-slate-100 pt-1 relative z-10">
                    <div className="font-bold text-slate-900 truncate">📞 {partner.phone || config.primaryPhone}</div>
                    <div className="truncate">✉️ {partner.email || config.email}</div>
                    <div className="truncate">📍 {config.regionalHubs}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PRINT SPECIFICATIONS BOX */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-4 print:hidden">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-base text-white">🖨️ Printing Press Specifications (For Vapi Printers)</h3>
            <span className="text-xs text-teal-400 font-mono">350 GSM Velvet Matte</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
            <div className="bg-slate-800 p-3.5 rounded-xl border border-slate-700/60">
              <strong className="text-white block mb-1">Dimensions & Bleed:</strong>
              <span>{config.printSpecSize}</span>
            </div>
            <div className="bg-slate-800 p-3.5 rounded-xl border border-slate-700/60">
              <strong className="text-white block mb-1">Paper & Lamination:</strong>
              <span>{config.printSpecGsm}<br />{config.printSpecFinish.split('+')[0]}</span>
            </div>
            <div className="bg-slate-800 p-3.5 rounded-xl border border-slate-700/60">
              <strong className="text-white block mb-1">Special Effects:</strong>
              <span>{config.printSpecFinish.split('+')[1] || 'Spot UV on Logo & Names'}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
