import type { Metadata } from 'next';
import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  CheckCircle, 
  ArrowLeft, 
  Layers, 
  ShieldCheck, 
  Settings, 
  Building, 
  HelpCircle, 
  PhoneCall, 
  MessageSquare,
  FileSpreadsheet,
  MapPin
} from 'lucide-react';
import { INITIAL_SERVICES } from '@/lib/data';
import QuoteForm from '@/components/QuoteForm';
import { BreadcrumbSchema, FaqSchema, ServiceSchema } from '@/components/JsonLd';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return INITIAL_SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = INITIAL_SERVICES.find((s) => s.slug === params.slug);
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  const title = `${service.title} in Vapi, Silvassa & Daman`;
  const description = `${service.shortDesc} SLA-backed 6-8 hr local onsite support for industrial plants across Vapi GIDC, Silvassa, Daman, Umbergaon & Sarigam.`;

  return {
    title,
    description,
    keywords: [
      `${service.title} Vapi`,
      `${service.title} Silvassa`,
      `${service.title} Daman`,
      `${service.title} GIDC`,
      `${service.category} contractor Vapi`,
      'industrial IT solutions South Gujarat',
      '6-8 hour onsite IT support',
      ...service.features.slice(0, 3),
    ],
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/services/${service.slug}`,
      type: 'website',
      images: [
        {
          url: '/images/nextgen-logo-it-solution-3d.jpg',
          width: 1200,
          height: 630,
          alt: `${service.title} - NextGen IT Solution`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/nextgen-logo-it-solution-3d.jpg'],
    },
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = INITIAL_SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Rich Result SEO Schemas */}
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: service.title, url: `/services/${service.slug}` }
        ]} 
      />
      <ServiceSchema 
        name={service.title}
        description={service.shortDesc}
        category={service.category}
        slug={service.slug}
      />
      {service.faqs && <FaqSchema faqs={service.faqs} />}

      {/* Breadcrumbs & Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500">
        <Link href="/" className="hover:text-blue-600 transition">Home</Link>
        <span>/</span>
        <Link href="/services" className="hover:text-blue-600 transition">Services</Link>
        <span>/</span>
        <span className="text-slate-900 font-semibold" aria-current="page">{service.title}</span>
      </nav>

      {/* Service Hero */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-sm">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold uppercase tracking-wider border border-teal-200">
            <span>{service.category} Service</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            {service.title}
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            {service.shortDesc}
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <a 
              href="#quote-form" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition shadow-md hover:shadow-lg"
            >
              Get BOQ Quote for this Service
            </a>
            <a 
              href={`https://wa.me/919978598817?text=Hello%20NextGen%20IT,%20I%20have%20an%20inquiry%20regarding%20${encodeURIComponent(service.title)}.`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-teal-50 hover:bg-teal-100 text-teal-800 border border-teal-200 font-semibold px-6 py-3 rounded-xl text-sm flex items-center gap-2 transition"
            >
              <MessageSquare className="w-4 h-4 text-teal-600" />
              <span>Discuss on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left 2 Cols: Service Details */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Overview */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Layers className="w-6 h-6 text-blue-600" />
              Overview & Scope
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
              {service.overview}
            </p>
          </div>

          {/* Key Capabilities */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-teal-700" />
              What We Deliver
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.features.map((feat, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-xl p-4 flex items-start gap-3 shadow-sm hover:border-teal-400 transition-colors">
                  <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-800 font-medium">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Components / Hardware Used */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Settings className="w-6 h-6 text-indigo-600" />
              Components & Hardware Brands
            </h2>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <ul className="space-y-2.5">
                {service.components.map((comp, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                    <div className="w-2 h-2 rounded-full bg-blue-600" />
                    <span>{comp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* How We Work */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Building className="w-6 h-6 text-amber-600" />
              Our Implementation Process
            </h2>
            <div className="space-y-3">
              {service.process.map((step, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-4 shadow-sm hover:border-blue-300 transition-colors">
                  <span className="w-8 h-8 rounded-lg bg-blue-50 font-mono font-bold text-blue-700 flex items-center justify-center shrink-0 border border-blue-100">
                    0{idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Industries Served */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Targeted Industrial Environments</h2>
            <div className="flex flex-wrap gap-2">
              {service.industries.map((ind, idx) => (
                <span key={idx} className="bg-slate-100 border border-slate-200 text-slate-700 text-xs px-3.5 py-2 rounded-lg font-medium">
                  {ind}
                </span>
              ))}
            </div>
          </div>

          {/* Regional Industrial Coverage & Local SLA (Local SEO Anchor) */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 text-white rounded-2xl p-6 space-y-4 border border-slate-700 shadow-md">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-teal-400" />
              <h2 className="text-base sm:text-lg font-bold text-white">Local Industrial Coverage & 6-8 Hr Onsite SLA</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Our certified engineering teams are stationed locally to provide rapid site surveys, deployment, and emergency hardware replacement across:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
              <div className="bg-slate-800/90 rounded-xl p-3 border border-slate-700">
                <div className="font-bold text-teal-300">Vapi Industrial Hub</div>
                <div className="text-slate-400 mt-1">GIDC Phase 1, 2, 3 & 4, Morai, Koparli, Balitha</div>
              </div>
              <div className="bg-slate-800/90 rounded-xl p-3 border border-slate-700">
                <div className="font-bold text-teal-300">Silvassa & UT Industrial Zones</div>
                <div className="text-slate-400 mt-1">Piparia, Masat, Sayli, Amli, Kharadpada, Rakholi</div>
              </div>
              <div className="bg-slate-800/90 rounded-xl p-3 border border-slate-700">
                <div className="font-bold text-teal-300">Daman Industrial Corridor</div>
                <div className="text-slate-400 mt-1">Somnath, Kachigam, Dabhel, Ringanwada, Bhimpore</div>
              </div>
              <div className="bg-slate-800/90 rounded-xl p-3 border border-slate-700">
                <div className="font-bold text-teal-300">Border Industrial Estates</div>
                <div className="text-slate-400 mt-1">Umbergaon GIDC & Sarigam GIDC Manufacturing Units</div>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-blue-600" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 space-y-2 shadow-sm">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">{faq.question}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Col: Quote Request Form & Contact Box */}
        <div className="space-y-8">
          <div id="quote-form" className="sticky top-28 space-y-6">
            <QuoteForm initialService={service.title} />

            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-sm">
              <h3 className="text-base font-bold text-slate-900">Need Urgent Onsite Assistance?</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our technicians are stationed across Vapi GIDC, Silvassa, and Daman. Call directly for emergency support or same-day site visits.
              </p>
              <div className="space-y-2 pt-2">
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