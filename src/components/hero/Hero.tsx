import React from 'react';
import { Calendar, ArrowDown, ChevronRight } from 'lucide-react';
import LeapBadge from './LeapBadge';
import HeroEcosystem from './HeroEcosystem';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

interface HeroProps {
  onOpenMeeting: () => void;
  onScrollToChallenges: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenMeeting, onScrollToChallenges }) => {
  const { lang, isRtl } = useLanguage();
  const t = translations[lang].hero;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern dark:bg-black/40 bg-slate-50/50">
      {/* Top Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#E92929]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left / Right Column based on LTR/RTL */}
          <div className="lg:col-span-7 space-y-6 text-start">
            <div className="flex items-center gap-3">
              <LeapBadge size="md" />
              <span className="text-xs font-mono dark:text-slate-400 text-slate-500 uppercase tracking-widest font-semibold">
                {t.eventEdition}
              </span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight dark:text-white text-slate-900 leading-[1.15]">
              <span>{t.mainHeadlinePrefix}</span>
              <span className="text-[#E92929] red-glow-text">
                {t.mainHeadlineHighlight}
              </span>
            </h1>

            {/* Supporting Headline Matrix */}
            <div className="inline-flex flex-wrap items-center gap-2 py-1">
              {t.pills.map((item, idx) => (
                <span
                  key={idx}
                  className="text-xs sm:text-sm font-semibold dark:text-gray-200 text-slate-700 dark:bg-white/5 bg-white border dark:border-white/10 border-slate-200 px-3 py-1 rounded-lg backdrop-blur-md shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Hero Supporting Message */}
            <p className="text-base sm:text-lg dark:text-gray-300 text-slate-600 max-w-2xl font-normal leading-relaxed">
              {t.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenMeeting}
                className="group relative inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl font-bold text-sm tracking-wider uppercase text-white bg-[#E92929] hover:bg-[#FF3B3B] transition-all shadow-xl shadow-[#E92929]/35 hover:shadow-[#E92929]/55 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Calendar className="w-5 h-5" />
                <span>{t.ctaMeeting}</span>
                <ChevronRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${isRtl ? 'rotate-180' : ''}`} />
              </button>

              <button
                onClick={onScrollToChallenges}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm tracking-wider uppercase dark:text-white text-slate-800 dark:bg-white/5 bg-white border dark:border-white/15 border-slate-300 hover:border-[#E92929] transition-all backdrop-blur-md shadow-sm"
              >
                <span>{t.ctaChallenge}</span>
                <ArrowDown className="w-4 h-4 text-[#E92929]" />
              </button>
            </div>

            {/* Value Proposition Pills */}
            <div className="pt-6 border-t dark:border-white/10 border-slate-200 flex flex-wrap items-center gap-6 text-xs dark:text-slate-400 text-slate-500">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E92929]" />
                <span>{t.propReady}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>{t.propRiyadh}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span>{t.propCustom}</span>
              </div>
            </div>
          </div>

          {/* Right / Left Column: Dynamic Ecosystem Graph */}
          <div className="lg:col-span-5">
            <HeroEcosystem />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
