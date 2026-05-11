'use client';

import React from 'react';
import BottomNav from '@/components/BottomNav';

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
        <div className="flex items-center gap-0">
          {/* Logo */}
          <div className="flex items-center justify-center -ml-5">
            <img 
              src="/images2/Hoppa logo White.png" 
              alt="Hoppa Logo" 
              className="w-[137px] h-[91px] object-contain select-none drop-shadow-sm relative z-0"
            />
          </div>
          {/* Avatar - Renders on the leftmost side inline within flex group in RTL */}
          <div className="w-[48px] h-[48px] rounded-full overflow-hidden border-[2px] border-white shadow-sm shrink-0 bg-white/10 relative z-10">
            <img 
              alt="Profile Avatar" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzsBF1LlX5pDUKLwAVTvQQnEZBcocuCOUS63MF5JyzZiMy0n_RqSuAjxHHhv_mc9FMinA2EyUorIZP9FDd1ViqnjbehC85JXZuxCj1nxEyQPtVVrKlpbC8TlSdGENq0T7Pi-Bg5e-43fKR9VKiifJAypXkqFTPNH0xOZmQ1s90UoIGzqGUaiSgMjAPJzRTuF1iNrBaaGOk6zS70hhoKak26CqHXf3OcOlWfx7Os2CAkzPMbGsL5r6nSwVhFH6LTsZgBlmyxQPTMk4"
            />
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-hidden px-6 pt-6 pb-28 flex flex-col w-full justify-around items-center">
        
        {/* Main Title */}
        <h2 className="text-right font-headline font-black text-[30px] tracking-tighter text-[#2260FF] leading-tight w-full pr-2">
          לאן נוסעים היום?
        </h2>

        {/* Action Cards */}
        <div className="flex justify-center gap-[18px] w-full">
          {/* White Card "צור נסיעה" - first child, renders on the RIGHT in RTL */}
          <div className="w-[149px] h-[180px] bg-white hover:bg-blue-50 transition-colors rounded-[17px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex flex-col justify-end items-start text-right p-4 pb-5 cursor-pointer shrink-0">
            <h3 className="text-[#2260FF] font-headline font-black text-[20px] tracking-tight mb-1 leading-tight">צור נסיעה</h3>
            <p className="text-[#2260FF] font-bold text-[10px] tracking-tight leading-tight max-w-[120px]">
              פרסם נסיעה והצע<br/>מקומות פנויים
            </p>
          </div>

          {/* Blue Card "חפש נסיעה" - second child, renders on the LEFT in RTL */}
          <div className="w-[149px] h-[180px] bg-[#4378FF] bg-opacity-90 hover:bg-[#2260FF] transition-colors rounded-[17px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex flex-col justify-end items-start text-right p-4 pb-5 cursor-pointer shrink-0">
            <h3 className="text-white font-headline font-black text-[20px] tracking-tight mb-1 leading-tight">חפש נסיעה</h3>
            <p className="text-white font-bold text-[10px] tracking-tight leading-tight max-w-[120px]">
              פרסם נסיעה והצע<br/>מקומות פנויים
            </p>
          </div>
        </div>

        {/* Recent Rides Section */}
        <div className="w-full flex flex-col items-center mt-2">
          <h2 className="text-center font-headline font-black text-[26px] tracking-tighter text-[#2260FF] mb-4">
            נסיעות אחרונות
          </h2>

          <div className="flex flex-col w-full gap-4 max-w-[340px]">
            {/* Ride 1 */}
            <div className="w-full border-[1.5px] border-[#2260FF] bg-transparent rounded-[17px] p-2.5 flex items-center justify-between cursor-pointer hover:bg-blue-50 transition-colors">
              {/* Text on right in RTL */}
              <div className="flex flex-1 justify-center items-center gap-2 text-[#2260FF] font-black text-[17px] font-headline pl-2 tracking-tight">
                <span className="whitespace-nowrap">באר שבע</span>
                <span className="material-symbols-outlined text-[20px] font-bold mx-1" style={{ fontVariationSettings: "'wght' 700" }}>west</span>
                <span className="whitespace-nowrap">תל אביב</span>
              </div>
              
              {/* Button on left in RTL */}
              <button className="bg-[#4378FF] hover:bg-[#2260FF] text-white font-bold tracking-tight text-[14px] px-5 py-2.5 rounded-full shadow-sm transition-transform active:scale-95 shrink-0">
                חפש שוב
              </button>
            </div>

            {/* Ride 2 */}
            <div className="w-full border-[1.5px] border-[#2260FF] bg-transparent rounded-[17px] p-2.5 flex items-center justify-between cursor-pointer hover:bg-blue-50 transition-colors">
              {/* Text on right in RTL */}
              <div className="flex flex-1 justify-center items-center gap-2 text-[#2260FF] font-black text-[17px] font-headline pl-2 tracking-tight">
                <span className="whitespace-nowrap">תל אביב</span>
                <span className="material-symbols-outlined text-[20px] font-bold mx-1" style={{ fontVariationSettings: "'wght' 700" }}>west</span>
                <span className="whitespace-nowrap">באר שבע</span>
              </div>
              
              {/* Button on left in RTL */}
              <button className="bg-[#4378FF] hover:bg-[#2260FF] text-white font-bold tracking-tight text-[14px] px-5 py-2.5 rounded-full shadow-sm transition-transform active:scale-95 shrink-0">
                חפש שוב
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <BottomNav />
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
}
