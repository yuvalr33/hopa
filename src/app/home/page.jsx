'use client';

import React from 'react';

export default function HomePage() {
  return (
    <div className="flex-1 w-full flex flex-col bg-[#F9F9FC] font-body text-on-surface antialiased lg:rounded-[30px] relative overflow-hidden" dir="rtl">
      {/* Top Navigation */}
      <header className="w-full bg-[#2260FF] px-6 py-4 flex justify-between items-center z-10 lg:rounded-t-[30px]">
        {/* Hamburger - Renders on the RIGHT in RTL */}
        <button className="text-white active:scale-95 transition-transform flex items-center justify-center p-1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        
        {/* Logo and Avatar - Renders on the LEFT in RTL */}
        <div className="flex items-center gap-4">
          {/* Logo */}
          <div className="flex items-center justify-center mr-2">
            <img 
              src="/images2/Hoppa logo White.png" 
              alt="Hoppa Logo" 
              className="h-[24px] w-auto object-contain select-none drop-shadow-sm"
            />
          </div>
          {/* Avatar - Renders on the leftmost side inline within flex group in RTL */}
          <div className="w-[48px] h-[48px] rounded-full overflow-hidden border-[2px] border-white shadow-sm shrink-0 bg-white/10">
            <img 
              alt="Profile Avatar" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzsBF1LlX5pDUKLwAVTvQQnEZBcocuCOUS63MF5JyzZiMy0n_RqSuAjxHHhv_mc9FMinA2EyUorIZP9FDd1ViqnjbehC85JXZuxCj1nxEyQPtVVrKlpbC8TlSdGENq0T7Pi-Bg5e-43fKR9VKiifJAypXkqFTPNH0xOZmQ1s90UoIGzqGUaiSgMjAPJzRTuF1iNrBaaGOk6zS70hhoKak26CqHXf3OcOlWfx7Os2CAkzPMbGsL5r6nSwVhFH6LTsZgBlmyxQPTMk4"
            />
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto px-6 pt-10 pb-32 flex flex-col items-center">
        
        {/* Main Title */}
        <h2 className="text-center font-headline font-black text-[36px] tracking-tighter text-[#2260FF] mb-10 leading-tight w-full drop-shadow-sm">
          לאן נוסעים היום?
        </h2>

        {/* Action Cards */}
        <div className="flex w-full gap-5 mb-14">
          {/* White Card "צור נסיעה" - first child, renders on the RIGHT in RTL */}
          <div className="flex-1 bg-white hover:bg-blue-50 transition-colors rounded-[30px] p-5 shadow-[0_12px_45px_rgba(0,0,0,0.06)] flex flex-col justify-center items-center text-center cursor-pointer min-h-[220px]">
            <h3 className="text-[#2260FF] font-headline font-black text-[24px] tracking-tight mb-2 leading-tight">צור נסיעה</h3>
            <p className="text-[#2260FF] font-bold text-[13px] tracking-tight leading-tight max-w-[120px]">
              פרסם נסיעה והצע<br/>מקומות פנויים
            </p>
          </div>

          {/* Blue Card "חפש נסיעה" - second child, renders on the LEFT in RTL */}
          <div className="flex-1 bg-[#4378FF] hover:bg-[#2260FF] transition-colors rounded-[30px] p-5 shadow-[0_12px_35px_rgba(34,96,255,0.35)] flex flex-col justify-center items-center text-center cursor-pointer min-h-[220px]">
            <h3 className="text-white font-headline font-black text-[24px] tracking-tight mb-2 leading-tight">חפש נסיעה</h3>
            <p className="text-white font-bold text-[13px] tracking-tight leading-tight max-w-[120px]">
              פרסם נסיעה והצע<br/>מקומות פנויים
            </p>
          </div>
        </div>

        {/* Recent Rides Section */}
        <div className="w-full flex flex-col items-center">
          <h2 className="text-center font-headline font-black text-[30px] tracking-tighter text-[#2260FF] mb-5">
            נסיעות אחרונות
          </h2>

          <div className="w-full border-[2px] border-[#2260FF] bg-transparent rounded-[30px] p-2 flex items-center justify-between cursor-pointer hover:bg-blue-50 transition-colors">
            {/* Text on right in RTL */}
            <div className="flex flex-1 justify-center items-center gap-2 text-[#2260FF] font-black text-[19px] font-headline pl-4 tracking-tight">
              <span className="whitespace-nowrap">באר שבע</span>
              <span className="material-symbols-outlined text-[20px] font-bold mx-1" style={{ fontVariationSettings: "'wght' 700" }}>west</span>
              <span className="whitespace-nowrap">תל אביב</span>
            </div>
            
            {/* Button on left in RTL */}
            <button className="bg-[#4378FF] hover:bg-[#2260FF] text-white font-bold tracking-tight text-[15px] px-6 py-3.5 rounded-[22px] shadow-md transition-transform active:scale-95 shrink-0">
              חפש שוב
            </button>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="absolute bottom-0 w-full bg-[#2260FF] text-white flex justify-evenly items-center py-5 pb-8 z-20 lg:rounded-b-[30px]">
        {/* Home - first child, renders on the RIGHT in RTL */}
        <button className="flex flex-col items-center justify-center gap-1.5 opacity-100 hover:scale-105 transition-transform flex-1">
          <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
          <span className="font-bold text-[13px]">בית</span>
        </button>

        {/* Car - second child, renders on the LEFT in RTL */}
        <button className="flex flex-col items-center justify-center gap-1.5 opacity-100 hover:scale-105 transition-transform flex-1">
          <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400" }}>directions_car</span>
          <span className="font-bold text-[13px]">הנסיעות שלי</span>
        </button>
      </nav>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
}
