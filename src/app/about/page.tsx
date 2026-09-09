import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { Shield, CheckCircle2, Award, Users, MapPin, ArrowRight } from 'lucide-react';
import { BreadcrumbSchema } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'About Us | 10+ Years Industrial IT Authority in Vapi, Silvassa, Daman',
  description: 'NextGen IT Solution is South Gujarat and UT’s trusted turnkey IT infrastructure partner, empowering manufacturing plants, pharma units, and corporate offices with certified IT solutions.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About NextGen IT Solution | Industrial IT Infrastructure Specialist',
    description: '10+ years of certified IT engineering, local spares warehousing, and 2-4 hr SLA support across Vapi, Silvassa, and Daman.',
    url: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: '/' },
          { name: 'About Us', url: '/about' }
        ]} 
      />
      
      {/* Hero */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold uppercase tracking-wider">
          <Shield className="w-3.5 h-3.5 text-teal-600" />
          <span>About NextGen IT Solution</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Empowering Industrial Infrastructure Across South Gujarat
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Founded to bridge the gap between high-end corporate IT standards and rugged industrial requirements, NextGen IT Solution is the premier turnkey technology and surveillance partner for manufacturing plants, packaging mills, pharmaceutical units, and corporate offices.
        </p>
      </div>

      {/* Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white border border-slate-200 rounded-2xl p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Certified Engineering</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Our team comprises certified network administrators, fiber optic technicians, and CCTV surveillance architects who adhere strictly to TIA/EIA industrial standards.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
            <MapPin className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Local Warehousing & Spares</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            With centralized facilities in Vapi, we maintain immediate stocks of cables, patch cords, standby switches, and camera parts, allowing rapid turnaround without metropolitan shipping delays.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Client-Centric SLAs</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            We operate with strict Service Level Agreements. When critical systems like weighbridge computers or production servers encounter issues, an engineer arrives onsite within 2 to 4 hours.
          </p>
        </div>
      </div>

      {/* Regional Focus */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 space-y-6 shadow-sm">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Our Regional Operating Footprint
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed max-w-4xl mt-2">
            We maintain dedicated field teams servicing key industrial belts across Gujarat and Union Territories:
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs text-slate-600">
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 hover:border-teal-400 transition-colors">
            <strong className="text-blue-700 block text-sm mb-1 font-semibold">Vapi GIDC</strong>
            <span>Phases I, II, III, IV, Morai, Balitha, and Chanod industrial areas.</span>
          </div>
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 hover:border-teal-400 transition-colors">
            <strong className="text-teal-700 block text-sm mb-1 font-semibold">Silvassa (UT of DNH)</strong>
            <span>Piparia Industrial Estate, Amli, Masat, Rakholi, Sayli, and Naroli.</span>
          </div>
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 hover:border-teal-400 transition-colors">
            <strong className="text-blue-700 block text-sm mb-1 font-semibold">Daman (UT of DNH & DD)</strong>
            <span>Kachigam Industrial Area, Somnath, Dabhel, and Ringanwada.</span>
          </div>
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 hover:border-teal-400 transition-colors">
            <strong className="text-teal-700 block text-sm mb-1 font-semibold">Sarigam GIDC</strong>
            <span>Chemical & engineering units across Sarigam industrial zone.</span>
          </div>
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 hover:border-teal-400 transition-colors">
            <strong className="text-blue-700 block text-sm mb-1 font-semibold">Umbergaon GIDC</strong>
            <span>Engineering, plastic, and textile manufacturing plants.</span>
          </div>
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 hover:border-teal-400 transition-colors">
            <strong className="text-teal-700 block text-sm mb-1 font-semibold">Bhilad & Valsad</strong>
            <span>Industrial corridors across Bhilad, Pardi, and Gundlav.</span>
          </div>
        </div>
      </div>

    </div>
  );
}