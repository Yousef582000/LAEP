import React, { useState } from 'react';
import ChallengeCard from './ChallengeCard';
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

interface ChallengeSectionProps {
  onSelectChallengeForForm: (challengeId: string) => void;
}

const ChallengeSection: React.FC<ChallengeSectionProps> = ({ onSelectChallengeForForm }) => {
  const [selectedId, setSelectedId] = useState<string>('automate');
  const { lang, isRtl } = useLanguage();
  const t = translations[lang].challenges;

  const challengesList = [
    {
      id: 'automate',
      title: t.tabs.automate.title,
      summary: t.tabs.automate.summary,
      description: lang === 'ar' ? 'تصميم وبناء أنظمة تشغيلية مؤتمتة تسهم في اختصار أوقات التنفيذ وإلغاء الاعتماد على المعاملات الورقية واليدوية.' : 'Design and deploy automated workflow engines that accelerate transaction cycles and eliminate manual data entry.',
      outcomes: lang === 'ar' ? ['تقليل تكاليف التشغيل', 'سرعة إنجاز المعاملات', 'ربط الدوائر الداخلية'] : ['Reduce operational costs', 'Accelerate cycle times', 'Connect internal departments'],
      icon: 'Cpu'
    },
    {
      id: 'build',
      title: t.tabs.build.title,
      summary: t.tabs.build.summary,
      description: lang === 'ar' ? 'بناء وتطوير تطبيقات الجوال والمنصات السحابية من الفكرة إلى الإطلاق الكامل وفق أعلى معايير تجربة المستخدم.' : 'Full-stack custom product engineering from initial design sprint to enterprise production launch.',
      outcomes: lang === 'ar' ? ['امتلاك الملكية الفكرية بالكامل', 'تجربة مستخدم سلسة', 'قابلة للتطوير المستمر'] : ['Own full IP ownership', 'Seamless UX/UI', 'Scalable microservices'],
      icon: 'Code2'
    },
    {
      id: 'integrate',
      title: t.tabs.integrate.title,
      summary: t.tabs.integrate.summary,
      description: lang === 'ar' ? 'تكامل سلس عبر واجهات البرمجة APIs لربط المنظومات المحاسبية والمخازن وبوابات الدفع المحلية دون انقطاع.' : 'Robust API integration connecting ERPs, local Saudi payment gateways, POS, and inventory ledgers.',
      outcomes: lang === 'ar' ? ['تطابق البيانات لحظياً', 'دعم بوابات الدفع المحلية', 'ربط أنظمة المحاسبة والـ ERP'] : ['Real-time data sync', 'Local gateway support', 'ERP & Ledger sync'],
      icon: 'Layers'
    },
    {
      id: 'modernize',
      title: t.tabs.modernize.title,
      summary: t.tabs.modernize.summary,
      description: lang === 'ar' ? 'تحديث وتطوير الأنظمة القديمة ونقلها إلى السحابة مع ضمان استمرارية التشغيل وأمان البيانات.' : 'Legacy system refactoring, cloud migration, and modern architectural transformation with zero downtime.',
      outcomes: lang === 'ar' ? ['أمان عالي ومعايير سيبرانية', 'سرعة الاستجابة والتحميل', 'سهولة الصيانة والتوسعة'] : ['High security compliance', 'Fast API response times', 'Easier maintenance'],
      icon: 'Zap'
    },
    {
      id: 'grow',
      title: t.tabs.grow.title,
      summary: t.tabs.grow.summary,
      description: lang === 'ar' ? 'توسيع القدرة الاستيعابية للبنية التحتية البرمجية لخدمة آلاف المستخدمين والطلبات المتزامنة بكفاءة.' : 'Infrastructure scaling and high-availability architecture engineered to support enterprise market expansion.',
      outcomes: lang === 'ar' ? ['تحمل الضغط العالي والزخم', 'أداء مستقر بدون تباطؤ', 'مرونة التوسع الإقليمي'] : ['High traffic concurrency', 'Stable zero-downtime ops', 'Regional expansion scale'],
      icon: 'TrendingUp'
    },
  ];

  const selectedChallenge = challengesList.find((c) => c.id === selectedId) || challengesList[0];

  return (
    <section id="challenges" className="py-24 dark:bg-gradient-to-b dark:from-[#000000] dark:via-[#1A0303] dark:to-[#000000] bg-slate-100/70 relative border-t dark:border-[#E92929]/20 border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E92929]/15 border border-[#E92929]/40 text-[#E92929] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black dark:text-white text-slate-900 tracking-tight">
            {t.title}
          </h2>

          <p className="text-base sm:text-lg dark:text-gray-300 text-slate-600">
            {t.subtitle}
          </p>
        </div>

        {/* 5 Selectable Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {challengesList.map((challenge) => (
            <ChallengeCard
              key={challenge.id}
              challenge={{
                id: challenge.id as any,
                title: challenge.title,
                summary: challenge.summary,
                description: challenge.description,
                outcomes: challenge.outcomes,
                solutionCategories: [],
                icon: challenge.icon,
              }}
              isSelected={challenge.id === selectedId}
              onSelect={() => setSelectedId(challenge.id)}
            />
          ))}
        </div>

        {/* Dynamic Detail Outcome Drawer */}
        <div className="glass-panel-red p-6 sm:p-10 rounded-3xl border border-[#E92929]/40 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#E92929]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Summary & Outcomes */}
            <div className="lg:col-span-12 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold tracking-widest uppercase bg-[#E92929] text-white px-3 py-1 rounded-full shadow-md">
                  {t.targetOutcome}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold dark:text-white text-slate-900">
                  {selectedChallenge.title} {t.path}
                </h3>
              </div>

              <p className="text-base dark:text-gray-300 text-slate-700 leading-relaxed">
                {selectedChallenge.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-bold dark:text-slate-400 text-slate-500 uppercase tracking-widest">
                  {t.keyBenefits}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {selectedChallenge.outcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm dark:text-gray-200 text-slate-800 p-3 rounded-xl dark:bg-white/5 bg-white border dark:border-white/10 border-slate-200">
                      <CheckCircle2 className="w-5 h-5 text-[#E92929] shrink-0" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onSelectChallengeForForm(selectedChallenge.title)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs tracking-wider uppercase text-white bg-[#E92929] hover:bg-[#FF3B3B] transition-all shadow-lg shadow-[#E92929]/30"
                >
                  <span>{t.ctaSolve}</span>
                  <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ChallengeSection;
