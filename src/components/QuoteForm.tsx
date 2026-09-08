'use client';

import React, { useState } from 'react';
import { Upload, CheckCircle, AlertCircle, Loader2, MessageSquare, Send, ShieldCheck } from 'lucide-react';

interface QuoteFormProps {
  initialService?: string;
  initialRequirement?: string;
  onSuccess?: () => void;
}

export default function QuoteForm({ initialService = '', initialRequirement = '', onSuccess }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    location: 'Vapi GIDC',
    service: initialService || 'Structured LAN & CAT6/CAT6A Cabling',
    requirement: initialRequirement || ''
  });

  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [submittedLeadId, setSubmittedLeadId] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const services = [
    'Structured LAN & CAT6/CAT6A Cabling',
    'Industrial CCTV & IP Surveillance',
    'Fiber Optic Splicing & OTDR Certification',
    'Firewall & Unified Threat Management (UTM)',
    'Enterprise Server Deployment & Virtualization',
    'Comprehensive & Non-Comprehensive IT AMC',
    'Turnkey Industrial IT Projects',
    'Industrial Wi-Fi 6 & Long-Range Wireless',
    'Power Backup & Online UPS Solutions',
    'Cloud Migration & Microsoft 365 / Zoho Setup',
    'Industrial Biometric Access Control & Attendance',
    'Managed IP-PBX & VoIP Telephony Systems',
    'Plant-Wide PA & Industrial Audio Systems',
    'Hardware Procurement & Workstation Deployment',
    'Industrial Weighbridge & PLC Network Integration'
  ];

  const locations = [
    'Vapi GIDC',
    'Silvassa (UT of DNH)',
    'Daman (UT of DNH & DD)',
    'Sarigam GIDC',
    'Umbergaon GIDC',
    'Bhilad & Valsad',
    'Other South Gujarat'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('company', formData.company);
      data.append('phone', formData.phone);
      data.append('email', formData.email);
      data.append('location', formData.location);
      data.append('service', formData.service);
      data.append('requirement', formData.requirement);
      if (file) {
        data.append('file', file);
      }

      const res = await fetch('/api/quote', {
        method: 'POST',
        body: data
      });

      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.error || 'Failed to submit quote request');
      }

      setSubmittedLeadId(result.lead.id);
      if (onSuccess) onSuccess();
    } catch (err: any) {
      setErrorMsg(err.message || 'Something went wrong. Please try again or contact us via WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  if (submittedLeadId) {
    const whatsappMsg = `Hello NextGen IT Solution, I have submitted Quote Request #${submittedLeadId} for ${formData.service} at ${formData.company || formData.name} (${formData.location}). Please confirm receipt.`;
    const whatsappUrl = `https://wa.me/919978598817?text=${encodeURIComponent(whatsappMsg)}`;

    return (
      <div className="bg-white border border-teal-500 rounded-2xl p-8 text-center space-y-5 shadow-xl">
        <div className="w-16 h-16 bg-teal-50 text-teal-700 rounded-full flex items-center justify-center mx-auto border border-teal-200">
          <CheckCircle className="w-10 h-10" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Quote Request Received!</h3>
          <p className="text-slate-600 text-sm max-w-md mx-auto">
            Your reference number is <strong className="text-blue-600 font-mono text-base">{submittedLeadId}</strong>.
            Our technical engineering team will review your specifications and get in touch within 2 to 4 business hours.
          </p>
        </div>

        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-left text-xs text-slate-700 space-y-1 max-w-sm mx-auto">
          <div><strong>Company:</strong> {formData.company || 'N/A'}</div>
          <div><strong>Contact:</strong> {formData.name} ({formData.phone})</div>
          <div><strong>Location:</strong> {formData.location}</div>
          <div><strong>Service:</strong> {formData.service}</div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-700 hover:bg-teal-800 text-white font-semibold px-6 py-2.5 rounded-lg text-sm flex items-center justify-center gap-2 transition shadow-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Confirm on WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={() => {
              setSubmittedLeadId(null);
              setFormData({
                name: '',
                company: '',
                phone: '',
                email: '',
                location: 'Vapi GIDC',
                service: services[0],
                requirement: ''
              });
              setFile(null);
            }}
            className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium px-5 py-2.5 rounded-lg text-sm transition"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xl space-y-5">
      <div className="border-b border-slate-200 pb-4">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold uppercase tracking-wider mb-2">
          <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
          <span>Verified Turnkey Proposal</span>
        </div>
        <h3 className="text-xl font-bold text-slate-900 tracking-tight">
          Request a Detailed Proposal & BOQ Quote
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Share your IT/CCTV project requirements or upload your Bill of Quantities (BOQ). We provide competitive corporate and industrial vendor pricing.
        </p>
      </div>

      {errorMsg && (
        <div className="bg-rose-50 border border-rose-200 text-rose-700 text-sm p-3 rounded-lg flex items-center gap-2">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
            Your Name <span className="text-blue-600">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Rajesh Patel"
            className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
            Company / Plant Name <span className="text-blue-600">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="e.g. Acme Industries Ltd."
            className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
            Mobile Number <span className="text-blue-600">*</span>
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="e.g. +91 99785 00000"
            className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
            Official Email Address
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="e.g. it@acmeindustries.com"
            className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
            Project Location <span className="text-blue-600">*</span>
          </label>
          <select
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none transition"
          >
            {locations.map((loc) => (
              <option key={loc} value={loc} className="bg-white text-slate-900">{loc}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
            Primary Service Required <span className="text-blue-600">*</span>
          </label>
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none transition"
          >
            {services.map((srv) => (
              <option key={srv} value={srv} className="bg-white text-slate-900">{srv}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
          Requirement Details & Scope <span className="text-blue-600">*</span>
        </label>
        <textarea
          required
          rows={3}
          value={formData.requirement}
          onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
          placeholder="Describe your nodes count, CCTV camera points, server requirements, or project timeline..."
          className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 rounded-lg p-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition"
        />
      </div>

      {/* BOQ / Document Attachment */}
      <div className="bg-slate-50 border-2 border-dashed border-slate-300 hover:border-blue-500 rounded-xl p-5 text-center transition">
        <input
          type="file"
          id="boq-upload"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="hidden"
          accept=".pdf,.xlsx,.xls,.doc,.docx,.png,.jpg,.jpeg"
        />
        <label
          htmlFor="boq-upload"
          className="cursor-pointer flex flex-col items-center justify-center gap-1.5"
        >
          <Upload className="w-7 h-7 text-blue-600" />
          <span className="text-sm font-semibold text-slate-700">
            {file ? file.name : 'Upload BOQ / Requirement Document (Optional)'}
          </span>
          <span className="text-xs text-slate-500">
            Supports PDF, Excel (.xlsx), Word (.docx) or Blueprint images up to 10MB
          </span>
        </label>
        {file && (
          <button
            type="button"
            onClick={() => setFile(null)}
            className="mt-2 text-xs text-rose-600 font-semibold hover:underline"
          >
            Remove file
          </button>
        )}
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl transition shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 text-sm uppercase tracking-wider disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Processing Proposal Request...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Submit Request & Generate Lead</span>
            </>
          )}
        </button>
        <p className="text-[11px] text-slate-500 text-center mt-2">
          🔒 Strictly confidential. Your BOQ and technical specifications will not be shared with third parties.
        </p>
      </div>
    </form>
  );
}