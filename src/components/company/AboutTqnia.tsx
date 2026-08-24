import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

const AboutTqnia: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang].about;

  return (
    <section className="py-20 dark:bg-[#000000] bg-slate-100 relative border-t dark:border-white/5 border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E92929]/15 border border-[#E92929]/30 text-[#E92929] text-xs font-bold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.tag}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-black dark:text-white text-slate-900">
          {t.title}
        </h2>

        <p className="text-base sm:text-lg dark:text-gray-300 text-slate-600 max-w-3xl mx-auto leading-relaxed">
          {t.description}
        </p>

        <div className="pt-2">
          <a
            href="https://home.tqniait.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs tracking-wider uppercase dark:text-white text-slate-800 dark:bg-white/5 bg-white hover:dark:bg-white/10 hover:bg-slate-200 border dark:border-white/15 border-slate-300 hover:border-[#E92929] dark:hover:border-[#E92929] transition-all shadow-sm"
          >
            <span>{t.websiteBtn}</span>
            <ExternalLink className="w-4 h-4 text-[#E92929]" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default AboutTqnia;
