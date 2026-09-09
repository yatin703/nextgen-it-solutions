import React from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface ServiceSchemaProps {
  name: string;
  description: string;
  category: string;
  slug: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://nextgenitsolution.com';

/**
 * Enterprise LocalBusiness & ITService JSON-LD Schema
 * Targets local pack & regional authority across Vapi, Silvassa, Daman, Umbergaon & Sarigam
 */
export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ITService', 'ProfessionalService'],
    '@id': `${BASE_URL}/#organization`,
    name: 'NextGen IT Solution',
    alternateName: 'NextGen IT Solution - Industrial IT Infrastructure & Security',
    legalName: 'NextGen IT Solution',
    url: BASE_URL,
    logo: `${BASE_URL}/images/nextgen-logo-it-solution-3d.jpg`,
    image: `${BASE_URL}/images/nextgen-logo-it-solution-3d.jpg`,
    telephone: '+919978598817',
    email: 'nextgen.itsolution@zohomail.in',
    priceRange: '₹₹ - ₹₹₹₹',
    description: 'Enterprise IT infrastructure, CCTV surveillance, structured CAT6/CAT6A LAN & optical fiber cabling, server racks, firewalls, and 24/7 AMC support serving Vapi GIDC, Silvassa, Daman, Umbergaon and Sarigam industrial corridors.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'GIDC Industrial Estate',
      addressLocality: 'Vapi',
      addressRegion: 'Gujarat',
      postalCode: '396195',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 20.3712,
      longitude: 72.9106,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Vapi',
        containedInPlace: { '@type': 'State', name: 'Gujarat' },
      },
      {
        '@type': 'City',
        name: 'Silvassa',
        containedInPlace: { '@type': 'AdministrativeArea', name: 'Dadra and Nagar Haveli' },
      },
      {
        '@type': 'City',
        name: 'Daman',
        containedInPlace: { '@type': 'AdministrativeArea', name: 'Daman and Diu' },
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Umbergaon (Umargam) GIDC',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Sarigam GIDC',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Bhilad Industrial Area',
      },
      {
        '@type': 'City',
        name: 'Valsad (Gundlav GIDC & Atul)',
        containedInPlace: { '@type': 'State', name: 'Gujarat' },
      },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
        description: '24/7 Emergency IT AMC Onsite Support for Contract Clients',
      },
    ],
    sameAs: [
      'https://www.linkedin.com/company/nextgen-it-solution',
      'https://wa.me/919978598817',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * FAQPage Schema for Google Accordion Rich Snippets in SERP
 */
export function FaqSchema({ faqs }: { faqs: FaqItem[] }) {
  if (!faqs || faqs.length === 0) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * BreadcrumbList Schema for structured SERP breadcrumb navigation
 */
export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  if (!items || items.length === 0) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Service Schema for Individual Offerings
 */
export function ServiceSchema({ name, description, category, slug }: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    serviceType: category,
    description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'NextGen IT Solution',
      telephone: '+919978598817',
      url: BASE_URL,
    },
    areaServed: ['Vapi', 'Silvassa', 'Daman', 'Umbergaon', 'Sarigam', 'Gujarat'],
    url: `${BASE_URL}/services/${slug}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
