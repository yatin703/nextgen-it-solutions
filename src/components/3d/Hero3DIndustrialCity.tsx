'use client';

import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { 
  ShieldCheck, 
  ArrowRight, 
  PhoneCall, 
  Sparkles, 
  Activity, 
  Zap, 
  CheckCircle2, 
  Server, 
  Shield, 
  Wifi, 
  Camera, 
  Layers 
} from 'lucide-react';

// Dynamic import with SSR false for smooth client-side WebGL canvas mounting
const IndustrialCityCanvas = dynamic(() => import('./IndustrialCityCanvas'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[480px] sm:h-[560px] lg:h-[640px] rounded-3xl overflow-hidden border border-cyan-500/20 bg-[#070b14] flex flex-col items-center justify-center text-cyan-400 blueprint-dark-grid">
      <div className="w-12 h-12 rounded-xl border-2 border-cyan-400 border-t-transparent animate-spin mb-4" />
      <span className="text-xs font-mono tracking-widest uppercase">Initializing 3D Industrial Site...</span>
    </div>
  ),
});

export default function Hero3DIndustrialCity() {
  return (
    <section className="relative pt-6 pb-16 lg:pt-8 lg:pb-24 overflow-hidden blueprint-dark-grid text-white border-b border-cyan-950">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Top Header Row: Badge & Core Tagline */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          
          <div className="space-y-4 max-w-3xl">
            {/* Concept Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 text-xs font-bold tracking-wide uppercase shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Connecting, protecting, and powering industrial businesses</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Industrial IT Infrastructure <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
                That Never Stops.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-normal">
              NextGen IT Solution powers high-uptime manufacturing plants across <strong>Vapi GIDC, Silvassa, and Daman</strong>. From 4K AI perimeter surveillance and certified CAT6A/fiber backbones to Sophos firewall borders and 24/7 SLA maintenance.
            </p>
          </div>

          {/* Quick Action CTA Column */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            <Link 
              href="/quote"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold px-7 py-3.5 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.4)] transition transform hover:-translate-y-0.5 text-xs sm:text-sm uppercase tracking-wider text-center"
            >
              <span>Get a Free Quote & BOQ</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="flex items-center gap-2.5">
              <a 
                href="tel:+919978598817"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-white font-semibold px-4 py-3 rounded-xl transition text-xs sm:text-sm text-center"
              >
                <PhoneCall className="w-4 h-4 text-cyan-400" />
                <span>Call Specialist</span>
              </a>
              <a 
                href="https://wa.me/919978598817?text=Hello%20NextGen%20IT%20Solution,%20I%20would%20like%20to%20inquire%20about%20your%20industrial%20IT%20services."
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-500/50 text-emerald-300 font-semibold px-4 py-3 rounded-xl transition text-xs sm:text-sm text-center"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* 3D Interactive Miniature Industrial Network City */}
        <div className="relative">
          <IndustrialCityCanvas />
        </div>

        {/* Verified Technical Proof Metrics & Live Capabilities */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80 shadow-inner">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">50+</div>
            <div className="text-xs text-cyan-400 font-semibold mt-0.5 uppercase tracking-wider">Industrial Projects</div>
            <p className="text-[11px] text-slate-400 mt-1">Chemical, Pharma & Textile units deployed in GIDC</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80 shadow-inner">
            <div className="text-2xl sm:text-3xl font-extrabold text-orange-400 font-mono">6-8 Hrs</div>
            <div className="text-xs text-orange-400 font-semibold mt-0.5 uppercase tracking-wider">Onsite Support SLA</div>
            <p className="text-[11px] text-slate-400 mt-1">Emergency dispatched engineers stationed in Vapi</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80 shadow-inner">
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">100%</div>
            <div className="text-xs text-cyan-400 font-semibold mt-0.5 uppercase tracking-wider">Fluke Certified Link</div>
            <p className="text-[11px] text-slate-400 mt-1">Calibrated Fluke DSX-8000 audit binders supplied</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80 shadow-inner">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">5+ Years</div>
            <div className="text-xs text-cyan-400 font-semibold mt-0.5 uppercase tracking-wider">Field Experience</div>
            <p className="text-[11px] text-slate-400 mt-1">Industrial cabling, optical splicing & server setup</p>
          </div>
        </div>

      </div>
    </section>
  );
}
