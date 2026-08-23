import React from 'react';
import { ShoppingBag, Utensils, Building2, Briefcase, GraduationCap, Building, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

const iconMap: Record<string, React.ElementType> = {
  ShoppingBag,
  Utensils,
  Building2,
  Briefcase,
  GraduationCap,
  Building,
};

const IndustriesSection: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang].industries;

  const industriesList = [
    {
      id: 'ecommerce-retail',
      title: lang === 'ar' ? 'التجارة الإلكترونية والتجزئة' : 'E-Commerce & Retail',
      description: lang === 'ar' ? 'منصات البيع المتعددة التجار، المتاجر الإلكترونية المتكاملة، ومحركات العمولات والتوصيل.' : 'Multi-vendor marketplaces, unified catalog engines, and automated logistics order routing.',
      useCases: lang === 'ar' ? ['الأسواق متعددة البائعين', 'مزامنة مخزون الفروع', 'بوابات الدفع المحلية'] : ['Multi-Vendor Portals', 'Omnichannel Inventory', 'Local Saudi Payments'],
      iconName: 'ShoppingBag',
    },
    {
      id: 'food-beverage',
      title: lang === 'ar' ? 'المطاعم والمأكولات (F&B)' : 'Food & Beverage',
      description: lang === 'ar' ? 'تطبيقات الطلب المباشر للمطاعم، شاشات المطبخ KDS، وتوزيع أسطول السائقين.' : 'Direct restaurant ordering apps, Kitchen Display Systems (KDS), and driver dispatch.',
      useCases: lang === 'ar' ? ['التطلب المباشر بدون عمولات', 'ربط شاشات المطبخ KDS', 'تتبع التوصيل GPS'] : ['Direct Aggregator-Free App', 'Kitchen KDS Sync', 'GPS Fleet Tracking'],
      iconName: 'Utensils',
    },
    {
      id: 'real-estate-property',
      title: lang === 'ar' ? 'العقارات وإدارة الأملاك' : 'Real Estate & Property Tech',
      description: lang === 'ar' ? 'أنظمة إدارة المحافظ العقارية، عقود الإيجار الرقمية، الفواتير، وبلاغات الصيانة.' : 'Comprehensive property management, digital lease generation, tenant portal, and maintenance.',
      useCases: lang === 'ar' ? ['أرشيف العقود الرقمي', 'بوابة دفع المستأجر', 'بلاغات الصيانة والتحصيل'] : ['Digital Lease Vault', 'Tenant Payment App', 'Maintenance Tickets'],
      iconName: 'Building2',
    },
    {
      id: 'professional-services',
      title: lang === 'ar' ? 'الخدمات المهنية والاستشارات' : 'Professional Services',
      description: lang === 'ar' ? 'أتمتة سير العمليات الاستشارية، تتبع المشاريع، الفوترة الإلكترونية، وإدارة العملاء.' : 'Consulting workflow automation, project milestone tracking, e-invoicing, and client CRM.',
      useCases: lang === 'ar' ? ['الفوترة الإلكترونية المعتمدة', 'متابعة المشاريع والمراحل', 'بوابة العميل الذاتية'] : ['ZATCA E-Invoicing', 'Project Milestone CRM', 'Client Self-Service'],
      iconName: 'Briefcase',
    },
    {
      id: 'education-training',
      title: lang === 'ar' ? 'التعليم والتدريب الرقمي' : 'Education & Training',
      description: lang === 'ar' ? 'منصات التعلم الإلكتروني، تسجيل الطلاب، إدارة الدورات، والشهادات الرقمية.' : 'E-learning portals, student enrollment engines, course management, and digital certificates.',
      useCases: lang === 'ar' ? ['التسجيل وإدارة الاشتراكات', 'بث الدوارات الحية', 'إصدار الشهادات الرقمية'] : ['Subscription Engine', 'Live Classroom API', 'Digital Certificates'],
      iconName: 'GraduationCap',
    },
    {
      id: 'enterprise-holding',
      title: lang === 'ar' ? 'المجموعات والشركات القابضة' : 'Enterprise Holding Groups',
      description: lang === 'ar' ? 'توحيد بيانات الشركات التابعة، لوحات متابعة الأداء المركزية، والربط مع أنظمة الـ ERP.' : 'Consolidated multi-entity dashboards, central ERP integrations, and group-wide analytics.',
      useCases: lang === 'ar' ? ['لوحة متابعة الأداء الموحدة', 'ربط أنظمة الفروع والمجموعات', 'أمان وصلاحيات مركزية'] : ['Executive Group Dashboard', 'Multi-Entity ERP Link', 'Central Permissioning'],
      iconName: 'Building',
    },
  ];

  return (
    <section id="industries" className="py-24 dark:bg-[#000000] bg-slate-50 relative border-t dark:border-white/5 border-slate-200">
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

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industriesList.map((ind) => {
            const Icon = iconMap[ind.iconName] || Building;
            return (
              <div
                key={ind.id}
                className="p-8 rounded-3xl dark:bg-[#0A0A0A] bg-white border dark:border-white/10 border-slate-200 hover:border-[#E92929]/50 transition-all duration-300 hover:-translate-y-1 space-y-4 shadow-sm text-start"
              >
                <div className="w-12 h-12 rounded-xl dark:bg-white/5 bg-slate-100 text-[#E92929] flex items-center justify-center border dark:border-white/10 border-slate-200">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold dark:text-white text-slate-900">{ind.title}</h3>
                <p className="text-xs sm:text-sm dark:text-gray-300 text-slate-600 leading-relaxed">{ind.description}</p>

                <div className="pt-3 border-t dark:border-white/5 border-slate-100 space-y-2">
                  <span className="text-[10px] font-mono dark:text-slate-400 text-slate-500 font-bold uppercase tracking-wider block">
                    {t.useCases}
                  </span>
                  <div className="grid grid-cols-1 gap-1.5 text-xs dark:text-gray-300 text-slate-700">
                    {ind.useCases.map((uc, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E92929] shrink-0" />
                        <span>{uc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default IndustriesSection;
