import React from 'react';
import Link from 'next/link';
import { Clock, CheckCircle, ShieldCheck, ArrowRight, PhoneCall } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';

export default function AMCPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold uppercase tracking-wider">
          <Clock className="w-3.5 h-3.5 text-teal-600" />
          <span>Annual Maintenance Contracts</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Industrial IT AMC & Onsite SLA Support
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Ensure zero downtime for your critical production computers, ERP servers, network switches, and CCTV cameras. NextGen IT Solution provides customized Annual Maintenance Contracts with guaranteed <strong>2 to 4 hour emergency onsite response</strong> in Vapi GIDC, Silvassa, and Daman.
        </p>
      </div>

      {/* AMC Comparison Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Tier 1: Basic Desktop/Peripherals */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 space-y-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
          <div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tier 1</div>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">Non-Comprehensive AMC</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Ideal for general office computers, printers, and basic LAN setups where client supplies hardware spares as needed.
            </p>
            <div className="my-6 border-t border-slate-200 pt-4 space-y-2.5 text-xs text-slate-700">
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-600 shrink-0" /> Monthly scheduled preventive servicing</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-600 shrink-0" /> OS installation & antivirus patch management</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-600 shrink-0" /> Unlimited remote desktop ticketing</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-600 shrink-0" /> Standard 4-6 hour onsite response</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-600 shrink-0" /> Faulty part diagnosis & replacement labor</div>
            </div>
          </div>
          <Link
            href="/quote?service=Comprehensive%20%26%20Non-Comprehensive%20IT%20AMC&requirement=Quotation%20for%20Non-Comprehensive%20AMC"
            className="w-full text-center bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold py-3 rounded-lg transition"
          >
            Request Non-Comprehensive Quote
          </Link>
        </div>

        {/* Tier 2: Comprehensive Industrial */}
        <div className="bg-gradient-to-b from-blue-50/70 to-white border-2 border-blue-600 rounded-2xl p-8 space-y-6 flex flex-col justify-between relative shadow-lg">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
            Most Popular for Factories
          </div>
          <div>
            <div className="text-xs font-bold text-blue-700 uppercase tracking-wider">Tier 2</div>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">Comprehensive AMC</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              All-inclusive hardware replacement and service support for continuous manufacturing and corporate environments.
            </p>
            <div className="my-6 border-t border-blue-200 pt-4 space-y-2.5 text-xs text-slate-800">
              <div className="flex items-center gap-2 font-medium"><CheckCircle className="w-4 h-4 text-teal-600 shrink-0" /> All service labor and spare parts included</div>
              <div className="flex items-center gap-2 font-medium"><CheckCircle className="w-4 h-4 text-teal-600 shrink-0" /> Standby loaner desktop/switch during repair</div>
              <div className="flex items-center gap-2 font-medium"><CheckCircle className="w-4 h-4 text-teal-600 shrink-0" /> 2 to 4 hour emergency onsite response SLA</div>
              <div className="flex items-center gap-2 font-medium"><CheckCircle className="w-4 h-4 text-teal-600 shrink-0" /> Fortnightly physical dust cleaning & heat sink checks</div>
              <div className="flex items-center gap-2 font-medium"><CheckCircle className="w-4 h-4 text-teal-600 shrink-0" /> Network continuity & Wi-Fi coverage maintenance</div>
            </div>
          </div>
          <Link
            href="/quote?service=Comprehensive%20%26%20Non-Comprehensive%20IT%20AMC&requirement=Quotation%20for%20Comprehensive%20Industrial%20AMC"
            className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-3 rounded-lg shadow-md hover:shadow-lg transition"
          >
            Request Comprehensive AMC Quote
          </Link>
        </div>

        {/* Tier 3: Mission-Critical Server & Facility */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 space-y-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
          <div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tier 3</div>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">Facility Management (FMS)</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Dedicated full-time resident IT engineer deployed directly at your factory or corporate campus.
            </p>
            <div className="my-6 border-t border-slate-200 pt-4 space-y-2.5 text-xs text-slate-700">
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-600 shrink-0" /> Full-time dedicated resident engineer on-site</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-600 shrink-0" /> Immediate 0-minute first response on shop floor</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-600 shrink-0" /> Server, ERP, Firewall & CCTV daily health checks</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-600 shrink-0" /> Automated daily cloud & local backup verification</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-600 shrink-0" /> Senior L3 network architect escalation support</div>
            </div>
          </div>
          <Link
            href="/quote?service=Comprehensive%20%26%20Non-Comprehensive%20IT%20AMC&requirement=Quotation%20for%20Resident%20FMS%20Engineer"
            className="w-full text-center bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold py-3 rounded-lg transition"
          >
            Request FMS Proposal
          </Link>
        </div>

      </div>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto pt-8">
        <QuoteForm initialService="Comprehensive & Non-Comprehensive IT AMC" />
      </div>

    </div>
  );
}