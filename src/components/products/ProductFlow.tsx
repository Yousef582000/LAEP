import React from 'react';
import type { BusinessFlowStep } from '../../types';
import { ArrowRight } from 'lucide-react';

interface ProductFlowProps {
  flow: BusinessFlowStep[];
  accentColor: string;
}

const ProductFlow: React.FC<ProductFlowProps> = ({ flow, accentColor }) => {
  return (
    <div className="space-y-4 pt-4 border-t border-white/10">
      <h4 className="text-xs font-mono uppercase tracking-widest font-bold text-gray-400">
        OPERATIONAL BUSINESS FLOW:
      </h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {flow.map((f, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5 relative group hover:border-white/20 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span
                className="text-xs font-mono font-black px-2 py-0.5 rounded text-black"
                style={{ backgroundColor: accentColor }}
              >
                STEP {f.step}
              </span>
              {idx < flow.length - 1 && (
                <ArrowRight className="hidden lg:block w-4 h-4 text-gray-500 absolute -right-2 top-1/2 -translate-y-1/2 z-10" />
              )}
            </div>

            <h5 className="font-bold text-white text-xs">{f.label}</h5>
            <p className="text-[11px] text-gray-400 leading-snug">{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFlow;
