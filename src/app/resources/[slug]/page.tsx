import type { Metadata } from 'next';
import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  BookOpen, 
  Clock, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle, 
  PhoneCall, 
  ShieldCheck,
  MapPin,
  Layers
} from 'lucide-react';
import { ARTICLES_DATA } from '@/lib/articles';
import { LOCATIONS_DATA } from '@/lib/locations';
import { INITIAL_SERVICES } from '@/lib/data';
import { BreadcrumbSchema, FaqSchema } from '@/components/JsonLd';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return ARTICLES_DATA.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = ARTICLES_DATA.find((a) => a.slug === params.slug);
  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: article.title,
    description: article.metaDescription,
    keywords: article.keywords,
    alternates: {
      canonical: `/resources/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} | NextGen IT Solution`,
      description: article.metaDescription,
      url: `/resources/${article.slug}`,
      type: 'article',
      images: [
        {
          url: '/images/nextgen-logo-it-solution-3d.jpg',
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.title} | NextGen IT Solution`,
      description: article.metaDescription,
      images: ['/images/nextgen-logo-it-solution-3d.jpg'],
    },
  };
}

export default function ArticleDetailPage({ params }: Props) {
  const article = ARTICLES_DATA.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const relatedService = INITIAL_SERVICES.find((s) => s.slug === article.relatedServiceSlug);
  const relatedLocations = LOCATIONS_DATA.filter((l) => article.relatedLocationSlugs.includes(l.slug));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Schemas */}
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: '/' },
          { name: 'Resources', url: '/resources' },
          { name: article.title, url: `/resources/${article.slug}` }
        ]} 
      />
      {article.faqs && <FaqSchema faqs={article.faqs} />}

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500">
        <Link href="/" className="hover:text-blue-600 transition">Home</Link>
        <span>/</span>
        <Link href="/resources" className="hover:text-blue-600 transition">Resources</Link>
        <span>/</span>
        <span className="text-slate-900 font-semibold truncate max-w-[280px] sm:max-w-md" aria-current="page">
          {article.title}
        </span>
      </nav>

      {/* Article Header */}
      <header className="space-y-4 border-b border-slate-200 pb-8">
        <div className="flex items-center gap-2 text-xs">
          <span className="font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-lg border border-teal-100">
            {article.category}
          </span>
          <span className="text-slate-400">•</span>
          <span className="flex items-center gap-1 text-slate-500 font-medium">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>{article.readTime}</span>
          </span>
          <span className="text-slate-400">•</span>
          <span className="text-slate-500">{article.publishDate}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {article.title}
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium bg-slate-50 border border-slate-200/80 rounded-2xl p-5">
          {article.summary}
        </p>
      </header>

      {/* Article Body Sections */}
      <div className="space-y-10 text-slate-700 leading-relaxed">
        {article.content.map((sec, idx) => (
          <section key={idx} className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              {sec.heading}
            </h2>

            {sec.paragraphs.map((p, pIdx) => (
              <p key={pIdx} className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {p}
              </p>
            ))}

            {sec.bulletPoints && (
              <ul className="space-y-2.5 pt-1 pl-1">
                {sec.bulletPoints.map((bp, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                    <span>{bp}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      {/* Related Service Anchor */}
      {relatedService && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-3 shadow-sm">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-blue-600" />
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Related Service Offering</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900">{relatedService.title}</h3>
          <p className="text-xs sm:text-sm text-slate-600">{relatedService.shortDesc}</p>
          <div className="pt-2">
            <Link
              href={`/services/${relatedService.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition"
            >
              <span>Explore {relatedService.title} Specifications</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}

      {/* Related Industrial Locations */}
      {relatedLocations.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-teal-600" />
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Available in Industrial Corridors:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {relatedLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="text-xs font-medium bg-slate-100 hover:bg-teal-50 hover:text-teal-700 border border-slate-200 px-3.5 py-1.5 rounded-lg transition"
              >
                📍 {loc.name} GIDC & Industrial Belt
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* FAQs */}
      {article.faqs && article.faqs.length > 0 && (
        <div className="space-y-4 pt-6 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-blue-600" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {article.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 space-y-2 shadow-sm">
                <h3 className="text-sm sm:text-base font-bold text-slate-900">{faq.question}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom CTA Box */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <h3 className="text-xl sm:text-2xl font-extrabold text-white">Need Onsite Guidance for Your Plant?</h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Our engineers visit facilities across Vapi GIDC, Silvassa, and Daman for complimentary assessments.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl transition shadow-md"
          >
            <span>Request Free Site Visit</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
