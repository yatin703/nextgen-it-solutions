'use client';

import React from 'react';
import { Printer, ShieldCheck, Phone, Mail, Globe, MapPin, CheckCircle2, Download, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function VisitingCardPage() {
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
            NextGen IT Solution — Visiting Card PDF
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Print-ready specifications for Yatin Patel, Bhavesh Patel & Pankaj Patel.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
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
              <h2 className="text-lg font-bold text-slate-900">Set 1: Joint Executive Card (All 3 Partners)</h2>
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
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-teal-500 to-cyan-400"></div>

                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 rounded bg-gradient-to-tr from-blue-600 to-teal-500 flex items-center justify-center text-white font-extrabold text-[11px]">
                        N
                      </div>
                      <span className="font-extrabold text-slate-900 text-sm tracking-tight">
                        NextGen <span className="text-blue-600">IT Solution</span>
                      </span>
                    </div>
                    <span className="text-[7.5px] font-semibold text-slate-500 block uppercase tracking-wider mt-0.5">
                      Industrial IT Infrastructure & Security
                    </span>
                  </div>
                  <span className="text-[7px] font-bold px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded border border-blue-200">
                    VAPI GIDC
                  </span>
                </div>

                {/* 3 Partner Names */}
                <div className="grid grid-cols-3 gap-1 my-auto pt-1 pb-1 border-y border-slate-100 text-center">
                  <div>
                    <div className="font-extrabold text-slate-900 text-[10px] leading-tight">Yatin Patel</div>
                    <div className="text-[7.5px] text-blue-600 font-semibold mt-0.5">Director</div>
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-900 text-[10px] leading-tight">Bhavesh Patel</div>
                    <div className="text-[7.5px] text-blue-600 font-semibold mt-0.5">Director</div>
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-900 text-[10px] leading-tight">Pankaj Patel</div>
                    <div className="text-[7.5px] text-blue-600 font-semibold mt-0.5">Director</div>
                  </div>
                </div>

                {/* Contact Footer */}
                <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[7.5px] text-slate-600 font-medium">
                  <div className="flex items-center gap-1">
                    <span className="text-blue-600 font-bold">📞</span>
                    <span className="font-bold text-slate-900">+91 99785 98817</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-teal-600 font-bold">🌐</span>
                    <span className="truncate">nextgenitsolution.com</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-blue-600 font-bold">✉️</span>
                    <span className="truncate">nextgen.itsolution@zohomail.in</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-teal-600 font-bold">📍</span>
                    <span className="truncate">GIDC, Vapi, Gujarat - 396195</span>
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
                <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
                  <span className="text-[9px] font-extrabold tracking-wider text-teal-400 uppercase">
                    Core Industrial Capabilities
                  </span>
                  <span className="text-[7px] text-slate-400 font-medium">6-8 Hr Onsite SLA</span>
                </div>

                {/* Services List */}
                <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[7.5px] text-slate-300 my-auto">
                  <div className="flex items-center gap-1">
                    <span className="text-teal-400 font-bold">✓</span>
                    <span>Industrial CCTV & Surveillance</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-teal-400 font-bold">✓</span>
                    <span>CAT6 / CAT6A Structured LAN</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-teal-400 font-bold">✓</span>
                    <span>Fiber Optic Splicing & OTDR</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-teal-400 font-bold">✓</span>
                    <span>Sophos & Fortinet Firewalls</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-teal-400 font-bold">✓</span>
                    <span>Server, Storage & Backup</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-teal-400 font-bold">✓</span>
                    <span>Factory IT Annual AMC</span>
                  </div>
                </div>

                <div className="pt-1.5 border-t border-slate-800/80 flex items-center justify-between text-[7px] text-slate-400">
                  <span><strong>Regions:</strong> Vapi • Silvassa • Daman • Sarigam</span>
                  <span className="text-teal-300 font-bold">Fluke Certified Testing</span>
                </div>
              </div>
            </div>

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
              <span>Cut Size: 3.5 in × 2.0 in (89mm × 51mm)<br />Bleed: 3mm on all 4 sides</span>
            </div>
            <div className="bg-slate-800 p-3.5 rounded-xl border border-slate-700/60">
              <strong className="text-white block mb-1">Paper & Lamination:</strong>
              <span>350 GSM or 400 GSM Art Card<br />Thermal Velvet Matte Lamination</span>
            </div>
            <div className="bg-slate-800 p-3.5 rounded-xl border border-slate-700/60">
              <strong className="text-white block mb-1">Special Effects:</strong>
              <span>Spot UV (Gloss) on NextGen Logo<br />Embossing on Partner Names</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
