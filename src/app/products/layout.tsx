import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise Hardware, Server Racks & Network Switches | NextGen IT Solution',
  description: 'Enterprise IT hardware procurement for factories: L2/L3 managed switches, Cat6A bulk cable drums, server racks, NVR surveillance systems, and online UPS in Vapi, Silvassa & Daman.',
  keywords: [
    'IT hardware supplier Vapi',
    'network switch supplier Silvassa',
    'Cisco D-Link switches Daman',
    'server rack supplier Gujarat',
    'CCTV NVR supplier Vapi GIDC',
    'Cat6 cable box wholesale'
  ],
  alternates: {
    canonical: '/products',
  },
  openGraph: {
    title: 'Enterprise Hardware & Network Switches | NextGen IT Solution',
    description: 'Procure genuine enterprise networking hardware, server racks, IP cameras, and firewalls in Vapi, Silvassa, and Daman.',
    url: '/products',
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
