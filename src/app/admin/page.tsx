'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { 
  Users, 
  TrendingUp, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  ArrowRight,
  MessageSquare,
  FileSpreadsheet
} from 'lucide-react';
import { Lead } from '@/lib/types';

export default function AdminDashboardPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/leads')
      .then(res => res.json())
      .then(data => {
        if (data.leads) setLeads(data.leads);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const totalLeads = leads.length;
  const newLeads = leads.filter(l => l.status === 'New').length;
  const contactedLeads = leads.filter(l => l.status === 'Contacted' || l.status === 'Quotation Sent').length;
  const wonDeals = leads.filter(l => l.status === 'Won').length;

  return (
    <div className="space-y-8 max-w-6xl">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Sales & Lead CRM Dashboard</h1>
          <p className="text-xs sm:text-sm text-slate-600">
            Real-time pipeline metrics for NextGen IT Solution customer inquiries and project BOQs.
          </p>
        </div>
        <Link
          href="/admin/leads"
          className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition flex items-center gap-1.5 shadow-sm hover:shadow"
        >
          <span>Open Full Pipeline CRM</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-2 shadow-sm">
          <div className="flex items-center justify-between text-slate-600 text-xs font-medium">
            <span>Total Inquiries</span>
            <Users className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-3xl font-extrabold text-slate-900">{totalLeads}</div>
          <div className="text-[11px] text-slate-500">All recorded web & quote leads</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-2 shadow-sm">
          <div className="flex items-center justify-between text-slate-600 text-xs font-medium">
            <span>New / Action Required</span>
            <Clock className="w-4 h-4 text-amber-600" />
          </div>
          <div className="text-3xl font-extrabold text-amber-600">{newLeads}</div>
          <div className="text-[11px] text-slate-500">Pending sales callback</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-2 shadow-sm">
          <div className="flex items-center justify-between text-slate-600 text-xs font-medium">
            <span>In Negotiation / Sent</span>
            <TrendingUp className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-3xl font-extrabold text-blue-600">{contactedLeads}</div>
          <div className="text-[11px] text-slate-500">Quotes shared with clients</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-2 shadow-sm">
          <div className="flex items-center justify-between text-slate-600 text-xs font-medium">
            <span>Deals Won (Closed)</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-3xl font-extrabold text-emerald-600">{wonDeals}</div>
          <div className="text-[11px] text-slate-500">Closed projects & AMCs</div>
        </div>

      </div>

      {/* Recent Inquiries Quick List */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900">Recent Customer Submissions</h2>
          <Link href="/admin/leads" className="text-xs text-blue-600 hover:underline font-medium">
            View all ({leads.length})
          </Link>
        </div>

        {loading ? (
          <div className="text-center py-8 text-xs text-slate-500">Loading leads...</div>
        ) : (
          <div className="divide-y divide-slate-200">
            {leads.slice(0, 5).map((lead) => (
              <div key={lead.id} className="py-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs">
                <div>
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    <span>{lead.company || lead.name}</span>
                    <span className="font-normal text-slate-500">({lead.name})</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                      {lead.location}
                    </span>
                  </div>
                  <div className="text-slate-600 mt-0.5">
                    <strong className="text-slate-800">{lead.service}</strong> — {lead.requirement.substring(0, 70)}...
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${
                    lead.status === 'New' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                    lead.status === 'Won' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                    'bg-blue-50 text-blue-700 border border-blue-200'
                  }`}>
                    {lead.status}
                  </span>
                  <a
                    href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(lead.name)},%20this%20is%20NextGen%20IT%20Solution%20regarding%20your%20quote%20request.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:text-emerald-700 p-1"
                    title="Follow up via WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}