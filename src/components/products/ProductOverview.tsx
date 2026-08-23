import React, { useState } from 'react';
import TStoreMockup from './TStoreMockup';
import TFoodMockup from './TFoodMockup';
import TRealEstateMockup from './TRealEstateMockup';
import ProductFlow from './ProductFlow';
import { ShoppingBag, Utensils, Building2, CheckCircle2, ArrowRight, Zap } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

interface ProductOverviewProps {
  onOpenMeetingWithSubject: (subject: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  't-store': ShoppingBag,
  't-food': Utensils,
  't-real-estate': Building2,
};

const ProductOverview: React.FC<ProductOverviewProps> = ({ onOpenMeetingWithSubject }) => {
  const [selectedProductId, setSelectedProductId] = useState<'t-store' | 't-food' | 't-real-estate'>('t-store');
  const { lang, isRtl } = useLanguage();
  const t = translations[lang].products;

  const productsList = [
    {
      id: 't-store' as const,
      name: 'T STORE',
      category: lang === 'ar' ? 'منصة التجارة الإلكترونية متعددة التجار' : 'MULTI-VENDOR E-COMMERCE PLATFORM',
      headline: lang === 'ar' ? 'أنشئ وسع سوقك الإلكتروني المتعدد التجار.' : 'BUILD YOUR OWN MARKETPLACE.',
      subheadline: lang === 'ar' ? 'منصة تجارة إلكترونية متكاملة تتيح لك إطلاق وتشغيل وإدارة الأسواق الرقمية المتعددة البائعين.' : 'A complete multi-vendor commerce platform designed to launch, operate, and scale digital marketplaces.',
      description: lang === 'ar' ? 'تُعد منصة T STORE حل شركة تقنية IT الجاهز لإطلاق الأسواق الرقمية. صُممت لتتحمل التوسع العالي، الإدارة المركزية للبائعين، الأتمتة الكاملة لحساب العمولات، وتسوية الدفع الموحدة.' : 'T STORE is TQNiA’s ready-to-deploy multi-vendor e-commerce platform. Built for high scalability, central vendor control, automated commission processing, and unified customer checkout.',
      businessValue: lang === 'ar' ? [
        'الإطلاق السريع عبر بنية برمجية موثوقة ومجربة',
        'إدارة تجار متعددين مركزياً من لوحة تحكم واحدة',
        'نظام عمولات مرن وتسويات مالية آليّة للبائعين',
        'كتالوج منتجات ومحرك عروض وترويج قابل للتخصيص الكامل'
      ] : [
        'Launch faster with proven marketplace architecture',
        'Manage multiple vendors centrally from one enterprise portal',
        'Flexible commission rates & automated vendor payouts',
        'Customizable product catalog, inventory & promotional engines'
      ],
      features: [
        { title: lang === 'ar' ? 'إدارة التجار والبائعين' : 'Multi-Vendor Management', description: lang === 'ar' ? 'لوحة تحكم مركزية للتحقق من التجار، اعتماد المنتجات ومتابعة الأداء.' : 'Centralized admin controls for onboarded vendors, approvals, and performance tracking.' },
        { title: lang === 'ar' ? 'بوابة البائع الذاتية' : 'Vendor Portal & Dashboard', description: lang === 'ar' ? 'لوحة مستقلة لكل تاجر لإدارة المخزون، الأسعار، الطلبات وتتبع المبيعات.' : 'Self-service dashboard for merchants to manage catalog, stock, pricing, and fulfillment.' },
        { title: lang === 'ar' ? 'مزامنة المخازن والطلبات' : 'Order & Inventory Sync', description: lang === 'ar' ? 'تحديث لحظي للمخزون عبر المتاجر المتعددة وتوجيه الطلبات لشركات الشحن.' : 'Real-time multi-warehouse inventory updates, order routing, and delivery status.' },
        { title: lang === 'ar' ? 'محرك العمولات والمدفوعات' : 'Payment & Commission Engine', description: lang === 'ar' ? 'توزيع آلي للإيرادات، ربط مع بوابات الدفع المحلية وتقارير مالية دقيقة.' : 'Automated revenue splits, payment gateway integrations, and financial reporting.' },
      ],
      flow: [
        { step: '01', label: lang === 'ar' ? 'تسجيل البائع' : 'Vendor Onboarding', description: lang === 'ar' ? 'يقوم التاجر بالتسجيل وإضافة منتجاته وأسعاره.' : 'Merchant registers and configures product catalog & pricing.' },
        { step: '02', label: lang === 'ar' ? 'منصة T STORE' : 'T STORE Hub', description: lang === 'ar' ? 'تحقق النظام من المخزون، احتساب العمولات، ونشر المنتجات.' : 'Platform verifies stock, applies commissions, and publishes listings.' },
        { step: '03', label: lang === 'ar' ? 'طلب العميل' : 'Customer Order', description: lang === 'ar' ? 'يتصفح العميل المتاجر ويتم عملية الدفع الموحدة.' : 'User browses, selects products, and completes unified multi-vendor payment.' },
        { step: '04', label: lang === 'ar' ? 'الشحن والتسوية' : 'Fulfillment & Analytics', description: lang === 'ar' ? 'توجيه الطلب للشحن، توليد التسوية المالية للتاجر، والتقارير.' : 'Automated order dispatch, payout generation, and admin reporting.' }
      ],
      secondaryCta: lang === 'ar' ? 'طلب عرض توضيحي (T STORE)' : 'Request T STORE Demo',
    },
    {
      id: 't-food' as const,
      name: 'T FOOD',
      category: lang === 'ar' ? 'منظومة المطاعم والطلبات الرقمية' : 'RESTAURANT & FOOD ORDERING PLATFORM',
      headline: lang === 'ar' ? 'منظومتك الرقمية لإدارة المطاعم والطلبات.' : 'YOUR DIGITAL FOOD BUSINESS. END TO END.',
      subheadline: lang === 'ar' ? 'منظومة تقنية متكاملة تربط بين العملاء، شاشات المطبخ KDS، إدارة الطلبات، وأسطول التوصيل.' : 'A complete restaurant ecosystem connecting customers, kitchens, order management, and delivery dispatch.',
      description: lang === 'ar' ? 'تُمكّن منصة T FOOD مجموعات المطاعم والمطابخ السحابية من التخلص من العمولات العالية لتطبيقات التوصيل عبر امتلاك قناتها الرقمية الخاصة المباشرة مع العميل.' : 'T FOOD empowers restaurant groups, food halls, and dark kitchens with a full digital ordering infrastructure. Eliminate third-party commissions by owning your customer relationship and operational pipeline.',
      businessValue: lang === 'ar' ? [
        'امتلاك بيانات العملاء وتجنب عمولات تطبيقات التوصيل مرتفعة التكلفة',
        'تسريع سير العمليات في المطبخ وتقليل زمن تحضير الطلب',
        'ربط طلبات الأونلاين مباشرة بنظام نقاط البيع (POS) وشاشات المطبخ',
        'إدارة الفروع المتعددة وتعديل القوائم والأسعار لحظياً'
      ] : [
        'Own your customer data and avoid high aggregator commissions',
        'Streamline kitchen display workflows and order preparation times',
        'Integrate online ordering directly into POS & delivery networks',
        'Enable seamless multi-branch menu & pricing customization'
      ],
      features: [
        { title: lang === 'ar' ? 'تطبيق وموقع الطلب المباشر' : 'Customer Ordering App & Web', description: lang === 'ar' ? 'تطبيق وموقع بهوية مطعمك الخاصة لتلقي الطلبات وإضافة الإضافات.' : 'Branded web and mobile ordering with custom menu customization & modifiers.' },
        { title: lang === 'ar' ? 'شاشات المطبخ (KDS)' : 'Kitchen Display System (KDS)', description: lang === 'ar' ? 'توجيه الطلبات لمحطات التحضير مع حساب الوقت المستهدف للتجهيز.' : 'Order routing to prep stations with target timing and order priority visualizer.' },
        { title: lang === 'ar' ? 'إسناد وتتبع السائقين' : 'Delivery & Driver Dispatch', description: lang === 'ar' ? 'توزيع آلي للطلبات على السائقين وتتبع التوصيل عبر الـ GPS.' : 'Automated driver assignment, real-time GPS delivery tracking, and ETA metrics.' },
        { title: lang === 'ar' ? 'تحليلات المبيعات الذكية' : 'Analytics & Sales Intelligence', description: lang === 'ar' ? 'تقارير أوقات الذروة، الأكثر مبيعاً، ومعدلات الأداء.' : 'Peak hour analytics, best-seller reports, ingredient usage, and revenue metrics.' },
      ],
      flow: [
        { step: '01', label: lang === 'ar' ? 'طلب العميل' : 'Customer Order', description: lang === 'ar' ? 'يختار العميل الوجبات والمكونات عبر تطبيق المطعم.' : 'Customer selects items & customizes modifiers on mobile portal.' },
        { step: '02', label: lang === 'ar' ? 'محرك T FOOD' : 'T FOOD Engine', description: lang === 'ar' ? 'معالجة الدفع وتوجيه الطلب لشاشة المطبخ KDS.' : 'Platform processes payment, routes ticket to nearest branch KDS.' },
        { step: '03', label: lang === 'ar' ? 'التحضير والإسناد' : 'Kitchen & Dispatch', description: lang === 'ar' ? 'تحضير الوجبة وإشعارات السائق لاستلام الطلب.' : 'Kitchen prepares dish; driver receives route dispatch alert.' },
        { step: '04', label: lang === 'ar' ? 'التوصيل والتقييم' : 'Delivery & Feedback', description: lang === 'ar' ? 'تتبع الطلب لحظياً حتى الباب وتقييم الخدمة.' : 'Live order tracking to doorstep with customer rating feedback.' }
      ],
      secondaryCta: lang === 'ar' ? 'طلب عرض توضيحي (T FOOD)' : 'Request T FOOD Demo',
    },
    {
      id: 't-real-estate' as const,
      name: 'T REAL ESTATE',
      category: lang === 'ar' ? 'نظام إدارة وتطوير العقارات' : 'REAL ESTATE MANAGEMENT SYSTEM',
      headline: lang === 'ar' ? 'حوّل إدارة عقاراتك إلى تجربة رقمية منظمة.' : 'TURN PROPERTY OPERATIONS INTO A DIGITAL EXPERIENCE.',
      subheadline: lang === 'ar' ? 'منظومة عقارية متكاملة تبسط إدارة محافظ العقارات، عقود الإيجار، الفواتير، وبلاغات الصيانة.' : 'A comprehensive real estate platform simplifying property portfolios, lease contracts, tenant billing, and maintenance.',
      description: lang === 'ar' ? 'تحوّل منصة T REAL ESTATE إدارة العقارات إلى مسار رقمي مؤتمت وشفاف. مصممة للمطورين العقاريين، مديري المجمعات السكنية والتجارية، والشركات العقارية في السعودية والمنطقة.' : 'T REAL ESTATE transforms property management into a automated, transparent digital workflow. Designed for commercial developers, residential managers, and asset holding companies across Saudi Arabia and the region.',
      businessValue: lang === 'ar' ? [
        'إدارة مركزية للمباني، الوحدات، المستأجرين، وعقود الإيجار',
        'أتمتة تذكيرات الدفع، الأقساط، وتحصيل الفواتير الإلكترونية',
        'تسريع معالجة طلبات الصيانة عبر بوابة المستأجر الذاتية',
        'شفافية مالية تامة لنسب الإشغال، الإيرادات، والمستحقات'
      ] : [
        'Centralize property, unit, tenant, and lease tracking',
        'Automate payment reminders, installment tracking & invoices',
        'Accelerate maintenance request resolution with tenant portal',
        'Instant financial visibility into occupancy, yields & arrears'
      ],
      features: [
        { title: lang === 'ar' ? 'إدارة المحافظ والوحدات' : 'Property & Unit Portfolio', description: lang === 'ar' ? 'سجل كامل للمباني، الطوابق، الوحدات السكنية والتجارية.' : 'Complete inventory of buildings, floors, residential/commercial units, and specs.' },
        { title: lang === 'ar' ? 'محرك العقود والتجديد' : 'Lease & Contract Engine', description: lang === 'ar' ? 'توليد العقود الإلكترونية، تذكيرات التجديد، والأرشيف.' : 'Digital contract generation, renewal alerts, rent escalation, and document vault.' },
        { title: lang === 'ar' ? 'بوابة المستأجر الذاتية' : 'Tenant Portal & App', description: lang === 'ar' ? 'دفع الأقساط أونلاين، استعراض العقد، ورفع بلاغات الصيانة.' : 'Self-service bill payments, lease view, digital document requests, and notifications.' },
        { title: lang === 'ar' ? 'إدارة بلاغات الصيانة' : 'Maintenance Management', description: lang === 'ar' ? 'توليد تذاكر الصيانة، إسناد الفنيين، وتتبع حالة الإنجاز.' : 'Work order ticket creation, vendor allocation, SLA tracking, and status updates.' },
      ],
      flow: [
        { step: '01', label: lang === 'ar' ? 'تسجيل العقد' : 'Unit Listing & Lease', description: lang === 'ar' ? 'تسجيل بيانات الوحدة وشروط العقد الإلكتروني.' : 'Property manager assigns unit and registers lease contract digital terms.' },
        { step: '02', label: lang === 'ar' ? 'نظام T REAL ESTATE' : 'T REAL ESTATE Core', description: lang === 'ar' ? 'إنشاء جدول الدفعات، التذكيرات، وبوابة المستأجر.' : 'System generates billing schedule, payment reminders, and tenant access.' },
        { step: '03', label: lang === 'ar' ? 'تفاعل المستأجر' : 'Tenant Interaction', description: lang === 'ar' ? 'سداد القسط عبر البوابة أو تقديم بلاغ صيانة.' : 'Tenant pays installment via portal or submits maintenance work request.' },
        { step: '04', label: lang === 'ar' ? 'التقارير والتحصيل' : 'Operations & Reporting', description: lang === 'ar' ? 'تحديث السجل المالي تلقائياً وتوليد تقارير العائد.' : 'Automatic payment ledger update, contractor dispatch, and asset yield report.' }
      ],
      secondaryCta: lang === 'ar' ? 'طلب عرض توضيحي (T REAL ESTATE)' : 'Request T REAL ESTATE Demo',
    },
  ];

  const currentProduct = productsList.find((p) => p.id === selectedProductId) || productsList[0];

  return (
    <section id="products" className="py-24 dark:bg-gradient-to-b dark:from-[#000000] dark:via-[#1E0404] dark:to-[#000000] bg-slate-100 relative border-t dark:border-[#E92929]/20 border-slate-200">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#E92929]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E92929]/15 border border-[#E92929]/40 text-[#E92929] text-xs font-bold uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5" />
            <span>{t.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black dark:text-white text-slate-900 tracking-tight">
            {t.title}
          </h2>

          <p className="text-base sm:text-lg dark:text-gray-300 text-slate-600">
            {t.subtitle}
          </p>

          {/* Interactive Reusable Product Switcher Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-6">
            {productsList.map((p) => {
              const Icon = iconMap[p.id] || ShoppingBag;
              const isSelected = p.id === selectedProductId;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedProductId(p.id)}
                  className={`flex items-center gap-2.5 px-6 py-3 rounded-2xl font-extrabold text-sm tracking-wide transition-all duration-300 border ${
                    isSelected
                      ? 'bg-[#E92929] border-[#E92929] text-white shadow-xl shadow-[#E92929]/40 ring-2 ring-[#E92929]'
                      : 'dark:bg-[#0A0A0A] bg-white dark:border-white/10 border-slate-200 dark:text-gray-400 text-slate-600 hover:text-[#E92929] dark:hover:text-white'
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                      isSelected ? 'bg-black text-[#E92929]' : 'bg-white/5 text-gray-400'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span>{p.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Product Interactive Showcase Card */}
        <div className="glass-panel-red p-6 sm:p-12 rounded-3xl border border-[#E92929]/50 shadow-2xl space-y-12 transition-all duration-500">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-6 space-y-6 text-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-[#E92929] text-white">
                <span>{currentProduct.category}</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-black dark:text-white text-slate-900 leading-tight">
                {currentProduct.headline}
              </h3>

              <p className="text-base dark:text-gray-300 text-slate-700 leading-relaxed font-normal">
                {currentProduct.description}
              </p>

              {/* Business Value Bullets */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-widest dark:text-slate-400 text-slate-500">
                  {t.businessValue}
                </h4>
                {currentProduct.businessValue.map((val, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm dark:text-gray-200 text-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-[#E92929] shrink-0 mt-0.5" />
                    <span>{val}</span>
                  </div>
                ))}
              </div>

              {/* Key Features Grid */}
              <div className="pt-4 border-t dark:border-white/10 border-slate-200 space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase tracking-widest dark:text-slate-400 text-slate-500">
                  {t.features}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentProduct.features.map((feat, idx) => (
                    <div key={idx} className="p-3 rounded-xl dark:bg-black/50 bg-white border dark:border-white/10 border-slate-200 space-y-1 shadow-sm">
                      <div className="font-bold dark:text-white text-slate-900 text-xs">{feat.title}</div>
                      <div className="text-[11px] dark:text-slate-400 text-slate-600 leading-snug">{feat.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Product CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => onOpenMeetingWithSubject(`Demo Request: ${currentProduct.name}`)}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase text-white bg-[#E92929] hover:bg-[#FF3B3B] transition-all shadow-lg shadow-[#E92929]/35 hover:-translate-y-0.5"
                >
                  <span>{currentProduct.secondaryCta}</span>
                  <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>

            {/* Right Product UI Mockup Column */}
            <div className="lg:col-span-6 w-full overflow-hidden">
              {currentProduct.id === 't-store' && <TStoreMockup />}
              {currentProduct.id === 't-food' && <TFoodMockup />}
              {currentProduct.id === 't-real-estate' && <TRealEstateMockup />}
            </div>

          </div>

          {/* Business Flow Diagram */}
          <ProductFlow flow={currentProduct.flow} accentColor="#E92929" />

        </div>

      </div>
    </section>
  );
};

export default ProductOverview;
