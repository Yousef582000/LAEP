import React from 'react';
import type { BusinessChallenge } from '../../types';
import { Cpu, Code2, Layers, Zap, TrendingUp, ArrowRight } from 'lucide-react';

interface ChallengeCardProps {
  challenge: BusinessChallenge;
  isSelected: boolean;
  onSelect: () => void;
}

const iconMap: Record<string, React.ElementType> = {
  Cpu,
  Code2,
  Layers,
  Zap,
  TrendingUp,
};

const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge, isSelected, onSelect }) => {
  const Icon = iconMap[challenge.icon] || Cpu;

  return (
    <div
      onClick={onSelect}
      className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
        isSelected
          ? 'dark:bg-[#140404] bg-white border-[#E92929] shadow-xl shadow-[#E92929]/20 ring-2 ring-[#E92929]'
          : 'dark:bg-[#0A0A0A] bg-white dark:border-white/10 border-slate-200 hover:border-[#E92929]/40 shadow-sm'
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
            isSelected ? 'bg-[#E92929] text-white shadow-md shadow-[#E92929]/30' : 'dark:bg-white/5 bg-slate-100 text-[#E92929]'
          }`}
        >
          <Icon className="w-6 h-6" />
        </div>
        <span
          className={`text-xs font-mono font-bold tracking-widest px-2.5 py-1 rounded-full border ${
            isSelected
              ? 'bg-[#E92929]/20 text-[#E92929] border-[#E92929]/40 font-extrabold'
              : 'dark:bg-white/5 bg-slate-100 dark:text-slate-400 text-slate-600 border-transparent'
          }`}
        >
          {challenge.title}
        </span>
      </div>

      <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2 tracking-tight">{challenge.title}</h3>
      <p className="text-xs sm:text-sm dark:text-gray-300 text-slate-600 line-clamp-2 leading-relaxed mb-4">{challenge.summary}</p>

      <div className="flex items-center justify-between pt-3 border-t dark:border-white/5 border-slate-100 text-xs font-semibold text-[#E92929]">
        <span>View Solution Path</span>
        <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1' : ''}`} />
      </div>
    </div>
  );
};

export default ChallengeCard;
