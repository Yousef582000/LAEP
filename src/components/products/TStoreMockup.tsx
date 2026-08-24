import React from 'react';

const TStoreMockup: React.FC = () => {
  return (
    <div className="w-full rounded-3xl overflow-hidden border dark:border-white/15 border-slate-200 shadow-2xl bg-white dark:bg-[#0A0A0A] p-2 group transition-all duration-500">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-50 dark:bg-black/40">
        <img
          src="/tstore-mockup.png"
          alt="T STORE E-Commerce Platform & Mobile App Mockup"
          className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
};

export default TStoreMockup;
