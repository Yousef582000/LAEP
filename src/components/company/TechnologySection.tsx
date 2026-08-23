import React from 'react';
import { Server, Lock, Cpu, Cloud, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

const iconMap: Record<string, React.ElementType> = {
  Server,
  Lock,
  Cpu,
  Cloud,
  Globe,
};

const TechnologySection: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang].tech;

  const techList = [
    {
      title: lang === 'ar' ? 'البنية السحابية القابلة للتوسع' : 'Scalable Microservices Architecture',
      description: lang === 'ar' ? 'تصل البنية التحتية بين مختلف الخدمات لمعالجة آلاف الطلبات والبيانات المتزامنة دون توقف.' : 'Decoupled services engineered for high-concurrency request processing and zero downtime.',
      icon: 'Server',
    },
    {
      title: lang === 'ar' ? 'تأمين البيانات والتشفير' : 'Enterprise Data Encryption & Security',
      description: lang === 'ar' ? 'تشفير شامل للبيانات أثناء النقل والتخزين، مع حماية متقدمة ضد الثغرات السيبرانية.' : 'End-to-end encryption in transit and at rest with proactive vulnerability auditing.',
      icon: 'Lock',
    },
    {
      title: lang === 'ar' ? 'تكامل واجهات الـ API' : 'High-Performance API Integration',
      description: lang === 'ar' ? 'واجهات برمجة RESTful وGraphQL سريعة وموثوقة لربط الأنظمة وبوابات الدفع.' : 'Ultra-fast RESTful and GraphQL endpoints connecting legacy ERPs, CRMs, and payment systems.',
      icon: 'Cpu',
    },
    {
      title: lang === 'ar' ? 'الامتثال للأنظمة المحلية (NCA)' : 'Saudi Sovereignty & NCA Compliance',
      description: lang === 'ar' ? 'التزام تام بتعليمات استضافة البيانات داخل المملكة الضوابط الأساسية للأمن السيبراني.' : 'Full compliance with Saudi Arabia data sovereignty laws and NCA cybersecurity baselines.',
      icon: 'Cloud',
    },
  ];

  return (
    <section className="py-24 dark:bg-[#000000] bg-slate-50 relative border-t dark:border-white/5 border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#E92929] uppercase bg-[#E92929]/15 px-3.5 py-1.5 rounded-full border border-[#E92929]/30">
            {t.tag}
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black dark:text-white text-slate-900 tracking-tight">
            {t.title}
          </h2>

          <p className="text-base sm:text-lg dark:text-gray-300 text-slate-600">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techList.map((item, idx) => {
            const Icon = iconMap[item.icon] || Server;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl dark:bg-[#0A0A0A] bg-white border dark:border-white/10 border-slate-200 hover:border-[#E92929]/40 transition-all duration-300 space-y-4 group shadow-sm text-start"
              >
                <div className="w-12 h-12 rounded-xl dark:bg-white/5 bg-slate-100 border dark:border-white/10 border-slate-200 group-hover:bg-[#E92929] group-hover:text-white text-[#E92929] flex items-center justify-center transition-all">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold dark:text-white text-slate-900 tracking-tight">{item.title}</h3>
                <p className="text-xs sm:text-sm dark:text-slate-400 text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Regional Security Compliance Callout */}
        <div className="mt-12 p-6 rounded-2xl dark:bg-white/5 bg-white border dark:border-white/10 border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs shadow-sm">
          <div className="flex items-center gap-3">
            <Lock className="w-5 h-5 text-[#E92929]" />
            <div className="text-start">
              <span className="font-bold dark:text-white text-slate-900 block">{t.compliance}</span>
              <span className="dark:text-slate-400 text-slate-600">{t.complianceSub}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechnologySection;
