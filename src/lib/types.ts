export type LeadStatus = 'New' | 'Contacted' | 'Quotation Sent' | 'Negotiation' | 'Won' | 'Lost';

export interface Lead {
  id: string;
  name: string;
  company: string;
  phone: string;
  email: string;
  location: string;
  service: string;
  requirement: string;
  attachmentUrl?: string;
  status: LeadStatus;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  iconName: string;
  overview: string;
  features: string[];
  components: string[];
  process: string[];
  industries: string[];
  faqs: { question: string; answer: string }[];
}

export interface ProductItem {
  id: string;
  name: string;
  slug: string;
  category: string;
  brand: string;
  modelNumber: string;
  shortDesc: string;
  specs: { [key: string]: string };
  isAvailable: boolean;
  featured?: boolean;
  price?: string;
  description?: string;
  imageUrl?: string;
  animation3d?: string;
  animationUrl?: string;
  createdAt?: string;
  updatedAt?: string;
}

export type ThemePreset = 'corporate-blue' | 'industrial-teal' | 'cyber-emerald' | 'midnight-navy';

export interface ThemeConfig {
  id: string;
  themePreset: ThemePreset;
  primaryColor: string;
  accentColor: string;
  companyName: string;
  tagline: string;
  primaryPhone: string;
  whatsappNumber: string;
  email: string;
  regionalCorridor: string;
  address: string;
  updatedAt: string;
}

export interface VisitingCardPartner {
  name: string;
  designation: string;
  phone?: string;
  email?: string;
}

export interface VisitingCardConfig {
  companyName: string;
  subtitle: string;
  tagline: string;
  locationBadge: string;
  primaryPhone: string;
  email: string;
  website: string;
  address: string;
  regionalHubs: string;
  partners: VisitingCardPartner[];
  backCapabilitiesTitle: string;
  backSlaBadge: string;
  services: string[];
  qualityStamp: string;
  printSpecGsm: string;
  printSpecFinish: string;
  printSpecSize: string;
  updatedAt?: string;
}