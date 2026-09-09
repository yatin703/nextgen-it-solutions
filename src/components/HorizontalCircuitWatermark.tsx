'use client';

import React from 'react';

interface HorizontalCircuitWatermarkProps {
  className?: string;
  circuitOpacity?: string;
  logoOpacity?: string;
  opacity?: string;
}

export default function HorizontalCircuitWatermark({
  className = '',
  circuitOpacity = 'opacity-30 sm:opacity-35 lg:opacity-40',
  logoOpacity = 'opacity-90 sm:opacity-95 lg:opacity-100',
  opacity
}: HorizontalCircuitWatermarkProps) {
  const activeCircuitOpacity = opacity || circuitOpacity;

  return (
    <div 
      className={`absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Circuit Layer with controlled subtle opacity */}
      <div className={`absolute inset-0 w-full h-full pointer-events-none ${activeCircuitOpacity}`}>
        {/* 1. Large Ambient Soft Radiant Glows Behind Key Circuit Hubs */}
        <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[400px] bg-teal-500/12 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/3 w-[450px] h-[250px] bg-indigo-500/8 rounded-full blur-3xl" />

      {/* 2. Full-Width Horizontal & Vertical (Orthogonal) Industrial Circuit SVG Grid */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 600"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Linear Gradients for Orthogonal Traces */}
          <linearGradient id="hBusGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.1" />
            <stop offset="25%" stopColor="#2563eb" stopOpacity="0.6" />
            <stop offset="60%" stopColor="#0d9488" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2" />
          </linearGradient>

          <linearGradient id="hBusGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0d9488" stopOpacity="0.1" />
            <stop offset="40%" stopColor="#0d9488" stopOpacity="0.6" />
            <stop offset="80%" stopColor="#2563eb" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.1" />
          </linearGradient>

          <linearGradient id="vBusGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#0d9488" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.1" />
          </linearGradient>

          {/* Solder Pad Filter */}
          <filter id="glowPad" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* ─── BACKGROUND SUBTLE ORTHOGONAL GRID LINES ─── */}
        <g opacity="0.25">
          {/* Fine horizontal guide lines */}
          <line x1="0" y1="60" x2="1440" y2="60" stroke="#94a3b8" strokeWidth="0.75" strokeDasharray="4 12" />
          <line x1="0" y1="180" x2="1440" y2="180" stroke="#94a3b8" strokeWidth="0.75" strokeDasharray="4 12" />
          <line x1="0" y1="300" x2="1440" y2="300" stroke="#94a3b8" strokeWidth="0.75" strokeDasharray="4 12" />
          <line x1="0" y1="420" x2="1440" y2="420" stroke="#94a3b8" strokeWidth="0.75" strokeDasharray="4 12" />
          <line x1="0" y1="540" x2="1440" y2="540" stroke="#94a3b8" strokeWidth="0.75" strokeDasharray="4 12" />

          {/* Fine vertical guide lines */}
          <line x1="160" y1="0" x2="160" y2="600" stroke="#94a3b8" strokeWidth="0.75" strokeDasharray="4 12" />
          <line x1="480" y1="0" x2="480" y2="600" stroke="#94a3b8" strokeWidth="0.75" strokeDasharray="4 12" />
          <line x1="800" y1="0" x2="800" y2="600" stroke="#94a3b8" strokeWidth="0.75" strokeDasharray="4 12" />
          <line x1="1120" y1="0" x2="1120" y2="600" stroke="#94a3b8" strokeWidth="0.75" strokeDasharray="4 12" />
        </g>

        {/* ─── 1. TOP HORIZONTAL DATA BUS (y = 90) ─── */}
        <g>
          {/* Main horizontal trace */}
          <line x1="0" y1="90" x2="1440" y2="90" stroke="url(#hBusGrad1)" strokeWidth="2" strokeDasharray="18 10" />
          
          {/* Secondary parallel micro-bus */}
          <line x1="80" y1="98" x2="1360" y2="98" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.45" strokeDasharray="6 8" />

          {/* 45° step route into mid-level */}
          <path d="M 340 90 L 370 120 L 580 120" stroke="#2563eb" strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round" />
          <circle cx="580" cy="120" r="3.5" fill="#0d9488" />
          <circle cx="580" cy="120" r="1.5" fill="#ffffff" />

          {/* Solder junction nodes */}
          {[120, 280, 480, 720, 960, 1140, 1320].map((x, i) => (
            <g key={`top-node-${i}`}>
              <circle cx={x} cy="90" r="4.5" fill="#38bdf8" fillOpacity="0.35" className="animate-node-pulse" />
              <circle cx={x} cy="90" r="3" fill={i % 2 === 0 ? '#2563eb' : '#0d9488'} />
              <circle cx={x} cy="90" r="1.2" fill="#ffffff" />
            </g>
          ))}

          {/* Animated data packet traveling horizontally across top bus */}
          <circle r="4" fill="#38bdf8" filter="url(#glowPad)">
            <animate attributeName="cx" from="-20" to="1460" dur="9s" repeatCount="indefinite" />
            <animate attributeName="cy" values="90;90" dur="9s" repeatCount="indefinite" />
          </circle>
          <circle r="2" fill="#ffffff">
            <animate attributeName="cx" from="-20" to="1460" dur="9s" repeatCount="indefinite" />
            <animate attributeName="cy" values="90;90" dur="9s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* ─── 2. UPPER-MID HORIZONTAL DATA BUS (Behind Headline, y = 180) ─── */}
        <g>
          {/* High-capacity horizontal rail */}
          <line x1="0" y1="180" x2="1440" y2="180" stroke="url(#hBusGrad2)" strokeWidth="2.5" />
          
          {/* Dual micro-channels */}
          <line x1="40" y1="172" x2="1400" y2="172" stroke="#2563eb" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="8 6" />
          <line x1="40" y1="188" x2="1400" y2="188" stroke="#0d9488" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="8 6" />


          {/* Solder junction nodes */}
          {[60, 220, 390, 610, 830, 1050, 1260].map((x, i) => (
            <g key={`mid1-node-${i}`}>
              <circle cx={x} cy="180" r="4" fill="#0d9488" />
              <circle cx={x} cy="180" r="1.5" fill="#ffffff" />
            </g>
          ))}

          {/* High-speed packet rushing in reverse (Right to Left) */}
          <circle r="4" fill="#2dd4bf" filter="url(#glowPad)">
            <animate attributeName="cx" from="1460" to="-20" dur="11s" repeatCount="indefinite" />
            <animate attributeName="cy" values="180;180" dur="11s" repeatCount="indefinite" />
          </circle>
          <circle r="2" fill="#ffffff">
            <animate attributeName="cx" from="1460" to="-20" dur="11s" repeatCount="indefinite" />
            <animate attributeName="cy" values="180;180" dur="11s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* ─── 3. CENTRAL HORIZONTAL DATA HIGHWAY (y = 300) ─── */}
        <g>
          {/* Main highway running right across the screen */}
          <line x1="0" y1="300" x2="1440" y2="300" stroke="url(#hBusGrad1)" strokeWidth="3" strokeDasharray="24 16" />
          
          {/* Parallel differential pair traces */}
          <line x1="0" y1="292" x2="1440" y2="292" stroke="#2563eb" strokeWidth="1.2" strokeOpacity="0.5" />
          <line x1="0" y1="308" x2="1440" y2="308" stroke="#0d9488" strokeWidth="1.2" strokeOpacity="0.5" />

          {/* 4-Lane CPU Bus branching into central processor zone */}
          <path d="M 680 300 L 740 240 L 920 240" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.5" />
          <circle cx="920" cy="240" r="3.5" fill="#38bdf8" />

          <path d="M 680 300 L 740 360 L 920 360" stroke="#0d9488" strokeWidth="1.5" strokeOpacity="0.5" />
          <circle cx="920" cy="360" r="3.5" fill="#0d9488" />

          {/* Solder junction nodes */}
          {[140, 310, 500, 680, 890, 1100, 1340].map((x, i) => (
            <g key={`highway-node-${i}`}>
              <circle cx={x} cy="300" r="6" fill="#38bdf8" fillOpacity="0.3" className="animate-node-pulse" />
              <circle cx={x} cy="300" r="3.5" fill="#2563eb" />
              <circle cx={x} cy="300" r="1.5" fill="#ffffff" />
            </g>
          ))}

          {/* Fast electron packet 1 */}
          <circle r="4.5" fill="#38bdf8" filter="url(#glowPad)">
            <animate attributeName="cx" from="-20" to="1460" dur="7s" repeatCount="indefinite" />
            <animate attributeName="cy" values="300;300" dur="7s" repeatCount="indefinite" />
          </circle>
          <circle r="2.5" fill="#ffffff">
            <animate attributeName="cx" from="-20" to="1460" dur="7s" repeatCount="indefinite" />
            <animate attributeName="cy" values="300;300" dur="7s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* ─── 4. LOWER-MID HORIZONTAL BUS (Behind CTAs, y = 410) ─── */}
        <g>
          <line x1="0" y1="410" x2="1440" y2="410" stroke="url(#hBusGrad2)" strokeWidth="2" strokeDasharray="16 12" />
          <line x1="60" y1="418" x2="1380" y2="418" stroke="#2563eb" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="4 8" />

          {/* 45° step routes */}
          <path d="M 260 410 L 290 440 L 480 440" stroke="#0d9488" strokeWidth="1.5" strokeOpacity="0.5" />
          <circle cx="480" cy="440" r="3" fill="#0d9488" />

          {/* Solder junction nodes */}
          {[100, 260, 440, 650, 860, 1080, 1280].map((x, i) => (
            <g key={`cta-bus-node-${i}`}>
              <circle cx={x} cy="410" r="4" fill={i % 2 === 0 ? '#0d9488' : '#2563eb'} />
              <circle cx={x} cy="410" r="1.5" fill="#ffffff" />
            </g>
          ))}

          {/* Data packet traveling left */}
          <circle r="4" fill="#38bdf8" filter="url(#glowPad)">
            <animate attributeName="cx" from="1460" to="-20" dur="10s" repeatCount="indefinite" />
            <animate attributeName="cy" values="410;410" dur="10s" repeatCount="indefinite" />
          </circle>
          <circle r="2" fill="#ffffff">
            <animate attributeName="cx" from="1460" to="-20" dur="10s" repeatCount="indefinite" />
            <animate attributeName="cy" values="410;410" dur="10s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* ─── 5. BOTTOM FOUNDATION BUS (Above Stats, y = 510) ─── */}
        <g>
          <line x1="0" y1="510" x2="1440" y2="510" stroke="url(#hBusGrad1)" strokeWidth="2" />
          <line x1="20" y1="516" x2="1420" y2="516" stroke="#0d9488" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="8 8" />

          {/* 4 Vertical feeder taps corresponding to the 4 stats */}
          {[140, 420, 700, 980].map((x, i) => (
            <g key={`stat-tap-${i}`}>
              <line x1={x} y1="510" x2={x} y2="540" stroke="#2563eb" strokeWidth="1.5" strokeOpacity="0.6" />
              <circle cx={x} cy="540" r="3.5" fill="#0d9488" />
              <circle cx={x} cy="540" r="1.5" fill="#ffffff" />
            </g>
          ))}

          {/* Solder junction nodes */}
          {[80, 260, 450, 640, 830, 1020, 1220, 1380].map((x, i) => (
            <g key={`bottom-node-${i}`}>
              <circle cx={x} cy="510" r="4" fill="#2563eb" />
              <circle cx={x} cy="510" r="1.5" fill="#ffffff" />
            </g>
          ))}
        </g>

        {/* ─── VERTICAL CONDUIT RISERS (Crossing All Horizontal Buses) ─── */}
        <g>
          {/* Vertical Riser 1 (x = 180) */}
          <line x1="180" y1="90" x2="180" y2="510" stroke="url(#vBusGrad)" strokeWidth="2" strokeDasharray="14 10" />
          <circle cx="180" cy="90" r="5" fill="#38bdf8" fillOpacity="0.4" />
          <circle cx="180" cy="300" r="5" fill="#38bdf8" fillOpacity="0.4" />
          <circle cx="180" cy="510" r="5" fill="#38bdf8" fillOpacity="0.4" />

          {/* Vertical packet dropping down */}
          <circle r="3.5" fill="#38bdf8">
            <animate attributeName="cx" values="180;180" dur="6s" repeatCount="indefinite" />
            <animate attributeName="cy" from="90" to="510" dur="6s" repeatCount="indefinite" />
          </circle>

          {/* Vertical Riser 2 (x = 520) */}
          <line x1="520" y1="90" x2="520" y2="410" stroke="url(#vBusGrad)" strokeWidth="1.5" strokeDasharray="10 8" />
          
          {/* Vertical Riser 3 (x = 780 - Left of CPU Core) */}
          <line x1="780" y1="50" x2="780" y2="550" stroke="url(#vBusGrad)" strokeWidth="2" strokeDasharray="16 12" />
          
          {/* Vertical Riser 4 (x = 1180 - Right of CPU Core) */}
          <line x1="1180" y1="50" x2="1180" y2="550" stroke="url(#vBusGrad)" strokeWidth="2" strokeDasharray="16 12" />
          <circle r="3.5" fill="#0d9488">
            <animate attributeName="cx" values="1180;1180" dur="7s" repeatCount="indefinite" />
            <animate attributeName="cy" from="550" to="50" dur="7s" repeatCount="indefinite" />
          </circle>

          {/* Vertical Riser 5 (x = 1360 - Far Right Edge) */}
          <line x1="1360" y1="90" x2="1360" y2="510" stroke="url(#vBusGrad)" strokeWidth="1.5" strokeDasharray="12 10" />
        </g>
      </svg>
      </div>

      {/* 3. Central 3D Silver & Golden Live Working Industrial Machine Core (Clean Round Floating Emblem) */}
      <div className={`absolute top-1/2 right-6 sm:right-12 lg:right-24 -translate-y-1/2 pointer-events-none select-none z-10 ${logoOpacity}`}>
        
        {/* Floating Circular Anchor (Completely transparent background, zero gray box) */}
        <div className="relative flex items-center justify-center">
          
          {/* Ambient Soft Cyber Backglow behind Circular Machinery */}
          <div className="absolute w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-tr from-cyan-500/25 via-blue-500/20 to-teal-500/15 blur-3xl pointer-events-none" />

          {/* Clean Thin Orbital Cyan Energy Ring (Hugging the circle, no cog teeth, no gray box) */}
          <div className="absolute -inset-3 sm:-inset-4 rounded-full border border-cyan-400/40 pointer-events-none animate-spin-veryslow" style={{ borderStyle: 'dashed', borderWidth: '1.5px' }} />

          {/* ─── CENTRAL 3D SILVER & GOLDEN MACHINE EMBLEM (LIGHT BLUE & WHITE MATCH) ─── */}
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full p-2 bg-gradient-to-tr from-white via-blue-50/90 to-cyan-50 border-2 border-cyan-400/50 shadow-[0_15px_40px_rgba(37,99,235,0.18),0_0_25px_rgba(6,182,212,0.25)] flex items-center justify-center overflow-hidden animate-machine-core-pulse">
            <img 
              src="/images/nextgen-logo-it-solution-3d.jpg" 
              alt="NextGen IT Solution Live Silver & Gold Machine Logo" 
              className="w-full h-full object-cover rounded-full scale-105 filter drop-shadow-[0_6px_16px_rgba(37,99,235,0.18)]"
            />
            {/* Specular glass reflection ring */}
            <div className="absolute inset-0 rounded-full ring-1 ring-white/60 pointer-events-none" />
            {/* Subtle rotating reflection sweep */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/35 to-transparent rounded-full pointer-events-none animate-specular-scan" />
          </div>

        </div>

      </div>

    </div>
  );
}
