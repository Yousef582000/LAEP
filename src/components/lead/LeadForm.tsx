import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2, Sparkles, MessageSquare } from 'lucide-react';
import type { LeadFormData } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

interface LeadFormProps {
  initialChallenge?: string;
}

const LeadForm: React.FC<LeadFormProps> = ({ initialChallenge = '' }) => {
  const { lang } = useLanguage();
  const t = translations[lang].form;

  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    company: '',
    jobTitle: '',
    email: '',
    phone: '',
    lookingFor: initialChallenge || (lang === 'ar' ? 'التحول الرقمي' : 'Digital Transformation'),
    timeline: '1–3 Months',
    challengeDetails: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const lookingForOptions = lang === 'ar' ? [
    'التحول الرقمي',
    'أتمتة العمليات',
    'البرمجيات الخاصة',
    'التجارة الإلكترونية',
    'منصة T STORE',
    'منظومة T FOOD',
    'أنظمة T REAL ESTATE',
    'تكامل الأنظمة APIs',
    'حلول رقمية مخصصة',
  ] : [
    'Digital Transformation',
    'Business Automation',
    'Custom Software',
    'E-Commerce',
    'T STORE',
    'T FOOD',
    'T REAL ESTATE',
    'System Integration',
    'Custom Solution',
  ];

  const timelineOptions = ['ASAP', '1–3 Months', '3–6 Months', 'Exploring'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.company || !formData.email || !formData.phone) {
      setStatus('error');
      return;
    }

    setStatus('submitting');

    const whatsappNumber = '966565515077';

    // Structured WhatsApp message format with all form details
    const textMessage = lang === 'ar'
      ? `السلام عليكم فريق تقنية IT، استفسار جديد من صفحة هبوط ليب 2026:\n\n` +
        `• الاسم الكامل: ${formData.name}\n` +
        `• اسم الشركة/المنشأة: ${formData.company}\n` +
        (formData.jobTitle ? `• المسمى الوظيفي: ${formData.jobTitle}\n` : '') +
        `• البريد الإلكتروني: ${formData.email}\n` +
        `• رقم الجوال/الواتساب: ${formData.phone}\n` +
        `• الخدمة المطلوبة: ${formData.lookingFor}\n` +
        `• المدى الزمني المتوقع: ${formData.timeline}\n` +
        (formData.challengeDetails ? `• تفاصيل التحدي/الفكرة: ${formData.challengeDetails}\n` : '')
      : `Hello TQNiA IT Team, New Inquiry from LEAP 2026 Showcase:\n\n` +
        `• Full Name: ${formData.name}\n` +
        `• Company Name: ${formData.company}\n` +
        (formData.jobTitle ? `• Job Title: ${formData.jobTitle}\n` : '') +
        `• Business Email: ${formData.email}\n` +
        `• Phone/WhatsApp: ${formData.phone}\n` +
        `• Service Needed: ${formData.lookingFor}\n` +
        `• Estimated Timeline: ${formData.timeline}\n` +
        (formData.challengeDetails ? `• Challenge Details: ${formData.challengeDetails}\n` : '');

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(textMessage)}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setStatus('success');
    }, 400);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 dark:bg-gradient-to-b dark:from-[#1C0404] dark:via-[#0A0A0A] dark:to-[#000000] bg-slate-100 relative border-t dark:border-[#E92929]/25 border-slate-200">
      <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E92929]/15 border border-[#E92929]/40 text-[#E92929] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            <span>{t.tag}</span>
          </div>

          <h2 className="text-2xl min-[400px]:text-3xl sm:text-4xl lg:text-5xl font-black dark:text-white text-slate-900 tracking-tight">
            {t.title}
          </h2>

          <p className="text-sm sm:text-lg dark:text-gray-300 text-slate-600">
            {t.subtitle}
          </p>
        </div>

        {/* Form Container */}
        <div className="glass-panel-red p-4 sm:p-12 rounded-2xl sm:rounded-3xl border border-[#E92929]/40 shadow-2xl relative">
          {status === 'success' ? (
            <div className="text-center py-12 space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black dark:text-white text-slate-900">{t.successTitle}</h3>
              <p className="text-sm dark:text-gray-300 text-slate-600 max-w-md mx-auto">
                {t.successDesc}
              </p>
              <div className="p-4 rounded-xl dark:bg-white/5 bg-slate-100 text-xs text-emerald-500 font-bold max-w-md mx-auto flex items-center justify-center gap-2">
                <MessageSquare className="w-4 h-4" />
                <span>{lang === 'ar' ? 'تم توجيه الاستفسار وتفاصيل البيانات مباشرة للواتساب الرسمى' : 'Inquiry details sent directly to WhatsApp'}</span>
              </div>
              <button
                onClick={() => setStatus('idle')}
                className="mt-4 px-6 py-2.5 rounded-xl bg-[#E92929] text-white font-bold text-xs uppercase shadow-md"
              >
                {lang === 'ar' ? 'إرسال طلب آخر' : 'Submit Another Request'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-start">
              
              {/* Row 1: Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold dark:text-gray-300 text-slate-700 uppercase tracking-wider block">
                    {t.fullName} <span className="text-[#E92929]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={lang === 'ar' ? 'مثال: عبد الله المنصور' : 'e.g. Abdullah Al-Mansoor'}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl dark:bg-black/60 bg-white border dark:border-white/10 border-slate-300 dark:text-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E92929] transition-colors text-sm shadow-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold dark:text-gray-300 text-slate-700 uppercase tracking-wider block">
                    {t.company} <span className="text-[#E92929]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={lang === 'ar' ? 'مثال: شركة الأعمال العربية' : 'e.g. Enterprise Operations Co.'}
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl dark:bg-black/60 bg-white border dark:border-white/10 border-slate-300 dark:text-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E92929] transition-colors text-sm shadow-sm"
                  />
                </div>
              </div>

              {/* Row 2: Job Title & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold dark:text-gray-300 text-slate-700 uppercase tracking-wider block">
                    {t.jobTitle}
                  </label>
                  <input
                    type="text"
                    placeholder={lang === 'ar' ? 'مثال: الرئيس التنفيذي / مدير التقنية' : 'e.g. CEO / CTO / Operations Director'}
                    value={formData.jobTitle}
                    onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl dark:bg-black/60 bg-white border dark:border-white/10 border-slate-300 dark:text-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E92929] transition-colors text-sm shadow-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold dark:text-gray-300 text-slate-700 uppercase tracking-wider block">
                    {t.email} <span className="text-[#E92929]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl dark:bg-black/60 bg-white border dark:border-white/10 border-slate-300 dark:text-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E92929] transition-colors text-sm shadow-sm"
                  />
                </div>
              </div>

              {/* Row 3: Phone / WhatsApp */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold dark:text-gray-300 text-slate-700 uppercase tracking-wider block">
                  {t.phone} <span className="text-[#E92929]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+966 5X XXX XXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl dark:bg-black/60 bg-white border dark:border-white/10 border-slate-300 dark:text-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E92929] transition-colors text-sm font-mono shadow-sm"
                />
              </div>

              {/* Option Selector: What are you looking for? */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold dark:text-gray-300 text-slate-700 uppercase tracking-wider block">
                  {t.lookingFor}
                </label>
                <div className="flex flex-wrap gap-2 pt-1">
                  {lookingForOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setFormData({ ...formData, lookingFor: opt })}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                        formData.lookingFor === opt
                          ? 'bg-[#E92929] text-white border-[#E92929] font-bold shadow-md'
                          : 'dark:bg-black/40 bg-slate-100 dark:text-gray-300 text-slate-700 dark:border-white/10 border-slate-300 hover:border-[#E92929]'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline Selector */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold dark:text-gray-300 text-slate-700 uppercase tracking-wider block">
                  {t.timeline}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {timelineOptions.map((tItem) => (
                    <button
                      type="button"
                      key={tItem}
                      onClick={() => setFormData({ ...formData, timeline: tItem })}
                      className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all border text-center ${
                        formData.timeline === tItem
                          ? 'bg-[#E92929] border-[#E92929] text-white font-bold'
                          : 'dark:bg-black/40 bg-slate-100 dark:text-slate-400 text-slate-600 dark:border-white/10 border-slate-300 hover:border-[#E92929]'
                      }`}
                    >
                      {tItem}
                    </button>
                  ))}
                </div>
              </div>

              {/* Challenge Details Textarea */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold dark:text-gray-300 text-slate-700 uppercase tracking-wider block">
                  {t.details}
                </label>
                <textarea
                  rows={4}
                  placeholder={lang === 'ar' ? 'اشرح لنا التحدي التشغيلي الحالي أو فكرتك الرقمية...' : 'Describe your current business operational challenge, digital requirements, or strategic goals...'}
                  value={formData.challengeDetails}
                  onChange={(e) => setFormData({ ...formData, challengeDetails: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl dark:bg-black/60 bg-white border dark:border-white/10 border-slate-300 dark:text-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E92929] transition-colors text-sm resize-none shadow-sm"
                />
              </div>

              {status === 'error' && (
                <div className="p-3 rounded-xl bg-red-500/20 border border-red-500/40 text-red-500 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{t.requiredError}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm tracking-wider uppercase text-white bg-[#E92929] hover:bg-[#FF3B3B] transition-all shadow-xl shadow-[#E92929]/40 hover:shadow-[#E92929]/60 disabled:opacity-50"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>{t.submitting}</span>
                  </>
                ) : (
                  <>
                    <MessageSquare className="w-5 h-5" />
                    <span>{lang === 'ar' ? 'إرسال الاستفسار وتوجيهه مباشرة للواتساب' : 'Send Inquiry via WhatsApp'}</span>
                  </>
                )}
              </button>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default LeadForm;
