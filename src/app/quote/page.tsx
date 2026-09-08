'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import QuoteForm from '@/components/QuoteForm';
import { FileText } from 'lucide-react';

function QuoteContent() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get('service') || '';
  const initialRequirement = searchParams.get('requirement') || '';

  return (
    <QuoteForm 
      initialService={initialService}
      initialRequirement={initialRequirement}
    />
  );
}

export default function QuotePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold uppercase tracking-wider">
          <FileText className="w-3.5 h-3.5 text-teal-600" />
          <span>Official RFQ & BOQ Portal</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Request a Quotation or Submit BOQ
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          Upload your project Bill of Quantities (PDF/Excel) or detail your hardware and service requirements below. We provide formal corporate quotes with transparent line-item pricing.
        </p>
      </div>

      <Suspense fallback={<div className="text-center py-12 text-slate-500 text-sm">Loading quote portal...</div>}>
        <QuoteContent />
      </Suspense>
    </div>
  );
}