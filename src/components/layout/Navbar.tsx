import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Sun, Moon, Globe } from 'lucide-react';
import LeapBadge from '../hero/LeapBadge';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

interface NavbarProps {
  onOpenMeeting: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenMeeting }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLanguage } = useLanguage();
  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.solutions, href: '#solutions' },
    { name: t.products, href: '#products' },
    { name: t.caseStudies, href: '#case-studies' },
    { name: t.whyTqnia, href: '#why-tqnia' },
    { name: t.contact, href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'dark:bg-gradient-to-r dark:from-[#180303]/95 dark:via-[#080202]/95 dark:to-[#180303]/95 bg-white/95 dark:border-b dark:border-[#E92929]/40 border-b border-slate-200 backdrop-blur-md py-3 shadow-xl dark:shadow-black/90'
          : 'dark:bg-gradient-to-b dark:from-black/80 dark:to-transparent bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          
          {/* Left: Brand Logo & LEAP Event Badge */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <a href="#" className="flex items-center gap-2 group">
              {/* TQNiA Logo */}
              <div className="w-10 h-10 rounded-xl bg-[#E92929] flex items-center justify-center shadow-lg shadow-[#E92929]/40 group-hover:scale-105 transition-transform shrink-0">
                <span className="font-black text-white text-xl tracking-tighter">T</span>
              </div>
              <div className="flex flex-col shrink-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-black text-xl tracking-tight dark:text-white text-slate-900 group-hover:text-[#E92929] transition-colors">
                    TQNiA
                  </span>
                  <span className="font-semibold text-xs text-[#E92929] bg-[#E92929]/15 px-1.5 py-0.5 rounded border border-[#E92929]/30">
                    IT
                  </span>
                </div>
                <span className="text-[9px] sm:text-[10px] dark:text-slate-400 text-slate-500 tracking-widest uppercase font-medium">
                  {lang === 'ar' ? 'التحول الرقمي' : 'Digital Transformation'}
                </span>
              </div>
            </a>

            <div className="hidden md:block pl-2 border-l dark:border-white/10 border-slate-200 shrink-0">
              <LeapBadge size="sm" />
            </div>
          </div>

          {/* Center Nav Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs sm:text-sm font-bold dark:text-gray-200 text-slate-700 hover:text-[#E92929] dark:hover:text-[#E92929] transition-colors py-1 relative group whitespace-nowrap"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E92929] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Actions: Language Switcher, Theme Switcher & Book Meeting CTA */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl dark:bg-white/10 bg-slate-100 dark:border-white/10 border-slate-200 font-extrabold text-xs dark:text-white text-slate-800 hover:border-[#E92929] transition-all shadow-sm"
              title={lang === 'ar' ? 'Switch to English' : 'التحويل للغة العربية'}
            >
              <Globe className="w-3.5 h-3.5 text-[#E92929]" />
              <span>{lang === 'ar' ? 'EN' : 'عربي'}</span>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl dark:bg-white/10 bg-slate-100 dark:border-white/10 border-slate-200 dark:text-amber-400 text-slate-700 hover:scale-105 transition-all shadow-sm"
              aria-label="Toggle Light/Dark Theme"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-slate-900" />}
            </button>

            {/* Meeting CTA */}
            <button
              onClick={onOpenMeeting}
              className="relative inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-extrabold text-xs tracking-wider uppercase text-white bg-[#E92929] hover:bg-[#FF3B3B] transition-all shadow-lg shadow-[#E92929]/30 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.bookMeeting}</span>
            </button>
          </div>

          {/* Mobile/Tablet Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-2 rounded-xl dark:bg-white/10 bg-slate-100 font-bold text-xs dark:text-white text-slate-800"
            >
              <Globe className="w-3.5 h-3.5 text-[#E92929]" />
              <span>{lang === 'ar' ? 'EN' : 'عربي'}</span>
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl dark:bg-white/10 bg-slate-100 dark:text-amber-400 text-slate-700"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl dark:bg-[#1D0404] bg-slate-100 border dark:border-[#E92929]/50 border-slate-300 dark:text-white text-slate-900 hover:bg-[#E92929] transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile/Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden dark:bg-gradient-to-b dark:from-[#180303] dark:via-[#0D0202] dark:to-[#180303] bg-white backdrop-blur-2xl border-b dark:border-[#E92929]/50 border-slate-200 px-4 pt-4 pb-6 space-y-4 shadow-2xl animate-fadeIn">
          <div className="flex items-center justify-between pb-2 border-b dark:border-white/10 border-slate-200">
            <LeapBadge size="sm" />
            <span className="text-xs font-mono dark:text-slate-400 text-slate-500">{t.navMenu}</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-bold dark:text-gray-200 text-slate-800 hover:text-[#E92929] dark:bg-[#220505] bg-slate-100 border dark:border-[#E92929]/30 border-slate-200 px-3.5 py-3 rounded-xl text-center transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenMeeting();
            }}
            className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase text-white bg-[#E92929] hover:bg-[#FF3B3B] transition-all shadow-xl shadow-[#E92929]/40"
          >
            <Calendar className="w-4 h-4" />
            <span>{t.bookMeeting}</span>
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
