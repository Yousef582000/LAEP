import React from 'react';
import SolutionCard from './SolutionCard';
import { Layers, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

interface SolutionPillarsProps {
  onScrollToProducts: () => void;
}

const SolutionPillars: React.FC<SolutionPillarsProps> = ({ onScrollToProducts }) => {
  const { lang, isRtl } = useLanguage();
  const t = translations[lang].solutions;

  const solutionsList = [
    {
      id: 'digital-transformation',
      title: lang === 'ar' ? 'التحول الرقمي الشامل' : 'Digital Transformation Strategy',
      description: lang === 'ar' ? 'تحويل الأنماط والعمليات المدرسية واليدوية إلى مسارات رقمية سريعة ومتصلة تحقق أهداف الشركة الاستراتيجية.' : 'Re-engineering enterprise operational workflows into agile, data-driven cloud digital infrastructure.',
      capabilities: lang === 'ar' ? ['تحليل نماذج العمل', 'أتمتة المسارات', 'هندسة الأنظمة السحابية', 'إدارة التغيير الرقمي'] : ['Business Architecture', 'Workflow Automation', 'Cloud Migration', 'Digital Governance'],
      iconName: 'RefreshCw',
    },
    {
      id: 'business-automation',
      title: lang === 'ar' ? 'أتمتة سير العمليات' : 'Business Process Automation',
      description: lang === 'ar' ? 'إلغاء الاعتماد على الإدخال اليدوي، وتقليل نسبة الأخطاء البشرية وتسريع دوران المعاملات بين الأقسام.' : 'Eliminating manual processing, accelerating approval cycles, and integrating inter-departmental data feeds.',
      capabilities: lang === 'ar' ? ['محرك الموافقات الآلي', 'الربط الداخلي', 'الحد من الأخطاء', 'إشعارات العمليات'] : ['Approval Routing', 'Inter-departmental API', 'Error Prevention', 'Event Triggers'],
      iconName: 'Sliders',
    },
    {
      id: 'custom-software',
      title: lang === 'ar' ? 'هندسة البرمجيات والتطبيقات' : 'Custom Software Engineering',
      description: lang === 'ar' ? 'بناء تطبيقات الجوال والمنصات السحابية المخصصة من الصفر وفقاً لمتطلبات عملك التنافسية والخاصة.' : 'Full-lifecycle web and mobile application engineering built around your competitive advantage and proprietary logic.',
      capabilities: lang === 'ar' ? ['تطبيقات iOS & Android', 'أنظمة الويب المتكاملة', 'Microservices', 'بنية سحابية آمنة'] : ['iOS & Android Apps', 'Enterprise Web Portals', 'Microservices', 'Secure Cloud Arch'],
      iconName: 'Code',
    },
    {
      id: 'ecommerce-marketplaces',
      title: lang === 'ar' ? 'منصات التجارة الرقمية' : 'E-Commerce & Marketplaces',
      description: lang === 'ar' ? 'تطوير وتشغيل منصات البيع المتعددة التجار والمتاجر الإلكترونية المتكاملة مع بوابات الدفع والشحن.' : 'Scalable multi-vendor e-commerce platforms with automated vendor onboarding, commission engines, and payment split.',
      capabilities: lang === 'ar' ? ['منصات متعددة التجار', 'بوابات الدفع المحلية', 'مزامنة المخازن', 'إدارة العروض والعمولات'] : ['Multi-Vendor Portals', 'Local Gateway Integration', 'Inventory Sync', 'Commission Engine'],
      iconName: 'ShoppingBag',
    },
    // {
    //   id: 'system-integration',
    //   title: lang === 'ar' ? 'ربط وتكامل الأنظمة APIs' : 'System Integration & APIs',
    //   description: lang === 'ar' ? 'توحيد بيانات الأنظمة المستقلة، والأنظمة المحاسبية (ERP)، والمخازن، وبوابات الدفع في بيئة واحدة متكاملة.' : 'Connecting isolated legacy software, ERP systems, POS terminals, and local payment providers into a single flow.',
    //   capabilities: lang === 'ar' ? ['تكامل واجهات APIs', 'ربط أنظمة الـ ERP', 'بوابات الدفع السعودية', 'مزامنة البيانات لحظياً'] : ['RESTful & GraphQL APIs', 'ERP & CRM Integration', 'Saudi Payment Gateways', 'Real-Time Sync'],
    //   iconName: 'Share2',
    // },
    // {
    //   id: 'product-modernization',
    //   title: lang === 'ar' ? 'تحديث وتطوير الأنظمة الحالية' : 'System Modernization',
    //   description: lang === 'ar' ? 'إعادة تطوير البنية التحتية والبرمجيات القديمة لتصبح سريعة وآمنة وقابلة للتوسع والنمو مستقبلاً.' : 'Refactoring legacy codebase, cloud infrastructure migration, and UI/UX modernization for improved performance.',
    //   capabilities: lang === 'ar' ? ['تحسين السرعة والأداء', 'التحول إلى الـ Cloud', 'تحديث تجربة المستخدم UI/UX', 'الأمان والامتثال'] : ['Performance Optimization', 'Cloud Migration', 'UI/UX Redesign', 'Security Hardening'],
    //   iconName: 'Layout',
    // },
  ];

  return (
    <section id="solutions" className="py-16 sm:py-24 dark:bg-[#000000] bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full dark:bg-white/5 bg-slate-200 border dark:border-white/10 border-slate-300 dark:text-gray-300 text-slate-800 text-xs font-bold uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5 text-[#E92929]" />
            <span>{t.tag}</span>
          </div>

          <h2 className="text-2xl min-[400px]:text-3xl sm:text-4xl lg:text-5xl font-black dark:text-white text-slate-900 tracking-tight">
            {t.title}
          </h2>

          <p className="text-sm sm:text-lg dark:text-gray-300 text-slate-600">
            {t.subtitle}
          </p>
        </div>

        {/* 5 Solution Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-16">
          {solutionsList.map((solution) => (
            <SolutionCard key={solution.id} solution={solution} />
          ))}
        </div>

        {/* Strong Transition Banner to Ready Products */}
        <div className="glass-panel p-4 sm:p-10 rounded-2xl sm:rounded-3xl border border-[#E92929]/40 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute -top-12 -left-12 w-40 h-40 bg-[#E92929]/10 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 space-y-3 sm:space-y-4">
            <span className="text-[11px] sm:text-xs font-mono uppercase font-bold tracking-widest text-[#E92929]">
              {t.readyBannerTag}
            </span>
            <h3 className="text-xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight">
              {t.readyBannerTitle}
            </h3>
            <p className="text-xs sm:text-base dark:text-gray-300 text-slate-600 max-w-xl mx-auto">
              {t.readyBannerSub}
            </p>

            <button
              onClick={onScrollToProducts}
              className="w-full min-[400px]:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase text-white bg-[#E92929] hover:bg-[#FF3B3B] transition-all shadow-lg shadow-[#E92929]/30"
            >
              <span>{t.readyBannerCta}</span>
              <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SolutionPillars;
