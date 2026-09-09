'use client';

import React from 'react';

interface HeroBackgroundCircuitProps {
  className?: string;
}

export default function HeroBackgroundCircuit({ className = '' }: HeroBackgroundCircuitProps) {
  return (
    <div 
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* 1. Large Ambient Radiant Soft Glows (Light Corporate Palette) */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/4 w-[750px] h-[750px] rounded-full bg-gradient-to-tr from-blue-500/12 via-indigo-500/8 to-teal-400/10 blur-3xl" />
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-teal-400/8 blur-3xl" />

      {/* 2. Full Background Animated SVG Circuit System */}
      <div className="absolute top-1/2 right-0 lg:right-4 -translate-y-1/2 translate-x-1/4 lg:translate-x-12 w-[680px] h-[680px] sm:w-[780px] sm:h-[780px] lg:w-[860px] lg:h-[860px] opacity-75 lg:opacity-90">
        <svg 
          viewBox="0 0 800 800" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            {/* Circular Path for Rotating Text */}
            <path
              id="heroBgTextPath"
              d="M 400, 400 m -320, 0 a 320,320 0 1,1 640,0 a 320,320 0 1,1 -640,0"
            />
            {/* Linear gradients for subtle circuit traces */}
            <linearGradient id="traceGradBlue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0d9488" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="traceGradTeal" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0d9488" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Static Extended PCB Motherboard Traces spreading across background */}
          <g opacity="0.45">
            {/* Top-Left Branch extending toward hero text */}
            <path d="M 400 80 L 250 80 L 180 150 L 60 150" stroke="url(#traceGradBlue)" strokeWidth="1.5" strokeDasharray="4 6" />
            <circle cx="60" cy="150" r="3.5" fill="#2563eb" />
            <circle cx="60" cy="150" r="1.5" fill="#ffffff" />
            <circle cx="180" cy="150" r="2.5" fill="#0d9488" />

            {/* Mid-Left Branch */}
            <path d="M 400 400 L 200 400 L 140 460 L 40 460" stroke="#3b82f6" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="6 8" />
            <circle cx="40" cy="460" r="4" fill="#0d9488" />
            <circle cx="40" cy="460" r="2" fill="#ffffff" />
            
            {/* Bottom-Left Branch */}
            <path d="M 400 720 L 280 720 L 200 640 L 90 640" stroke="url(#traceGradTeal)" strokeWidth="1.5" strokeDasharray="4 6" />
            <circle cx="90" cy="640" r="3.5" fill="#2563eb" />
            <circle cx="90" cy="640" r="1.5" fill="#ffffff" />

            {/* Top-Right Outward Traces */}
            <path d="M 640 160 L 720 160 L 760 120" stroke="#2563eb" strokeWidth="1.5" strokeOpacity="0.3" />
            <circle cx="760" cy="120" r="3" fill="#38bdf8" />

            {/* Bottom-Right Outward Traces */}
            <path d="M 640 640 L 710 640 L 760 690" stroke="#0d9488" strokeWidth="1.5" strokeOpacity="0.3" />
            <circle cx="760" cy="690" r="3" fill="#0d9488" />
          </g>

          {/* Outer Stationary Faint Halo */}
          <circle 
            cx="400" 
            cy="400" 
            r="370" 
            stroke="#94a3b8" 
            strokeWidth="1" 
            strokeDasharray="2 6" 
            strokeOpacity="0.35" 
          />

          {/* 3. Outer Rotating Circuit Ring (Clockwise) */}
          <g className="animate-circuit-rotate origin-center">
            {/* Main Outer Track */}
            <circle 
              cx="400" 
              cy="400" 
              r="355" 
              stroke="#2563eb" 
              strokeWidth="2" 
              strokeDasharray="18 20" 
              strokeOpacity="0.4" 
            />

            {/* Solder Pads on Outer Ring */}
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              const cx = 400 + 355 * Math.cos(rad);
              const cy = 400 + 355 * Math.sin(rad);
              return (
                <g key={i}>
                  <circle cx={cx} cy={cy} r="5" fill="#3b82f6" fillOpacity="0.5" className="animate-node-pulse" />
                  <circle cx={cx} cy={cy} r="2.5" fill="#2563eb" />
                  <circle cx={cx} cy={cy} r="1" fill="#ffffff" />
                </g>
              );
            })}
          </g>

          {/* 4. Circular Rotating Text: "NEXTGEN IT SOLUTION" around circle */}
          <g className="animate-spin-veryslow origin-center">
            {/* Guide circle for text */}
            <circle 
              cx="400" 
              cy="400" 
              r="320" 
              stroke="#0d9488" 
              strokeWidth="1" 
              strokeDasharray="4 8" 
              strokeOpacity="0.25" 
            />
            
            <text 
              className="fill-blue-900 font-extrabold uppercase select-none"
              style={{ fontSize: '11px', letterSpacing: '0.24em', opacity: 0.8 }}
            >
              <textPath href="#heroBgTextPath" startOffset="0%">
                ★ NEXTGEN IT SOLUTION ★ INDUSTRIAL IT INFRASTRUCTURE ★ ENTERPRISE SURVEILLANCE & SECURITY ★ 24/7 AMC SUPPORT ★
              </textPath>
            </text>
          </g>

          {/* 5. Middle Reverse Rotating Radar Ring (Counter-Clockwise) */}
          <g className="animate-circuit-reverse origin-center">
            <circle 
              cx="400" 
              cy="400" 
              r="275" 
              stroke="#0d9488" 
              strokeWidth="2" 
              strokeDasharray="6 12" 
              strokeOpacity="0.4" 
            />

            {/* Radar markers at 4 cardinal points */}
            <circle cx="400" cy="125" r="6" fill="#0d9488" fillOpacity="0.7" className="animate-node-pulse" />
            <circle cx="675" cy="400" r="6" fill="#0d9488" fillOpacity="0.7" className="animate-node-pulse" />
            <circle cx="400" cy="675" r="6" fill="#0d9488" fillOpacity="0.7" className="animate-node-pulse" />
            <circle cx="125" cy="400" r="6" fill="#0d9488" fillOpacity="0.7" className="animate-node-pulse" />

            {/* Diamond Radar Accents */}
            <polygon points="400,113 407,125 400,137 393,125" fill="#0284c7" fillOpacity="0.6" />
            <polygon points="687,400 675,407 663,400 675,393" fill="#0284c7" fillOpacity="0.6" />
            <polygon points="400,687 407,675 400,663 393,675" fill="#0284c7" fillOpacity="0.6" />
            <polygon points="113,400 125,407 137,400 125,393" fill="#0284c7" fillOpacity="0.6" />
          </g>

          {/* 6. Inner Fast Rotating Ring with Glowing Nodes */}
          <g className="animate-circuit-rotate origin-center">
            <circle 
              cx="400" 
              cy="400" 
              r="220" 
              stroke="#2563eb" 
              strokeWidth="1.5" 
              strokeDasharray="10 14" 
              strokeOpacity="0.5" 
            />

            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              const cx = 400 + 220 * Math.cos(rad);
              const cy = 400 + 220 * Math.sin(rad);
              return (
                <g key={i}>
                  <circle cx={cx} cy={cy} r="4" fill="#0284c7" />
                  <circle cx={cx} cy={cy} r="1.5" fill="#ffffff" />
                </g>
              );
            })}
          </g>

          {/* 7. Fast Orbiting Data Particles */}
          <g className="animate-circuit-fast origin-center">
            {/* High-speed glowing particle 1 */}
            <circle cx="400" cy="45" r="5" fill="#2563eb" className="animate-ping" />
            <circle cx="400" cy="45" r="4" fill="#38bdf8" />
            <circle cx="400" cy="45" r="2" fill="#ffffff" />

            {/* Symmetrical particle 2 */}
            <circle cx="400" cy="755" r="5" fill="#0d9488" className="animate-ping" />
            <circle cx="400" cy="755" r="4" fill="#2dd4bf" />
            <circle cx="400" cy="755" r="2" fill="#ffffff" />
          </g>

          {/* 8. Core Geometric Center Watermark */}
          <g opacity="0.35">
            <circle cx="400" cy="400" r="160" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="400" cy="400" r="110" stroke="#2563eb" strokeWidth="1.5" strokeOpacity="0.4" />
            <circle cx="400" cy="400" r="60" fill="#eff6ff" fillOpacity="0.5" stroke="#93c5fd" strokeWidth="1" />
            {/* Center Crosshairs */}
            <line x1="400" y1="360" x2="400" y2="440" stroke="#2563eb" strokeWidth="1.5" strokeOpacity="0.5" />
            <line x1="360" y1="400" x2="440" y2="400" stroke="#2563eb" strokeWidth="1.5" strokeOpacity="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}
