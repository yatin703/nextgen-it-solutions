import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { BookOpen, Clock, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { ARTICLES_DATA } from '@/lib/articles';
import { BreadcrumbSchema } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Industrial IT Knowledge Base & Technical Guides',
  description: 'Engineering and procurement guides for plant heads and IT directors: industrial CCTV camera selection, CAT6 vs CAT6A cabling, IT AMC checklists, and fiber optic splicing.',
  alternates: {
    canonical: '/resources',
  },
  openGraph: {
    title: 'Industrial IT & CCTV Guides | NextGen IT Solution',
    description: 'Expert technical guides on factory surveillance, structured cabling, IT AMC contracts, and fiber networks for manufacturing plants.',
    url: '/resources',
  },
};

export default function ResourcesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: '/' },
          { name: 'Resources', url: '/resources' }
        ]} 
      />

      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Industrial Technology Library</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Industrial IT & Surveillance Guides
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Practical, engineering-backed technical resources written specifically for plant heads, factory owners, purchase managers, and IT administrators across South Gujarat and the Union Territories.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {ARTICLES_DATA.map((article) => (
          <article 
            key={article.slug} 
            className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200 group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2 text-xs">
                <span className="font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-lg border border-teal-100">
                  {article.category}
                </span>
                <span className="flex items-center gap-1 text-slate-500 font-medium">
                  <Clock className="w-3 h-3 text-slate-400" />
                  <span>{article.readTime}</span>
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                <Link href={`/resources/${article.slug}`}>
                  {article.title}
                </Link>
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {article.summary}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-400 font-medium">{article.publishDate}</span>
              <Link
                href={`/resources/${article.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:text-blue-700 transition"
              >
                <span>Read Full Guide</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Need Consultation Card */}
      <div className="bg-slate-100/90 border border-slate-200 rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">Have a Specific Plant IT Architecture Question?</h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
          Our certified network administrators and security engineers offer complimentary on-site technical consultations for manufacturing plants in Vapi GIDC, Silvassa, and Daman.
        </p>
        <div className="pt-2">
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl transition shadow-md"
          >
            <span>Request Free Technical Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
