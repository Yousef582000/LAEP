import React from 'react';
import { Calendar, MessageSquare } from 'lucide-react';

interface FloatingActionsProps {
  onOpenMeeting: () => void;
}

const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenMeeting }) => {
  const whatsappNumber = '966565515077';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello TQNiA IT Team, I would like to inquire about digital solutions for LEAP 2026.')}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end pointer-events-auto">
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs shadow-2xl shadow-emerald-500/30 hover:scale-105 transition-all group backdrop-blur-md"
        aria-label="Chat with TQNiA on WhatsApp"
      >
        <MessageSquare className="w-4 h-4 fill-white" />
        <span className="hidden sm:inline">Chat With Us</span>
      </a>

      {/* Book Meeting Quick Action */}
      <button
        onClick={onOpenMeeting}
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#E92929] hover:bg-[#FF3B3B] text-white font-extrabold text-xs shadow-2xl shadow-[#E92929]/40 hover:scale-105 transition-all"
        aria-label="Book 30-Minute Meeting"
      >
        <Calendar className="w-4 h-4" />
        <span>Book Meeting</span>
      </button>
    </div>
  );
};

export default FloatingActions;
