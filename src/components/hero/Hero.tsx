import React from 'react';
import { Calendar, MessageSquare, MapPin, Award, Users, Server, Globe, Headset, Rocket, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

interface HeroProps {
  onOpenMeeting: () => void;
  onScrollToChallenges: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenMeeting, onScrollToChallenges }) => {
  const { lang } = useLanguage();
  const t = translations[lang].hero;

  const trustMetrics = [
    { number: '20+', label: lang === 'ar' ? 'سنة خبرة' : 'Years Experience', icon: Award },
    { number: '16,350+', label: lang === 'ar' ? 'عميل' : 'Enterprise Clients', icon: Users },
    { number: '151,000+', label: lang === 'ar' ? 'خدمة مدعومة' : 'Supported Services', icon: Server },
    { label: lang === 'ar' ? 'حلول عربية بمقاييس عالمية' : 'Global Arabic Solutions', icon: Globe },
    { label: lang === 'ar' ? 'دعم فني على مدار الساعة' : '24/7 Technical Support', icon: Headset },
    { label: lang === 'ar' ? 'من الفكرة إلى التوسع' : 'From Idea to Enterprise Scale', icon: Rocket },
  ];

  return (
    <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-24 overflow-hidden dark:bg-[#0A0202] bg-slate-900 transition-colors duration-500 min-h-[600px] flex flex-col justify-between">
      
      {/* Full Prominent Hero Tech Background Banner Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/hero-tech-bg.png"
          alt="TQNiA LEAP Tech Hero Background"
          className="w-full h-full object-cover object-center opacity-80 sm:opacity-90 dark:opacity-80 filter dark:brightness-90 contrast-110 transition-all duration-700"
        />
        {/* Soft Vignette Gradients for Crisp Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t dark:from-[#0A0202] dark:via-[#0A0202]/45 dark:to-[#0A0202]/65 from-slate-950 via-slate-950/45 to-slate-950/65" />
        <div className="absolute inset-0 bg-gradient-to-r dark:from-[#0A0202]/85 dark:via-transparent dark:to-[#0A0202]/85 from-slate-950/85 via-transparent to-slate-950/85" />
      </div>

      {/* Red Ambient Glow Accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[300px] sm:h-[450px] bg-[#E92929]/25 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10 w-full my-auto space-y-8 sm:space-y-12">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          
          {/* LEAP 2026 Event Info */}
          <div className="lg:col-span-5 order-2 lg:order-1 text-center lg:text-start space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#E92929] text-white text-[11px] sm:text-xs font-black uppercase tracking-wider shadow-lg shadow-[#E92929]/40">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.leapMeet}</span>
            </div>

            <div className="space-y-1">
              <h2 className="text-3xl min-[400px]:text-4xl sm:text-6xl font-black text-white font-mono tracking-tighter red-glow-text">
                LEAP <span className="text-[#E92929] text-xl min-[400px]:text-2xl sm:text-4xl font-mono">2026</span>
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-slate-200">
                {t.leapLocation}
              </p>
              <p className="text-[11px] sm:text-xs font-mono font-bold text-[#E92929]">
                {t.leapDate}
              </p>
            </div>

            <div className="pt-1 sm:pt-2">
              <button
                onClick={onOpenMeeting}
                className="w-full min-[400px]:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-extrabold text-xs sm:text-sm tracking-wider uppercase text-white bg-[#E92929] hover:bg-[#FF3B3B] transition-all shadow-xl shadow-[#E92929]/40 hover:scale-105"
              >
                <span>{t.leapBadge}</span>
                <MapPin className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Primary Headline & Description Block */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-start order-1 lg:order-2">
            
            <h1 className="text-2xl min-[380px]:text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.2] sm:leading-[1.18] drop-shadow-lg">
              <span>{t.mainHeadlinePrefix}</span>
              <span className="text-[#E92929] red-glow-text font-mono inline-block">
                {t.mainHeadlineHighlight}
              </span>
            </h1>

            <p className="text-sm sm:text-lg text-slate-200 max-w-2xl font-normal leading-relaxed drop-shadow">
              {t.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <button
                onClick={onOpenMeeting}
                className="group relative inline-flex items-center justify-center gap-2.5 sm:gap-3 px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-black text-xs sm:text-sm tracking-wider uppercase text-white bg-[#E92929] hover:bg-[#FF3B3B] transition-all shadow-xl shadow-[#E92929]/50 hover:shadow-[#E92929]/70"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{t.ctaMeeting}</span>
              </button>

              <button
                onClick={onScrollToChallenges}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:px-7 sm:py-4 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase text-white bg-black/60 backdrop-blur-md border border-white/20 hover:border-[#E92929] transition-all shadow-lg"
              >
                <MessageSquare className="w-4 h-4 text-[#E92929]" />
                <span>{t.ctaTalk}</span>
              </button>
            </div>

          </div>

        </div>

        {/* Bottom Trust Metrics Bar */}
        <div className="pt-6 sm:pt-8 border-t border-white/15">
          <div className="grid grid-cols-2 min-[480px]:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-4">
            {trustMetrics.map((m, idx) => {
              const IconComponent = m.icon;
              return (
                <div
                  key={idx}
                  className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-black/60 backdrop-blur-md border border-white/15 text-center space-y-1 sm:space-y-2 shadow-lg hover:border-[#E92929]/50 transition-all group"
                >
                  <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-[#E92929] mx-auto group-hover:scale-110 transition-transform" />
                  {m.number ? (
                    <div className="text-lg sm:text-2xl font-black text-[#E92929] font-mono">
                      {m.number}
                    </div>
                  ) : null}
                  <div className="text-[11px] sm:text-xs font-bold text-white leading-snug">
                    {m.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
