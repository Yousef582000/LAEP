import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';

const AboutTqnia: React.FC = () => {
  return (
    <section className="py-20 bg-[#000000] relative border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E92929]/15 border border-[#E92929]/30 text-[#E92929] text-xs font-bold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Official Corporate Profile</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-black text-white">
          ABOUT TQNiA IT
        </h2>

        <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          TQNiA IT is a trusted technology and digital transformation partner. We specialize in building scalable digital solutions around the unique operational logic of each business — bridging ready-to-deploy platforms with full custom engineering.
        </p>

        <div className="pt-2">
          <a
            href="https://home.tqniait.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs tracking-wider uppercase text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#E92929] transition-all"
          >
            <span>Visit Official Website (home.tqniait.com)</span>
            <ExternalLink className="w-4 h-4 text-[#E92929]" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default AboutTqnia;
