import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Request a Free IT Quote & BOQ Assessment | NextGen IT Solution',
  description: 'Submit your factory or office IT requirements or upload your Bill of Quantities (BOQ). Get guaranteed fast corporate quotation with line-item transparency across Vapi, Silvassa & Daman.',
  keywords: [
    'request IT quote Vapi',
    'CCTV quotation Silvassa',
    'LAN cabling BOQ Daman',
    'IT AMC quote Vapi GIDC',
    'networking estimate Gujarat'
  ],
  alternates: {
    canonical: '/quote',
  },
  openGraph: {
    title: 'Request IT Infrastructure Quote & BOQ | NextGen IT Solution',
    description: 'Upload BOQ or request free onsite assessment for networking, CCTV, and servers across Vapi, Silvassa, and Daman.',
    url: '/quote',
  },
};

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: '/' },
          { name: 'Request Quote', url: '/quote' }
        ]} 
      />
      {children}
    </>
  );
}
