import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Contact NextGen IT Solution | Vapi GIDC, Silvassa & Daman Local IT Support',
  description: 'Reach our industrial IT engineers in Vapi GIDC for fast response, technical site assessments, or urgent plant downtime calls. Phone: +91 99785 98817.',
  keywords: [
    'contact IT company Vapi',
    'IT support phone number Silvassa',
    'computer repair Vapi GIDC',
    'CCTV technician number Daman',
    'NextGen IT Solution contact'
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact NextGen IT Solution | Local Industrial IT Support',
    description: 'Direct phone, WhatsApp, and email contact for enterprise IT infrastructure and emergency onsite support across Vapi, Silvassa, and Daman.',
    url: '/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: '/' },
          { name: 'Contact Us', url: '/contact' }
        ]} 
      />
      {children}
    </>
  );
}
