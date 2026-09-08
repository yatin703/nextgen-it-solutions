import React from 'react';
import Link from 'next/link';
import { 
  Shield, 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall, 
  Network, 
  Camera, 
  Server, 
  ShieldCheck, 
  Clock, 
  Cpu, 
  Award, 
  Building2, 
  CheckCircle,
  HelpCircle,
  FileSpreadsheet
} from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import ProductCard from '@/components/ProductCard';
import QuoteForm from '@/components/QuoteForm';
import HomeFeaturedProducts from '@/components/HomeFeaturedProducts';
import RunningCircuitLogo from '@/components/RunningCircuitLogo';
import { INITIAL_SERVICES, INITIAL_PRODUCTS } from '@/lib/data';

export default function HomePage() {
  const featuredServices = INITIAL_SERVICES.slice(0, 6);
  const featuredProducts = INITIAL_PRODUCTS.slice(0, 3);

  return (
    <div className="space-y-24 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-100 via-blue-50/50 to-slate-50 border-b border-slate-200">
        {/* Ambient background glows & grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="absolute top-12 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Heading & Value Proposition (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-teal-50 via-blue-50 to-indigo-50 border border-teal-200/80 text-teal-800 text-xs font-bold tracking-wide uppercase shadow-sm">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>South Gujarat & Union Territory Industrial IT Specialists</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.35rem] font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-700">IT Infrastructure & Security</span> Solutions for Enterprises
              </h1>

              {/* Service tags pill bar */}
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                {['Industrial LAN Cabling', 'AI CCTV Surveillance', 'Servers & Storage', 'NextGen Firewalls', 'Wireless APs', '24/7 AMC Support'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-lg bg-white/90 border border-slate-200 shadow-2xs text-slate-700 font-medium">
                    ✓ {tag}
                  </span>
                ))}
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                NextGen IT Solution powers manufacturing plants, corporate offices, and institutions across <strong>Vapi, Silvassa, and Daman</strong> with mission-critical cabling, enterprise surveillance, robust servers, and SLA-backed 24/7 AMC support.
              </p>

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <Link 
                  href="/quote"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-500 hover:to-teal-500 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-blue-600/25 transition transform hover:-translate-y-0.5 text-sm uppercase tracking-wider"
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a 
                  href="tel:+919978598817"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-300/80 text-slate-800 font-bold px-6 py-3.5 rounded-xl shadow-sm transition text-sm hover:border-slate-400"
                >
                  <PhoneCall className="w-4 h-4 text-teal-600" />
                  <span>Call IT Specialist</span>
                </a>
                <a 
                  href="https://wa.me/919978598817?text=Hello%20NextGen%20IT%20Solution,%20I%20would%20like%20to%20inquire%20about%20your%20IT%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300/80 text-emerald-800 font-bold px-5 py-3.5 rounded-xl shadow-xs transition text-sm"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Quick credibility stats */}
              <div className="pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
                <div className="p-3 bg-white/70 rounded-xl border border-slate-200/70 shadow-2xs">
                  <div className="text-2xl font-extrabold text-slate-900">500+</div>
                  <div className="text-[11px] text-slate-500 font-medium">Industrial Projects</div>
                </div>
                <div className="p-3 bg-white/70 rounded-xl border border-slate-200/70 shadow-2xs">
                  <div className="text-2xl font-extrabold text-teal-700">2-4 Hrs</div>
                  <div className="text-[11px] text-slate-500 font-medium">Local Onsite SLA</div>
                </div>
                <div className="p-3 bg-white/70 rounded-xl border border-slate-200/70 shadow-2xs">
                  <div className="text-2xl font-extrabold text-blue-700">100%</div>
                  <div className="text-[11px] text-slate-500 font-medium">Industrial Grade</div>
                </div>
                <div className="p-3 bg-white/70 rounded-xl border border-slate-200/70 shadow-2xs">
                  <div className="text-2xl font-extrabold text-teal-700">10+ Years</div>
                  <div className="text-[11px] text-slate-500 font-medium">Regional Authority</div>
                </div>
              </div>

            </div>

            {/* Right Column: High-Impact 3D Brand Emblem Pedestal (5 cols) */}
            <div className="lg:col-span-5 flex justify-center relative">
              
              {/* Outer decorative ambient glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-teal-400/20 to-indigo-600/20 rounded-3xl blur-2xl transform scale-95 pointer-events-none" />

              {/* Futuristic Showcase Card */}
              <div className="w-full max-w-md bg-gradient-to-b from-[#0f172a] via-[#111c35] to-[#0a0f1d] border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl relative text-white overflow-hidden group">
                
                {/* Cyber Grid background within card */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf810_1px,transparent_1px),linear-gradient(to_bottom,#38bdf810_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none" />
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-500/25 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-teal-500/25 rounded-full blur-2xl pointer-events-none" />

                {/* Top Badge Row */}
                <div className="relative z-10 flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-[11px] font-mono font-bold text-teal-300 tracking-wider uppercase">
                      NextGen Industrial Core
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-900/60 text-blue-300 border border-blue-700/50">
                    B2B Certified
                  </span>
                </div>

                {/* Center 3D Logo Showcase with Continuous Running Circuit */}
                <div className="relative z-10 my-4 flex flex-col items-center justify-center">
                  
                  {/* Continuous Running Cyber Circuit Logo */}
                  <div className="transform hover:scale-105 transition-transform duration-500 py-2">
                    <RunningCircuitLogo size="lg" />
                  </div>

                  {/* Brand Title below Running Circuit Logo */}
                  <div className="text-center mt-3 space-y-1">
                    <div className="text-lg font-extrabold text-white tracking-tight flex items-center justify-center gap-1.5">
                      <span>NEXTGEN IT SOLUTION</span>
                      <ShieldCheck className="w-4 h-4 text-teal-400" />
                    </div>
                    <div className="text-xs text-slate-400 font-mono flex items-center justify-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                      <span>Live Circuit Active • Industrial SLA Ready</span>
                    </div>
                  </div>
                </div>

                {/* Floating Highlights Badges */}
                <div className="relative z-10 grid grid-cols-2 gap-2.5 pt-4 border-t border-slate-800/80 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                      ⚡
                    </div>
                    <div>
                      <div className="font-bold text-white text-[11px]">2-4h SLA</div>
                      <div className="text-[10px] text-slate-400">Vapi & Silvassa</div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                      🛡️
                    </div>
                    <div>
                      <div className="font-bold text-white text-[11px]">100% OEM</div>
                      <div className="text-[10px] text-slate-400">Warranty Backed</div>
                    </div>
                  </div>
                </div>

                {/* Quick Action Button at Base of Card */}
                <div className="relative z-10 mt-4">
                  <Link
                    href="/quote"
                    className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600/90 to-teal-600/90 hover:from-blue-600 hover:to-teal-600 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md transition"
                  >
                    <span>Request Turnkey Project Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. REGIONAL VALUE PROPOSITION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Local Authority</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Why Corporate & Industrial Clients in Vapi, Silvassa & Daman Choose Us
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              Unlike generic computer retailers or remote vendors, NextGen IT Solution maintains local warehousing of critical networking spares, optical splicing machinery, and dedicated on-field technicians stationed across the industrial corridor.
            </p>
          </div>
          <Link
            href="/about"
            className="shrink-0 bg-slate-50 hover:bg-slate-100 text-slate-800 font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl border border-slate-200 transition flex items-center gap-2"
          >
            <span>Learn About Our Capabilities</span>
            <ArrowRight className="w-4 h-4 text-blue-600" />
          </Link>
        </div>
      </section>

      {/* 3. CORE SERVICES GRID (15 Services Overview) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Enterprise Offerings</span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Core Business & Industrial Services
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-xl">
              From structured copper and fiber cabling to AI-powered surveillance, next-gen firewalls, and server clusters.
            </p>
          </div>
          <Link
            href="/services"
            className="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-2"
          >
            <span>View All 15 Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* 4 & 5. FEATURE SPOTLIGHT: CCTV & STRUCTURED CABLING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* CCTV Spotlight */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 space-y-6 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
              <Camera className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Industrial Surveillance</span>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">CCTV & Perimeter Security</h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Complete security coverage for plant perimeter gates, weighbridges, raw material stores, production floors, and administrative corridors with AI video analytics.
              </p>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>4K Ultra-HD IP Cameras with DarkFighter color night vision</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>AI Human & Vehicle line-crossing & perimeter intrusion alerts</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>NVR storage scaling with automated RAID backup (30–90 days)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Authorized partners: Hikvision, CP PLUS, Dahua, Honeywell</span>
              </li>
            </ul>
            <div className="pt-2 flex items-center gap-3">
              <Link 
                href="/services/cctv-surveillance" 
                className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5"
              >
                Explore CCTV Solutions <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Structured Cabling Spotlight */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 space-y-6 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700">
              <Network className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">High Speed Data Backbone</span>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">LAN, Racks & Fiber Optic Cabling</h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Standardized, certified copper and optical fiber cabling. From high-capacity 42U server rack dressing to underground armored fiber links connecting multi-building plants.
              </p>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>TIA/EIA Compliant CAT6 and CAT6A shielded cabling</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Single-mode & multi-mode armored fiber fusion splicing</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Fluke network tester certification & port mapping reports</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>L2/L3 managed switch stack and VLAN network segmentation</span>
              </li>
            </ul>
            <div className="pt-2 flex items-center gap-3">
              <Link 
                href="/services/networking-lan" 
                className="text-xs font-bold text-teal-700 hover:text-teal-800 flex items-center gap-1.5"
              >
                Explore Networking & Cabling <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 6. SERVER, FIREWALL & HARDWARE CAPABILITIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Mission Critical Hardware</span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Enterprise Servers, Firewalls & Workstations
          </h2>
          <p className="text-sm text-slate-600">
            Certified partner delivery for Dell, Sophos, Cisco, Lenovo, and HP equipment tailored for ERP and industrial workloads.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4 shadow-sm hover:shadow-md transition">
            <Server className="w-8 h-8 text-purple-600" />
            <h3 className="text-lg font-bold text-slate-900">Servers & Storage Arrays</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Dell PowerEdge & HPE rack servers, Synology NAS for automated 3-2-1 backup, RAID arrays, and high-performance Tally/ERP virtualization.
            </p>
            <div className="text-xs text-blue-600 font-semibold">Dell • HPE • Synology • QNAP</div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4 shadow-sm hover:shadow-md transition">
            <ShieldCheck className="w-8 h-8 text-emerald-600" />
            <h3 className="text-lg font-bold text-slate-900">Firewalls & Cyber Defense</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Next-Gen Firewalls (Sophos XGS, Fortinet), multi-WAN failover, Site-to-Site VPN interconnections, and ransomware defense.
            </p>
            <div className="text-xs text-blue-600 font-semibold">Sophos • Fortinet • SonicWall</div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4 shadow-sm hover:shadow-md transition">
            <Cpu className="w-8 h-8 text-blue-600" />
            <h3 className="text-lg font-bold text-slate-900">Commercial Hardware</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Enterprise desktops, CAD/CAM workstations, corporate laptops, thermal barcode printers, and online double-conversion UPS backup.
            </p>
            <div className="text-xs text-blue-600 font-semibold">HP • Lenovo • Dell • APC • Zebra</div>
          </div>

        </div>
      </section>

      {/* 7. INTERACTIVE 3D B2B PRODUCT SYSTEM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HomeFeaturedProducts />
      </section>

      {/* 8. 4-STEP PROJECT PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Structured Methodology</span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Our 4-Step Project Execution Roadmap
          </h2>
          <p className="text-sm text-slate-600">
            A systematic engineering process ensuring projects are delivered on time, within budget, and compliant with OEM standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white border border-slate-200 rounded-xl p-6 relative shadow-sm hover:shadow-md transition">
            <div className="text-4xl font-extrabold text-slate-200 mb-3 font-mono">01</div>
            <h3 className="text-base font-bold text-slate-900 mb-2">Physical Site Survey</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our certified network engineers inspect your premises, cable pathways, electrical earthing, and architectural blind spots.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 relative shadow-sm hover:shadow-md transition">
            <div className="text-4xl font-extrabold text-slate-200 mb-3 font-mono">02</div>
            <h3 className="text-base font-bold text-slate-900 mb-2">BOQ & Architecture Design</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We prepare a transparent Bill of Quantities (BOQ) with precise brand specifications, network diagrams, and quotation options.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 relative shadow-sm hover:shadow-md transition">
            <div className="text-4xl font-extrabold text-slate-200 mb-3 font-mono">03</div>
            <h3 className="text-base font-bold text-slate-900 mb-2">Certified Deployment</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Structured cable conduit routing, precision optical splicing, rack dressing, camera aiming, and firewall policy configuration.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 relative shadow-sm hover:shadow-md transition">
            <div className="text-4xl font-extrabold text-slate-200 mb-3 font-mono">04</div>
            <h3 className="text-base font-bold text-slate-900 mb-2">Fluke Audit & AMC Handover</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Cable testing reports provided for documentation. Seamless transition to our SLA-backed Annual Maintenance Support.
            </p>
          </div>

        </div>
      </section>

      {/* 9. INDUSTRIES WE SERVE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Sector Experience</span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Industries We Serve in South Gujarat
          </h2>
          <p className="text-sm text-slate-600">
            Tailored IT architectures addressing the distinct compliance and physical demands of regional manufacturing.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
          <div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-md transition">
            <div className="text-2xl mb-2">💊</div>
            <div className="text-xs font-bold text-slate-900">Pharmaceuticals</div>
            <div className="text-[11px] text-slate-500 mt-1">21 CFR Part 11 CCTV, FDA audit backups</div>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-md transition">
            <div className="text-2xl mb-2">🧵</div>
            <div className="text-xs font-bold text-slate-900">Textiles & Yarn</div>
            <div className="text-[11px] text-slate-500 mt-1">Anti-static cabling, dustproof server racks</div>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-md transition">
            <div className="text-2xl mb-2">🧪</div>
            <div className="text-xs font-bold text-slate-900">Chemicals & Dyes</div>
            <div className="text-[11px] text-slate-500 mt-1">Explosion-proof cameras, armored fiber</div>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-md transition">
            <div className="text-2xl mb-2">📦</div>
            <div className="text-xs font-bold text-slate-900">Paper & Packaging</div>
            <div className="text-[11px] text-slate-500 mt-1">Industrial barcode printers, shop-floor LAN</div>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-md transition">
            <div className="text-2xl mb-2">🏢</div>
            <div className="text-xs font-bold text-slate-900">Corporate Offices</div>
            <div className="text-[11px] text-slate-500 mt-1">High density Wi-Fi 6, Sophos firewall, Tally</div>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-md transition">
            <div className="text-2xl mb-2">🚚</div>
            <div className="text-xs font-bold text-slate-900">Logistics & Yard</div>
            <div className="text-[11px] text-slate-500 mt-1">Long-range P2P wireless, PTZ gate cameras</div>
          </div>
        </div>
      </section>

      {/* 10. IT AMC SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-900 via-slate-900 to-blue-950 border border-blue-800/60 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl text-white">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900/60 text-teal-300 border border-teal-700/60 text-xs font-bold tracking-wide uppercase">
              <Clock className="w-3.5 h-3.5" />
              <span>SLA-Backed IT Maintenance</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Prevent Costly Factory Downtime with NextGen IT AMC
            </h2>
            <p className="text-sm text-slate-200 leading-relaxed">
              We manage your complete IT ecosystem—computers, network switches, firewall gateways, CCTV storage, and servers. Our local presence guarantees a <strong>2 to 4 hour emergency onsite response SLA</strong> in Vapi GIDC, Silvassa, and Daman.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-400" />
                <span>Monthly preventive hardware & dust cleaning visits</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-400" />
                <span>Antivirus updates, OS patches & data backup audits</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-400" />
                <span>Standby loaner hardware during component repairs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-400" />
                <span>Transparent ticketing and quarterly asset health logs</span>
              </div>
            </div>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/amc"
                className="bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl transition shadow-md shadow-blue-500/20"
              >
                View AMC Contract Packages
              </Link>
              <Link
                href="/quote?service=Comprehensive%20%26%20Non-Comprehensive%20IT%20AMC"
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-medium px-6 py-3 rounded-xl border border-slate-700 transition"
              >
                Request Free AMC Site Inspection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Got Questions?</span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-600">
            Answers to common questions about our corporate services, procurement, and site visits.
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-blue-600 shrink-0" />
              Do you provide physical site visits before submitting a quote?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Yes. For industrial cabling, CCTV installations, and corporate AMC contracts, our engineers visit your plant in Vapi, Silvassa, or Daman to assess cable routes, rack positions, camera angles, and electrical earthing before preparing your BOQ.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-blue-600 shrink-0" />
              Can we submit our own Bill of Quantities (BOQ) or Tender specification?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Yes, absolutely! You can upload your PDF or Excel BOQ using our Request a Quote form. Our procurement and engineering team will provide competitive vendor pricing for the specified models.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-blue-600 shrink-0" />
              What are the payment and billing terms for registered corporate accounts?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We provide formal GST invoices for all hardware and labor. For ongoing corporate AMC clients and pre-approved manufacturing companies, we offer flexible milestone and PO-based billing terms.
            </p>
          </div>
        </div>
      </section>

      {/* 12. MASTER QUOTE REQUEST & BOQ UPLOAD SECTION */}
      <section id="quote-section" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100/80 border border-slate-200 rounded-3xl p-6 sm:p-12 shadow-sm space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Direct Procurement</span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Request Your Custom Proposal & BOQ Quote
            </h2>
            <p className="text-sm text-slate-600">
              Fill out the form below with your requirements or attach your BOQ document. A senior systems engineer will review your project and contact you.
            </p>
          </div>

          <QuoteForm />
        </div>
      </section>

    </div>
  );
}