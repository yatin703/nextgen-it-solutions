import React from 'react';
import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import { INITIAL_SERVICES } from '@/lib/data';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      {/* Header */}
      <div className="border-b border-slate-200 pb-8 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
          <span>Industrial Technology Solutions</span>
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
          Complete Business & Industrial IT Services
        </h1>
        <p className="text-base text-slate-600 max-w-3xl leading-relaxed">
          Explore our complete catalog of enterprise IT infrastructure services engineered for continuous plant operations, strict data compliance, and multi-building connectivity across Vapi, Silvassa, and Daman.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {INITIAL_SERVICES.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {/* Bottom CTA Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 text-center space-y-4 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Need a Customized IT & CCTV Solution?</h2>
        <p className="text-sm text-slate-600 max-w-xl mx-auto">
          Our engineering team can visit your plant or office to conduct a free technical assessment and provide a turnkey Bill of Quantities (BOQ).
        </p>
        <Link
          href="/quote"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition text-sm shadow-md hover:shadow-lg"
        >
          <span>Request Custom Quotation</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}