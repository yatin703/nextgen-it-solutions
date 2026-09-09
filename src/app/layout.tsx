import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LocalBusinessSchema } from "@/components/JsonLd";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://nextgenitsolution.com";

export const viewport: Viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "NextGen IT Solution | Industrial IT Infrastructure & Security Specialist",
    template: "%s | NextGen IT Solution",
  },
  description: "NextGen IT Solution delivers mission-critical IT infrastructure, enterprise CCTV surveillance, CAT6/CAT6A structured LAN & fiber cabling, servers, firewalls, and 24/7 AMC support across Vapi GIDC, Silvassa, Daman, Umbergaon, and Sarigam.",
  keywords: [
    "IT company in Vapi",
    "IT support Vapi GIDC",
    "IT AMC company Vapi",
    "CCTV installation Vapi",
    "CCTV company Silvassa",
    "networking contractor Vapi",
    "structured cabling Silvassa",
    "fiber optic splicing Daman",
    "server rack installation Vapi",
    "industrial firewall Sophos Fortinet Vapi",
    "IT infrastructure contractor Gujarat",
    "IT company Silvassa Piparia Masat",
    "CCTV surveillance Daman Somnath Kachigam",
    "Umbergaon GIDC IT support",
    "Sarigam GIDC network AMC",
    "24/7 IT onsite SLA support"
  ],
  authors: [{ name: "NextGen IT Solution", url: SITE_URL }],
  creator: "NextGen IT Solution",
  publisher: "NextGen IT Solution",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NextGen IT Solution | Industrial IT Infrastructure & Security",
    description: "Mission-critical IT cabling, enterprise CCTV, server infrastructure, and 24/7 AMC support for factories across Vapi, Silvassa, and Daman.",
    url: SITE_URL,
    siteName: "NextGen IT Solution",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/nextgen-logo-it-solution-3d.jpg",
        width: 1200,
        height: 630,
        alt: "NextGen IT Solution Industrial IT Infrastructure & Security",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NextGen IT Solution | Enterprise IT & Security Specialist",
    description: "B2B IT infrastructure, structured cabling, CCTV surveillance, and 2-4 hr SLA AMC support across Vapi, Silvassa, and Daman.",
    images: ["/images/nextgen-logo-it-solution-3d.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-50 text-slate-800 min-h-screen flex flex-col antialiased selection:bg-blue-600 selection:text-white">
        <ThemeProvider>
          <LocalBusinessSchema />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <MobileStickyCTA />
        </ThemeProvider>
      </body>
    </html>
  );
}