'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Scan, 
  FileSpreadsheet, 
  Wrench, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Play, 
  Pause,
  Sparkles,
  ShieldCheck,
  Clock,
  Layers
} from 'lucide-react';

interface StepData {
  id: number;
  phase: string;
  title: string;
  tagline: string;
  icon: any;
  deliverable: string;
  duration: string;
  activities: string[];
  proofPoint: string;
  statusBadge: string;
  stageColor: string;
}

const STEPS: StepData[] = [
  {
    id: 1,
    phase: 'Phase 01',
    title: 'Physical Site Survey & LiDAR Mapping',
    tagline: 'Onsite inspection of cable routes, blind spots, and earthing',
    icon: Scan,
    deliverable: 'Premises Assessment & Optical Pathway Map',
    duration: '1 to 2 Days',
    activities: [
      'Engineers inspect factory sheds, electrical trays, and chemical conduit paths',
      'CCTV field-of-view analysis eliminating perimeter blind spots & glare',
      'Electrical earthing & EMI noise verification near heavy industrial machinery',
      'Measuring exact optical fiber trenching and pole-mounted drop distances'
    ],
    proofPoint: '0 unexpected layout surprises during live production',
    statusBadge: 'Site Scan Complete',
    stageColor: '#0284c7'
  },
  {
    id: 2,
    phase: 'Phase 02',
    title: 'BOQ Architecture & Topology Design',
    tagline: 'Transparent Bill of Quantities with vendor models and CAD schematic',
    icon: FileSpreadsheet,
    deliverable: 'Itemized BOQ (Excel/PDF) + Network Topology Diagram',
    duration: '24 to 48 Hours',
    activities: [
      'Granular equipment specifications: Cisco, Sophos, Hikvision, D-Link, Dell',
      'VLAN segmentation layout separating production machinery, CCTV, and corporate ERP',
      'Bandwidth and PoE budget calculation preventing switch oversubscription',
      'Transparent milestone costing with labor, conduits, and accessories included'
    ],
    proofPoint: '100% itemized pricing with zero hidden contractor surprises',
    statusBadge: 'Blueprint Approved',
    stageColor: '#0ea5e9'
  },
  {
    id: 3,
    phase: 'Phase 03',
    title: 'Certified Deployment & Rack Dressing',
    tagline: 'Conduit routing, optical fusion splicing, and switch stack installation',
    icon: Wrench,
    deliverable: 'Commissioned IT, CCTV & Security Infrastructure',
    duration: 'Per Project Schedule',
    activities: [
      'Heavy-duty industrial PVC/GI conduit installation across production floors',
      'Precision optical fiber core fusion splicing (<0.02 dB loss target)',
      '42U server rack dressing with laser-engraved port numbers and color-coded cords',
      'Next-gen firewall rule deployment, IPS tuning, and Multi-WAN failover testing'
    ],
    proofPoint: 'Neat, audit-ready structured racks designed for easy troubleshooting',
    statusBadge: 'Hardware Operational',
    stageColor: '#f97316'
  },
  {
    id: 4,
    phase: 'Phase 04',
    title: 'Fluke Audit & SLA Handover',
    tagline: 'Calibrated Fluke DSX-8000 link certification & AMC activation',
    icon: Award,
    deliverable: 'Fluke Test Certification Binder + AMC Onsite SLA Agreement',
    duration: 'Same-Day Handover',
    activities: [
      'Every single copper and optical link tested with Fluke DSX-8000 calibrated certifier',
      'Comprehensive port mapping binder submitted for ISO 27001 & FDA audits',
      'User administration training and emergency escalation contact handover',
      'Activation of 6 to 8 Hour Onsite Emergency Support SLA across Vapi, Silvassa, Daman'
    ],
    proofPoint: '100% Audit-Compliant documentation accepted by global auditors',
    statusBadge: '100% Certified Link',
    stageColor: '#10b981'
  }
];

