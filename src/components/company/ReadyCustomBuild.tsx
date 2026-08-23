import React from 'react';
import { Layers, Settings, Wrench } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

const ReadyCustomBuild: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang].paradigm;

  return (
    <section className="py-24 dark:bg-[#000000] bg-slate-50 relative border-t dark:border-white/5 border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#E92929] uppercase bg-[#E92929]/15 px-3.5 py-1.5 rounded-full border border-[#E92929]/40">
            {t.tag}
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black dark:text-white text-slate-900 tracking-tight leading-tight">
            <span>{t.headlinePrefix}</span>
            <span className="text-[#E92929] red-glow-text">{t.headlineHighlight}</span>
            <span>{t.headlineSuffix}</span>
          </h2>

          <p className="text-base sm:text-lg dark:text-gray-300 text-slate-600">
            {t.subText}
          </p>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* READY */}
          <div className="p-8 rounded-3xl dark:bg-[#0A0A0A] bg-white border dark:border-white/10 border-slate-200 hover:border-[#E92929]/40 transition-all duration-300 space-y-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4 text-start">
              <div className="w-14 h-14 rounded-2xl bg-[#E92929]/15 border border-[#E92929]/30 text-[#E92929] flex items-center justify-center font-black text-xl">
                01
              </div>
              <h3 className="text-2xl font-black dark:text-white text-slate-900 tracking-tight">{t.ready.title}</h3>
              <p className="text-xs sm:text-sm dark:text-gray-300 text-slate-600 leading-relaxed">
                {t.ready.desc}
              </p>
            </div>
            <div className="pt-4 border-t dark:border-white/5 border-slate-100 text-xs text-[#E92929] font-semibold flex items-center gap-1.5">
              <Layers className="w-4 h-4" />
              <span>{t.ready.badge}</span>
            </div>
          </div>

          {/* CUSTOM */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-[#E92929] to-[#C01B1B] text-white shadow-2xl shadow-[#E92929]/35 space-y-6 flex flex-col justify-between relative transform lg:-translate-y-2">
            <div className="absolute -top-3.5 right-6 bg-black text-[#E92929] border border-[#E92929]/50 font-extrabold text-[10px] uppercase tracking-widest px-3.5 py-1 rounded-full shadow-lg">
              {t.custom.badge}
            </div>

            <div className="space-y-4 text-start">
              <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center font-black text-xl shadow-lg">
                02
              </div>
              <h3 className="text-2xl font-black text-white tracking-tight">{t.custom.title}</h3>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-medium">
                {t.custom.desc}
              </p>
            </div>
            <div className="pt-4 border-t border-white/20 text-xs text-white font-bold flex items-center gap-1.5">
              <Settings className="w-4 h-4 text-black" />
              <span>{t.custom.label}</span>
            </div>
          </div>

          {/* BUILD */}
          <div className="p-8 rounded-3xl dark:bg-[#0A0A0A] bg-white border dark:border-white/10 border-slate-200 hover:border-[#E92929]/40 transition-all duration-300 space-y-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4 text-start">
              <div className="w-14 h-14 rounded-2xl dark:bg-white/5 bg-slate-100 border dark:border-white/10 border-slate-200 dark:text-white text-slate-800 flex items-center justify-center font-black text-xl">
                03
              </div>
              <h3 className="text-2xl font-black dark:text-white text-slate-900 tracking-tight">{t.build.title}</h3>
              <p className="text-xs sm:text-sm dark:text-gray-300 text-slate-600 leading-relaxed">
                {t.build.desc}
              </p>
            </div>
            <div className="pt-4 border-t dark:border-white/5 border-slate-100 text-xs dark:text-white text-slate-800 font-semibold flex items-center gap-1.5">
              <Wrench className="w-4 h-4 text-[#E92929]" />
              <span>{t.build.badge}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ReadyCustomBuild;
