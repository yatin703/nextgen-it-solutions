import React from 'react';
import Link from 'next/link';
import { 
  Network, 
  Camera, 
  Zap, 
  ShieldCheck, 
  Server, 
  Clock, 
  Laptop, 
  Wifi, 
  BatteryCharging, 
  Cloud, 
  Printer, 
  Factory,
  Fingerprint,
  PhoneCall,
  Volume2,
  ArrowRight,
  Check
} from 'lucide-react';
import { ServiceItem } from '@/lib/types';

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Network': return <Network className="w-6 h-6 text-blue-600" />;
      case 'Camera': return <Camera className="w-6 h-6 text-cyan-600" />;
      case 'Zap': return <Zap className="w-6 h-6 text-amber-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      case 'Server': return <Server className="w-6 h-6 text-purple-600" />;
      case 'Clock': return <Clock className="w-6 h-6 text-yellow-600" />;
      case 'Laptop': return <Laptop className="w-6 h-6 text-blue-600" />;
      case 'Wifi': return <Wifi className="w-6 h-6 text-sky-600" />;
      case 'BatteryCharging': return <BatteryCharging className="w-6 h-6 text-teal-600" />;
      case 'Cloud': return <Cloud className="w-6 h-6 text-indigo-600" />;
      case 'Printer': return <Printer className="w-6 h-6 text-rose-600" />;
      case 'Factory': return <Factory className="w-6 h-6 text-orange-600" />;
      case 'Fingerprint': return <Fingerprint className="w-6 h-6 text-red-600" />;
      case 'PhoneCall': return <PhoneCall className="w-6 h-6 text-green-600" />;
      case 'Volume2': return <Volume2 className="w-6 h-6 text-violet-600" />;
      default: return <Network className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <div className="group bg-white border border-slate-200 hover:border-blue-500 rounded-xl p-6 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:scale-105 transition-transform">
            {getIcon(service.iconName)}
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-200">
            {service.category}
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
          {service.title}
        </h3>

        <p className="text-sm text-slate-600 mb-5 line-clamp-3 leading-relaxed">
          {service.shortDesc}
        </p>

        <div className="space-y-2 mb-6">
          {service.features.slice(0, 3).map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
              <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <span className="line-clamp-1">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <Link 
          href={`/services/${service.slug}`}
          className="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 group-hover:translate-x-1 transition-transform"
        >
          <span>Explore Service</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href={`/quote?service=${encodeURIComponent(service.title)}`}
          className="text-xs bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 px-3 py-1.5 rounded-lg font-semibold transition"
        >
          Get Quote
        </Link>
      </div>
    </div>
  );
}