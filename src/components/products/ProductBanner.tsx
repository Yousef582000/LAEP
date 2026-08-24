import React from 'react';
import { Sparkles, ShoppingBag, Utensils, Building2, Zap } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface ProductBannerProps {
  productId: 't-store' | 't-food' | 't-real-estate';
}

const bannerData = {
  't-store': {
    badgeAr: 'منصة التجارة الرقمية',
    badgeEn: 'E-COMMERCE MARKETPLACE',
    title: 'T STORE',
    promoAr: 'منظومة تجارة إلكترونية متكاملة جاهزة للتخصيص والإطلاق',
    promoEn: 'Ready-to-Deploy Multi-Vendor Commerce Platform',
    image: '/tstore-mockup.png',
    icon: ShoppingBag,
    highlightsAr: ['ربط البائعين والعمولات', 'ZATCA معتمد للفوترة', 'دعم بوابات الدفع'],
    highlightsEn: ['Multi-Vendor Engine', 'ZATCA E-Invoicing', 'Payment Gateways'],
  },
  't-food': {
    badgeAr: 'منظومة إدارة المطاعم',
    badgeEn: 'FOOD ORDERING ECOSYSTEM',
    title: 'T FOOD',
    promoAr: 'طلبات مباشرة، شاشات مطبخ وتتبع سائقين بدون عمولات',
    promoEn: 'Direct Food Ordering, Kitchen Display & Driver Dispatch',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    icon: Utensils,
    highlightsAr: ['عمولة وسيط 0%', 'ربط شاشات المطبخ KDS', 'تتبع السائقين GPS'],
    highlightsEn: ['0% Aggregator Fee', 'Smart KDS Routing', 'Live GPS Tracking'],
  },
  't-real-estate': {
    badgeAr: 'منظومة إدارة العقارات',
    badgeEn: 'REAL ESTATE MANAGEMENT',
    title: 'T REAL ESTATE',
    promoAr: 'إدارة المحافظ العقارية، العقود الإلكترونية، وبوابة المستأجر',
    promoEn: 'Property Portfolio, Digital Leases & Tenant Portal',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    icon: Building2,
    highlightsAr: ['سجل المحافظ والوحدات', 'تحصيل الدفعات آلياً', 'إدارة تذاكر الصيانة'],
    highlightsEn: ['Property Directory', 'Automated Rent Billing', 'Maintenance SLA'],
  },
};

const ProductBanner: React.FC<ProductBannerProps> = ({ productId }) => {
  const { lang } = useLanguage();
  const data = bannerData[productId];
  const Icon = data.icon;
  const isAr = lang === 'ar';

  const badge = isAr ? data.badgeAr : data.badgeEn;
  const promo = isAr ? data.promoAr : data.promoEn;
  const highlights = isAr ? data.highlightsAr : data.highlightsEn;

  const isCustomMockup = data.image.startsWith('/');

  return (
    <div className="w-full h-full min-h-[320px] sm:min-h-[420px] rounded-2xl sm:rounded-3xl border dark:border-white/15 border-slate-200 dark:bg-[#0A0A0A] bg-white overflow-hidden relative shadow-2xl group transition-all duration-500 flex flex-col justify-between p-3.5 sm:p-6 text-start">
      
      {isCustomMockup ? (
        /* Custom Uploaded Mockup Display (T STORE) */
        <div className="relative w-full h-full flex flex-col justify-between space-y-3 sm:space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#E92929] text-white text-[11px] sm:text-xs font-black uppercase tracking-wider shadow-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{badge}</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full dark:bg-white/10 bg-slate-100 border dark:border-white/15 border-slate-200 text-emerald-500 dark:text-emerald-400 text-[10px] sm:text-xs font-mono font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>OFFICIAL MOCKUP</span>
            </div>
          </div>

          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-50 dark:bg-black/50 border dark:border-white/10 border-slate-200 p-1.5 sm:p-2 group shadow-lg">
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Highlights Bar */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-2 border-t dark:border-white/10 border-slate-200">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl dark:bg-white/5 bg-slate-100 border dark:border-white/10 border-slate-200 text-[10px] sm:text-xs font-bold dark:text-gray-200 text-slate-800 shadow-sm"
              >
                <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#E92929]" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Standard Image Banner Display */
        <>
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-[0.45] contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#E92929]/25 rounded-full blur-[110px] pointer-events-none" />
          </div>

          {/* Top Banner Header Layer */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E92929] text-white text-xs font-black uppercase tracking-wider shadow-lg shadow-[#E92929]/40">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{badge}</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-emerald-400 text-xs font-mono font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>ENTERPRISE READY</span>
            </div>
          </div>

          {/* Center Promotional Product Highlight Visual Card */}
          <div className="relative z-10 my-auto py-6 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-[#E92929] flex items-center justify-center text-white shadow-2xl shadow-[#E92929]/50 ring-4 ring-white/10 group-hover:scale-110 transition-transform duration-500">
              <Icon className="w-8 h-8" />
            </div>

            <div className="space-y-2 max-w-md mx-auto">
              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight drop-shadow-md">
                {data.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-200 font-medium leading-relaxed drop-shadow">
                {promo}
              </p>
            </div>
          </div>

          {/* Bottom Promotional Highlights Bar */}
          <div className="relative z-10 pt-4 border-t border-white/15">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/15 text-xs font-semibold text-gray-200 shadow-sm"
                >
                  <Zap className="w-3.5 h-3.5 text-[#E92929]" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

    </div>
  );
};

export default ProductBanner;
