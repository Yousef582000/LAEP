import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

const WhyTqnia: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang].whyTqnia;

  const reasonsList = [
    {
      number: '01',
      title: lang === 'ar' ? 'حلول تتلاءم مع نموذج عملك' : 'Business-First Focus',
      description: lang === 'ar' ? 'نحن لا نفرض قوالب جاهزة؛ بل نبني ونخصص التقنية لتتطابق تماماً مع نمط تشغيل شركتك.' : "We don't force your operations into static code; we adapt technology around your workflow."
    },
    {
      number: '02',
      title: lang === 'ar' ? 'منصات جاهزة للإطلاق المباشر' : 'Proven Digital Foundations',
      description: lang === 'ar' ? 'منصات جاهزة ومجربة (T STORE, T FOOD, T REAL ESTATE) تسمح بالبدء الفوري دون الانتظار.' : 'Launch immediately using proven architecture (T STORE, T FOOD, T REAL ESTATE) instead of starting from zero.'
    },
    {
      number: '03',
      title: lang === 'ar' ? 'مرونة التخصيص الكامل' : 'Customization Without Friction',
      description: lang === 'ar' ? 'مرونة تعديل الهوية، مسارات العمل، وبوابات الدفع المحلية دون تعقيد.' : 'Tailor branding, approval routing, role permissions, and local gateway integrations easily.'
    },
    {
      number: '04',
      title: lang === 'ar' ? 'خبرة محليّة وحضور في الرياض' : 'Saudi Market Mastery & Presence',
      description: lang === 'ar' ? 'فهم عميق للأنظمة واللوائح السعودية (كالفوترة الإلكترونية وتأمين البيانات) والدعم التقني المباشر.' : 'Deep compliance with Saudi regulations (ZATCA e-invoicing, NCA data sovereignty) and local support in Riyadh.'
    },
    {
      number: '05',
      title: lang === 'ar' ? 'بنية برمجية مهيأة للتوسع' : 'Enterprise Engineering Architecture',
      description: lang === 'ar' ? 'أنظمة مصممة لتحمل التوسع في حجم المبيعات والعملاء دون انخفاض في السرعة أو الأداء.' : 'High-concurrency systems engineered to support rapid business growth with zero downtime.'
    },
    {
      number: '06',
      title: lang === 'ar' ? 'شراكة مستمرة بعد الإطلاق' : 'Continuous Partnership & Growth',
      description: lang === 'ar' ? 'نحن لسنا مجرد منفذ للمشروع، بل شريك تقني يرافقك بالدعم والتطوير المستمر.' : 'We are long-term technical partners providing ongoing maintenance, security updates, and feature evolution.'
    }
  ];

  return (
    <section id="why-tqnia" className="py-24 dark:bg-[#000000] bg-slate-50 relative border-t dark:border-white/5 border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E92929]/15 border border-[#E92929]/40 text-[#E92929] text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black dark:text-white text-slate-900 tracking-tight">
            {t.title}
          </h2>

          <p className="text-base sm:text-lg dark:text-gray-300 text-slate-600">
            {t.subtitle}
          </p>
        </div>

        {/* 6 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasonsList.map((item) => (
            <div
              key={item.number}
              className="p-8 rounded-3xl dark:bg-[#0A0A0A] bg-white border dark:border-white/10 border-slate-200 hover:border-[#E92929]/50 transition-all duration-300 hover:-translate-y-1 space-y-4 relative overflow-hidden group shadow-sm text-start"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black font-mono text-[#E92929]/40 group-hover:text-[#E92929] transition-colors">
                  {item.number}
                </span>
                <CheckCircle2 className="w-5 h-5 text-[#E92929]" />
              </div>

              <h3 className="text-xl font-bold dark:text-white text-slate-900 tracking-tight">{item.title}</h3>
              <p className="text-xs sm:text-sm dark:text-gray-300 text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyTqnia;
