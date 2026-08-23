import React from 'react';
import { trustHighlights } from '../../data/company';

const TrustSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#000000] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-[#E92929] uppercase bg-[#E92929]/15 px-3.5 py-1.5 rounded-full border border-[#E92929]/30">
            Factual Delivery Track Record
          </span>
          <h2 className="text-3xl font-black text-white">
            PROVEN ENGINEERING & DOMAIN CAPACITY
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustHighlights.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/10 space-y-2 hover:border-[#E92929]/40 transition-all"
            >
              <div className="flex items-center gap-2 text-[#E92929]">
                <span className="w-2 h-2 rounded-full bg-[#E92929]" />
                <span className="font-mono font-bold text-xs uppercase tracking-wider">VERIFIED</span>
              </div>
              <h3 className="font-extrabold text-white text-lg">{item.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrustSection;
