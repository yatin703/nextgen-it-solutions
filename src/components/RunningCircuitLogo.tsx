'use client';

import React from 'react';

interface RunningCircuitLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  theme?: 'light' | 'dark';
}

export default function RunningCircuitLogo({
  size = 'lg',
  className = '',
  theme = 'light'
}: RunningCircuitLogoProps) {
  // Dimension configurations
  const dim = size === 'sm' ? 220 : size === 'md' ? 270 : size === 'xl' ? 380 : 320;
  const innerLogoSize = size === 'sm' ? 'w-24 h-24' : size === 'md' ? 'w-32 h-32' : size === 'xl' ? 'w-48 h-48' : 'w-36 h-36 sm:w-40 sm:h-40';

  const isLight = theme === 'light';

  return (
    <div 
      className={`relative flex items-center justify-center select-none ${className}`} 
      style={{ width: dim, height: dim }}
    >
      {/* 1. Ambient Background Soft Glow */}
      <div 
        className={`absolute inset-0 rounded-full blur-2xl animate-pulse-glow pointer-events-none ${
          isLight 
            ? 'bg-gradient-to-tr from-blue-500/20 via-teal-400/15 to-indigo-400/15' 
            : 'bg-gradient-to-tr from-cyan-500/25 via-blue-600/20 to-teal-400/20'
        }`} 
      />

      {/* 2. Outer Rotating Circuit Ring (Clockwise) */}
      <svg 
        className="absolute inset-0 w-full h-full animate-circuit-rotate pointer-events-none"
        viewBox="0 0 320 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Circular Circuit Track */}
        <circle 
          cx="160" 
          cy="160" 
          r="150" 
          stroke={isLight ? '#2563eb' : '#06b6d4'} 
          strokeWidth="1.75" 
          strokeDasharray="14 16"
          strokeOpacity={isLight ? '0.7' : '0.8'}
          className={isLight ? 'filter drop-shadow-[0_0_6px_rgba(37,99,235,0.4)]' : 'filter drop-shadow-[0_0_6px_rgba(6,182,212,0.8)]'}
        />

        {/* 8 Outer Circuit Nodes (Solder Pads) */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = 160 + 150 * Math.cos(rad);
          const cy = 160 + 150 * Math.sin(rad);
          return (
            <g key={i}>
              <circle 
                cx={cx} 
                cy={cy} 
                r="4.5" 
                fill={isLight ? '#38bdf8' : '#38bdf8'} 
                fillOpacity="0.4"
                className="animate-node-pulse" 
              />
              <circle 
                cx={cx} 
                cy={cy} 
                r="3" 
                fill={isLight ? (i % 2 === 0 ? '#2563eb' : '#0d9488') : '#38bdf8'} 
              />
              <circle cx={cx} cy={cy} r="1.2" fill="#ffffff" />
            </g>
          );
        })}

        {/* Tangent Circuit Branches */}
        <path 
          d="M 160 10 L 160 3 L 176 3" 
          stroke={isLight ? '#2563eb' : '#38bdf8'} 
          strokeWidth="1.5" 
          strokeLinecap="round" 
        />
        <circle cx="176" cy="3" r="2.5" fill={isLight ? '#0d9488' : '#22d3ee'} />

        <path 
          d="M 310 160 L 317 160 L 317 176" 
          stroke={isLight ? '#2563eb' : '#38bdf8'} 
          strokeWidth="1.5" 
          strokeLinecap="round" 
        />
        <circle cx="317" cy="176" r="2.5" fill={isLight ? '#0d9488' : '#22d3ee'} />

        <path 
          d="M 160 310 L 160 317 L 144 317" 
          stroke={isLight ? '#2563eb' : '#38bdf8'} 
          strokeWidth="1.5" 
          strokeLinecap="round" 
        />
        <circle cx="144" cy="317" r="2.5" fill={isLight ? '#0d9488' : '#22d3ee'} />

        <path 
          d="M 10 160 L 3 160 L 3 144" 
          stroke={isLight ? '#2563eb' : '#38bdf8'} 
          strokeWidth="1.5" 
          strokeLinecap="round" 
        />
        <circle cx="3" cy="144" r="2.5" fill={isLight ? '#0d9488' : '#22d3ee'} />
      </svg>

      {/* 3. Circular Text Ring: "NEXTGEN IT SOLUTION" running around circle */}
      <svg 
        className="absolute inset-0 w-full h-full animate-spin-veryslow pointer-events-none"
        viewBox="0 0 320 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <path
            id="runningCircuitTextRing"
            d="M 160, 160 m -118, 0 a 118,118 0 1,1 236,0 a 118,118 0 1,1 -236,0"
          />
        </defs>

        {/* Faint Dashed Guide Circle for the Text */}
        <circle 
          cx="160" 
          cy="160" 
          r="118" 
          stroke={isLight ? '#93c5fd' : '#06b6d4'} 
          strokeWidth="1" 
          strokeDasharray="3 4" 
          strokeOpacity={isLight ? '0.4' : '0.3'}
        />

        {/* High-legibility Brand Name running along the circular path */}
        <text 
          className={isLight ? 'fill-blue-900 font-extrabold uppercase' : 'fill-cyan-300 font-extrabold uppercase'}
          style={{ 
            fontSize: '8px', 
            letterSpacing: '0.22em',
            fontWeight: 800
          }}
        >
          <textPath href="#runningCircuitTextRing" startOffset="0%">
            ★ NEXTGEN IT SOLUTION ★ INDUSTRIAL IT INFRASTRUCTURE ★ NEXTGEN IT SOLUTION ★ SECURITY & AMC 24/7 ★
          </textPath>
        </text>
      </svg>

      {/* 4. Middle High-Tech Radar & Tech Ticks Ring (Counter-Clockwise) */}
      <svg 
        className="absolute inset-0 w-full h-full animate-circuit-reverse pointer-events-none"
        viewBox="0 0 320 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Continuous Dashed Secondary Track */}
        <circle 
          cx="160" 
          cy="160" 
          r="134" 
          stroke={isLight ? '#0d9488' : '#3b82f6'} 
          strokeWidth="1.5" 
          strokeDasharray="4 8"
          strokeOpacity={isLight ? '0.6' : '0.65'}
        />

        {/* 4 Cardinal Radar Markers */}
        <circle 
          cx="160" 
          cy="26" 
          r="4.5" 
          fill={isLight ? '#0d9488' : '#06b6d4'} 
          className={isLight ? 'filter drop-shadow-[0_0_6px_rgba(13,148,136,0.6)]' : 'filter drop-shadow-[0_0_8px_#06b6d4]'} 
        />
        <circle 
          cx="294" 
          cy="160" 
          r="4.5" 
          fill={isLight ? '#0d9488' : '#06b6d4'} 
          className={isLight ? 'filter drop-shadow-[0_0_6px_rgba(13,148,136,0.6)]' : 'filter drop-shadow-[0_0_8px_#06b6d4]'} 
        />
        <circle 
          cx="160" 
          cy="294" 
          r="4.5" 
          fill={isLight ? '#0d9488' : '#06b6d4'} 
          className={isLight ? 'filter drop-shadow-[0_0_6px_rgba(13,148,136,0.6)]' : 'filter drop-shadow-[0_0_8px_#06b6d4]'} 
        />
        <circle 
          cx="26" 
          cy="160" 
          r="4.5" 
          fill={isLight ? '#0d9488' : '#06b6d4'} 
          className={isLight ? 'filter drop-shadow-[0_0_6px_rgba(13,148,136,0.6)]' : 'filter drop-shadow-[0_0_8px_#06b6d4]'} 
        />

        {/* Geometric Hex / Diamond Accents */}
        <polygon points="160,18 165,26 160,34 155,26" fill={isLight ? '#2563eb' : '#38bdf8'} />
        <polygon points="302,160 294,165 286,160 294,155" fill={isLight ? '#2563eb' : '#38bdf8'} />
        <polygon points="160,302 165,294 160,286 155,294" fill={isLight ? '#2563eb' : '#38bdf8'} />
        <polygon points="18,160 26,165 34,160 26,155" fill={isLight ? '#2563eb' : '#38bdf8'} />
      </svg>

      {/* 5. High-Speed Orbiting Data Particle (Clockwise Fast) */}
      <div className="absolute inset-0 animate-circuit-fast pointer-events-none">
        <div className="w-full h-full relative">
          {/* Leading Electron Beam */}
          <div className="absolute top-[8px] left-1/2 -translate-x-1/2 w-4 h-4">
            <div 
              className={`w-3.5 h-3.5 rounded-full animate-ping ${
                isLight ? 'bg-blue-400 shadow-[0_0_12px_#3b82f6]' : 'bg-cyan-300 shadow-[0_0_12px_#22d3ee,0_0_20px_#06b6d4]'
              }`} 
            />
            <div 
              className={`absolute inset-0 w-3.5 h-3.5 rounded-full ${
                isLight ? 'bg-blue-600 shadow-[0_0_8px_#2563eb]' : 'bg-white shadow-[0_0_8px_#38bdf8]'
              }`} 
            />
          </div>

          {/* Symmetrical Trailing Electron Beam */}
          <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 w-4 h-4">
            <div 
              className={`w-3.5 h-3.5 rounded-full animate-ping ${
                isLight ? 'bg-teal-400 shadow-[0_0_12px_#0d9488]' : 'bg-teal-300 shadow-[0_0_12px_#14b8a6,0_0_20px_#0d9488]'
              }`} 
            />
            <div 
              className={`absolute inset-0 w-3.5 h-3.5 rounded-full ${
                isLight ? 'bg-teal-600 shadow-[0_0_8px_#0f766e]' : 'bg-white shadow-[0_0_8px_#2dd4bf]'
              }`} 
            />
          </div>
        </div>
      </div>

      {/* 6. Central NG Metallic Logo with Circular Bevel Frame (Enterprise Light Theme) */}
      <div 
        className={`relative z-10 ${innerLogoSize} rounded-full p-2.5 transition-all duration-500 overflow-hidden flex items-center justify-center group-hover:scale-105 ${
          isLight 
            ? 'bg-gradient-to-tr from-white via-blue-50/90 to-slate-100 border-2 border-blue-500/40 shadow-[0_10px_30px_rgba(37,99,235,0.16)]' 
            : 'bg-gradient-to-tr from-slate-950 via-[#0a1128] to-slate-900 border-2 border-cyan-400/60 shadow-[0_0_25px_rgba(6,182,212,0.4)]'
        }`}
      >
        {/* Core 3D Image */}
        <img 
          src="/images/nextgen-logo-3d.jpg" 
          alt="NextGen IT Solution Logo" 
          className="w-full h-full object-cover rounded-full transform group-hover:rotate-3 transition-transform duration-700 shadow-sm"
        />

        {/* Dynamic Holographic Glass Sweep */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/25 to-transparent pointer-events-none rounded-full" />
        
        {/* Inner Subtle Accent Ring */}
        <div 
          className={`absolute inset-0 rounded-full border pointer-events-none ${
            isLight ? 'border-blue-500/20' : 'border-cyan-400/30'
          }`} 
        />
      </div>

      {/* 7. Static Corner Circuit Branch Lines */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
        viewBox="0 0 320 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top-Left Branch */}
        <path d="M 50 50 L 85 85 L 105 85" stroke={isLight ? '#2563eb' : '#38bdf8'} strokeWidth="1.2" strokeDasharray="3 3" />
        <circle cx="50" cy="50" r="2.5" fill={isLight ? '#0d9488' : '#06b6d4'} />
        
        {/* Top-Right Branch */}
        <path d="M 270 50 L 235 85 L 215 85" stroke={isLight ? '#2563eb' : '#38bdf8'} strokeWidth="1.2" strokeDasharray="3 3" />
        <circle cx="270" cy="50" r="2.5" fill={isLight ? '#0d9488' : '#06b6d4'} />

        {/* Bottom-Left Branch */}
        <path d="M 50 270 L 85 235 L 105 235" stroke={isLight ? '#2563eb' : '#38bdf8'} strokeWidth="1.2" strokeDasharray="3 3" />
        <circle cx="50" cy="270" r="2.5" fill={isLight ? '#0d9488' : '#06b6d4'} />

        {/* Bottom-Right Branch */}
        <path d="M 270 270 L 235 235 L 215 235" stroke={isLight ? '#2563eb' : '#38bdf8'} strokeWidth="1.2" strokeDasharray="3 3" />
        <circle cx="270" cy="270" r="2.5" fill={isLight ? '#0d9488' : '#06b6d4'} />
      </svg>
    </div>
  );
}
