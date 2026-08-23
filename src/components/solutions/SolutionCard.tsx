import React from 'react';
import type { SolutionPillar } from '../../types';
import { RefreshCw, Sliders, Code, ShoppingBag, Share2, Layout, Check } from 'lucide-react';

interface SolutionCardProps {
  solution: SolutionPillar;
}

const iconMap: Record<string, React.ElementType> = {
  RefreshCw,
  Sliders,
  Code,
  ShoppingBag,
  Share2,
  Layout,
};

const SolutionCard: React.FC<SolutionCardProps> = ({ solution }) => {
  const Icon = iconMap[solution.iconName] || Code;

  return (
    <div className="group p-8 rounded-3xl bg-[#0A0A0A] border border-white/10 hover:border-[#E92929]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#E92929]/15 flex flex-col justify-between">
      <div className="space-y-4">
        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-[#E92929] group-hover:text-white text-[#E92929] flex items-center justify-center transition-all duration-300">
          <Icon className="w-7 h-7" />
        </div>

        <h3 className="text-xl font-black text-white tracking-tight group-hover:text-[#E92929] transition-colors">
          {solution.title}
        </h3>

        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
          {solution.description}
        </p>

        <div className="pt-4 border-t border-white/5 space-y-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold block">
            CORE CAPABILITIES:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {solution.capabilities.map((cap, idx) => (
              <div key={idx} className="flex items-center gap-1.5 text-xs text-gray-300">
                <Check className="w-3.5 h-3.5 text-[#E92929] shrink-0" />
                <span className="truncate">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionCard;
