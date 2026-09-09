'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Shield, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronDown, 
  Server, 
  Camera, 
  Network, 
  ShieldCheck, 
  Clock, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const { theme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const cleanPhone = (theme.primaryPhone || '+91 99785 98817').replace(/[^0-9]/g, '');

  return (
    <header className="w-full sticky top-0 z-50 bg-white text-slate-800 shadow-sm border-b border-slate-200">
      {/* Regional / Contact Top Bar */}
      <div className="bg-[#111827] text-slate-300 text-xs py-1.5 px-3 sm:px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">
          
          {/* Corridor text: concise on mobile, full on tablet/desktop */}
          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs min-w-0">
            <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
            <span className="truncate">
              Serving <strong className="text-white font-medium">Vapi • Silvassa • Daman • GIDC</strong>
              <span className="hidden md:inline"> • Umbergaon • Sarigam</span>
            </span>
          </div>

          {/* Quick Contact Links: clean, nowrap on mobile */}
          <div className="flex items-center gap-2.5 sm:gap-4 text-[11px] sm:text-xs shrink-0">
            <a 
              href={`tel:${theme.primaryPhone || '+919978598817'}`} 
              className="hover:text-teal-300 flex items-center gap-1 transition whitespace-nowrap font-medium text-white sm:text-slate-300"
            >
              <Phone className="w-3 h-3 text-teal-400 shrink-0" />
              <span className="whitespace-nowrap">{theme.primaryPhone || '+91 99785 98817'}</span>
            </a>
            
            <span className="text-slate-700 hidden lg:inline">|</span>
            <a 
              href={`mailto:${theme.email || 'nextgen.itsolution@zohomail.in'}`} 
              className="hover:text-teal-300 hidden lg:flex items-center gap-1 transition truncate max-w-[210px]"
            >
              <Mail className="w-3 h-3 text-teal-400 shrink-0" />
              <span className="truncate">{theme.email || 'nextgen.itsolution@zohomail.in'}</span>
            </a>

            <span className="text-slate-700 hidden sm:inline">|</span>
            <a 
              href={`https://wa.me/${cleanPhone}?text=Hello%20NextGen%20IT%20Solution,%20I%20would%20like%20to%20inquire%20about%20your%20IT%20services.`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-300 hidden sm:flex items-center gap-1 font-semibold transition whitespace-nowrap"
            >
              <MessageSquare className="w-3 h-3 shrink-0" />
              <span>WhatsApp</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-[4.25rem]">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl overflow-hidden shadow-sm group-hover:scale-105 group-hover:shadow-cyan-500/25 transition-all border border-blue-200/80 bg-gradient-to-tr from-blue-50 via-white to-cyan-50 flex items-center justify-center p-0.5 shrink-0">
              <img 
                src="/images/nextgen-logo-it-solution-3d.jpg" 
                alt="NextGen IT Solution Logo" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900 block">
                {theme.companyName ? theme.companyName.split(' ')[0] : 'NextGen'}{' '}
                <span className="theme-text-primary">
                  {theme.companyName ? theme.companyName.split(' ').slice(1).join(' ') : 'IT Solution'}
                </span>
              </span>
              <span className="text-[11px] uppercase tracking-wider text-slate-500 block font-semibold">
                Infrastructure • Security • AMC
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link href="/" className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition">
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative" onMouseEnter={() => setServicesDropdownOpen(true)} onMouseLeave={() => setServicesDropdownOpen(false)}>
              <button 
                className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 flex items-center gap-1 transition"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              >
                Services
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white border border-slate-200 rounded-xl shadow-2xl py-3 px-2 grid gap-1 animate-fadeIn z-50">
                  <Link 
                    href="/services/networking-lan" 
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition"
                  >
                    <Network className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-slate-900">Structured LAN & Cabling</div>
                      <div className="text-xs text-slate-500">CAT6/6A, Fiber splicing & Racks</div>
                    </div>
                  </Link>
                  <Link 
                    href="/services/cctv-surveillance" 
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition"
                  >
                    <Camera className="w-5 h-5 text-cyan-600 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-slate-900">CCTV & Surveillance</div>
                      <div className="text-xs text-slate-500">IP cameras, AI detection, NVR systems</div>
                    </div>
                  </Link>
                  <Link 
                    href="/services/firewall-network-security" 
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition"
                  >
                    <ShieldCheck className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-slate-900">Firewall & Cyber Security</div>
                      <div className="text-xs text-slate-500">Sophos, Fortinet, VPN, Perimeter defense</div>
                    </div>
                  </Link>
                  <Link 
                    href="/services/server-storage-solutions" 
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition"
                  >
                    <Server className="w-5 h-5 text-purple-600 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-slate-900">Server & Storage</div>
                      <div className="text-xs text-slate-500">Dell, HPE, Synology NAS & RAID</div>
                    </div>
                  </Link>
                  <Link 
                    href="/services/amc-it-support" 
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition"
                  >
                    <Clock className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-slate-900">IT AMC & Onsite Support</div>
                      <div className="text-xs text-slate-500">Annual maintenance contracts with fast SLA</div>
                    </div>
                  </Link>
                  <div className="border-t border-slate-100 mt-1 pt-2 px-2">
                    <Link href="/services" className="text-xs text-blue-600 hover:text-blue-700 font-bold flex items-center gap-1">
                      View all 15 services <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/products" className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition">
              Products
            </Link>
            <Link href="/amc" className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition">
              AMC Contracts
            </Link>
            <Link href="/about" className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition">
              About Us
            </Link>
            <Link href="/contact" className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition">
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link 
              href="/quote"
              className="theme-btn-primary font-bold text-sm px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu trigger button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link 
              href="/quote"
              className="theme-btn-primary text-xs font-bold px-3 py-2 rounded-lg"
            >
              Get Quote
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-700 hover:text-slate-900 p-2"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-xl">
          <Link 
            href="/" 
            className="block py-2.5 text-base font-semibold text-slate-800 border-b border-slate-100 hover:text-blue-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/services" 
            className="block py-2.5 text-base font-semibold text-slate-800 border-b border-slate-100 hover:text-blue-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            All Services (15 Services)
          </Link>
          <Link 
            href="/products" 
            className="block py-2.5 text-base font-semibold text-slate-800 border-b border-slate-100 hover:text-blue-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Products & Hardware
          </Link>
          <Link 
            href="/amc" 
            className="block py-2.5 text-base font-semibold text-slate-800 border-b border-slate-100 hover:text-blue-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            AMC Maintenance Plans
          </Link>
          <Link 
            href="/about" 
            className="block py-2.5 text-base font-semibold text-slate-800 border-b border-slate-100 hover:text-blue-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            About NextGen IT
          </Link>
          <Link 
            href="/contact" 
            className="block py-2.5 text-base font-semibold text-slate-800 border-b border-slate-100 hover:text-blue-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
          <div className="pt-2">
            <Link 
              href="/admin" 
              className="text-xs text-slate-500 hover:text-blue-600 font-semibold block py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              Admin CRM Portal →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}