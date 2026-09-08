import React from 'react';
import { INITIAL_SERVICES } from '@/lib/data';

export default function AdminServicesPage() {
  return (
    <div className="space-y-6 max-w-6xl">
      <div className="border-b border-slate-200 pb-4">
        <h1 className="text-2xl font-bold text-slate-900">Services Catalog Manager</h1>
        <p className="text-xs text-slate-600">All 15 registered services active across NextGen IT Solution website.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {INITIAL_SERVICES.map((srv) => (
          <div key={srv.id} className="bg-white border border-slate-200 rounded-xl p-5 space-y-2 shadow-sm">
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold text-blue-600 uppercase">{srv.category}</span>
              <span className="text-[11px] font-mono text-slate-500">{srv.slug}</span>
            </div>
            <h3 className="text-base font-bold text-slate-900">{srv.title}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">{srv.shortDesc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}