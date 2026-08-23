import React from 'react';
import { testimonialsData } from '../../data/company';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#000000] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#E92929] uppercase bg-[#E92929]/15 px-3.5 py-1.5 rounded-full border border-[#E92929]/30">
            Client Experience
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            WHAT PARTNERS SAY ABOUT TQNiA
          </h2>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#0A0A0A] border border-white/10 space-y-6 flex flex-col justify-between relative overflow-hidden"
            >
              <Quote className="w-10 h-10 text-[#E92929]/40" />

              <p className="text-sm text-gray-200 leading-relaxed font-normal italic">
                "{item.quote}"
              </p>

              <div className="pt-4 border-t border-white/5 space-y-1">
                <div className="font-bold text-white text-sm">{item.author}</div>
                <div className="text-[10px] text-[#E92929] font-semibold">{item.company}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
