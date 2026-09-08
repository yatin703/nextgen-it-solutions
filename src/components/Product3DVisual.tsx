'use client';

import React, { useState, useRef } from 'react';
import { ProductItem } from '@/lib/types';
import { 
  Network, 
  Camera, 
  Server, 
  ShieldCheck, 
  Zap, 
  Wifi, 
  Fingerprint, 
  Cpu,
  Sparkles,
  Layers
} from 'lucide-react';

interface Product3DVisualProps {
  product: ProductItem;
  interactive?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function Product3DVisual({ 
  product, 
  interactive = true,
  size = 'md' 
}: Product3DVisualProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Smooth tilt angles
    const rotateX = ((y - centerY) / centerY) * -14;
    const rotateY = ((x - centerX) / centerX) * 14;
    
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  // Determine model type
  const modelType = product.animation3d || deriveModelType(product.category);

  // Height and size classes
  const containerHeight = size === 'sm' ? 'h-36' : size === 'lg' ? 'h-64' : 'h-48';

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full ${containerHeight} perspective-1000 select-none overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-[#0b1120] p-4 flex items-center justify-center transition-all duration-300 border border-slate-700/50 shadow-inner group`}
    >
      {/* 3D Ambient Backdrop Grid & Glow */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" 
      />
      <div 
        className="absolute w-40 h-40 rounded-full blur-2xl pointer-events-none transition-opacity duration-500 animate-pulse-glow"
        style={{
          backgroundColor: getGlowColor(modelType),
          opacity: isHovered ? 0.45 : 0.25
        }}
      />

      {/* Floating 3D Badge */}
      <div className="absolute top-2.5 left-3 z-20 flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-slate-800/80 border border-slate-700/70 text-[10px] font-mono text-cyan-300 backdrop-blur-sm shadow-sm">
        <Sparkles className="w-2.5 h-2.5 text-cyan-400" />
        <span className="uppercase tracking-widest font-semibold">3D {modelType.replace('-3d', '')}</span>
      </div>

      {/* 3D Model Stage Canvas */}
      <div 
        className="relative z-10 w-full h-full flex items-center justify-center preserve-3d transition-transform ease-out duration-150"
        style={{
          transform: isHovered 
            ? `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateZ(20px)` 
            : 'rotateX(4deg) rotateY(-4deg)'
        }}
      >
        {product.animationUrl || product.imageUrl ? (
          /* Custom 3D Animation GIF or Image */
          <div className="relative w-full h-full flex items-center justify-center preserve-3d">
            <img 
              src={product.animationUrl || product.imageUrl} 
              alt={product.name}
              className="max-h-full max-w-full object-contain filter drop-shadow-[0_15px_15px_rgba(0,0,0,0.6)] animate-float-3d"
            />
          </div>
        ) : (
          /* High-Tech 3D Procedural Hardware Render */
          <div className="animate-float-3d w-full h-full flex items-center justify-center">
            {render3DModel(modelType, isHovered)}
          </div>
        )}
      </div>

      {/* 3D Depth Floor Shadow */}
      <div 
        className="absolute bottom-2 w-3/4 h-3 bg-black/60 rounded-full blur-md transition-transform duration-300 pointer-events-none"
        style={{
          transform: isHovered ? 'scale(1.1) translateY(4px)' : 'scale(0.95)'
        }}
      />
    </div>
  );
}

function deriveModelType(category: string): string {
  const cat = (category || '').toLowerCase();
  if (cat.includes('cctv') || cat.includes('camera')) return 'cctv-3d';
  if (cat.includes('switch')) return 'switch-3d';
  if (cat.includes('server')) return 'server-3d';
  if (cat.includes('firewall')) return 'firewall-3d';
  if (cat.includes('ups') || cat.includes('power')) return 'ups-3d';
  if (cat.includes('wire') || cat.includes('wifi')) return 'wireless-3d';
  if (cat.includes('bio') || cat.includes('access')) return 'biometric-3d';
  return 'workstation-3d';
}

function getGlowColor(type: string): string {
  switch (type) {
    case 'cctv-3d': return '#06b6d4'; // Cyan
    case 'switch-3d': return '#3b82f6'; // Blue
    case 'server-3d': return '#a855f7'; // Purple
    case 'firewall-3d': return '#10b981'; // Emerald
    case 'ups-3d': return '#f59e0b'; // Amber
    case 'wireless-3d': return '#38bdf8'; // Sky
    case 'biometric-3d': return '#ec4899'; // Pink
    default: return '#3b82f6';
  }
}

function render3DModel(type: string, isHovered: boolean) {
  switch (type) {
    case 'cctv-3d':
      return (
        <div className="relative w-36 h-36 flex items-center justify-center">
          {/* Rotating Targeting Ring */}
          <div className="absolute inset-2 border-2 border-dashed border-cyan-500/40 rounded-full animate-spin-slow" />
          
          {/* Radar Scanning Sweep */}
          <div className="absolute w-28 h-28 rounded-full border border-cyan-400/20 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-cyan-950/50 border border-cyan-500/50 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              {/* Outer Lens Housing */}
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-slate-800 to-slate-950 border-2 border-cyan-400 flex items-center justify-center shadow-inner relative">
                {/* Glass reflection */}
                <div className="absolute top-1.5 left-2 w-3.5 h-2 bg-white/40 rounded-full rotate-45 blur-[0.5px]" />
                {/* Center Camera Aperture */}
                <div className="w-6 h-6 rounded-full bg-slate-900 border border-cyan-300 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          {/* Active Sensor / IR status indicator */}
          <div className="absolute bottom-2 right-4 flex items-center gap-1 bg-black/60 px-2 py-0.5 rounded border border-cyan-500/40 text-[9px] text-cyan-300 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
            <span>REC 4K</span>
          </div>
        </div>
      );

    case 'switch-3d':
      return (
        <div className="relative w-52 h-20 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-950 rounded-lg border-2 border-blue-500/60 shadow-[0_10px_25px_rgba(0,0,0,0.7)] p-2.5 flex flex-col justify-between transform rotate-[-2deg]">
          {/* Top Chassis Accent */}
          <div className="flex items-center justify-between border-b border-slate-600/60 pb-1 text-[9px] font-mono text-slate-300">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399] animate-pulse" />
              <span>GIGABIT PoE+</span>
            </span>
            <span className="text-blue-400">10G SFP+ ACTIVE</span>
          </div>

          {/* Dual Row RJ45 Ports Matrix */}
          <div className="grid grid-cols-8 gap-1.5 py-1">
            {Array.from({ length: 8 }).map((_, idx) => (
              <div key={idx} className="flex flex-col items-center gap-0.5">
                <div className={`w-1 h-1 rounded-full ${idx % 2 === 0 ? 'bg-emerald-400' : 'bg-amber-400'} animate-pulse`} />
                <div className="w-3.5 h-2.5 bg-slate-950 rounded-sm border border-slate-600 shadow-inner flex items-center justify-center">
                  <div className="w-2 h-1 bg-yellow-500/60 rounded-[1px]" />
                </div>
              </div>
            ))}
          </div>

          {/* SFP Fiber Ports */}
          <div className="flex items-center justify-end gap-1.5 pt-0.5">
            <div className="w-4 h-2.5 bg-cyan-950 border border-cyan-500/60 rounded flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee]" />
            </div>
            <div className="w-4 h-2.5 bg-cyan-950 border border-cyan-500/60 rounded flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee]" />
            </div>
          </div>
        </div>
      );

    case 'server-3d':
      return (
        <div className="relative w-48 h-28 bg-gradient-to-b from-slate-800 to-slate-950 rounded-lg border border-purple-500/50 shadow-[0_12px_30px_rgba(0,0,0,0.8)] p-2.5 flex flex-col justify-between">
          {/* Top Server Panel */}
          <div className="flex items-center justify-between border-b border-slate-700/80 pb-1 text-[9px] font-mono">
            <span className="text-purple-400 font-bold">POWEREDGE 1U</span>
            <span className="flex items-center gap-1 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
              <span>RAID 10 OK</span>
            </span>
          </div>

          {/* Hot-Swap Drive Bays */}
          <div className="grid grid-cols-4 gap-1.5 my-1">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-700 rounded p-1 flex flex-col items-center justify-between h-9 shadow-inner">
                <div className="w-full flex justify-between">
                  <div className="w-1 h-1 rounded-full bg-emerald-400" />
                  <div className="w-1 h-1 rounded-full bg-blue-400 animate-pulse" />
                </div>
                <div className="w-full h-1 bg-slate-800 rounded" />
                <span className="text-[7px] font-mono text-slate-400">BAY {idx + 1}</span>
              </div>
            ))}
          </div>

