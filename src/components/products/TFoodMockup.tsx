import React, { useState } from 'react';
import { Utensils, Smartphone, Clock, Bike, Flame, MapPin } from 'lucide-react';

const TFoodMockup: React.FC = () => {
  const [view, setView] = useState<'kds' | 'customer' | 'menu' | 'delivery'>('kds');

  return (
    <div className="w-full bg-[#0A0A0A] rounded-2xl border border-white/15 overflow-hidden shadow-2xl">
      {/* Top Header */}
      <div className="bg-[#141414] px-4 py-3 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-[#E92929] text-white flex items-center justify-center font-bold text-xs">
            TF
          </div>
          <span className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
            <Utensils className="w-3.5 h-3.5 text-[#E92929]" />
            T FOOD Ecosystem Console
          </span>
        </div>

        {/* View Controls */}
        <div className="flex items-center gap-1 bg-black/60 p-1 rounded-lg text-[11px] font-semibold">
          {[
            { id: 'kds', label: 'Kitchen KDS' },
            { id: 'customer', label: 'Customer App' },
            { id: 'menu', label: 'Menu Manager' },
            { id: 'delivery', label: 'Driver Dispatch' },
          ].map((v) => (
            <button
              key={v.id}
              onClick={() => setView(v.id as any)}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                view === v.id ? 'bg-[#E92929] text-white font-bold' : 'text-gray-400 hover:text-white'
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Container */}
      <div className="p-5 space-y-4">
        {/* Metric Bar */}
        <div className="grid grid-cols-4 gap-2 text-center text-xs">
          <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
            <div className="text-slate-400 text-[10px]">Active Tickets</div>
            <div className="text-sm font-bold text-white">18 In Prep</div>
          </div>
          <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
            <div className="text-slate-400 text-[10px]">Avg Prep Time</div>
            <div className="text-sm font-bold text-emerald-400">11.4 Mins</div>
          </div>
          <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
            <div className="text-slate-400 text-[10px]">Active Drivers</div>
            <div className="text-sm font-bold text-[#E92929]">12 Dispatched</div>
          </div>
          <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
            <div className="text-slate-400 text-[10px]">Commission Saved</div>
            <div className="text-sm font-bold text-[#E92929]">100% Direct</div>
          </div>
        </div>

        {/* View Specific Interface */}
        {view === 'kds' && (
          <div className="p-4 rounded-xl bg-[#141414] border border-white/10 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-[#E92929]" /> Live Kitchen Display System (Station 1)
              </span>
              <span className="text-[10px] text-[#E92929] font-mono">Rush Hour Mode</span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="p-3 rounded-lg bg-[#E92929]/20 border border-[#E92929]/50 space-y-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-[#E92929]">#T-104</span>
                  <span className="text-[10px] text-gray-300 flex items-center gap-1"><Clock className="w-3 h-3" /> 04:12</span>
                </div>
                <div className="text-[11px] text-white space-y-1">
                  <div>1x Gourmet Burger (No Onion)</div>
                  <div>2x Truffle Fries</div>
                  <div>1x Fresh Mint Lemonade</div>
                </div>
                <div className="text-[9px] text-emerald-400 font-semibold pt-1 border-t border-[#E92929]/30">
                  Prep Status: Grilling
                </div>
              </div>

              <div className="p-3 rounded-lg bg-white/5 border border-white/10 space-y-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-white">#T-105</span>
                  <span className="text-[10px] text-slate-400 flex items-center gap-1"><Clock className="w-3 h-3" /> 02:40</span>
                </div>
                <div className="text-[11px] text-gray-300 space-y-1">
                  <div>2x Chicken Shawarma Meal</div>
                  <div>1x Garlic Sauce Extra</div>
                </div>
                <div className="text-[9px] text-white font-semibold pt-1 border-t border-white/10">
                  Prep Status: Assembly
                </div>
              </div>

              <div className="p-3 rounded-lg bg-white/5 border border-white/10 space-y-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-white">#T-106</span>
                  <span className="text-[10px] text-slate-400 flex items-center gap-1"><Clock className="w-3 h-3" /> 00:55</span>
                </div>
                <div className="text-[11px] text-gray-300 space-y-1">
                  <div>1x Signature Pizza Medium</div>
                  <div>1x Caesar Salad</div>
                </div>
                <div className="text-[9px] text-slate-300 font-semibold pt-1 border-t border-white/10">
                  Prep Status: Queued
                </div>
              </div>
            </div>
          </div>
        )}

        {view === 'customer' && (
          <div className="p-4 rounded-xl bg-[#141414] border border-white/10 space-y-3 text-xs">
            <div className="flex items-center justify-between">
              <span className="font-bold text-white flex items-center gap-1.5">
                <Smartphone className="w-4 h-4 text-[#E92929]" /> Branded Mobile App Portal
              </span>
              <span className="text-[10px] text-emerald-400">Direct Ordering</span>
            </div>
            <div className="p-3 bg-white/5 rounded-lg flex items-center justify-between">
              <div>
                <div className="font-bold text-white">Al Olaya Branch • Delivery to Riyadh Office</div>
                <div className="text-[10px] text-slate-400">ETA: 22 Minutes • Direct Track Active</div>
              </div>
              <div className="px-3 py-1 bg-[#E92929] text-white rounded font-bold text-[10px]">
                Order Live
              </div>
            </div>
          </div>
        )}

        {view === 'menu' && (
          <div className="p-4 rounded-xl bg-[#141414] border border-white/10 space-y-2 text-xs">
            <div className="font-bold text-white mb-1">Multi-Branch Menu & Pricing Matrix</div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between p-2 bg-white/5 rounded">
                <span>Riyadh Central Branch Menu</span>
                <span className="text-emerald-400">Synced to 4 Aggregators + Direct App</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-white/5 rounded">
                <span>Jeddah Corniche Branch Menu</span>
                <span className="text-emerald-400">Synced to Direct Web Portal</span>
              </div>
            </div>
          </div>
        )}

        {view === 'delivery' && (
          <div className="p-4 rounded-xl bg-[#141414] border border-white/10 space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="font-bold text-white flex items-center gap-1.5">
                <Bike className="w-4 h-4 text-[#E92929]" /> GPS Driver Dispatch Matrix
              </span>
              <span className="text-[10px] text-slate-400">Live Fleet Tracking</span>
            </div>
            <div className="p-2.5 bg-white/5 rounded flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#E92929]" />
                <div>
                  <div className="font-bold text-white">Driver #4 (Saad M.)</div>
                  <div className="text-[9px] text-slate-400">Route: King Fahd Rd → Al Sahafa</div>
                </div>
              </div>
              <span className="text-emerald-400 font-bold text-[10px]">On Schedule</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default TFoodMockup;
