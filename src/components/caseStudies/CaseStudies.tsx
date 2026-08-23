import React from 'react';
import CaseStudyCard from './CaseStudyCard';
import { Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

const CaseStudies: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang].caseStudies;

  const caseStudiesList = [
    {
      id: 'multivendor-marketplace-scale',
      title: lang === 'ar' ? 'منصة تجارة إلكترونية متعددة التجار لتوزيع المنتجات' : 'Multi-Vendor Marketplace Digital Scale',
      category: lang === 'ar' ? 'التجارة الإلكترونية والتجزئة' : 'E-Commerce & Retail',
      challenge: lang === 'ar' ? 'إدارة المئات من البائعين والمحلات وتوحيد عمليات الشحن وحساب العمولات يدوياً مما تسبب في تباطؤ التسويات والتحصيل.' : 'Manual vendor onboarding, complex commission tracking, and delayed order fulfillment across multiple merchants.',
      solution: lang === 'ar' ? 'إطلاق نظام T STORE المتكامل مع بوابة بائعين ذاتية، أتمتة حساب العمولات لحظياً، وربط آلي مع شركات الشحن.' : 'Deployed T STORE enterprise engine with self-service vendor portals, automated commission splits, and carrier API integration.',
      technology: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Saudi Payment Gateway'],
      outcome: lang === 'ar' ? ['أتمتة تسوية العمولات 100%', 'تسريع انضمام التجار الجدد', 'موثوقية عالية في تتبع الشحنات'] : ['100% Automated Commission Payouts', 'Accelerated Vendor Onboarding', 'Real-Time Dispatch Reliability'],
      tag: 'Verified Project'
    },
    {
      id: 'restaurant-group-ordering',
      title: lang === 'ar' ? 'منظومة طلبات رقمية وشاشات مطبخ لمجموعة مطاعم' : 'Multi-Branch Restaurant Ecosystem & KDS',
      category: lang === 'ar' ? 'المطاعم والمأكولات (F&B)' : 'Food & Beverage',
      challenge: lang === 'ar' ? 'ارتفاع عمولات تطبيقات التوصيل الخارجية وتشتت الطلبات بين المطبخ وسائقي التوصيل في 14 فرعاً.' : 'High aggregator commission fees and disconnected kitchen operations across 14 restaurant locations.',
      solution: lang === 'ar' ? 'تطبيق وموقع T FOOD المباشر المربوط بشاشات المطبخ KDS ونظام تتبع السائقين بالـ GPS لتسليم الطلب فوراً.' : 'Deployed T FOOD direct-ordering app, Kitchen Display System (KDS), and automated GPS driver dispatch.',
      technology: ['React Native', 'Node.js', 'WebSocket', 'KDS Screen Engine', 'GPS Tracking'],
      outcome: lang === 'ar' ? ['إلغاء عمولات التطبيقات الجانبية', 'خفض زمن تحضير الطلب 35%', 'امتلاك بيانات العملاء مباشرة'] : ['Eliminated 3rd Party Aggregator Fees', '35% Faster Kitchen Prep Time', 'Direct Customer Retention'],
      tag: 'Verified Project'
    },
    {
      id: 'realestate-portfolio-automation',
      title: lang === 'ar' ? 'منظومة إلكترونية لإدارة العقارات والمستأجرين' : 'Enterprise Real Estate Portfolio Automation',
      category: lang === 'ar' ? 'العقارات وإدارة الأملاك' : 'Real Estate & Property Tech',
      challenge: lang === 'ar' ? 'صعوبة تتبع تحصيل عقود الإيجار، وتراكم بلاغات الصيانة الورقية في محفظة تضم أكثر من 850 وحدة.' : 'Manual lease tracking, paper maintenance requests, and delayed rent collection across 850+ property units.',
      solution: lang === 'ar' ? 'تطبيق منصة T REAL ESTATE بأرشيف العقود الرقمي، بوابة دفع المستأجرين، ونظام تذاكر الصيانة الآلي.' : 'Implemented T REAL ESTATE with digital lease vault, online tenant billing portal, and automated work order dispatch.',
      technology: ['React', 'TypeScript', 'Node.js', 'Digital Signature', 'Automated Billing'],
      outcome: lang === 'ar' ? ['رفع سرعة تحصيل الأقساط 40%', 'معالجة بلاغات الصيانة خلال 24 ساعة', 'شفافية كاملة للإيرادات'] : ['40% Faster Rent Collection Cycle', '24-Hour Maintenance SLA', 'Full Portfolio Yield Visibility'],
      tag: 'Verified Project'
    },
    {
      id: 'enterprise-process-automation',
      title: lang === 'ar' ? 'أتمتة المسارات التشغيلية لمنشأة استشارية' : 'Enterprise Process & Workflow Automation',
      category: lang === 'ar' ? 'الخدمات المهنية والاستشارات' : 'Professional Services',
      challenge: lang === 'ar' ? 'بطء دورة الاعتمادات والموافقات الداخلية بين الأقسام والإدخال اليدوي المكرر للمستندات والفوترة.' : 'Slow paper approval routing and duplicated manual invoice entries impacting project delivery milestones.',
      solution: lang === 'ar' ? 'بناء نظام أتمتة مخصص لإدارة الموافقات، ربط الفوترة الإلكترونية، وإنشاء لوحة متابعة الأداء الموحدة.' : 'Custom workflow automation platform with multi-level approval routing, ZATCA e-invoicing, and executive CRM.',
      technology: ['TypeScript', 'React', 'Microservices', 'ZATCA Integration', 'Cloud Arch'],
      outcome: lang === 'ar' ? ['اختصار زمن الموافقات 70%', 'إلغاء المعاملات الورقية تماماً', 'التوافق مع الفوترة الإلكترونية'] : ['70% Faster Approval Lead Time', '100% Paperless Operations', 'ZATCA E-Invoicing Compliant'],
      tag: 'Verified Project'
    }
  ];

  return (
    <section id="case-studies" className="py-24 dark:bg-gradient-to-b dark:from-[#180303] dark:via-[#0A0A0A] dark:to-[#000000] bg-slate-100/80 relative border-t dark:border-[#E92929]/20 border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
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

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {caseStudiesList.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;
