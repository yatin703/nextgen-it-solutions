import type { Metadata } from 'next';
import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  Factory, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  PhoneCall, 
  HelpCircle,
  FileCheck,
  Cpu,
  Layers,
  Pill,
  FlaskConical,
  Package,
  Wrench,
  Clock
} from 'lucide-react';
import { INDUSTRIES_DATA } from '@/lib/industries';
import QuoteForm from '@/components/QuoteForm';
import { BreadcrumbSchema, FaqSchema } from '@/components/JsonLd';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return INDUSTRIES_DATA.map((ind) => ({
    slug: ind.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const ind = INDUSTRIES_DATA.find((item) => item.slug === params.slug);
  if (!ind) {
    return {
      title: 'Industry Solution Not Found',
    };
  }

  const title = `${ind.name} IT Infrastructure & CCTV Solutions | South Gujarat & UT`;
  const description = `${ind.tagline}. Turnkey industrial networking, ruggedized surveillance, and audit-ready server infrastructure for plants in Vapi GIDC, Silvassa, and Daman.`;

  return {
    title,
    description,
    keywords: [
      `${ind.name} IT solutions`,
      `${ind.name} CCTV installation Vapi`,
      `${ind.name} structured cabling`,
      `cleanroom IT compliance Vapi`,
      `industrial networking ${ind.name}`,
      'Vapi GIDC plant IT setup',
      'Silvassa industrial IT AMC'
    ],
    alternates: {
      canonical: `/industries/${ind.slug}`,
    },
    openGraph: {
      title: `${title} | NextGen IT Solution`,
      description,
      url: `/industries/${ind.slug}`,
      type: 'website',
      images: [
        {
          url: '/images/nextgen-logo-it-solution-3d.jpg',
          width: 1200,
          height: 630,
          alt: `${ind.name} Industrial IT Solutions`,
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

export default function IndustryDetailPage({ params }: Props) {
  const ind = INDUSTRIES_DATA.find((item) => item.slug === params.slug);

  if (!ind) {
    notFound();
  }

  const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://nextgenitsolution.com';

  const industrySchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: `Industrial IT Infrastructure for ${ind.name}`,
    name: `NextGen IT Solution - ${ind.name} IT & Surveillance`,
    description: ind.overview,
    provider: {
      '@type': 'LocalBusiness',
      name: 'NextGen IT Solution',
      telephone: '+919978598817',
      email: 'nextgen.itsolution@zohomail.in',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Vapi',
        addressRegion: 'Gujarat',
        addressCountry: 'IN'
      }
    },
    areaServed: ['Vapi', 'Silvassa', 'Daman', 'Sarigam', 'Umbergaon', 'Valsad'],
    url: `${BASE_URL}/industries/${ind.slug}`
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(industrySchema) }}
      />
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: '/' },
          { name: 'Industries', url: '/industries' },
          { name: ind.name, url: `/industries/${ind.slug}` }
        ]} 
      />
      {ind.faqs && <FaqSchema faqs={ind.faqs} />}

      {/* Breadcrumb Bar */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500">
        <Link href="/" className="hover:text-blue-600 transition">Home</Link>
        <span>/</span>
        <Link href="/industries" className="hover:text-blue-600 transition">Industries</Link>
        <span>/</span>
        <span className="text-slate-900 font-semibold" aria-current="page">{ind.name}</span>
      </nav>

      {/* Hero Section */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm relative overflow-hidden">
        <div className="max-w-4xl space-y-5">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200">
              {getIndustryIcon(ind.slug)}
              <span>Sector Architecture</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200">
              <Clock className="w-3.5 h-3.5 text-emerald-600" />
              <span>6 to 8 Hour Onsite SLA in GIDC</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {ind.heroTitle}
          </h1>

          <p className="text-sm sm:text-base text-blue-700 font-semibold leading-relaxed">
            {ind.tagline}
          </p>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
            {ind.overview}
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <a
              href="tel:+919978598817"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-500 hover:to-teal-500 text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-md transition"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Direct Engineering Desk (+91 99785 98817)</span>
            </a>
            <a
              href="#audit-quote"
              className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-xl transition border border-slate-300/80"
            >
              <span>Schedule Plant IT Site Survey</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main 2-Column Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Column: Challenges, Solutions, Compliance, FAQs */}
        <div className="lg:col-span-2 space-y-12">

          {/* Section 1: Critical Hazards & Operational Challenges */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Critical Hazards & IT Challenges in {ind.name}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              Commercial-grade IT products routinely suffer from short circuits, optical degradation, and data loss in high-stress plant environments.
            </p>

            <div className="grid grid-cols-1 gap-4 pt-2">
              {ind.criticalChallenges.map((challenge, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-base">
                    <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 text-xs flex items-center justify-center font-extrabold shrink-0">
                      0{idx + 1}
                    </span>
                    <span>{challenge.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                    {challenge.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Tailored Technical Solutions with Specs */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Wrench className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Engineered Solutions Built for {ind.name}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              Each component is specified to withstand the physical realities of your production floor while satisfying strict regulatory audits.
            </p>

            <div className="space-y-6 pt-2">
              {ind.tailoredSolutions.map((sol, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      {sol.title}
                    </h3>
                    <span className="px-2.5 py-1 rounded bg-blue-50 text-blue-700 text-[11px] font-bold uppercase tracking-wider shrink-0">
                      Engineered Spec
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {sol.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-2">
                      Technical Specifications:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {sol.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                          <span className="truncate">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Compliance & Audit Standards */}
          <div className="space-y-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-2 text-teal-400">
              <FileCheck className="w-5 h-5" />
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Compliance & Audit Verifications
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-300">
              Our installations are pre-validated to pass third-party, statutory, and corporate safety inspections without non-conformities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {ind.complianceAndAudits.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 bg-slate-800/80 border border-slate-700/60 p-3 rounded-xl text-xs sm:text-sm text-slate-200">
                  <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Recommended Core Services */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Recommended Services for {ind.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {ind.recommendedServices.map((rec, idx) => (
                <Link
                  key={idx}
                  href={`/services/${rec.slug}`}
                  className="bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition flex flex-col justify-between group"
                >
                  <div className="space-y-2">
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {rec.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {rec.description}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center gap-1 text-[11px] font-bold text-blue-600">
                    <span>Explore Service</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Section 5: Industry FAQs */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Frequently Asked Technical Questions
              </h2>
            </div>
            <div className="space-y-3 pt-2">
              {ind.faqs.map((faq, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 space-y-2">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    {faq.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 6: Other Industries Navigation */}
          <div className="pt-8 border-t border-slate-200 space-y-4">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Explore Solutions for Other Industrial Sectors
            </h3>
            <div className="flex flex-wrap gap-2">
              {INDUSTRIES_DATA.filter((item) => item.slug !== ind.slug).map((other) => (
                <Link
                  key={other.slug}
                  href={`/industries/${other.slug}`}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-xs font-semibold text-slate-700 transition"
                >
                  <span>{other.name}</span>
                  <ArrowRight className="w-3 h-3 text-slate-400" />
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Sticky Quote Form & SLA Card */}
        <div className="space-y-6">
          <div id="audit-quote" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">
              Request Plant IT Survey
            </h2>
            <p className="text-xs text-slate-500 mb-6">
              Our South Gujarat industrial engineers will assess your plant layout, cable pathways, and camera requirements.
            </p>
            <QuoteForm 
              initialService={`Turnkey IT for ${ind.name}`} 
              initialRequirement={`We require an onsite assessment for our ${ind.name} facility regarding cabling, surveillance, and server setup.`}
            />
          </div>

          {/* Rapid Response & Credentials Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4 text-xs text-slate-600">
            <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              <span>NextGen Verified Capabilities</span>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 mt-0.5 shrink-0" />
                <span><strong>50+ Industrial Projects</strong> delivered across Vapi, Silvassa, Daman & Sarigam.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 mt-0.5 shrink-0" />
                <span><strong>5+ Years</strong> dedicated plant engineering & maintenance experience.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 mt-0.5 shrink-0" />
                <span><strong>6 to 8 Hour Onsite SLA</strong> for active AMC industrial clients.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 mt-0.5 shrink-0" />
                <span><strong>Fluke Calibrated Testing</strong> provided with every project handover.</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
