import React from 'react';
import { Sparkles } from 'lucide-react';

interface LeapBadgeProps {
  size?: 'sm' | 'md' | 'lg';
}

const LeapBadge: React.FC<LeapBadgeProps> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-[10px] px-2.5 py-1 gap-1.5',
    md: 'text-xs px-3.5 py-1.5 gap-2',
    lg: 'text-sm px-4 py-2 gap-2.5',
  };

  return (
    <div className={`inline-flex items-center rounded-full bg-gradient-to-r from-[#E92929]/20 via-white/5 to-[#E92929]/10 border border-[#E92929]/40 text-[#E92929] font-bold tracking-wider uppercase backdrop-blur-md shadow-lg shadow-[#E92929]/15 ${sizeClasses[size]}`}>
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E92929] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E92929]"></span>
      </span>
      <span className="text-white font-extrabold">LEAP 2026</span>
      <span className="text-[#E92929]/60">•</span>
      <span className="text-gray-300">RIYADH</span>
      <Sparkles className="w-3.5 h-3.5 text-[#E92929]" />
    </div>
  );
};

export default LeapBadge;
