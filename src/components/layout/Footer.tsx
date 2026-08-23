import React from 'react';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import LeapBadge from '../hero/LeapBadge';
import { saudiPresenceInfo } from '../../data/company';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

const Footer: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang].footer;

  return (
    <footer className="dark:bg-[#000000] bg-slate-900 border-t dark:border-white/10 border-slate-800 pt-16 pb-12 relative text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-start">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-[#E92929] flex items-center justify-center font-black text-white text-lg">
                T
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl text-white tracking-tight">TQNiA IT</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest">
                  {lang === 'ar' ? 'التحول الرقمي' : 'Digital Transformation'}
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed">
              {t.desc}
            </p>

            <div className="pt-2">
              <LeapBadge size="sm" />
            </div>
          </div>

          {/* Core Solutions */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono text-[#E92929] uppercase tracking-widest font-bold">
              {t.solutionsTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#products" className="hover:text-[#E92929] transition-colors">T STORE ({lang === 'ar' ? 'منصة التجار المتعددين' : 'Multi-Vendor'})</a></li>
              <li><a href="#products" className="hover:text-[#E92929] transition-colors">T FOOD ({lang === 'ar' ? 'منظومة المطاعم والطلبات' : 'Restaurant Ecosystem'})</a></li>
              <li><a href="#products" className="hover:text-[#E92929] transition-colors">T REAL ESTATE ({lang === 'ar' ? 'أنظمة إدارة العقارات' : 'Property Tech'})</a></li>
              <li><a href="#solutions" className="hover:text-[#E92929] transition-colors">{lang === 'ar' ? 'التحول الرقمي' : 'Digital Transformation'}</a></li>
              <li><a href="#solutions" className="hover:text-[#E92929] transition-colors">{lang === 'ar' ? 'أتمتة سير العمليات' : 'Business Process Automation'}</a></li>
              <li><a href="#solutions" className="hover:text-[#E92929] transition-colors">{lang === 'ar' ? 'تطوير البرمجيات الخاصة' : 'Custom Software Engineering'}</a></li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest font-bold">
              {t.navTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#challenges" className="hover:text-[#E92929] transition-colors">{lang === 'ar' ? 'تحديات الأعمال' : 'Business Challenges'}</a></li>
              <li><a href="#industries" className="hover:text-[#E92929] transition-colors">{lang === 'ar' ? 'القطاعات المستهدفة' : 'Industries Served'}</a></li>
              <li><a href="#case-studies" className="hover:text-[#E92929] transition-colors">{lang === 'ar' ? 'دراسات الحالة' : 'Case Studies'}</a></li>
              <li><a href="#why-tqnia" className="hover:text-[#E92929] transition-colors">{lang === 'ar' ? 'لماذا تقنية IT' : 'Why TQNiA'}</a></li>
              <li><a href="#how-we-work" className="hover:text-[#E92929] transition-colors">{lang === 'ar' ? 'منهجية العمل' : 'How We Work'}</a></li>
              <li><a href="https://home.tqniait.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E92929] transition-colors">{lang === 'ar' ? 'الموقع الرسمي' : 'Official Website'}</a></li>
            </ul>
          </div>

          {/* Riyadh Office */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest font-bold">
              {t.hqTitle}
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E92929] shrink-0 mt-0.5" />
                <span>{lang === 'ar' ? 'المملكة العربية السعودية • الرياض • حي الصحافة • طريق الملك عبد العزيز' : 'Riyadh, Al Sahafa District, King Abdulaziz Road'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E92929] shrink-0" />
                <a href={`tel:${saudiPresenceInfo.phone}`} className="hover:text-[#E92929] font-mono">{saudiPresenceInfo.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E92929] shrink-0" />
                <a href={`mailto:${saudiPresenceInfo.email}`} className="hover:text-[#E92929] font-mono">{saudiPresenceInfo.email}</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} TQNiA IT. {t.rights}
          </div>
          <div className="flex items-center gap-4">
            <a href="https://home.tqniait.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E92929] flex items-center gap-1">
              <span>home.tqniait.com</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
