import React, { useState } from 'react';
import { Users, Package, DollarSign, BarChart3, TrendingUp, Store, Filter } from 'lucide-react';

const TStoreMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'admin' | 'vendor' | 'catalog' | 'orders'>('admin');

  return (
    <div className="w-full bg-[#0A0A0A] rounded-2xl border border-white/15 overflow-hidden shadow-2xl">
      {/* Mockup Top Navigation Bar */}
      <div className="bg-[#141414] px-4 py-3 border-b border-white/10 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-red-500/50 inline-block" />
            <span className="w-3 h-3 rounded-full bg-white/20 inline-block" />
          </div>
          <span className="text-xs font-mono font-bold text-[#E92929] flex items-center gap-1.5">
            <Store className="w-3.5 h-3.5" />
            T STORE Enterprise Portal v3.4
          </span>
        </div>

        {/* Mock View Switcher Tabs */}
        <div className="flex items-center gap-1 bg-black/60 p-1 rounded-lg text-[11px] font-semibold">
          {[
            { id: 'admin', label: 'Admin Hub' },
            { id: 'vendor', label: 'Vendor Portal' },
            { id: 'catalog', label: 'Catalog' },
            { id: 'orders', label: 'Live Orders' },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id as any)}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                activeTab === t.id ? 'bg-[#E92929] text-white font-bold' : 'text-gray-400 hover:text-white'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Mock Content Body */}
      <div className="p-4 sm:p-5 space-y-4">
        {/* KPI Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Active Vendors</span>
              <Users className="w-3.5 h-3.5 text-[#E92929]" />
            </div>
            <div className="text-base sm:text-lg font-black text-white">[VERIFIED COUNT]</div>
            <div className="text-[10px] text-emerald-400 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> Multi-vendor network
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Gross Marketplace</span>
              <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div className="text-base sm:text-lg font-black text-white">Live Ledger</div>
            <div className="text-[10px] text-slate-400">Automated payouts</div>
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Products Listed</span>
              <Package className="w-3.5 h-3.5 text-[#E92929]" />
            </div>
            <div className="text-base sm:text-lg font-black text-white">Multi-Category</div>
            <div className="text-[10px] text-slate-400">Inventory synced</div>
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Commission Split</span>
              <BarChart3 className="w-3.5 h-3.5 text-[#E92929]" />
            </div>
            <div className="text-base sm:text-lg font-black text-[#E92929]">Configurable</div>
            <div className="text-[10px] text-slate-400">Rules-based engine</div>
          </div>
        </div>

        {/* Dynamic View Content */}
        {activeTab === 'admin' && (
          <div className="p-4 rounded-xl bg-[#141414] border border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Store className="w-4 h-4 text-[#E92929]" /> Merchant Approval Queue & Commission Rules
              </h4>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono">
                System Active
              </span>
            </div>

            <div className="space-y-2 text-xs">
              {[
                { vendor: 'Riyadh Electronics Hub', category: 'Consumer Tech', commission: '12%', status: 'Approved' },
                { vendor: 'Jeddah Fashion Outlets', category: 'Apparel & Accessories', commission: '15%', status: 'Approved' },
                { vendor: 'Kingdom Specialty Foods', category: 'Gourmet & Supplies', commission: '10%', status: 'Pending Review' },
              ].map((v, i) => (
                <div key={i} className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5">
                  <div>
                    <div className="font-bold text-white">{v.vendor}</div>
                    <div className="text-[10px] text-slate-400">{v.category} • Commission: {v.commission}</div>
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded font-semibold ${
                    v.status === 'Approved' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-300'
                  }`}>
                    {v.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'vendor' && (
          <div className="p-4 rounded-xl bg-[#141414] border border-white/10 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <h4 className="font-bold text-white uppercase tracking-wider">Merchant Dashboard View</h4>
              <span className="text-[10px] text-[#E92929]">Stock & Fulfillment Sync</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-3 bg-white/5 rounded-lg">
                <div className="text-slate-400 text-[10px]">Pending Shipments</div>
                <div className="text-sm font-bold text-white">42 Orders</div>
              </div>
              <div className="p-3 bg-white/5 rounded-lg">
                <div className="text-slate-400 text-[10px]">In Stock SKUs</div>
                <div className="text-sm font-bold text-[#E92929]">1,280 Items</div>
              </div>
              <div className="p-3 bg-white/5 rounded-lg">
                <div className="text-slate-400 text-[10px]">Net Payout</div>
                <div className="text-sm font-bold text-emerald-400">Automated ledger</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'catalog' && (
          <div className="p-4 rounded-xl bg-[#141414] border border-white/10 space-y-2 text-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-white">Product Catalog & Inventory Engine</span>
              <span className="text-[10px] text-slate-400 flex items-center gap-1">
                <Filter className="w-3 h-3" /> Multi-filter active
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="p-2.5 bg-white/5 rounded-lg border border-white/5 flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-[#E92929]/20 flex items-center justify-center text-[#E92929] font-bold">
                  SKU
                </div>
                <div>
                  <div className="font-bold text-white text-[11px]">Smart Wireless Hub</div>
                  <div className="text-[9px] text-slate-400">Vendor: Riyadh Tech</div>
                </div>
              </div>
              <div className="p-2.5 bg-white/5 rounded-lg border border-white/5 flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-[#E92929]/20 flex items-center justify-center text-[#E92929] font-bold">
                  SKU
                </div>
                <div>
                  <div className="font-bold text-white text-[11px]">Industrial Sensor Unit</div>
                  <div className="text-[9px] text-slate-400">Vendor: Gulf Systems</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="p-4 rounded-xl bg-[#141414] border border-white/10 space-y-2 text-xs">
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-white">Unified Multi-Vendor Checkout Queue</span>
              <span className="text-[10px] text-emerald-400">Live Webhook</span>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between p-2 rounded bg-white/5">
                <span className="font-mono text-[#E92929]">#ORD-9482</span>
                <span className="text-gray-300">2 Vendors • Express Checkout</span>
                <span className="text-emerald-400 font-semibold">Payment Verified</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-white/5">
                <span className="font-mono text-[#E92929]">#ORD-9483</span>
                <span className="text-gray-300">1 Vendor • Standard Dispatch</span>
                <span className="text-white font-semibold">Fulfilling</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default TStoreMockup;
