'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ProductItem } from '@/lib/types';
import { 
  X, 
  RotateCw, 
  ZoomIn, 
  ZoomOut, 
  Layers, 
  Sparkles, 
  FileDown, 
  ArrowRight, 
  CheckCircle2, 
  Info,
  Maximize2,
  Box,
  Cpu,
  ShieldCheck,
  Server
} from 'lucide-react';

interface ProductViewerModalProps {
  product: ProductItem | null;
  isOpen: boolean;
  onClose: () => void;
}

interface Hotspot {
  id: string;
  name: string;
  coord: { top: string; left: string };
  spec: string;
  detail: string;
}

export default function ProductViewerModal({ product, isOpen, onClose }: ProductViewerModalProps) {
  const [viewMode, setViewMode] = useState<'front' | 'rear' | 'rack'>('front');
  const [zoom, setZoom] = useState<number>(1);
  const [rotation, setRotation] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = React.useRef({ x: 0, y: 0 });

  if (!isOpen || !product) return null;

  // Contextual hotspots based on product category
  const isSwitch = product.category.toLowerCase().includes('switch') || product.name.toLowerCase().includes('switch');
  const isCamera = product.category.toLowerCase().includes('cctv') || product.name.toLowerCase().includes('camera');
  const isServer = product.category.toLowerCase().includes('server');
  const isFirewall = product.category.toLowerCase().includes('firewall');

  const hotspots: Hotspot[] = isSwitch ? [
    {
      id: 'poe',
      name: '48-Port Gigabit PoE+ Matrix',
      coord: { top: '48%', left: '32%' },
      spec: '802.3at/af 370W Total PoE Budget',
      detail: 'Powers 48 IP cameras or Wi-Fi 6 access points simultaneously over single CAT6 lines without external power adapters.'
    },
    {
      id: 'sfp',
      name: '10G SFP+ Optical Uplinks',
      coord: { top: '48%', left: '80%' },
      spec: '4x 10Gbps SFP+ Fiber Transceiver Slots',
      detail: 'Ultra-low latency fiber optic backbone uplink connecting directly to datacenter core switch stacks.'
    },
    {
      id: 'mgmt',
      name: 'Console & Layer 2/3 Management',
      coord: { top: '48%', left: '12%' },
      spec: 'RJ-45 / Micro-USB CLI Management',
      detail: 'Full SNMP v3, VLAN isolation, QoS priority queuing, and Spanning Tree link redundancy.'
    }
  ] : isCamera ? [
    {
      id: 'lens',
      name: '4K Ultra-HD Optical Sensor',
      coord: { top: '40%', left: '50%' },
      spec: '1/1.8" Progressive Scan CMOS, F1.0 Lens',
      detail: 'DarkFighter full-color imaging in 0.0005 Lux pitch black industrial environments.'
    },
    {
      id: 'ir',
      name: 'AI Smart IR Illuminator',
      coord: { top: '55%', left: '68%' },
      spec: 'Up to 50 Meters Smart IR Distance',
      detail: 'Prevents wash-out of truck number plates and workers faces at night gates.'
    },
    {
      id: 'housing',
      name: 'IP67 Weatherproof Metal Casing',
      coord: { top: '25%', left: '35%' },
      spec: 'IK10 Vandal-Proof Rated Housing',
      detail: 'Resistant to chemical fumes, industrial dust, and high-pressure washdown.'
    }
  ] : isFirewall ? [
    {
      id: 'ports',
      name: 'Multi-Gigabit WAN/LAN Interfaces',
      coord: { top: '50%', left: '35%' },
      spec: '8x GbE Copper + 2x 10G SFP+ Ports',
      detail: 'Multi-ISP WAN balancing with automated sub-second failover.'
    },
    {
      id: 'engine',
      name: 'Hardware Xstream Processor',
      coord: { top: '50%', left: '65%' },
      spec: 'Deep Packet Inspection Engine',
      detail: 'Inspects encrypted TLS 1.3 traffic in real-time without throttling factory ERP.'
    }
  ] : [
    {
      id: 'bays',
      name: 'Hot-Swap Drive Bays',
      coord: { top: '45%', left: '40%' },
      spec: 'Up to 12x 3.5" SAS/SATA Enterprise Drives',
      detail: 'Zero-downtime drive replacement during live database operations with RAID 10.'
    },
    {
      id: 'psu',
      name: 'Dual Redundant Platinum Power',
      coord: { top: '45%', left: '80%' },
      spec: '2x 800W Hot-Plug Redundant PSUs',
      detail: 'Seamless power failover protecting against plant grid fluctuations.'
    }
  ];

  // Mouse drag handlers for 3D rotation
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStart.current.x;
    const deltaY = e.clientY - dragStart.current.y;
    dragStart.current = { x: e.clientX, y: e.clientY };
    setRotation(prev => ({
      x: Math.max(-25, Math.min(25, prev.x - deltaY * 0.4)),
      y: Math.max(-45, Math.min(45, prev.y + deltaX * 0.4))
    }));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const resetView = () => {
    setRotation({ x: 0, y: 0 });
    setZoom(1);
    setActiveHotspot(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-xl animate-fadeIn">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-6xl max-h-[92vh] overflow-hidden rounded-3xl bg-[#090d16] border border-cyan-500/40 text-white shadow-2xl flex flex-col">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-slate-900/70">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-cyan-950 border border-cyan-400/50 flex items-center justify-center text-cyan-400">
              <Box className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">{product.name}</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/90 text-cyan-300 border border-cyan-500/40">
                  {product.brand}
                </span>
              </div>
              <span className="text-xs text-slate-400 font-mono">Interactive 3D Hardware Inspector</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 2-Column Body: 3D Stage on Left, Technical Spec Sheet on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-y-auto">
          
          {/* LEFT: 3D Stage & Hotspots (7 Cols) */}
          <div 
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            className="lg:col-span-7 relative min-h-[380px] sm:min-h-[460px] blueprint-dark-grid p-6 flex flex-col justify-between select-none cursor-grab active:cursor-grabbing overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-800"
          >
            {/* View Mode & Environment Toggles */}
            <div className="flex flex-wrap items-center justify-between gap-2 relative z-20">
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/90 border border-slate-800 text-xs">
                <button
                  onClick={() => setViewMode('front')}
                  className={`px-3 py-1 rounded-lg font-medium transition cursor-pointer ${
                    viewMode === 'front' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Front View
                </button>
                <button
                  onClick={() => setViewMode('rear')}
                  className={`px-3 py-1 rounded-lg font-medium transition cursor-pointer ${
                    viewMode === 'rear' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Rear Panel
                </button>
                <button
                  onClick={() => setViewMode('rack')}
                  className={`px-3 py-1 rounded-lg font-medium transition cursor-pointer ${
                    viewMode === 'rack' ? 'bg-orange-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  42U Rack View
                </button>
              </div>

              {/* View Control Buttons */}
              <div className="flex items-center gap-1 bg-slate-900/90 border border-slate-800 rounded-xl p-1">
                <button
                  onClick={() => setZoom(prev => Math.min(1.4, prev + 0.1))}
                  className="w-7 h-7 rounded hover:bg-slate-800 text-slate-300 flex items-center justify-center"
                  title="Zoom In"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setZoom(prev => Math.max(0.7, prev - 0.1))}
                  className="w-7 h-7 rounded hover:bg-slate-800 text-slate-300 flex items-center justify-center"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={resetView}
                  className="w-7 h-7 rounded hover:bg-slate-800 text-slate-300 flex items-center justify-center"
                  title="Reset Angle"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Central 3D Hardware Model Stage */}
            <div className="relative my-auto flex items-center justify-center py-6">
              
              {/* Rack Enclosure Frame when in Rack View */}
              {viewMode === 'rack' && (
                <div className="absolute -inset-6 border-2 border-dashed border-slate-700 rounded-2xl pointer-events-none flex flex-col justify-between p-2">
                  <div className="text-[10px] font-mono text-orange-400 bg-slate-900 px-2 py-0.5 rounded w-fit">
                    RU 14-15 | 42U Server Rack Mount
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 text-right">
                    Standard 19-inch EIA-310-D
                  </div>
                </div>
              )}

              {/* 3D Transform Object */}
              <div 
                className="relative transition-transform duration-150 ease-out preserve-3d"
                style={{
                  transform: `scale(${zoom}) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Visual Equipment Chassis */}
                <div className="relative w-72 sm:w-96 h-28 sm:h-36 rounded-xl metallic-dark border-2 border-cyan-500/40 shadow-[0_20px_40px_rgba(0,0,0,0.8)] flex flex-col justify-between p-4">
                  
                  {/* Top Branding line */}
                  <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 text-[10px] font-mono text-slate-400">
                    <span className="font-bold text-white uppercase">{product.brand}</span>
                    <span className="text-cyan-400 font-semibold">{product.category}</span>
                  </div>

                  {/* Ports / Faceplate based on View Mode */}
                  {viewMode === 'front' ? (
                    <div className="space-y-2 my-auto">
                      <div className="flex items-center justify-between">
                        {/* 48 Ports Grid representation */}
                        <div className="grid grid-cols-12 gap-1 flex-1 pr-4">
                          {Array.from({ length: 24 }).map((_, i) => (
                            <div key={i} className="h-3 bg-slate-950 border border-slate-800 rounded-xs flex items-center justify-center">
                              <span className={`w-1 h-1 rounded-full ${i % 3 === 0 ? 'bg-cyan-400' : 'bg-emerald-400'} animate-pulse`} />
                            </div>
                          ))}
                        </div>

                        {/* SFP+ Module slots */}
                        <div className="flex gap-1 pl-2 border-l border-slate-800 shrink-0">
                          <div className="w-4 h-6 bg-cyan-950 border border-cyan-500 rounded-xs flex items-center justify-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                          </div>
                          <div className="w-4 h-6 bg-cyan-950 border border-cyan-500 rounded-xs flex items-center justify-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          </div>
                        </div>
                      </div>

                      <div className="text-[9px] font-mono text-slate-500 flex justify-between">
                        <span>PORT 01 - 24 GIGABIT POE+</span>
                        <span className="text-cyan-400">10G SFP+ UPLINK</span>
                      </div>
                    </div>
                  ) : viewMode === 'rear' ? (
                    <div className="flex items-center justify-between my-auto px-2">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-[9px] font-mono text-slate-400 animate-spin-slow">
                          FAN 01
                        </div>
                        <div className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-[9px] font-mono text-slate-400 animate-spin-slow">
                          FAN 02
                        </div>
                      </div>
                      <div className="w-14 h-8 bg-slate-950 border border-orange-500/70 rounded p-1 flex flex-col justify-between text-[8px] font-mono text-orange-400">
                        <span>PSU 100-240V</span>
                        <span>50/60Hz AC</span>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center my-auto space-y-1">
                      <div className="text-xs font-mono font-bold text-cyan-300">
                        {product.name}
                      </div>
                      <div className="text-[10px] text-slate-400">
                        Rack-mount ears engaged • Rear cable tray aligned
                      </div>
                    </div>
                  )}

                  {/* Bottom indicator strip */}
                  <div className="flex items-center justify-between text-[9px] font-mono text-slate-500 border-t border-slate-800/80 pt-1">
                    <span>STATUS: OPERATIONAL</span>
                    <span className="text-emerald-400">LINK: 100% OK</span>
                  </div>
                </div>

                {/* Hotspot Markers */}
                {viewMode === 'front' && hotspots.map((spot) => (
                  <button
                    key={spot.id}
                    onClick={() => setActiveHotspot(spot)}
                    style={{ top: spot.coord.top, left: spot.coord.left }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-30 group cursor-pointer"
                  >
                    <span className="relative flex h-5 w-5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-5 w-5 bg-cyan-500 border-2 border-white items-center justify-center text-[9px] font-bold text-slate-950 shadow-md">
                        +
                      </span>
                    </span>
                  </button>
                ))}

              </div>
            </div>

            {/* Active Hotspot Callout Box */}
            {activeHotspot ? (
              <div className="relative z-20 bg-slate-900/95 border border-cyan-500/60 rounded-2xl p-4 text-xs space-y-1.5 shadow-2xl backdrop-blur-md animate-fadeIn">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-cyan-300">{activeHotspot.name}</span>
                  <button onClick={() => setActiveHotspot(null)} className="text-slate-400 hover:text-white">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="font-mono text-emerald-400 text-[11px]">{activeHotspot.spec}</div>
                <p className="text-slate-300 text-[11px] leading-relaxed">{activeHotspot.detail}</p>
              </div>
            ) : (
              <div className="text-center text-[11px] font-mono text-slate-400 relative z-20">
                Drag to rotate 3D chassis • Click <span className="text-cyan-400 font-bold">(+)</span> hotspots to inspect ports
              </div>
            )}
          </div>

          {/* RIGHT: Technical Specifications & Commercial Procurement (5 Cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 bg-slate-900/90 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest font-mono">
                  B2B Commercial Procurement
                </span>
                <span className="text-[10px] font-semibold text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 px-2 py-0.5 rounded-md">
                  Project Order Ready
                </span>
              </div>

              <div>
                <h4 className="text-xl font-bold text-white">{product.name}</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Technical Spec List */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-slate-200 uppercase tracking-wider block">
                  Technical Specifications:
                </span>
                <div className="space-y-1.5">
                  {Object.entries(product.specs || {}).map(([key, val], idx) => (
                    <div key={idx} className="flex items-start justify-between gap-2 text-xs text-slate-300 py-1 border-b border-slate-800/50 last:border-0">
                      <span className="text-slate-400 font-medium">{key}:</span>
                      <span className="font-semibold text-cyan-300 text-right">{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Procurement SLA Notice */}
              <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Deployment & Warranty:
                </span>
                <div className="text-slate-300 text-[11px]">
                  Genuine vendor-backed enterprise warranty with onsite installation, rack mounting, and Fluke DSX-8000 link testing.
                </div>
              </div>
            </div>

            {/* Bottom Actions: Quote & Datasheet */}
            <div className="pt-4 border-t border-slate-800/80 space-y-3">
              <Link
                href={`/quote?product=${encodeURIComponent(product.name)}`}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow-lg transition text-xs uppercase tracking-wider text-center"
              >
                <span>Request Commercial Quotation</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </Link>

              <button
                onClick={() => alert(`Technical Datasheet for ${product.name} is being prepared. Please request via quote form for immediate delivery.`)}
                className="w-full inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-4 py-2.5 rounded-xl border border-slate-700 text-xs transition cursor-pointer"
              >
                <FileDown className="w-3.5 h-3.5 text-cyan-400" />
                <span>Download Technical Datasheet (PDF)</span>
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
