'use client';

import React from 'react';

interface RunningCircuitLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  className?: string;
}

export default function RunningCircuitLogo({
  size = 'hero',
  className = ''
}: RunningCircuitLogoProps) {
  // Dimension configurations
  const sizeClasses = {
    sm: 'w-[200px] h-[200px]',
    md: 'w-[280px] h-[280px]',
    lg: 'w-[360px] h-[360px]',
    xl: 'w-[440px] h-[440px]',
    hero: 'w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] md:w-[480px] md:h-[480px] lg:w-[520px] lg:h-[520px] xl:w-[580px] xl:h-[580px]'
  }[size];

  const logoSizeClasses = {
    sm: 'w-20 h-20',
    md: 'w-28 h-28',
    lg: 'w-36 h-36',
    xl: 'w-44 h-44',
    hero: 'w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 xl:w-52 xl:h-52'
  }[size];

  return (
    <div 
      className={`relative flex items-center justify-center select-none ${sizeClasses} ${className}`}
    >
      {/* 1. Ambient Background Radiant Glow (Enterprise Light Palette) */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 via-teal-400/15 to-indigo-400/15 blur-3xl animate-pulse-glow pointer-events-none" />

      {/* 2. Full Concentric Animated Circuit SVG System */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Circular Path for Rotating Brand Text */}
          <path
            id="unifiedRunningCircuitTextPath"
            d="M 300, 300 m -198, 0 a 198,198 0 1,1 396,0 a 198,198 0 1,1 -396,0"
          />
          {/* Subtle PCB Trace Gradients */}
          <linearGradient id="traceGradBlueUnified" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0d9488" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="traceGradTealUnified" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0d9488" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {/* Static Extended PCB Motherboard Traces spreading outward across background */}
        <g opacity="0.5">
          {/* Top-Left Branch extending toward hero text */}
          <path d="M 160 160 L 90 90 L 20 90" stroke="url(#traceGradBlueUnified)" strokeWidth="1.5" strokeDasharray="4 6" />
          <circle cx="20" cy="90" r="4" fill="#2563eb" />
          <circle cx="20" cy="90" r="1.5" fill="#ffffff" />
          <circle cx="90" cy="90" r="3" fill="#0d9488" />

          {/* Mid-Left Branch */}
          <path d="M 58 300 L 15 300 L -25 340" stroke="#3b82f6" strokeWidth="1.5" strokeOpacity="0.35" strokeDasharray="5 7" />
          <circle cx="15" cy="300" r="4" fill="#0d9488" />
          <circle cx="15" cy="300" r="1.5" fill="#ffffff" />

          {/* Bottom-Left Branch */}
          <path d="M 160 440 L 90 510 L 20 510" stroke="url(#traceGradTealUnified)" strokeWidth="1.5" strokeDasharray="4 6" />
          <circle cx="20" cy="510" r="4" fill="#2563eb" />
          <circle cx="20" cy="510" r="1.5" fill="#ffffff" />

          {/* Top-Right Outward Traces */}
          <path d="M 440 160 L 510 90 L 580 90" stroke="#2563eb" strokeWidth="1.5" strokeOpacity="0.35" strokeDasharray="4 6" />
          <circle cx="580" cy="90" r="3.5" fill="#38bdf8" />
          <circle cx="580" cy="90" r="1.5" fill="#ffffff" />

          {/* Bottom-Right Outward Traces */}
          <path d="M 440 440 L 510 510 L 580 510" stroke="#0d9488" strokeWidth="1.5" strokeOpacity="0.35" strokeDasharray="4 6" />
          <circle cx="580" cy="510" r="3.5" fill="#0d9488" />
          <circle cx="580" cy="510" r="1.5" fill="#ffffff" />
        </g>

        {/* Faint Stationary Outer Halo */}
        <circle 
          cx="300" 
          cy="300" 
          r="265" 
          stroke="#94a3b8" 
          strokeWidth="1" 
          strokeDasharray="2 6" 
          strokeOpacity="0.35" 
        />

        {/* 3. Outer Rotating Circuit Ring (Clockwise) */}
        <g className="animate-circuit-rotate origin-center">
          {/* Main Outer Track */}
          <circle 
            cx="300" 
            cy="300" 
            r="242" 
            stroke="#2563eb" 
            strokeWidth="2" 
            strokeDasharray="16 18" 
            strokeOpacity="0.65" 
            className="filter drop-shadow-[0_0_8px_rgba(37,99,235,0.35)]"
          />

          {/* 12 Solder Pads Spaced Around the Perimeter */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const cx = 300 + 242 * Math.cos(rad);
            const cy = 300 + 242 * Math.sin(rad);
            return (
              <g key={i}>
                <circle cx={cx} cy={cy} r="5" fill="#38bdf8" fillOpacity="0.4" className="animate-node-pulse" />
                <circle cx={cx} cy={cy} r="3" fill={i % 2 === 0 ? '#2563eb' : '#0d9488'} />
                <circle cx={cx} cy={cy} r="1.2" fill="#ffffff" />
              </g>
            );
          })}

          {/* 4 Cardinal Tangent Circuit Branches */}
          <path d="M 300 58 L 300 46 L 320 46" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="320" cy="46" r="3" fill="#0d9488" />

          <path d="M 542 300 L 554 300 L 554 320" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="554" cy="320" r="3" fill="#0d9488" />

          <path d="M 300 542 L 300 554 L 280 554" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="280" cy="554" r="3" fill="#0d9488" />

          <path d="M 58 300 L 46 300 L 46 280" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="46" cy="280" r="3" fill="#0d9488" />
        </g>

        {/* 4. Circular Rotating Brand Name Text: "NEXTGEN IT SOLUTION" around circle */}
        <g className="animate-spin-veryslow origin-center">
          {/* Guide Dashed Circle */}
          <circle 
            cx="300" 
            cy="300" 
            r="198" 
            stroke="#93c5fd" 
            strokeWidth="1" 
            strokeDasharray="3 5" 
            strokeOpacity="0.4" 
          />
          
          <text 
            className="fill-blue-900 font-extrabold uppercase select-none"
            style={{ 
              fontSize: '10.5px', 
              letterSpacing: '0.22em', 
              fontWeight: 800 
            }}
          >
            <textPath href="#unifiedRunningCircuitTextPath" startOffset="0%">
              ★ NEXTGEN IT SOLUTION ★ INDUSTRIAL IT INFRASTRUCTURE ★ ENTERPRISE SURVEILLANCE & SECURITY ★ 24/7 AMC SUPPORT ★
            </textPath>
          </text>
        </g>

        {/* 5. Middle Reverse Rotating Radar Ring (Counter-Clockwise) */}
        <g className="animate-circuit-reverse origin-center">
          <circle 
            cx="300" 
            cy="300" 
            r="158" 
            stroke="#0d9488" 
            strokeWidth="1.75" 
            strokeDasharray="6 12" 
            strokeOpacity="0.6" 
          />

          {/* 4 Cardinal Radar Markers */}
          <circle cx="300" cy="142" r="5" fill="#0d9488" className="filter drop-shadow-[0_0_6px_rgba(13,148,136,0.6)] animate-node-pulse" />
          <circle cx="458" cy="300" r="5" fill="#0d9488" className="filter drop-shadow-[0_0_6px_rgba(13,148,136,0.6)] animate-node-pulse" />
          <circle cx="300" cy="458" r="5" fill="#0d9488" className="filter drop-shadow-[0_0_6px_rgba(13,148,136,0.6)] animate-node-pulse" />
          <circle cx="142" cy="300" r="5" fill="#0d9488" className="filter drop-shadow-[0_0_6px_rgba(13,148,136,0.6)] animate-node-pulse" />

          {/* Diamond Radar Accents */}
          <polygon points="300,132 306,142 300,152 294,142" fill="#0284c7" />
          <polygon points="468,300 458,306 448,300 458,294" fill="#0284c7" />
          <polygon points="300,468 306,458 300,448 294,458" fill="#0284c7" />
          <polygon points="132,300 142,306 152,300 142,294" fill="#0284c7" />
        </g>

        {/* 6. Inner Fast Rotating Ring with Solder Nodes */}
        <g className="animate-circuit-rotate origin-center">
          <circle 
            cx="300" 
            cy="300" 
            r="120" 
            stroke="#2563eb" 
            strokeWidth="1.5" 
            strokeDasharray="8 12" 
            strokeOpacity="0.55" 
          />

          {[0, 60, 120, 180, 240, 300].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const cx = 300 + 120 * Math.cos(rad);
            const cy = 300 + 120 * Math.sin(rad);
            return (
              <g key={i}>
                <circle cx={cx} cy={cy} r="3.5" fill="#0284c7" />
                <circle cx={cx} cy={cy} r="1.2" fill="#ffffff" />
              </g>
            );
          })}
        </g>

        {/* 7. Fast Orbiting Data Particles (Clockwise Fast) */}
        <g className="animate-circuit-fast origin-center">
          {/* Leading Electron Beam */}
          <circle cx="300" cy="58" r="6" fill="#2563eb" className="animate-ping" />
          <circle cx="300" cy="58" r="4.5" fill="#38bdf8" />
          <circle cx="300" cy="58" r="2" fill="#ffffff" />

          {/* Symmetrical Trailing Electron Beam */}
          <circle cx="300" cy="542" r="6" fill="#0d9488" className="animate-ping" />
          <circle cx="300" cy="542" r="4.5" fill="#2dd4bf" />
          <circle cx="300" cy="542" r="2" fill="#ffffff" />
        </g>
      </svg>

      {/* 8. Central 3D Metallic NG Logo Emblem (Positioned at Exact Center Arrow Location) */}
      <div 
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 ${logoSizeClasses} rounded-full p-2.5 sm:p-3 bg-gradient-to-tr from-white via-blue-50/90 to-slate-100 border-2 border-blue-500/50 shadow-[0_12px_35px_rgba(37,99,235,0.22)] flex items-center justify-center group overflow-hidden transition-all duration-500 hover:scale-105`}
      >
        {/* Core 3D Image with Photorealistic Matching IT & SOLUTION Metallic Typography */}
        <img 
          src="/images/nextgen-logo-it-solution-3d.jpg" 
          alt="NextGen IT Solution Logo" 
          className="w-full h-full object-cover rounded-full transform group-hover:rotate-3 transition-transform duration-700 shadow-sm"
        />

        {/* Dynamic Holographic Glass Sweep */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none rounded-full" />
        
        {/* Inner Subtle Accent Ring */}
        <div className="absolute inset-0 rounded-full border border-blue-500/25 pointer-events-none" />
      </div>

    </div>
  );
}
