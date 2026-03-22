'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import HoppaLogo from '@/components/HoppaLogo';

export default function SplashPage() {
  const router = useRouter();
  useEffect(() => { const t = setTimeout(() => router.push('/welcome'), 2400); return () => clearTimeout(t); }, []);

  return (
    <div style={{
      flex:1, background:'#5B5FED',
      display:'flex', flexDirection:'column',
      alignItems:'center', justifyContent:'center', gap:14,
    }}>
      <div className="pulse"><HoppaLogo size={56} color="#fff" /></div>
      <p style={{ color:'rgba(255,255,255,.65)', fontSize:14, fontWeight:500, letterSpacing:1.5 }}>
        YOUR CAMPUS RIDE
      </p>
    </div>
  );
}