          {/* Exhaust & Status LCD */}
          <div className="flex items-center justify-between text-[8px] font-mono text-slate-400 pt-0.5">
            <span className="bg-slate-900 px-1.5 py-0.5 rounded border border-purple-500/40 text-purple-300">
              iDRAC9: ONLINE
            </span>
            <span className="text-slate-500">2x 800W PSU</span>
          </div>
        </div>
      );

    case 'firewall-3d':
      return (
        <div className="relative w-40 h-36 flex items-center justify-center">
          {/* Holographic Security Shield */}
          <div className="absolute w-28 h-32 border-2 border-emerald-400/40 rounded-t-full rounded-b-2xl bg-gradient-to-b from-emerald-500/10 to-emerald-950/40 shadow-[0_0_25px_rgba(16,185,129,0.25)] flex flex-col items-center justify-center p-3 animate-pulse">
            <ShieldCheck className="w-12 h-12 text-emerald-400 filter drop-shadow-[0_0_8px_#34d399]" />
            <span className="text-[10px] font-mono font-bold text-emerald-300 mt-1">NGFW ACTIVE</span>
            <span className="text-[8px] font-mono text-emerald-400/80">0-DAY DEFENSE</span>
          </div>
          
          {/* Orbiting Security Dots */}
          <div className="absolute inset-0 rounded-full border border-emerald-500/20 animate-spin-slow" />
        </div>
      );

    case 'ups-3d':
      return (
        <div className="relative w-36 h-36 bg-gradient-to-b from-slate-800 to-slate-950 rounded-xl border border-amber-500/50 p-3 flex flex-col justify-between shadow-[0_12px_28px_rgba(0,0,0,0.8)]">
          <div className="flex items-center justify-between text-[9px] font-mono border-b border-slate-700 pb-1">
            <span className="text-amber-400 font-bold flex items-center gap-1">
              <Zap className="w-3 h-3 text-amber-400" />
              <span>ONLINE UPS</span>
            </span>
            <span className="text-emerald-400 font-bold">0ms</span>
          </div>

          {/* LCD Status Screen */}
          <div className="bg-slate-950 border border-amber-500/40 rounded p-1.5 text-center font-mono">
            <div className="text-[14px] font-extrabold text-amber-400 tracking-wider">230.4 V</div>
            <div className="text-[8px] text-slate-400 flex justify-between px-1 mt-0.5">
              <span>LOAD: 42%</span>
              <span className="text-emerald-400">100% BAT</span>
            </div>
          </div>

          {/* Battery Level Indicators */}
          <div className="flex gap-1 items-center justify-center pt-1">
            <div className="w-4 h-1.5 bg-emerald-500 rounded-sm shadow-[0_0_4px_#10b981]" />
            <div className="w-4 h-1.5 bg-emerald-500 rounded-sm shadow-[0_0_4px_#10b981]" />
            <div className="w-4 h-1.5 bg-emerald-500 rounded-sm shadow-[0_0_4px_#10b981]" />
            <div className="w-4 h-1.5 bg-emerald-500 rounded-sm shadow-[0_0_4px_#10b981]" />
          </div>
        </div>
      );

    case 'wireless-3d':
      return (
        <div className="relative w-36 h-36 flex items-center justify-center">
          {/* Radiating 3D Radio Wave Rings */}
          <div className="absolute w-32 h-32 rounded-full border border-sky-400/20 animate-ping" />
          <div className="absolute w-24 h-24 rounded-full border border-sky-400/40 animate-pulse" />
          
          {/* Central Access Point Dome */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-200 to-slate-400 border-2 border-white shadow-[0_10px_25px_rgba(0,0,0,0.5)] flex items-center justify-center relative">
            <div className="w-6 h-6 rounded-full bg-sky-500/20 border border-sky-400 flex items-center justify-center">
              <Wifi className="w-3.5 h-3.5 text-sky-600" />
            </div>
            {/* LED Status Ring */}
            <div className="absolute inset-1 rounded-full border border-sky-400/60 shadow-[0_0_10px_#38bdf8]" />
          </div>
          
          <div className="absolute bottom-1 text-[9px] font-mono text-sky-400 bg-slate-900/80 px-2 py-0.5 rounded border border-sky-500/30">
            Wi-Fi 6 (5.3 Gbps)
          </div>
        </div>
      );

    case 'biometric-3d':
      return (
        <div className="relative w-36 h-36 bg-gradient-to-b from-slate-800 to-slate-950 rounded-xl border border-pink-500/40 p-3 flex flex-col justify-between shadow-[0_12px_28px_rgba(0,0,0,0.8)]">
          <div className="flex items-center justify-between text-[9px] font-mono border-b border-slate-700 pb-1 text-pink-400">
            <span>AI FACIAL / SILKID</span>
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-ping" />
          </div>

          {/* Biometric Scanning Prism */}
          <div className="relative w-full h-16 bg-slate-950 border border-pink-500/30 rounded flex items-center justify-center overflow-hidden">
            <Fingerprint className="w-9 h-9 text-pink-500/60" />
            {/* Scanning Laser Beam */}
            <div className="absolute inset-x-0 h-0.5 bg-pink-400 shadow-[0_0_8px_#ec4899] animate-bounce" />
          </div>

          <div className="text-[8px] font-mono text-center text-slate-400">
            CLOUD HRMS SYNC OK
          </div>
        </div>
      );

    default: // workstation-3d
      return (
        <div className="relative w-44 h-28 bg-gradient-to-b from-slate-800 to-slate-950 rounded-lg border border-blue-500/40 p-3 flex flex-col justify-between shadow-[0_10px_25px_rgba(0,0,0,0.8)]">
          <div className="flex items-center justify-between text-[9px] font-mono text-blue-400 border-b border-slate-700 pb-1">
            <span>CAD / CAM WORKSTATION</span>
            <Cpu className="w-3.5 h-3.5 text-blue-400" />
          </div>

          <div className="grid grid-cols-3 gap-2 my-1">
            <div className="bg-slate-900 border border-slate-700 rounded p-1 text-center font-mono">
              <div className="text-[7px] text-slate-400">CPU</div>
              <div className="text-[10px] font-bold text-slate-200">i7 / i9</div>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded p-1 text-center font-mono">
              <div className="text-[7px] text-slate-400">RAM</div>
              <div className="text-[10px] font-bold text-emerald-400">32GB</div>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded p-1 text-center font-mono">
              <div className="text-[7px] text-slate-400">GPU</div>
              <div className="text-[10px] font-bold text-teal-400">RTX Pro</div>
            </div>
          </div>

          <div className="text-[8px] font-mono text-slate-400 text-right">
            WIN 11 PRO LICENSED
          </div>
        </div>
      );
  }
}
