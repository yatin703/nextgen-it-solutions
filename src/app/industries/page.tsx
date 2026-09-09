import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { Factory, ArrowRight, ShieldCheck, CheckCircle2, FlaskConical, Pill, Layers, Package, Cpu } from 'lucide-react';
import { INDUSTRIES_DATA } from '@/lib/industries';
import { BreadcrumbSchema } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Industry-Specific IT & Surveillance Solutions | South Gujarat & UT',
  description: 'Specialized IT infrastructure and CCTV solutions tailored for Pharma (FDA/GMP), Chemical (ATEX), Textile, Packaging, and Manufacturing plants across Vapi GIDC, Silvassa, and Daman.',
  alternates: {
    canonical: '/industries',
  },
  openGraph: {
    title: 'Industrial IT Solutions by Sector | NextGen IT Solution',
    description: 'Explore custom IT architectures designed for the unique physical hazards and audit standards of South Gujarat industries.',
    url: '/industries',
  },
};

const getIndustryIcon = (slug: string) => {
  switch (slug) {
    case 'pharmaceutical': return <Pill className="w-6 h-6 text-teal-600" />;
    case 'chemical': return <FlaskConical className="w-6 h-6 text-amber-600" />;
    case 'textile': return <Layers className="w-6 h-6 text-blue-600" />;
    case 'packaging': return <Package className="w-6 h-6 text-indigo-600" />;
    case 'manufacturing': return <Cpu className="w-6 h-6 text-emerald-600" />;
    default: return <Factory className="w-6 h-6 text-blue-600" />;
  }
};

export default function IndustriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: '/' },
          { name: 'Industries', url: '/industries' }
        ]} 
      />

      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
          <Factory className="w-3.5 h-3.5" />
          <span>Sector-Tailored Engineering</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Industrial IT Solutions Engineered for Your Sector
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Standard corporate IT hardware fails in factories. We design ruggedized network cabling, explosion-proof surveillance, dustproof server racks, and compliance backup architectures tailored to the exact physical hazards and regulatory audits of your industry.
        </p>
      </div>

      {/* Industries Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {INDUSTRIES_DATA.map((ind) => (
          <div 
            key={ind.slug} 
            className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200 group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                {getIndustryIcon(ind.slug)}
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {ind.name}
                </h2>
                <p className="text-xs text-slate-500 mt-1 font-medium">{ind.tagline}</p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                {ind.overview}
              </p>

              {/* Compliance & Audit Badges */}
              <div className="pt-2 border-t border-slate-100 space-y-2">
                <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">Compliance Standards:</span>
                <div className="space-y-1 text-xs text-slate-600">
                  {ind.complianceAndAudits.slice(0, 3).map((comp, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span className="truncate">{comp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <Link
                href={`/industries/${ind.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:text-blue-700 transition"
              >
                <span>View {ind.name.split(' ')[0]} Architecture</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Audit Consultation CTA */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">Audit Preparation</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Preparing for an Upcoming IT or Quality Audit?</h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Our engineers provide physical site walkthroughs, Fluke cable certification binders, server RAID integrity reports, and CCTV retention audits for plants in Vapi, Silvassa, and Daman.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg transition"
          >
            <span>Book Free Plant Audit Walkthrough</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
