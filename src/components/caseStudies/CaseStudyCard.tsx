import React, { useState } from 'react';
import type { CaseStudy } from '../../types';
import { ArrowRight, CheckCircle2, X } from 'lucide-react';

interface CaseStudyCardProps {
  study: CaseStudy;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ study }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setModalOpen(true)}
        className="group p-8 rounded-3xl bg-[#0A0A0A] border border-white/10 hover:border-[#E92929]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#E92929]/15 cursor-pointer flex flex-col justify-between"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase bg-[#E92929]/15 text-[#E92929] px-2.5 py-1 rounded-md border border-[#E92929]/30">
              {study.category}
            </span>
          </div>

          <h3 className="text-xl font-bold text-white group-hover:text-[#E92929] transition-colors leading-snug">
            {study.title}
          </h3>

          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed line-clamp-2">
            {study.solution}
          </p>

          <div className="pt-3 space-y-2 border-t border-white/5">
            <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
              QUALITATIVE OUTCOMES:
            </div>
            {study.outcome.slice(0, 2).map((out: string, idx: number) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-gray-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E92929] shrink-0" />
                <span className="truncate">{out}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-[#E92929]">
          <span>View Detailed Case Study</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>

      {/* Modal Detail View */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#0A0A0A] border border-white/20 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative space-y-6 shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E92929]">
                {study.category} • Case Study Breakdown
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">{study.title}</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                <h4 className="font-bold text-white text-xs uppercase tracking-wider text-[#E92929]">
                  OPERATIONAL CHALLENGE:
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">{study.challenge}</p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                <h4 className="font-bold text-white text-xs uppercase tracking-wider text-[#E92929]">
                  TQNiA DIGITAL SOLUTION:
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">{study.solution}</p>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="font-bold text-white text-xs uppercase tracking-wider">
                VERIFIED QUALITATIVE OUTCOMES:
              </h4>
              <div className="space-y-2">
                {study.outcome.map((out: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-[#E92929] shrink-0 mt-0.5" />
                    <span>{out}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs">
              <span className="text-slate-400">Deployed Stack: {study.technology.join(', ')}</span>
              <button
                onClick={() => setModalOpen(false)}
                className="px-6 py-2.5 rounded-xl bg-[#E92929] text-white font-bold text-xs uppercase"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CaseStudyCard;
