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
  FileSpreadsheet,
  MapPin
} from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import ProductCard from '@/components/ProductCard';
import QuoteForm from '@/components/QuoteForm';
import HomeFeaturedProducts from '@/components/HomeFeaturedProducts';
import HorizontalCircuitWatermark from '@/components/HorizontalCircuitWatermark';
import { INITIAL_SERVICES, INITIAL_PRODUCTS } from '@/lib/data';
import { LOCATIONS_DATA } from '@/lib/locations';
import { FaqSchema } from '@/components/JsonLd';
import Hero3DIndustrialCity from '@/components/3d/Hero3DIndustrialCity';
import ServiceFloorplan3D from '@/components/3d/ServiceFloorplan3D';
import ProjectRoadmap3D from '@/components/3d/ProjectRoadmap3D';

const HOME_FAQS = [
  {
    question: "Do you provide physical site visits before submitting a quote?",
    answer: "Yes. For industrial cabling, CCTV installations, and corporate AMC contracts, our engineers visit your plant in Vapi, Silvassa, or Daman to assess cable routes, rack positions, camera angles, and electrical earthing before preparing your BOQ."
  },
  {
    question: "Can we submit our own Bill of Quantities (BOQ) or Tender specification?",
    answer: "Yes, absolutely! You can upload your PDF or Excel BOQ using our Request a Quote form. Our procurement and engineering team will provide competitive vendor pricing for the specified models."
  },
  {
    question: "What are the payment and billing terms for registered corporate accounts?",
    answer: "We provide formal GST invoices for all hardware and labor. For ongoing corporate AMC clients and pre-approved manufacturing companies, we offer flexible milestone and PO-based billing terms."
  },
  {
    question: "What is your emergency onsite response SLA for manufacturing units?",
    answer: "We guarantee a 6 to 8 hour emergency onsite response SLA across all industrial zones in Vapi GIDC, Silvassa, and Daman for AMC contract clients."
  }
];

export default function HomePage() {
  const featuredServices = INITIAL_SERVICES.slice(0, 6);
  const featuredProducts = INITIAL_PRODUCTS.slice(0, 3);

  return (
    <div className="space-y-24 pb-16">
      <FaqSchema faqs={HOME_FAQS} />
      
      {/* 1. 3D INDUSTRIAL NETWORK CITY HERO SECTION */}
      <Hero3DIndustrialCity />

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

      {/* 3. INTERACTIVE 3D SERVICE FLOORPLAN MAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServiceFloorplan3D />
      </section>

      {/* 3B. CORE SERVICES GRID (15 Services Overview) */}
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

      {/* 8. 4-STEP PROJECT EXECUTION ROADMAP (3D PROGRESSIVE STAGES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectRoadmap3D />
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

      {/* 10. REGIONAL INDUSTRIAL CORRIDORS WE SERVE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>Local Onsite Reach</span>
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Regional Industrial Corridors We Serve
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl">
              Dedicated field engineers stationed across South Gujarat and Union Territories providing guaranteed 6-8 hour emergency response.
            </p>
          </div>
          <Link
            href="/locations"
            className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 shrink-0"
          >
            <span>View All Service Zones</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {LOCATIONS_DATA.map((loc) => (
            <Link
              key={loc.slug}
              href={`/locations/${loc.slug}`}
              className="bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {loc.name}
                  </span>
                  <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-100">
                    {loc.responseTime.split(' ')[0]} {loc.responseTime.split(' ')[1]}
                  </span>
                </div>
                <div className="text-[11px] text-slate-500 font-medium">{loc.districtState}</div>
                <div className="text-[11px] text-slate-600 line-clamp-2">
                  {loc.industrialEstates.slice(0, 3).map(e => e.split(' (')[0]).join(', ')}
                </div>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-blue-600 font-semibold">
                <span>Explore {loc.name} Hub</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 11. RECENT INDUSTRIAL DEPLOYMENTS & CASE STUDIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold tracking-widest text-teal-600 uppercase flex items-center justify-center gap-1.5">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Project Proof</span>
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Recent Industrial Deployments & Case Studies
          </h2>
          <p className="text-sm text-slate-600">
            Real-world manufacturing and enterprise IT projects delivered across Vapi GIDC, Silvassa, and Daman.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-sm hover:shadow-md transition">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
              <MapPin className="w-3 h-3" />
              <span>Vapi GIDC Phase 2</span>
            </div>
            <h3 className="text-base font-bold text-slate-900">
              48-Port CAT6A LAN & 32-Ch AI CCTV
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Dual-building armored fiber link, 48 noise-shielded CAT6A drops for chemical factory floor, and 32 IP cameras with 60-day RAID storage.
            </p>
            <div className="pt-2 border-t border-slate-100 text-xs text-teal-700 font-semibold flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Full ISO 27001 audit port mapping compliance</span>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-sm hover:shadow-md transition">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
              <MapPin className="w-3 h-3" />
              <span>Silvassa (Piparia)</span>
            </div>
            <h3 className="text-base font-bold text-slate-900">
              8-Acre Textile Campus Fiber Backbone
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              2.5 km underground 12-core single-mode armored fiber connecting 4 spinning sheds with gigabit core switches and redundant link failover.
            </p>
            <div className="pt-2 border-t border-slate-100 text-xs text-teal-700 font-semibold flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Eliminated shop-floor ERP latency & dropped feeds</span>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-sm hover:shadow-md transition">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
              <MapPin className="w-3 h-3" />
              <span>Daman (Somnath)</span>
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Pharma Cleanroom LAN & Weatherproof CCTV
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Stainless steel flush-mount camera housings, zero-dust conduit cabling, and temperature-monitored server rack with ISO compliance documentation.
            </p>
            <div className="pt-2 border-t border-slate-100 text-xs text-teal-700 font-semibold flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Passed US-FDA & WHO-GMP audit with 0 observations</span>
            </div>
          </div>
        </div>
      </section>

      {/* 12. IT AMC SECTION */}
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
              We manage your complete IT ecosystem—computers, network switches, firewall gateways, CCTV storage, and servers. Our local presence guarantees a <strong>6 to 8 hour onsite response SLA</strong> in Vapi GIDC, Silvassa, and Daman.
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