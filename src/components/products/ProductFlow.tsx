import React from 'react';
import type { BusinessFlowStep } from '../../types';
import { ArrowRight } from 'lucide-react';

interface ProductFlowProps {
  flow: BusinessFlowStep[];
  accentColor: string;
}

const ProductFlow: React.FC<ProductFlowProps> = ({ flow, accentColor }) => {
  return (
    <div className="space-y-4 pt-6 border-t dark:border-white/10 border-slate-300">
      <h4 className="text-xs font-mono uppercase tracking-widest font-bold dark:text-slate-400 text-slate-600">
        OPERATIONAL BUSINESS FLOW:
      </h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {flow.map((f, idx) => (
          <div
            key={idx}
            className="p-4 rounded-2xl dark:bg-black/50 bg-white border dark:border-white/10 border-slate-200/80 space-y-2 relative group hover:border-[#E92929]/50 transition-colors shadow-sm text-start"
          >
            <div className="flex items-center justify-between">
              <span
                className="text-[11px] font-mono font-extrabold px-2.5 py-0.5 rounded-md text-white shadow-sm"
                style={{ backgroundColor: accentColor }}
              >
                STEP {f.step}
              </span>
              {idx < flow.length - 1 && (
                <ArrowRight className="hidden lg:block w-4 h-4 dark:text-slate-500 text-slate-400 absolute -right-2 top-1/2 -translate-y-1/2 z-10" />
              )}
            </div>

            <h5 className="font-bold dark:text-white text-slate-900 text-xs sm:text-sm">{f.label}</h5>
            <p className="text-[11px] sm:text-xs dark:text-slate-400 text-slate-600 leading-relaxed font-normal">{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFlow;
