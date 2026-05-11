'use client';

import React from 'react';
import Link from 'next/link';

export default function BottomNav() {
  return (
    <nav className="absolute bottom-0 w-full bg-[#2260FF] text-white flex justify-evenly items-center py-5 pb-8 z-20 lg:rounded-b-[30px]" dir="rtl">
      {/* Car - My Rides (Right in RTL - first child) */}
      <Link href="/rides" className="flex flex-col items-center justify-center gap-1.5 opacity-100 hover:scale-105 transition-transform flex-1">
        <img src="/images2/Icon (1).svg" alt="הנסיעות שלי" className="w-[18px] h-[16px]" />
        <span className="font-bold text-[13px]">הנסיעות שלי</span>
      </Link>

      {/* Home (Left in RTL - second child) */}
      <Link href="/home" className="flex flex-col items-center justify-center gap-1.5 opacity-100 hover:scale-105 transition-transform flex-1">
        <img src="/images2/Icon (2).svg" alt="בית" className="w-[16px] h-[18px]" />
        <span className="font-bold text-[13px]">בית</span>
      </Link>
    </nav>
  );
}
