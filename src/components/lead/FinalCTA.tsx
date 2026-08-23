import React from 'react';
import { Calendar, ArrowDown, MessageSquare, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

interface FinalCTAProps {
  onOpenMeeting: () => void;
  onScrollToForm: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenMeeting, onScrollToForm }) => {
  const { lang } = useLanguage();
  const t = translations[lang].cta;

  const whatsappNumber = '966565515077';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lang === 'ar' ? 'مرحباً فريق تقنية IT، أرغب في الاستفسار عن الحلول الرقمية لمعرض ليب 2026.' : 'Hello TQNiA IT Team, I want to discuss a digital solution for LEAP 2026.')}`;

  return (
    <section className="py-24 dark:bg-gradient-to-b dark:from-[#2B0505] dark:via-[#120202] dark:to-[#000000] bg-slate-100 relative border-t dark:border-[#E92929]/30 border-slate-200 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#E92929]/20 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E92929]/20 border border-[#E92929]/50 text-[#E92929] text-xs font-bold uppercase tracking-widest">
          <Sparkles className="w-4 h-4" />
          <span>{t.tag}</span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black dark:text-white text-slate-900 tracking-tight leading-tight">
          <span>{t.titlePrefix}</span>
          <span className="text-[#E92929] red-glow-text">
            {t.titleHighlight}
          </span>
        </h2>

        <p className="text-base sm:text-xl dark:text-gray-300 text-slate-600 max-w-2xl mx-auto leading-relaxed">
          {t.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenMeeting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-sm tracking-wider uppercase text-white bg-[#E92929] hover:bg-[#FF3B3B] transition-all shadow-2xl shadow-[#E92929]/45 hover:shadow-[#E92929]/65 hover:-translate-y-0.5"
          >
            <Calendar className="w-5 h-5" />
            <span>{t.bookMeeting}</span>
          </button>

          <button
            onClick={onScrollToForm}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-sm tracking-wider uppercase dark:text-white text-slate-800 dark:bg-white/5 bg-white border dark:border-white/20 border-slate-300 hover:border-[#E92929] transition-all shadow-sm"
          >
            <span>{t.tellChallenge}</span>
            <ArrowDown className="w-4 h-4 text-[#E92929]" />
          </button>
        </div>

        <div className="pt-6">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-500 hover:text-emerald-400 transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{t.whatsapp}</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;
