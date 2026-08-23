import React, { useState } from 'react';
import { Building2, FileText, CreditCard, Wrench } from 'lucide-react';

const TRealEstateMockup: React.FC = () => {
  const [tab, setTab] = useState<'portfolio' | 'tenants' | 'leases' | 'maintenance'>('portfolio');

  return (
    <div className="w-full bg-[#0D111A] rounded-2xl border border-white/15 overflow-hidden shadow-2xl">
      {/* Top Header */}
      <div className="bg-[#141A26] px-4 py-3 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-[#3B82F6] text-white flex items-center justify-center font-bold text-xs">
            RE
          </div>
          <span className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-[#3B82F6]" />
            T REAL ESTATE Enterprise Operations
          </span>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg text-[11px] font-semibold">
          {[
            { id: 'portfolio', label: 'Portfolio Overview' },
            { id: 'tenants', label: 'Tenants & Billing' },
            { id: 'leases', label: 'Lease Contracts' },
            { id: 'maintenance', label: 'Work Orders' },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id as any)}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                tab === t.id ? 'bg-[#3B82F6] text-white font-bold' : 'text-gray-400 hover:text-white'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Body */}
      <div className="p-5 space-y-4">
        {/* KPI Row */}
        <div className="grid grid-cols-4 gap-2 text-center text-xs">
          <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
            <div className="text-gray-400 text-[10px]">Occupancy Rate</div>
            <div className="text-sm font-bold text-emerald-400">94.8% Active</div>
          </div>
          <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
            <div className="text-gray-400 text-[10px]">Total Managed Units</div>
            <div className="text-sm font-bold text-white">Commercial & Residential</div>
          </div>
          <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
            <div className="text-gray-400 text-[10px]">Monthly Collections</div>
            <div className="text-sm font-bold text-[#3B82F6]">Automated Sync</div>
          </div>
          <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
            <div className="text-gray-400 text-[10px]">Open Maintenance</div>
            <div className="text-sm font-bold text-amber-400">SLA Tracked</div>
          </div>
        </div>

        {/* Tab Specific Panel */}
        {tab === 'portfolio' && (
          <div className="p-4 rounded-xl bg-[#141A26] border border-white/10 space-y-3 text-xs">
            <div className="flex items-center justify-between">
              <span className="font-bold text-white flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-[#3B82F6]" /> Real Estate Asset Portfolio (Riyadh & Regional)
              </span>
              <span className="text-[10px] text-emerald-400">Live Status Audit</span>
            </div>

            <div className="space-y-2">
              <div className="p-3 bg-white/5 rounded-lg border border-white/5 flex items-center justify-between">
                <div>
                  <div className="font-bold text-white">Al Sahafa Corporate Tower</div>
                  <div className="text-[10px] text-gray-400">King Abdulaziz Rd • 42 Commercial Offices</div>
                </div>
                <div className="text-right">
                  <div className="text-emerald-400 font-bold">98% Occupied</div>
                  <div className="text-[9px] text-gray-400">Automated E-Invoicing</div>
                </div>
              </div>

              <div className="p-3 bg-white/5 rounded-lg border border-white/5 flex items-center justify-between">
                <div>
                  <div className="font-bold text-white">Olaya Residential Complex</div>
                  <div className="text-[10px] text-gray-400">Riyadh • 120 Luxury Apartments</div>
                </div>
                <div className="text-right">
                  <div className="text-emerald-400 font-bold">92% Occupied</div>
                  <div className="text-[9px] text-gray-400">Tenant App Enabled</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {tab === 'tenants' && (
          <div className="p-4 rounded-xl bg-[#141A26] border border-white/10 space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="font-bold text-white flex items-center gap-1.5">
                <CreditCard className="w-4 h-4 text-emerald-400" /> Tenant Billing & Payment Installment Ledger
              </span>
              <span className="text-[10px] text-gray-400">Direct Bank Sync</span>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between p-2.5 bg-white/5 rounded">
                <div>
                  <div className="font-bold text-white">Advanced Tech Solutions LLC</div>
                  <div className="text-[9px] text-gray-400">Unit 402 • Q3 Lease Installment</div>
                </div>
                <span className="text-emerald-400 font-bold text-[10px]">Paid via SADAD / Card</span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-white/5 rounded">
                <div>
                  <div className="font-bold text-white">Horizon Trading Co.</div>
                  <div className="text-[9px] text-gray-400">Unit 108 • Q3 Lease Installment</div>
                </div>
                <span className="text-amber-400 font-bold text-[10px]">Reminder Sent</span>
              </div>
            </div>
          </div>
        )}

        {tab === 'leases' && (
          <div className="p-4 rounded-xl bg-[#141A26] border border-white/10 space-y-2 text-xs">
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-white flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-purple-400" /> Contract Vault & Automated Escalations
              </span>
              <span className="text-[10px] text-blue-400">E-Sign Ready</span>
            </div>
            <div className="p-2.5 bg-white/5 rounded flex items-center justify-between">
              <span>Commercial Lease Renewal Queue</span>
              <span className="text-emerald-400 font-bold text-[10px]">Automated 60-Day Notice</span>
            </div>
          </div>
        )}

        {tab === 'maintenance' && (
          <div className="p-4 rounded-xl bg-[#141A26] border border-white/10 space-y-2 text-xs">
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-white flex items-center gap-1.5">
                <Wrench className="w-4 h-4 text-amber-400" /> Maintenance Work Orders & Contractor SLA
              </span>
              <span className="text-[10px] text-emerald-400">Tenant App Dispatch</span>
            </div>
            <div className="p-2.5 bg-white/5 rounded flex items-center justify-between">
              <div>
                <div className="font-bold text-white">HVAC Inspection - Tower B</div>
                <div className="text-[9px] text-gray-400">Submitted via Tenant Portal • Contractor Dispatched</div>
              </div>
              <span className="text-blue-400 font-bold text-[10px]">In Progress</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default TRealEstateMockup;