export default function ProjectRoadmap3D() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  // Auto progression timer
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveStep(prev => (prev === 4 ? 1 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const current = STEPS[activeStep - 1];

  return (
    <div className="space-y-10">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Structured Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            4-Step Project Execution Roadmap
          </h2>
          <p className="text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
            From initial physical factory survey to calibrated Fluke cable testing and SLA maintenance. Watch how your industrial network is built correctly the first time.
          </p>
        </div>

        {/* Play / Pause Toggle */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition shrink-0 cursor-pointer"
        >
          {isAutoPlaying ? (
            <>
              <Pause className="w-3.5 h-3.5 text-cyan-400" />
              <span>Pause Auto-Tour</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 text-cyan-400" />
              <span>Auto-Play Sequence</span>
            </>
          )}
        </button>
      </div>

      {/* Progress Timeline Stepper */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {STEPS.map((step) => {
          const isActive = step.id === activeStep;
          const isPassed = step.id < activeStep;
          const IconComp = step.icon;

          return (
            <button
              key={step.id}
              onClick={() => {
                setIsAutoPlaying(false);
                setActiveStep(step.id);
              }}
              className={`p-4 rounded-2xl text-left transition-all relative overflow-hidden cursor-pointer border ${
                isActive
                  ? 'bg-slate-900 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.25)]'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-400'
              }`}
            >
              {/* Top Accent line */}
              <div 
                className={`absolute top-0 left-0 right-0 h-1 transition-all ${
                  isActive ? 'bg-gradient-to-r from-cyan-400 to-blue-500' : isPassed ? 'bg-teal-600' : 'bg-transparent'
                }`} 
              />

              <div className="flex items-center justify-between mb-2">
                <span className={`text-[11px] font-mono font-bold uppercase tracking-wider ${isActive ? 'text-cyan-400' : 'text-slate-500'}`}>
                  {step.phase}
                </span>
                <IconComp className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
              </div>

              <div className={`text-xs sm:text-sm font-bold truncate ${isActive ? 'text-white' : 'text-slate-300'}`}>
                {step.title.split('&')[0].trim()}
              </div>

              <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                <span>{step.duration}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* 3D Progressive Construction Stage & Phase Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left: 3D Animated Construction Stage Visual (7 Cols) */}
        <div className="lg:col-span-7 relative h-[400px] sm:h-[480px] rounded-3xl overflow-hidden border border-cyan-500/30 blueprint-dark-grid p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
          
          {/* Ambient Lighting */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />

          {/* Top Status Bar */}
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-cyan-500/40 text-cyan-300 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Step 0{activeStep} of 04</span>
            </div>

            <div className="px-3 py-1.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700 text-xs font-mono font-bold text-white">
              {current.statusBadge}
            </div>
          </div>

          {/* Central 3D Visual Stage (Simulating progressive building) */}
          <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center">
            
            {activeStep === 1 && (
              /* Step 1: Laser Scan & Route Discovery */
              <div className="space-y-4 animate-fadeIn">
                <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/40 animate-spin-veryslow" />
                  <div className="absolute inset-4 rounded-full border border-cyan-500/20" />
                  <div className="w-24 h-24 rounded-2xl bg-cyan-950/80 border-2 border-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.4)] flex items-center justify-center text-cyan-300">
                    <Scan className="w-12 h-12 animate-pulse" />
                  </div>
                  {/* Radar sweep beam */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 to-transparent animate-radar-sweep pointer-events-none" />
                </div>
                <div className="font-mono text-xs text-cyan-300">
                  [SCANNING PATHWAYS & BLIND SPOTS]
                </div>
                <div className="text-xs text-slate-400 max-w-sm">
                  Physical laser measurement of conduit distance, wall thickness, and earthing points.
                </div>
              </div>
            )}

            {activeStep === 2 && (
              /* Step 2: Holographic Blueprint Rising */
              <div className="space-y-4 animate-fadeIn">
                <div className="relative w-56 h-40 mx-auto bg-slate-900/90 border-2 border-sky-400 rounded-2xl p-4 shadow-[0_0_35px_rgba(56,189,248,0.35)] flex flex-col justify-between">
                  <div className="flex items-center justify-between border-b border-sky-500/40 pb-2 text-[11px] font-mono text-sky-300">
                    <span>BOQ_SPEC_v1.0</span>
                    <span className="text-emerald-400">OPTIMIZED</span>
                  </div>
                  <div className="space-y-1.5 text-left text-[11px] font-mono text-slate-300">
                    <div className="flex justify-between">
                      <span>• CAT6A Shielded Drops:</span>
                      <span className="text-sky-300 font-bold">48 Runs</span>
                    </div>
                    <div className="flex justify-between">
                      <span>• 12-Core Armored Fiber:</span>
                      <span className="text-sky-300 font-bold">1,250 Mtr</span>
                    </div>
                    <div className="flex justify-between">
                      <span>• 4K AI CCTV Dome:</span>
                      <span className="text-sky-300 font-bold">32 Units</span>
                    </div>
                    <div className="flex justify-between">
                      <span>• Sophos XGS Firewall:</span>
                      <span className="text-sky-300 font-bold">1 Cluster</span>
                    </div>
                  </div>
                  <div className="text-[10px] text-right text-slate-500 font-mono">
                    Zero Missing Hardware Guarantee
                  </div>
                </div>
                <div className="font-mono text-xs text-sky-400">
                  [HOLOGRAPHIC ARCHITECTURE LOCKED]
                </div>
              </div>
            )}

            {activeStep === 3 && (
              /* Step 3: Equipment Assembly & Cable Splicing */
              <div className="space-y-4 animate-fadeIn">
                <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
                  <div className="w-36 h-44 bg-slate-950 border-2 border-orange-500/80 rounded-xl p-3 shadow-[0_0_30px_rgba(249,115,22,0.35)] flex flex-col justify-between">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-1 text-[10px] font-mono text-orange-400">
                      <span>42U RACK</span>
                      <span>DRESSED</span>
                    </div>
                    {/* Switch slots */}
                    <div className="space-y-1.5">
                      {[1, 2, 3].map(slot => (
                        <div key={slot} className="h-6 bg-slate-900 border border-slate-800 rounded flex items-center justify-between px-2 text-[9px] font-mono">
                          <span className="text-slate-400">SW-0{slot}</span>
                          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        </div>
                      ))}
                    </div>
                    <div className="text-[9px] font-mono text-center text-teal-400">
                      FIBER SPLICED: 0.01 dB
                    </div>
                  </div>
                </div>
                <div className="font-mono text-xs text-orange-400">
                  [DEPLOYMENT & TERMINATION ACTIVE]
                </div>
              </div>
            )}

            {activeStep === 4 && (
              /* Step 4: Fluke Certified Link & AMC */
              <div className="space-y-4 animate-fadeIn">
                <div className="relative w-52 h-44 mx-auto bg-slate-900/90 border-2 border-emerald-400 rounded-2xl p-4 shadow-[0_0_40px_rgba(16,185,129,0.35)] flex flex-col justify-between">
                  <div className="flex items-center justify-between border-b border-emerald-500/40 pb-2 text-xs font-mono text-emerald-400 font-bold">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4" />
                      FLUKE DSX-8000
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 text-[10px]">
                      PASS
                    </span>
                  </div>
                  <div className="space-y-1.5 text-center my-auto">
                    <div className="text-2xl font-black text-white font-mono tracking-tight">
                      100% AUDIT READY
                    </div>
                    <div className="text-[11px] text-slate-300">
                      Zero Return Loss • Full Bandwidth Margin
                    </div>
                  </div>
                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-emerald-300">
                    <span>SLA Guarantee:</span>
                    <strong className="text-white">6-8 Hr Response</strong>
                  </div>
                </div>
                <div className="font-mono text-xs text-emerald-400">
                  [SYSTEM LIVE • SLA BACKED]
                </div>
              </div>
            )}

          </div>

          {/* Bottom Stage Tagline */}
          <div className="text-center text-xs font-mono text-slate-400 relative z-10">
            “{current.proofPoint}”
          </div>
        </div>

        {/* Right: Detailed Execution Breakdown (5 Cols) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-900/95 to-[#0b1120] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl space-y-6 text-white">
          
          <div className="space-y-4">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-bold font-mono text-cyan-400 uppercase tracking-widest">
                {current.phase} Methodology
              </span>
              <span className="text-[11px] font-semibold text-slate-400 bg-slate-800 px-2.5 py-0.5 rounded-full">
                Timeline: {current.duration}
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-white tracking-tight">
                {current.title}
              </h3>
              <p className="text-xs text-cyan-300/90 font-medium mt-1">
                {current.tagline}
              </p>
            </div>

            {/* Key Activities */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold text-slate-200 uppercase tracking-wider block">
                Standard Engineering Activities:
              </span>
              <ul className="space-y-2 text-xs text-slate-300">
                {current.activities.map((act, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverable Document Box */}
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Client Proof & Deliverable:
              </span>
              <div className="font-semibold text-white">
                📑 {current.deliverable}
              </div>
            </div>

          </div>

          {/* Bottom Action CTA */}
          <div className="pt-4 border-t border-slate-800">
            <Link
              href="/quote"
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow-lg transition text-xs uppercase tracking-wider text-center"
            >
              <span>Schedule Phase 01 Site Survey</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}
