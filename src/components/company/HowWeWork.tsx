import React from 'react';
import { ArrowRight, Activity } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

const HowWeWork: React.FC = () => {
  const { lang, isRtl } = useLanguage();
  const t = translations[lang].howWeWork;

  const stepsList = [
    { step: '01', title: lang === 'ar' ? 'الاستكشاف والتحليل' : 'DISCOVER', description: lang === 'ar' ? 'تحليل التحديات التشغيلية، ودراسة متطلبات العمل بدقة.' : 'Analyze business operational bottlenecks & technical requirements.' },
    { step: '02', label: lang === 'ar' ? 'التخطيط والهندسة' : 'DEFINE', title: lang === 'ar' ? 'التخطيط والتصميم' : 'DEFINE', description: lang === 'ar' ? 'تحديد الخريطة البرمجية، هندسة الحل، واختيار المنصة.' : 'Architect the solution blueprint, technology stack & data flows.' },
    { step: '03', title: lang === 'ar' ? 'تصميم التجربة' : 'DESIGN', description: lang === 'ar' ? 'تصميم واجهات مستخدم مريحة وسلسة (UI/UX).' : 'Craft intuitive, high-converting enterprise UI/UX interfaces.' },
    { step: '04', title: lang === 'ar' ? 'التطوير والربط' : 'BUILD', description: lang === 'ar' ? 'برمجة الحل، أتمتة المسارات، والتكامل مع بوابات الدفع.' : 'Agile software engineering, workflow automation & API integration.' },
    { step: '05', title: lang === 'ar' ? 'الاختبار والإطلاق' : 'LAUNCH', description: lang === 'ar' ? 'اختبار الأمان والأداء والإطلاق المباشر في بيئة العمل.' : 'Rigorous QA testing, security audits & seamless deployment.' },
    { step: '06', title: lang === 'ar' ? 'النمو والدعم' : 'GROW', description: lang === 'ar' ? 'الدعم التقني المستمر، والتطوير لمكافأة توسع شركتك.' : 'Continuous technical support, optimization & feature expansion.' },
  ];

  return (
    <section id="how-we-work" className="py-24 dark:bg-gradient-to-r dark:from-[#1C0404] dark:via-[#050505] dark:to-[#1C0404] bg-slate-100 relative border-t dark:border-[#E92929]/20 border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E92929]/15 border border-[#E92929]/40 text-[#E92929] text-xs font-bold uppercase tracking-widest">
            <Activity className="w-3.5 h-3.5" />
            <span>{t.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black dark:text-white text-slate-900 tracking-tight">
            {t.title}
          </h2>

          <p className="text-base sm:text-lg dark:text-gray-300 text-slate-600">
            {t.subtitle}
          </p>
        </div>

        {/* 6 Steps Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {stepsList.map((s, idx) => (
            <div
              key={s.step}
              className="p-6 rounded-2xl dark:bg-[#0A0A0A] bg-white border dark:border-[#E92929]/30 border-slate-200 hover:border-[#E92929] transition-all duration-300 space-y-3 relative group hover:-translate-y-1 shadow-md text-start"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#E92929] text-white">
                  {s.step}
                </span>
                {idx < stepsList.length - 1 && (
                  <ArrowRight className={`hidden lg:block w-4 h-4 text-[#E92929]/60 absolute z-10 ${isRtl ? '-left-2 rotate-180' : '-right-2'}`} />
                )}
              </div>

              <h3 className="text-lg font-bold dark:text-white text-slate-900 tracking-tight">{s.title}</h3>
              <p className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowWeWork;
