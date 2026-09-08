'use client';

import React, { useEffect, useState } from 'react';
import { 
  Users, 
  Search, 
  Filter, 
  MessageSquare, 
  FileDown, 
  Save, 
  Check,
  RefreshCw
} from 'lucide-react';
import { Lead, LeadStatus } from '@/lib/types';

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/leads');
      const data = await res.json();
      if (data.leads) setLeads(data.leads);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleStatusChange = async (id: string, newStatus: LeadStatus) => {
    setUpdatingId(id);
    try {
      const res = await fetch('/api/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus })
      });
      const data = await res.json();
      if (data.success) {
        setLeads(leads.map(l => l.id === id ? { ...l, status: newStatus } : l));
      }
    } catch (err) {
      alert('Error updating status');
    } finally {
      setUpdatingId(null);
    }
  };

  const statuses: LeadStatus[] = ['New', 'Contacted', 'Quotation Sent', 'Negotiation', 'Won', 'Lost'];

  const filtered = leads.filter((lead) => {
    const matchStatus = statusFilter === 'All' || lead.status === statusFilter;
    const matchSearch = lead.name.toLowerCase().includes(search.toLowerCase()) ||
                        lead.company.toLowerCase().includes(search.toLowerCase()) ||
                        lead.location.toLowerCase().includes(search.toLowerCase()) ||
                        lead.service.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  return (
    <div className="space-y-6 max-w-7xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-6">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">Lead Management & Mini-CRM</h1>
          <p className="text-xs text-slate-600">
            Track inquiries through the full sales pipeline: New → Contacted → Quotation Sent → Negotiation → Won / Lost.
          </p>
        </div>
        <button
          onClick={fetchLeads}
          className="flex items-center gap-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs px-3 py-2 rounded-lg transition shadow-sm"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
          <span>Refresh</span>
        </button>
      </div>

      {/* Filter bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white border border-slate-200 p-4 rounded-xl shadow-sm">
        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
          {['All', ...statuses].map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`text-xs px-3 py-1.5 rounded-lg font-medium transition ${
                statusFilter === st
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {st}
            </button>
          ))}
        </div>

        <div className="w-full sm:w-64">
          <input
            type="text"
            placeholder="Search company, name, location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-1.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
          />
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-slate-50 text-slate-600 uppercase tracking-wider text-[10px] border-b border-slate-200 font-bold">
              <tr>
                <th className="p-4">Lead ID & Date</th>
                <th className="p-4">Client & Company</th>
                <th className="p-4">Location</th>
                <th className="p-4">Requested Service & Scope</th>
                <th className="p-4">BOQ File</th>
                <th className="p-4">Pipeline Status</th>
                <th className="p-4">Direct Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filtered.map((lead) => (
                <tr key={lead.id} className="hover:bg-slate-50/80 transition">
                  
                  {/* Lead ID */}
                  <td className="p-4 font-mono">
                    <span className="font-bold text-blue-600 block">{lead.id}</span>
                    <span className="text-[10px] text-slate-500">
                      {new Date(lead.createdAt).toLocaleDateString()}
                    </span>
                  </td>

                  {/* Client & Company */}
                  <td className="p-4">
                    <div className="font-bold text-slate-900 text-sm">{lead.company || 'Individual Client'}</div>
                    <div className="text-slate-600">{lead.name}</div>
                    <div className="text-[11px] text-slate-500">{lead.phone} • {lead.email || 'No email'}</div>
                  </td>

                  {/* Location */}
                  <td className="p-4">
                    <span className="bg-slate-100 border border-slate-200 px-2 py-1 rounded text-slate-700 font-medium">
                      {lead.location}
                    </span>
                  </td>

                  {/* Service & Scope */}
                  <td className="p-4 max-w-xs">
                    <div className="font-semibold text-slate-900">{lead.service}</div>
                    <div className="text-slate-600 line-clamp-2 mt-0.5">{lead.requirement}</div>
                  </td>

                  {/* BOQ file attachment */}
                  <td className="p-4">
                    {lead.attachmentUrl ? (
                      <a
                        href={lead.attachmentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-blue-700 hover:text-blue-800 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded text-[11px] font-medium"
                      >
                        <FileDown className="w-3.5 h-3.5" />
                        <span>View BOQ</span>
                      </a>
                    ) : (
                      <span className="text-slate-400 text-[11px]">None</span>
                    )}
                  </td>

                  {/* Pipeline status dropdown */}
                  <td className="p-4">
                    <select
                      value={lead.status}
                      disabled={updatingId === lead.id}
                      onChange={(e) => handleStatusChange(lead.id, e.target.value as LeadStatus)}
                      className={`text-xs font-semibold rounded-lg px-2.5 py-1.5 border focus:outline-none cursor-pointer ${
                        lead.status === 'New' ? 'bg-amber-50 text-amber-800 border-amber-300' :
                        lead.status === 'Contacted' ? 'bg-blue-50 text-blue-800 border-blue-300' :
                        lead.status === 'Quotation Sent' ? 'bg-indigo-50 text-indigo-800 border-indigo-300' :
                        lead.status === 'Negotiation' ? 'bg-purple-50 text-purple-800 border-purple-300' :
                        lead.status === 'Won' ? 'bg-teal-50 text-teal-800 border-teal-300' :
                        'bg-rose-50 text-rose-800 border-rose-300'
                      }`}
                    >
                      {statuses.map((st) => (
                        <option key={st} value={st} className="bg-white text-slate-900">{st}</option>
                      ))}
                    </select>
                  </td>

                  {/* Direct WhatsApp CTA */}
                  <td className="p-4">
                    <a
                      href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(lead.name)},%20this%20is%20NextGen%20IT%20Solution.%20Regarding%20your%20inquiry%20for%20${encodeURIComponent(lead.service)}...`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-teal-50 border border-teal-300 hover:bg-teal-100 text-teal-700 px-3 py-1.5 rounded-lg text-xs font-medium transition"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}