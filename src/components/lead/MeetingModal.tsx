import React, { useState } from 'react';
import { Calendar as CalendarIcon, X, CheckCircle2, ArrowRight, MessageSquare } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSubject?: string;
}

const MeetingModal: React.FC<MeetingModalProps> = ({ isOpen, onClose, initialSubject = '' }) => {
  const { lang, isRtl } = useLanguage();
  const t = translations[lang].meetingModal;

  const [selectedDate, setSelectedDate] = useState('2026-03-09');
  const [selectedTime, setSelectedTime] = useState('11:00 AM');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [notes, setNotes] = useState(initialSubject);
  const [booked, setBooked] = useState(false);

  if (!isOpen) return null;

  const dates = [
    { date: '2026-03-09', label: lang === 'ar' ? 'الإثنين 9 مارس (اليوم الأول)' : 'Mon, Mar 9 (LEAP Day 1)' },
    { date: '2026-03-10', label: lang === 'ar' ? 'الثلاثاء 10 مارس (اليوم الثاني)' : 'Tue, Mar 10 (LEAP Day 2)' },
    { date: '2026-03-11', label: lang === 'ar' ? 'الأربعاء 11 مارس (اليوم الثالث)' : 'Wed, Mar 11 (LEAP Day 3)' },
    { date: '2026-03-12', label: lang === 'ar' ? 'الخميس 12 مارس (اليوم الرابع)' : 'Thu, Mar 12 (LEAP Day 4)' },
  ];

  const times = ['10:00 AM', '11:00 AM', '02:00 PM', '03:30 PM', '05:00 PM'];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = '966565515077';
    const selectedDateObj = dates.find((d) => d.date === selectedDate);
    const dateLabel = selectedDateObj ? selectedDateObj.label : selectedDate;

    // Formatted WhatsApp message string with all user details
    const textMessage = lang === 'ar'
      ? `السلام عليكم فريق تقنية IT، أود تأكيد حجز اجتماع في معرض ليب 2026:\n\n` +
        `• الاسم: ${name}\n` +
        `• الشركة/المنشأة: ${company}\n` +
        `• البريد الإلكتروني: ${email}\n` +
        `• رقم الجوال/الواتساب: ${phone}\n` +
        `• التاريخ المستهدف: ${dateLabel}\n` +
        `• التوقيت: ${selectedTime} (بتوقيت الرياض)\n` +
        (notes ? `• التفاصيل/الموضوع: ${notes}\n` : '')
      : `Hello TQNiA IT Team, I want to confirm a meeting booking for LEAP 2026:\n\n` +
        `• Name: ${name}\n` +
        `• Company: ${company}\n` +
        `• Email: ${email}\n` +
        `• Phone/WhatsApp: ${phone}\n` +
        `• Preferred Date: ${dateLabel}\n` +
        `• Preferred Time: ${selectedTime} (AST)\n` +
        (notes ? `• Subject/Notes: ${notes}\n` : '');

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(textMessage)}`;

    // Open WhatsApp directly with all details
    window.open(whatsappUrl, '_blank');

    setBooked(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="dark:bg-[#0A0A0A] bg-white border dark:border-white/20 border-slate-300 rounded-3xl max-w-xl w-full p-6 sm:p-8 relative space-y-6 shadow-2xl overflow-y-auto max-h-[90vh] text-start">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full dark:bg-white/10 bg-slate-100 dark:hover:bg-white/20 hover:bg-slate-200 dark:text-white text-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {booked ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black dark:text-white text-slate-900">{t.reservedTitle}</h3>
            <p className="text-sm dark:text-gray-300 text-slate-600">
              {t.reservedDesc} <strong className="dark:text-white text-slate-900">{selectedDate} — {selectedTime}</strong>.
            </p>
            <div className="p-4 rounded-xl dark:bg-white/5 bg-slate-100 text-xs dark:text-slate-400 text-slate-600 space-y-1">
              <div className="flex items-center justify-center gap-1.5 text-emerald-500 font-bold">
                <MessageSquare className="w-4 h-4" />
                <span>{lang === 'ar' ? 'تم فتح تطبيق الواتساب وإرسال كافة تفاصيل الحجز بنجاح' : 'WhatsApp opened with full booking details'}</span>
              </div>
              <div>{lang === 'ar' ? 'مقر الاجتماع: معرض ليب 2026 بالرياض / اجتماع افتراضي' : 'Location: LEAP 2026 Riyadh / Online Meeting'}</div>
            </div>
            <button
              onClick={() => {
                setBooked(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl bg-[#E92929] text-white font-bold text-xs uppercase shadow-md"
            >
              {lang === 'ar' ? 'تم' : 'Done'}
            </button>
          </div>
        ) : (
          <form onSubmit={handleBooking} className="space-y-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#E92929] uppercase">
                <CalendarIcon className="w-4 h-4" /> {t.tag}
              </div>
              <h3 className="text-2xl font-black dark:text-white text-slate-900">{t.title}</h3>
              <p className="text-xs dark:text-slate-400 text-slate-600">
                {t.subtitle}
              </p>
            </div>

            {/* Date Selection */}
            <div className="space-y-2">
              <label className="text-xs font-mono font-bold dark:text-gray-300 text-slate-700 uppercase">
                {t.selectDate}
              </label>
              <div className="grid grid-cols-2 gap-2">
                {dates.map((d) => (
                  <button
                    type="button"
                    key={d.date}
                    onClick={() => setSelectedDate(d.date)}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold border text-start transition-colors ${
                      selectedDate === d.date
                        ? 'bg-[#E92929] text-white font-bold border-[#E92929]'
                        : 'dark:bg-white/5 bg-slate-100 dark:text-gray-300 text-slate-700 dark:border-white/10 border-slate-200'
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Selection */}
            <div className="space-y-2">
              <label className="text-xs font-mono font-bold dark:text-gray-300 text-slate-700 uppercase">
                {t.selectTime}
              </label>
              <div className="flex flex-wrap gap-2">
                {times.map((timeItem) => (
                  <button
                    type="button"
                    key={timeItem}
                    onClick={() => setSelectedTime(timeItem)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
                      selectedTime === timeItem
                        ? 'bg-[#E92929] text-white font-bold border-[#E92929]'
                        : 'dark:bg-white/5 bg-slate-100 dark:text-gray-300 text-slate-700 dark:border-white/10 border-slate-200'
                    }`}
                  >
                    {timeItem}
                  </button>
                ))}
              </div>
            </div>

            {/* User Info Fields */}
            <div className="space-y-3 pt-2 border-t dark:border-white/10 border-slate-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder={lang === 'ar' ? 'الاسم بالكامل *' : 'Your Name *'}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="px-3.5 py-2.5 rounded-xl dark:bg-black/60 bg-white border dark:border-white/10 border-slate-300 dark:text-white text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-[#E92929]"
                />
                <input
                  type="text"
                  required
                  placeholder={lang === 'ar' ? 'اسم الشركة / المنشأة *' : 'Company Name *'}
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="px-3.5 py-2.5 rounded-xl dark:bg-black/60 bg-white border dark:border-white/10 border-slate-300 dark:text-white text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-[#E92929]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="email"
                  required
                  placeholder={lang === 'ar' ? 'البريد الإلكتروني للعمل *' : 'Business Email *'}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-3.5 py-2.5 rounded-xl dark:bg-black/60 bg-white border dark:border-white/10 border-slate-300 dark:text-white text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-[#E92929]"
                />
                <input
                  type="tel"
                  required
                  placeholder={lang === 'ar' ? 'رقم الجوال / الواتساب *' : 'Phone / WhatsApp *'}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="px-3.5 py-2.5 rounded-xl dark:bg-black/60 bg-white border dark:border-white/10 border-slate-300 dark:text-white text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-[#E92929]"
                />
              </div>

              <textarea
                rows={2}
                placeholder={lang === 'ar' ? 'موضوع الاجتماع أو المنصة المستهدفة (T STORE / T FOOD / T REAL ESTATE / تطوير خاص)...' : 'Topic or specific product interest (e.g. T STORE / T FOOD / Custom Software)...'}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl dark:bg-black/60 bg-white border dark:border-white/10 border-slate-300 dark:text-white text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-[#E92929] resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase text-white bg-[#E92929] hover:bg-[#FF3B3B] transition-all shadow-lg shadow-[#E92929]/30"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{lang === 'ar' ? 'تأكيد الحجز وتوجيهه إلى الواتساب' : 'Confirm Booking via WhatsApp'}</span>
              <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
            </button>
          </form>
        )}

      </div>
    </div>
  );
};

export default MeetingModal;
