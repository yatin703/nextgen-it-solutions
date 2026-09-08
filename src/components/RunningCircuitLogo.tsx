'use client';

import React from 'react';

interface RunningCircuitLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function RunningCircuitLogo({
  size = 'lg',
  className = ''
}: RunningCircuitLogoProps) {
  // Dimension configurations
  const dim = size === 'sm' ? 180 : size === 'md' ? 240 : 280;
  const innerLogoSize = size === 'sm' ? 'w-24 h-24' : size === 'md' ? 'w-36 h-36' : 'w-44 h-44 sm:w-48 sm:h-48';

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`} style={{ width: dim, height: dim }}>
      
      {/* 1. Ambient Background Glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/25 via-blue-600/20 to-teal-400/20 blur-2xl animate-pulse-glow pointer-events-none" />

      {/* 2. Outer Rotating Circuit Ring (Clockwise) */}
      <svg 
        className="absolute inset-0 w-full h-full animate-circuit-rotate pointer-events-none"
        viewBox="0 0 280 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Circular Track */}
        <circle 
          cx="140" 
          cy="140" 
          r="132" 
          stroke="#06b6d4" 
          strokeWidth="1.5" 
          strokeDasharray="14 16"
          strokeOpacity="0.75"
          className="filter drop-shadow-[0_0_6px_rgba(6,182,212,0.8)]"
        />

        {/* Outer Circuit Nodes (Solder Pads) */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = 140 + 132 * Math.cos(rad);
          const cy = 140 + 132 * Math.sin(rad);
          return (
            <g key={i}>
              <circle cx={cx} cy={cy} r="3.5" fill="#38bdf8" className="animate-node-pulse" />
              <circle cx={cx} cy={cy} r="1.5" fill="#ffffff" />
            </g>
          );
        })}

        {/* Tangent Circuit Branches */}
        <path 
          d="M 140 8 L 140 2 L 155 2" 
          stroke="#38bdf8" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
        />
        <circle cx="155" cy="2" r="2" fill="#22d3ee" />

        <path 
          d="M 272 140 L 278 140 L 278 155" 
          stroke="#38bdf8" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
        />
        <circle cx="278" cy="155" r="2" fill="#22d3ee" />

        <path 
          d="M 140 272 L 140 278 L 125 278" 
          stroke="#38bdf8" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
        />
        <circle cx="125" cy="278" r="2" fill="#22d3ee" />

        <path 
          d="M 8 140 L 2 140 L 2 125" 
          stroke="#38bdf8" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
        />
        <circle cx="2" cy="125" r="2" fill="#22d3ee" />
      </svg>

      {/* 3. Middle High-Tech Radar & Tech Ticks Ring (Counter-Clockwise) */}
      <svg 
        className="absolute inset-0 w-full h-full animate-circuit-reverse pointer-events-none"
        viewBox="0 0 280 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Continuous Dashed Secondary Track */}
        <circle 
          cx="140" 
          cy="140" 
          r="118" 
          stroke="#3b82f6" 
          strokeWidth="2" 
          strokeDasharray="4 8"
          strokeOpacity="0.65"
        />

        {/* 4 Cardinal Radar Markers */}
        <circle cx="140" cy="22" r="4" fill="#06b6d4" className="filter drop-shadow-[0_0_8px_#06b6d4]" />
        <circle cx="258" cy="140" r="4" fill="#06b6d4" className="filter drop-shadow-[0_0_8px_#06b6d4]" />
        <circle cx="140" cy="258" r="4" fill="#06b6d4" className="filter drop-shadow-[0_0_8px_#06b6d4]" />
        <circle cx="22" cy="140" r="4" fill="#06b6d4" className="filter drop-shadow-[0_0_8px_#06b6d4]" />

        {/* Geometric Hex / Diamond Accents */}
        <polygon points="140,14 144,22 140,30 136,22" fill="#38bdf8" />
        <polygon points="266,140 258,144 250,140 258,136" fill="#38bdf8" />
        <polygon points="140,266 144,258 140,250 136,258" fill="#38bdf8" />
        <polygon points="14,140 22,144 30,140 22,136" fill="#38bdf8" />
      </svg>

      {/* 4. High-Speed Orbiting Data Particle (Clockwise Fast) */}
      <div className="absolute inset-0 animate-circuit-fast pointer-events-none">
        <div className="w-full h-full relative">
          {/* Leading Electron Beam */}
          <div className="absolute top-[2px] left-1/2 -translate-x-1/2 w-4 h-4">
            <div className="w-3.5 h-3.5 rounded-full bg-cyan-300 shadow-[0_0_12px_#22d3ee,0_0_20px_#06b6d4] animate-ping" />
            <div className="absolute inset-0 w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_8px_#38bdf8]" />
          </div>

          {/* Symmetrical Trailing Electron Beam */}
          <div className="absolute bottom-[2px] left-1/2 -translate-x-1/2 w-4 h-4">
            <div className="w-3.5 h-3.5 rounded-full bg-teal-300 shadow-[0_0_12px_#14b8a6,0_0_20px_#0d9488]" />
            <div className="absolute inset-0 w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_8px_#2dd4bf]" />
          </div>
        </div>
      </div>

      {/* 5. Central NG Metallic Logo with Circular Bevel Frame */}
      <div className={`relative z-10 ${innerLogoSize} rounded-full p-2 bg-gradient-to-tr from-slate-950 via-[#0a1128] to-slate-900 border-2 border-cyan-400/60 shadow-[0_0_25px_rgba(6,182,212,0.4)] group-hover:scale-105 transition-all duration-500 overflow-hidden flex items-center justify-center`}>
        
        {/* Core Image */}
        <img 
          src="/images/nextgen-logo-3d.jpg" 
          alt="NextGen IT Solution Logo" 
          className="w-full h-full object-cover rounded-full transform group-hover:rotate-3 transition-transform duration-700"
        />

        {/* Dynamic Holographic Glass Sweep */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent pointer-events-none rounded-full" />
        
        {/* Inner Neon Ring */}
        <div className="absolute inset-0 rounded-full border border-cyan-400/30 pointer-events-none" />
      </div>

      {/* 6. Static Circuit Branch Lines in Corners */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none opacity-50"
        viewBox="0 0 280 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top-Left Branch */}
        <path d="M 45 45 L 75 75 L 95 75" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="45" cy="45" r="2" fill="#06b6d4" />
        
        {/* Top-Right Branch */}
        <path d="M 235 45 L 205 75 L 185 75" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="235" cy="45" r="2" fill="#06b6d4" />

        {/* Bottom-Left Branch */}
        <path d="M 45 235 L 75 205 L 95 205" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="45" cy="235" r="2" fill="#06b6d4" />

        {/* Bottom-Right Branch */}
        <path d="M 235 235 L 205 205 L 185 205" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="235" cy="235" r="2" fill="#06b6d4" />
      </svg>

    </div>
  );
}
