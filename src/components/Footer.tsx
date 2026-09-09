'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, Phone, Mail, MapPin, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="bg-[#111827] text-slate-300 border-t border-slate-800 pt-16 pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Company Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden shadow-md border border-cyan-500/40 bg-slate-950 flex items-center justify-center p-0.5 shrink-0 shadow-[0_0_12px_rgba(6,182,212,0.2)]">
                <img 
                  src="/images/nextgen-logo-it-solution-3d.jpg" 
                  alt="NextGen IT Solution Logo" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {theme.companyName ? theme.companyName.split(' ')[0] : 'NextGen'}{' '}
                <span className="text-teal-400">
                  {theme.companyName ? theme.companyName.split(' ').slice(1).join(' ') : 'IT Solution'}
                </span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Your trusted B2B technology partner delivering end-to-end IT infrastructure, CCTV surveillance, certified cabling, server arrays, and SLA maintenance for industrial enterprises across South Gujarat and Union Territories.
            </p>
            <div className="pt-2 text-xs text-slate-300 space-y-1.5">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Certified Network & Security Engineers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Authorized OEM Hardware Partners</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                <span>2 to 4 Hour Onsite SLA in GIDC</span>
              </div>
            </div>
          </div>

          {/* Col 2: Core Services */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 tracking-wider uppercase text-xs border-b border-slate-800 pb-2">
              Core Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services/networking-lan" className="hover:text-teal-400 transition flex items-center gap-1.5 text-slate-400 hover:translate-x-0.5 duration-150">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600" /> Structured LAN & Cabling
                </Link>
              </li>
              <li>
                <Link href="/services/cctv-surveillance" className="hover:text-teal-400 transition flex items-center gap-1.5 text-slate-400 hover:translate-x-0.5 duration-150">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600" /> CCTV & Video Surveillance
                </Link>
              </li>
              <li>
                <Link href="/services/fiber-optic-networking" className="hover:text-teal-400 transition flex items-center gap-1.5 text-slate-400 hover:translate-x-0.5 duration-150">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600" /> Fiber Optic Splicing
                </Link>
              </li>
              <li>
                <Link href="/services/firewall-network-security" className="hover:text-teal-400 transition flex items-center gap-1.5 text-slate-400 hover:translate-x-0.5 duration-150">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600" /> Firewall & Cyber Security
                </Link>
              </li>
              <li>
                <Link href="/services/server-storage-solutions" className="hover:text-teal-400 transition flex items-center gap-1.5 text-slate-400 hover:translate-x-0.5 duration-150">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600" /> Server & Storage Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/amc-it-support" className="hover:text-teal-400 transition flex items-center gap-1.5 text-slate-400 hover:translate-x-0.5 duration-150">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600" /> Annual IT AMC Support
                </Link>
              </li>
              <li>
                <Link href="/services/industrial-it-infrastructure-projects" className="hover:text-teal-400 transition flex items-center gap-1.5 text-slate-400 hover:translate-x-0.5 duration-150">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600" /> Turnkey Industrial IT Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Industrial Coverage Area */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 tracking-wider uppercase text-xs border-b border-slate-800 pb-2">
              Regional Industrial Coverage
            </h3>
            <p className="text-xs text-slate-400 mb-3">
              We deploy dedicated on-ground engineers throughout major industrial belts:
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <Link href="/locations/vapi" className="bg-slate-800/80 border border-slate-700/80 px-2.5 py-1.5 rounded text-slate-300 hover:text-teal-400 hover:border-teal-500/50 transition-colors">Vapi GIDC</Link>
              <Link href="/locations/silvassa" className="bg-slate-800/80 border border-slate-700/80 px-2.5 py-1.5 rounded text-slate-300 hover:text-teal-400 hover:border-teal-500/50 transition-colors">Silvassa (Piparia)</Link>
              <Link href="/locations/daman" className="bg-slate-800/80 border border-slate-700/80 px-2.5 py-1.5 rounded text-slate-300 hover:text-teal-400 hover:border-teal-500/50 transition-colors">Daman (Somnath)</Link>
              <Link href="/locations/sarigam" className="bg-slate-800/80 border border-slate-700/80 px-2.5 py-1.5 rounded text-slate-300 hover:text-teal-400 hover:border-teal-500/50 transition-colors">Sarigam GIDC</Link>
              <Link href="/locations/umargam" className="bg-slate-800/80 border border-slate-700/80 px-2.5 py-1.5 rounded text-slate-300 hover:text-teal-400 hover:border-teal-500/50 transition-colors">Umargam GIDC</Link>
              <Link href="/locations/bhilad" className="bg-slate-800/80 border border-slate-700/80 px-2.5 py-1.5 rounded text-slate-300 hover:text-teal-400 hover:border-teal-500/50 transition-colors">Bhilad Industrial</Link>
              <Link href="/locations/valsad" className="bg-slate-800/80 border border-slate-700/80 px-2.5 py-1.5 rounded text-slate-300 hover:text-teal-400 hover:border-teal-500/50 transition-colors">Valsad (Gundlav)</Link>
              <Link href="/locations" className="bg-blue-900/40 border border-blue-700/60 px-2.5 py-1.5 rounded text-teal-300 hover:text-white font-semibold transition-colors">All 7 Hubs →</Link>
            </div>
          </div>

          {/* Col 4: Contact & Office */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 tracking-wider uppercase text-xs border-b border-slate-800 pb-2">
              Direct Contact
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  {theme.address || 'NextGen IT Solution, GIDC Industrial Estate, Char Rasta, Vapi, Gujarat 396195'}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`tel:${theme.primaryPhone || '+919978598817'}`} className="hover:text-teal-300 text-slate-300 transition font-medium">
                  {theme.primaryPhone || '+91 99785 98817'}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`mailto:${theme.email || 'nextgen.itsolution@zohomail.in'}`} className="hover:text-teal-300 text-slate-300 transition">
                  {theme.email || 'nextgen.itsolution@zohomail.in'}
                </a>
              </div>
              <div className="pt-2">
                <Link
                  href="/quote"
                  className="block text-center theme-btn-primary font-semibold text-xs py-2.5 rounded-lg transition shadow-sm"
                >
                  Upload BOQ / Get Custom Quotation →
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/80 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} NextGen IT Solution. All rights reserved. Enterprise B2B IT & Security.</p>
          <div className="flex items-center space-x-6">
            <Link href="/about" className="hover:text-slate-300 transition">About</Link>
            <Link href="/services" className="hover:text-slate-300 transition">Services</Link>
            <Link href="/locations" className="hover:text-slate-300 transition">Locations</Link>
            <Link href="/resources" className="hover:text-slate-300 transition">Guides</Link>
            <Link href="/products" className="hover:text-slate-300 transition">Products</Link>
            <Link href="/admin" className="text-slate-500 hover:text-teal-400 transition">Admin CRM</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}