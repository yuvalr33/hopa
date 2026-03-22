'use client';

import React from 'react';

export default function HomePage() {
  return (
    <div className="flex-1 w-full flex flex-col bg-surface font-body text-on-surface antialiased lg:rounded-[44px] relative">
      {/* Top Navigation */}
      <header className="absolute top-0 w-full z-50 bg-surface/80 dark:bg-slate-950/80 backdrop-blur-xl lg:rounded-t-[44px]">
        <div className="flex justify-between items-center px-6 py-4 w-full">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>menu</span>
            <h1 className="font-headline font-black italic text-xl tracking-tight text-[#3045e3] dark:text-[#4D61FC]">Hopp</h1>
          </div>
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20 bg-surface-container-high">
            <img 
              alt="Student Profile Avatar" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzsBF1LlX5pDUKLwAVTvQQnEZBcocuCOUS63MF5JyzZiMy0n_RqSuAjxHHhv_mc9FMinA2EyUorIZP9FDd1ViqnjbehC85JXZuxCj1nxEyQPtVVrKlpbC8TlSdGENq0T7Pi-Bg5e-43fKR9VKiifJAypXkqFTPNH0xOZmQ1s90UoIGzqGUaiSgMjAPJzRTuF1iNrBaaGOk6zS70hhoKak26CqHXf3OcOlWfx7Os2CAkzPMbGsL5r6nSwVhFH6LTsZgBlmyxQPTMk4"
            />
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto pt-20 px-6 pb-40 space-y-10">
        {/* Passenger Mode: Suggested Locations */}
        <section className="space-y-4 pt-2">
          <div className="flex justify-between items-end">
            <h2 className="font-headline font-bold text-2xl tracking-tight text-on-surface">לאן נוסעים?</h2>
            <span className="text-primary font-label text-sm font-semibold">הצג הכל</span>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 hide-scrollbar">
            {/* Suggestion 1 */}
            <div className="min-w-[160px] p-6 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col items-start gap-4 text-right border border-primary/5">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">local_library</span>
              </div>
              <span className="font-headline font-bold text-sm">הספרייה המרכזית</span>
            </div>
            {/* Suggestion 2 */}
            <div className="min-w-[160px] p-6 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col items-start gap-4 text-right border border-primary/5">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">gate</span>
              </div>
              <span className="font-headline font-bold text-sm">השער המערבי</span>
            </div>
            {/* Suggestion 3 */}
            <div className="min-w-[160px] p-6 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col items-start gap-4 text-right border border-primary/5">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">science</span>
              </div>
              <span className="font-headline font-bold text-sm">פארק המדע</span>
            </div>
          </div>
        </section>

        {/* Active State: Ride Status */}
        <section className="space-y-4">
          <div className="p-6 rounded-xl bg-gradient-to-br from-white to-surface-container-low border border-primary/10 shadow-lg relative overflow-hidden text-right">
            <div className="absolute top-0 left-0 p-4">
              <div className="bg-primary/10 text-primary px-3 py-1 rounded-full font-label text-[10px] font-bold tracking-widest uppercase">מאושר</div>
            </div>
            <div className="flex items-center gap-4 mb-6 pt-2">
              <div className="relative">
                <img 
                  className="w-14 h-14 rounded-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrqRcB2kvcuYgET4ojKgQQhaqWeZgF5gxNRjRRWshecQCBmrADnHnnpEbpl0S49JVpUMnlJtE2kJo52BIr0-X60MMukpwRes8s-p9JyQoKPtBU_a2EDsWEZ-h5M20WYfcmAECBQLAtuRGVBRa6-NPqxxykIKCnGtGFhdh0KjPqtQcFAcfjIg_QLgHaQ98v6MBUcB-xF1OYRu2PwSHrrfAk6sSaaXdQdJkyzpLIGkRBmA2R6e-KkwaChs_zmcexAmS8A6lA_naXnnU" 
                  alt="Male driver portrait"
                />
                <div className="absolute -bottom-1 -left-1 bg-primary text-white p-0.5 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                </div>
              </div>
              <div>
                <h3 className="font-headline font-bold text-lg leading-tight">נסיעה מגיעה בקרוב</h3>
                <p className="text-on-surface-variant text-sm mt-1">מגיע בעוד <span className="text-primary font-bold">4 דקות</span></p>
              </div>
            </div>
            <div className="bg-surface-container-highest/30 rounded-lg p-4 mb-6 flex justify-between items-center border border-primary/5">
              <div className="flex items-center gap-3">
                <div className="text-primary">
                  <span className="material-symbols-outlined">directions_car</span>
                </div>
                <div>
                  <p className="font-bold text-sm">טויוטה קאמרי</p>
                  <p className="text-xs text-on-surface-variant mt-0.5" dir="ltr">ABC-1234 • White</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm text-primary">
                  <span className="material-symbols-outlined">call</span>
                </button>
                <button className="px-4 h-10 flex items-center justify-center bg-primary text-white rounded-full font-label text-xs font-bold shadow-md shadow-primary/20">
                  שלח הודעה לנהג
                </button>
              </div>
            </div>
            <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-[70%] rounded-full float-right"></div>
            </div>
          </div>
        </section>

        {/* Driver Mode: Promo Card */}
        <section>
          <div className="bg-gradient-to-br from-[#3045e3] to-[#4D61FC] p-8 rounded-2xl shadow-xl shadow-blue-500/20 relative overflow-hidden text-right">
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
            <div className="relative z-10 flex flex-col items-start gap-6">
              <div className="space-y-2">
                <h2 className="font-headline font-extrabold text-2xl text-white tracking-tight leading-tight">עוזבים את הקמפוס?<br/>שתפו מקומות</h2>
                <p className="text-white/80 font-body text-sm max-w-xs leading-relaxed">החזירו את הוצאות הדלק והכירו סטודנטים בדרך החוצה.</p>
              </div>
              <button className="bg-white text-primary px-6 py-3.5 rounded-full font-label font-black text-sm uppercase tracking-wider shadow-lg active:scale-95 transition-transform w-max">
                פרסם נסיעה
              </button>
            </div>
          </div>
        </section>

        {/* Map Quick-View */}
        <section className="space-y-4">
          <h2 className="font-headline font-bold text-xl tracking-tight text-on-surface">פעילות בקמפוס</h2>
          <div className="h-48 w-full rounded-2xl overflow-hidden relative bg-surface-container shadow-inner border border-primary/5">
            <img 
              className="w-full h-full object-cover opacity-70 mix-blend-multiply" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz-v5V6tlQx19AVPh1QwfQY3eERdi0cWSnPCqXG6IxXA212MtQaaxPcb56nvnCBm9v82VhO9vYVOPuISxnA4-KTtFV-PIbPvX3TJBaz1Mv7fOH96Ep_ZG5KnsT7sC6FSx39bfnMN6u4SbuQ7nFx1_1HcHl64SDqxQGHeibIShU7tV_yVFj1VNz66vWSpB1dveZTmKZBrP95_p1-jHF_h_8a-wAtfWHgMevRtBn0mcN_d5mYUhnSDdYIFmQReDOGo9U-4_YLd3q4qs" 
              alt="Campus Map"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/95 backdrop-blur px-5 py-2.5 rounded-full flex items-center gap-2 shadow-lg border border-primary/10">
                <span className="material-symbols-outlined text-primary text-sm">explore</span>
                <span className="text-xs font-bold text-on-surface">12 נסיעות פעילות בקרבת מקום</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Navigation Bar */}
      <nav className="absolute bottom-0 left-0 w-full bg-surface/90 dark:bg-slate-900/90 backdrop-blur-2xl flex justify-around items-center px-4 pb-8 pt-4 z-50 rounded-t-[3rem] shadow-[0_-12px_30px_-4px_rgba(26,28,30,0.08)] lg:rounded-b-[44px]">
        {/* Home (Active) */}
        <a className="flex flex-col items-center justify-center bg-gradient-to-br from-[#3045e3] to-[#4D61FC] text-white rounded-full px-6 py-2 shadow-lg shadow-blue-500/20 active:scale-90 transition-all duration-300 ease-out" href="#">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
          <span className="font-label font-semibold text-[11px] uppercase tracking-wider mt-0.5">ראשי</span>
        </a>
        {/* Trips */}
        <a className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-4 py-2 hover:text-[#3045e3] dark:hover:text-[#4D61FC] transition-colors active:scale-90 transition-all duration-300 ease-out" href="#">
          <span className="material-symbols-outlined">directions_car</span>
          <span className="font-label font-semibold text-[11px] uppercase tracking-wider mt-0.5">נסיעות</span>
        </a>
        {/* Alerts */}
        <a className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-4 py-2 hover:text-[#3045e3] dark:hover:text-[#4D61FC] transition-colors active:scale-90 transition-all duration-300 ease-out relative" href="#">
          <span className="material-symbols-outlined">notifications</span>
          <span className="font-label font-semibold text-[11px] uppercase tracking-wider mt-0.5">עדכונים</span>
          {/* Notification Dot */}
          <span className="absolute top-2 left-4 w-2 h-2 bg-error rounded-full outline outline-2 outline-white dark:outline-slate-900"></span>
        </a>
      </nav>
      
      {/* Hide scrollbar styles embedded for main if not in global */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
}
