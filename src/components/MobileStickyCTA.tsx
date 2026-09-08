'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, FileText } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function MobileStickyCTA() {
  const { theme } = useTheme();
  const cleanPhone = (theme.primaryPhone || '+91 99785 98817').replace(/[^0-9]/g, '');

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2 lg:hidden shadow-lg">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        <a 
          href={`tel:${theme.primaryPhone || '+919978598817'}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 hover:bg-slate-100 active:bg-slate-200 transition"
        >
          <Phone className="w-4 h-4 text-blue-600 mb-0.5" />
          <span className="text-[11px] font-semibold">Call Now</span>
        </a>

        <a 
          href={`https://wa.me/${cleanPhone}?text=Hello%20NextGen%20IT%20Solution,%20I%20would%20like%20to%20request%20a%20quotation%20for%20my%20factory/office.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-teal-50 border border-teal-200 text-teal-700 hover:bg-teal-100 active:bg-teal-200 transition"
        >
          <MessageSquare className="w-4 h-4 text-teal-600 mb-0.5" />
          <span className="text-[11px] font-semibold">WhatsApp</span>
        </a>

        <Link 
          href="/quote"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg theme-btn-primary font-bold active:opacity-90 transition shadow-sm"
        >
          <FileText className="w-4 h-4 mb-0.5" />
          <span className="text-[11px]">Get Quote</span>
        </Link>
      </div>
    </div>
  );
}