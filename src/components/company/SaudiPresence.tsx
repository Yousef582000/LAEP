import React from 'react';
import { saudiPresenceInfo } from '../../data/company';
import { MapPin, Phone, Mail, Globe, Navigation, Landmark } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

const SaudiPresence: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang].presence;

  return (
    <section className="py-24 dark:bg-[#000000] bg-slate-100 relative border-t dark:border-white/5 border-slate-200 overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#E92929]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & Contact Info */}
          <div className="lg:col-span-6 space-y-6 text-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E92929]/15 border border-[#E92929]/30 text-[#E92929] text-xs font-bold uppercase tracking-widest">
              <Landmark className="w-4 h-4" />
              <span>{t.tag}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black dark:text-white text-slate-900 tracking-tight leading-tight">
              <span>{t.titlePrefix}</span>
              <span className="text-[#E92929] red-glow-text">{t.titleHighlight}</span>
            </h2>

            <p className="text-base sm:text-lg dark:text-gray-300 text-slate-600 leading-relaxed font-normal">
              {t.description}
            </p>

            {/* Official Contact Details Card */}
            <div className="p-6 rounded-2xl dark:bg-[#0A0A0A] bg-white border dark:border-white/10 border-slate-200 space-y-4 shadow-md">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#E92929]">
                {t.hqTitle}
              </h3>

              <div className="space-y-3 text-sm dark:text-gray-200 text-slate-800">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#E92929] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold dark:text-white text-slate-900">{t.address}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t dark:border-white/5 border-slate-100">
                  <Phone className="w-4 h-4 text-[#E92929] shrink-0" />
                  <a href={`tel:${saudiPresenceInfo.phone}`} className="hover:text-[#E92929] transition-colors font-mono">
                    {saudiPresenceInfo.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#E92929] shrink-0" />
                  <a href={`mailto:${saudiPresenceInfo.email}`} className="hover:text-[#E92929] transition-colors font-mono">
                    {saudiPresenceInfo.email}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-[#E92929] shrink-0" />
                  <a href={saudiPresenceInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-[#E92929] transition-colors font-mono text-xs dark:text-slate-400 text-slate-500">
                    home.tqniait.com
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Visual Location Spotlight Card */}
          <div className="lg:col-span-6">
            <div className="glass-panel p-8 rounded-3xl border border-[#E92929]/40 relative overflow-hidden text-center space-y-6 shadow-2xl">
              <div className="w-20 h-20 mx-auto rounded-3xl bg-[#E92929] flex items-center justify-center text-white font-black text-3xl shadow-xl shadow-[#E92929]/35">
                KSA
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#E92929] font-bold">
                  {t.spotlight}
                </span>
                <h3 className="text-2xl font-black dark:text-white text-slate-900">
                  {t.spotlightTitle}
                </h3>
                <p className="text-xs dark:text-gray-300 text-slate-600 max-w-md mx-auto leading-relaxed">
                  {t.spotlightDesc}
                </p>
              </div>

              <div className="p-4 rounded-xl dark:bg-white/5 bg-slate-100 border dark:border-white/5 border-slate-200 inline-flex items-center gap-3 text-xs font-semibold dark:text-gray-200 text-slate-800">
                <Navigation className="w-4 h-4 text-[#E92929]" />
                <span>{t.address}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SaudiPresence;
