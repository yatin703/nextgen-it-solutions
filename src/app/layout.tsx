import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "NextGen IT Solution | Complete IT Infrastructure & Security for Businesses",
  description: "B2B enterprise IT infrastructure, CCTV & surveillance, structured LAN/fiber cabling, servers, firewalls, and 24/7 AMC support serving Vapi GIDC, Silvassa, Daman and industrial estates.",
  keywords: [
    "IT company in Vapi",
    "IT support Vapi",
    "CCTV installation Vapi",
    "CCTV company Silvassa",
    "networking company Vapi",
    "LAN installation Vapi",
    "server support Vapi",
    "IT AMC Vapi",
    "IT company Silvassa",
    "CCTV Silvassa",
    "networking Silvassa",
    "IT support Daman",
    "firewall installation Sophos Vapi"
  ],
  openGraph: {
    title: "NextGen IT Solution - Enterprise IT & Security",
    description: "Complete IT Infrastructure & Security Solutions for Businesses across Vapi, Silvassa, and Daman.",
    type: "website",
    locale: "en_IN",
  }
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
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <MobileStickyCTA />
        </ThemeProvider>
      </body>
    </html>
  );
}