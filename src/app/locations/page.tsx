import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { MapPin, ShieldCheck, Clock, ArrowRight, Building, PhoneCall, CheckCircle } from 'lucide-react';
import { LOCATIONS_DATA } from '@/lib/locations';
import { BreadcrumbSchema } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Regional Industrial Corridors & Service Locations',
  description: 'Explore NextGen IT Solution service hubs across South Gujarat & UT: Vapi GIDC, Silvassa, Daman, Sarigam, Umargam, Bhilad, and Valsad. Rapid 1-4 hr onsite emergency response.',
  alternates: {
    canonical: '/locations',
  },
  openGraph: {
    title: 'Industrial IT Service Locations | NextGen IT Solution',
    description: 'Onsite IT infrastructure, CCTV, structured cabling, and AMC support across Vapi, Silvassa, Daman, and South Gujarat industrial corridors.',
    url: '/locations',
  },
};

export default function LocationsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: '/' },
          { name: 'Locations', url: '/locations' }
        ]} 
      />

      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-teal-600" />
          <span>Regional Service Network</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Industrial IT & CCTV Service Corridors
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Headquartered in <strong>Vapi GIDC</strong> with active engineering dispatch across South Gujarat and the Union Territories of Dadra & Nagar Haveli and Daman. We guarantee <strong>1 to 4 hour emergency onsite response</strong> for manufacturing plants and commercial enterprises.
        </p>
      </div>

      {/* Locations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {LOCATIONS_DATA.map((loc) => (
          <div 
            key={loc.slug} 
            className="bg-white border border-slate-200 rounded-2xl p-7 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200 group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-lg border border-teal-100 flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-teal-600" />
                  <span>{loc.responseTime}</span>
                </span>
                <span className="text-[11px] text-slate-500 font-medium">{loc.districtState}</span>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {loc.fullName}
                </h2>
                <p className="text-xs text-slate-500 mt-1 font-medium">{loc.tagline}</p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                {loc.overview}
              </p>

              {/* Industrial Zones Tag Clouds */}
              <div className="pt-2 border-t border-slate-100 space-y-2">
                <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">Key Industrial Zones:</span>
                <div className="flex flex-wrap gap-1.5">
                  {loc.industrialEstates.slice(0, 4).map((estate, idx) => (
                    <span key={idx} className="text-[11px] bg-slate-50 border border-slate-200 text-slate-700 px-2 py-0.5 rounded-md font-medium">
                      {estate.split(' (')[0]}
                    </span>
                  ))}
                  {loc.industrialEstates.length > 4 && (
                    <span className="text-[11px] text-blue-600 font-semibold self-center">
                      +{loc.industrialEstates.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <Link
                href={`/locations/${loc.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:text-blue-700 transition"
              >
                <span>View {loc.name} Services & SLA</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Emergency Onsite Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">Rapid Engineering Dispatch</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Need an IT Engineer at Your Plant Today?</h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Our certified field technicians are on the road daily across Vapi GIDC, Silvassa, Daman, and Sarigam. Contact our dispatch desk for emergency support or site surveys.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <a
            href="tel:+919978598817"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg transition"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call +91 99785 98817</span>
          </a>
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-medium px-6 py-3.5 rounded-xl transition"
          >
            <span>Request Site Survey</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
