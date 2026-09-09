import type { Metadata } from 'next';
import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle, 
  ArrowRight, 
  PhoneCall, 
  Building, 
  HelpCircle,
  Award,
  Layers
} from 'lucide-react';
import { LOCATIONS_DATA } from '@/lib/locations';
import QuoteForm from '@/components/QuoteForm';
import { BreadcrumbSchema, FaqSchema } from '@/components/JsonLd';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return LOCATIONS_DATA.map((loc) => ({
    slug: loc.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const loc = LOCATIONS_DATA.find((l) => l.slug === params.slug);
  if (!loc) {
    return {
      title: 'Location Not Found',
    };
  }

  const title = `IT Infrastructure & CCTV Solutions in ${loc.name}`;
  const description = `${loc.fullName} industrial IT specialist. Turnkey CCTV camera installation, CAT6/CAT6A cabling, fiber optic splicing, and 24/7 SLA IT AMC with ${loc.responseTime}.`;

  return {
    title,
    description,
    keywords: [
      `IT company in ${loc.name}`,
      `CCTV installation ${loc.name}`,
      `networking contractor ${loc.name}`,
      `IT AMC company ${loc.name}`,
      `structured cabling ${loc.name}`,
      `fiber optic splicing ${loc.name}`,
      ...loc.industrialEstates.slice(0, 3),
      ...loc.keyIndustries.slice(0, 3),
    ],
    alternates: {
      canonical: `/locations/${loc.slug}`,
    },
    openGraph: {
      title: `${title} | NextGen IT Solution`,
      description,
      url: `/locations/${loc.slug}`,
      type: 'website',
      images: [
        {
          url: '/images/nextgen-logo-it-solution-3d.jpg',
          width: 1200,
          height: 630,
          alt: `${loc.name} IT Infrastructure & CCTV Solutions`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | NextGen IT Solution`,
      description,
      images: ['/images/nextgen-logo-it-solution-3d.jpg'],
    },
  };
}

export default function LocationDetailPage({ params }: Props) {
  const loc = LOCATIONS_DATA.find((l) => l.slug === params.slug);

  if (!loc) {
    notFound();
  }

  const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://nextgenitsolution.com';

  const localizedSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ITService'],
    name: `NextGen IT Solution - ${loc.name}`,
    description: loc.overview,
    url: `${BASE_URL}/locations/${loc.slug}`,
    telephone: '+919978598817',
    email: 'nextgen.itsolution@zohomail.in',
    priceRange: '₹₹ - ₹₹₹₹',
    address: {
      '@type': 'PostalAddress',
      addressLocality: loc.name,
      addressRegion: loc.districtState.includes('Gujarat') ? 'Gujarat' : 'Dadra & Nagar Haveli and Daman',
      postalCode: loc.pincode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: loc.coordinates.lat,
      longitude: loc.coordinates.lng,
    },
    areaServed: loc.industrialEstates,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localizedSchema) }}
      />
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: '/' },
          { name: 'Locations', url: '/locations' },
          { name: loc.name, url: `/locations/${loc.slug}` }
        ]} 
      />
      {loc.faqs && <FaqSchema faqs={loc.faqs} />}

      {/* Breadcrumb Bar */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500">
        <Link href="/" className="hover:text-blue-600 transition">Home</Link>
        <span>/</span>
        <Link href="/locations" className="hover:text-blue-600 transition">Locations</Link>
        <span>/</span>
        <span className="text-slate-900 font-semibold" aria-current="page">{loc.name}</span>
      </nav>

      {/* Hero Section */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm relative overflow-hidden">
        <div className="max-w-4xl space-y-5">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200">
              <MapPin className="w-3.5 h-3.5" />
              <span>{loc.districtState}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200">
              <Clock className="w-3.5 h-3.5 text-emerald-600" />
              <span>{loc.responseTime}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            IT Infrastructure & CCTV Solutions in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">{loc.name}</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            {loc.tagline}
          </p>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {loc.overview}
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <a
              href="tel:+919978598817"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-500 hover:to-teal-500 text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-md transition"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call {loc.name} Dispatch (+91 99785 98817)</span>
            </a>
            <a
              href="#quote-form"
              className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-xl transition border border-slate-300/80"
            >
              <span>Request Free Site Survey</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Two-Column Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Col: Services, Industrial Parks, Case Study, FAQs */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Industrial Parks / Zones Covered */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Building className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Industrial Estates & Zones Covered in {loc.name}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              Our engineering team conducts physical site assessments and rapid emergency breakdown visits across:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {loc.industrialEstates.map((estate, idx) => (
                <div key={idx} className="bg-white border border-slate-200/90 rounded-xl p-3.5 flex items-center gap-3 shadow-2xs">
                  <div className="w-2 h-2 rounded-full bg-teal-500 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-800 font-medium">{estate}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top Targeted Services */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-teal-600" />
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Specialized IT & Surveillance Services for {loc.name} Plants
              </h2>
            </div>

            <div className="space-y-4">
              {loc.topServices.map((srv, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 space-y-3 shadow-sm hover:border-blue-300 transition-colors">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">{srv.title}</h3>
                    <Link
                      href={`/services/${srv.slug}`}
                      className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 shrink-0 mt-1"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {srv.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Local Case Study Proof Block */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-850 text-white rounded-2xl p-6 sm:p-8 space-y-4 border border-slate-800 shadow-md">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-teal-400" />
              <span className="text-xs font-bold text-teal-300 uppercase tracking-widest">Verified Local Deployment Proof</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              {loc.localCaseStudy.title}
            </h3>
            <div className="space-y-2 text-xs sm:text-sm text-slate-300">
              <p><strong className="text-white font-semibold">Client Profile:</strong> {loc.localCaseStudy.clientType}</p>
              <p><strong className="text-white font-semibold">Project Scope:</strong> {loc.localCaseStudy.scope}</p>
              <p><strong className="text-teal-300 font-semibold">Audit Outcome:</strong> {loc.localCaseStudy.result}</p>
            </div>
          </div>

          {/* Local FAQs */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-blue-600" />
              <span>{loc.name} IT Infrastructure & CCTV FAQs</span>
            </h2>
            <div className="space-y-3">
              {loc.faqs.map((faq, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 space-y-2 shadow-sm">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">{faq.question}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Col: Quote Request Form & Emergency Callout */}
        <div className="space-y-8">
          <div id="quote-form" className="sticky top-28 space-y-6">
            <QuoteForm initialRequirement={`Inquiry for factory / commercial site in ${loc.fullName}`} />

            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-sm">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-teal-600" />
                <h3 className="text-base font-bold text-slate-900">{loc.name} Engineering Support</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Need urgent onsite repair or want an engineer to conduct a preliminary site inspection? We are stationed locally.
              </p>
              <div className="space-y-2 pt-1">
                <a 
                  href="tel:+919978598817" 
                  className="flex items-center justify-center gap-2 w-full bg-[#111827] hover:bg-slate-800 text-white text-xs font-semibold py-2.5 rounded-lg transition shadow-sm"
                >
                  <PhoneCall className="w-4 h-4 text-teal-400" />
                  <span>Call +91 99785 98817</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
