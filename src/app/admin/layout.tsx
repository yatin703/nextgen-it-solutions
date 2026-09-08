import React from 'react';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  Users, 
  Layers, 
  Cpu, 
  ExternalLink, 
  Shield, 
  Briefcase,
  Palette
} from 'lucide-react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col md:flex-row">
      {/* Admin Sidebar */}
      <aside className="w-full md:w-64 bg-[#111827] border-r border-slate-800 flex flex-col justify-between p-4 shrink-0 shadow-lg">
        <div className="space-y-6">
          <div className="flex items-center gap-3 px-2 py-2">
            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold shadow-sm">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white leading-tight">NextGen CRM</div>
              <div className="text-[11px] text-teal-400 font-mono">Admin Portal v1.0</div>
            </div>
          </div>

          <nav className="space-y-1 text-sm">
            <Link 
              href="/admin" 
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition"
            >
              <LayoutDashboard className="w-4 h-4 text-blue-400" />
              <span>Dashboard Overview</span>
            </Link>
            <Link 
              href="/admin/leads" 
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition"
            >
              <Users className="w-4 h-4 text-teal-400" />
              <span>Lead Pipeline (CRM)</span>
            </Link>
            <Link 
              href="/admin/services" 
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition"
            >
              <Layers className="w-4 h-4 text-blue-400" />
              <span>Manage Services</span>
            </Link>
            <Link 
              href="/admin/products" 
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition"
            >
              <Cpu className="w-4 h-4 text-teal-400" />
              <span>Manage Products</span>
            </Link>
            <Link 
              href="/admin/theme" 
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition"
            >
              <Palette className="w-4 h-4 text-amber-400" />
              <span>Theme & Branding</span>
            </Link>
          </nav>
        </div>

        <div className="pt-4 border-t border-slate-800 space-y-2 text-xs">
          <Link 
            href="/" 
            className="flex items-center justify-between px-3 py-2 rounded-lg bg-slate-800 text-blue-400 hover:bg-slate-700 hover:text-blue-300 transition"
          >
            <span>Back to Main Website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
          <div className="text-[11px] text-slate-400 px-3">
            Connected to Local DB Engine
          </div>
        </div>
      </aside>

      {/* Main Admin Content Area */}
      <main className="flex-1 p-6 sm:p-10 overflow-x-auto bg-slate-50 min-h-screen text-slate-900">
        {children}
      </main>
    </div>
  );
}