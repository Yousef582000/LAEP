import React, { useState } from 'react';
import { ShoppingBag, Utensils, Building2, Cpu, Code2, Layers, Zap, TrendingUp } from 'lucide-react';

const HeroEcosystem: React.FC = () => {
  const [activeHover, setActiveHover] = useState<string | null>(null);

  const productNodes = [
    {
      id: 't-store',
      label: 'T STORE',
      sub: 'Multi-Vendor Platform',
      icon: ShoppingBag,
      color: '#E92929',
      pos: 'top-0 left-1/2 -translate-x-1/2 -translate-y-4 sm:-translate-y-6',
    },
    {
      id: 't-food',
      label: 'T FOOD',
      sub: 'Restaurant Platform',
      icon: Utensils,
      color: '#E92929',
      pos: 'bottom-4 left-2 sm:bottom-8 sm:left-6',
    },
    {
      id: 't-real-estate',
      label: 'T REAL ESTATE',
      sub: 'Property System',
      icon: Building2,
      color: '#E92929',
      pos: 'bottom-4 right-2 sm:bottom-8 sm:right-6',
    },
  ];

  const capabilityPills = [
    { id: 'automate', label: 'AUTOMATE', icon: Cpu, pos: 'top-16 left-0 sm:left-4' },
    { id: 'build', label: 'BUILD', icon: Code2, pos: 'top-32 left-0 sm:left-2' },
    { id: 'integrate', label: 'INTEGRATE', icon: Layers, pos: 'top-16 right-0 sm:right-4' },
    { id: 'modernize', label: 'MODERNIZE', icon: Zap, pos: 'top-32 right-0 sm:right-2' },
    { id: 'grow', label: 'GROW', icon: TrendingUp, pos: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-6' },
  ];

  return (
    <div className="relative w-full max-w-2xl mx-auto h-[380px] sm:h-[440px] flex items-center justify-center p-4">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />

      {/* SVG Connecting Vector Network */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 400 320"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="redGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E92929" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#E92929" stopOpacity="0.2" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Orbit Rings */}
        <circle cx="200" cy="160" r="110" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="200" cy="160" r="145" fill="none" stroke="rgba(233,41,41,0.08)" strokeWidth="1" />

        {/* Animated Connection Lines */}
        <line x1="200" y1="160" x2="200" y2="50" stroke="url(#redGlow)" strokeWidth="2" strokeDasharray="6 4" filter="url(#glow)">
          <animate attributeName="stroke-dashoffset" from="20" to="0" dur="2s" repeatCount="indefinite" />
        </line>
        <line x1="200" y1="160" x2="80" y2="250" stroke="rgba(233, 41, 41, 0.6)" strokeWidth="1.5" strokeDasharray="6 4" filter="url(#glow)">
          <animate attributeName="stroke-dashoffset" from="20" to="0" dur="2.5s" repeatCount="indefinite" />
        </line>
        <line x1="200" y1="160" x2="320" y2="250" stroke="rgba(233, 41, 41, 0.6)" strokeWidth="1.5" strokeDasharray="6 4" filter="url(#glow)">
          <animate attributeName="stroke-dashoffset" from="20" to="0" dur="2.2s" repeatCount="indefinite" />
        </line>
        <line x1="200" y1="160" x2="60" y2="90" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <line x1="200" y1="160" x2="340" y2="90" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <line x1="200" y1="160" x2="200" y2="280" stroke="rgba(233,41,41,0.4)" strokeWidth="1.5" strokeDasharray="4 4" />
      </svg>

      {/* Central Hub Node: TQNiA IT */}
      <div className="relative z-20 flex flex-col items-center">
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-[#0A0A0A] border-2 border-[#E92929] shadow-[0_0_40px_rgba(233,41,41,0.35)] flex flex-col items-center justify-center p-2 text-center group cursor-pointer transform hover:scale-105 transition-all">
          <div className="w-8 h-8 rounded-lg bg-[#E92929] text-white font-black flex items-center justify-center mb-1 text-sm shadow-md">
            T
          </div>
          <span className="font-extrabold text-white text-xs sm:text-sm tracking-wide">TQNiA IT</span>
          <span className="text-[9px] text-[#E92929] uppercase font-mono tracking-wider font-semibold">ECOSYSTEM</span>
        </div>
      </div>

      {/* Product Nodes (T STORE, T FOOD, T REAL ESTATE) */}
      {productNodes.map((p) => {
        const Icon = p.icon;
        const isHovered = activeHover === p.id;
        return (
          <div
            key={p.id}
            onMouseEnter={() => setActiveHover(p.id)}
            onMouseLeave={() => setActiveHover(null)}
            className={`absolute z-30 ${p.pos} transition-all duration-300 transform hover:scale-105 cursor-pointer`}
          >
            <div
              className={`flex items-center gap-3 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl border ${
                isHovered
                  ? 'bg-[#141414] border-[#E92929] shadow-[0_0_25px_rgba(233,41,41,0.4)]'
                  : 'bg-[#0A0A0A]/90 border-white/10 shadow-lg'
              }`}
            >
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center text-white"
                style={{ backgroundColor: p.color }}
              >
                <Icon className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="font-bold text-xs sm:text-sm text-white tracking-wide">{p.label}</div>
                <div className="text-[9px] text-slate-400 font-medium">{p.sub}</div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Capability Nodes */}
      {capabilityPills.map((cap) => {
        const Icon = cap.icon;
        return (
          <div
            key={cap.id}
            className={`absolute z-20 ${cap.pos} hidden sm:block transition-transform hover:scale-110 cursor-pointer`}
          >
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#E92929]/60 text-gray-300 hover:text-white text-[10px] font-bold tracking-wider">
              <Icon className="w-3 h-3 text-[#E92929]" />
              <span>{cap.label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HeroEcosystem;
