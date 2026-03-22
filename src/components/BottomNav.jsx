'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomNav() {
  const path = usePathname();

  return (
    <div className="bottom-nav">
      <Link href="/home"   className={`nav-item ${path==='/home'   ?'active':''}`}>
        <span style={{fontSize:20}}>🏠</span> בית
      </Link>
      <Link href="/search" className={`nav-item ${path==='/search' ?'active':''}`}>
        <span style={{fontSize:20}}>🔍</span> חיפוש
      </Link>
      <Link href="/create" className="nav-item">
        <div style={{
          background:'#5B5FED', borderRadius:14, width:48, height:48,
          display:'flex', alignItems:'center', justifyContent:'center',
          fontSize:26, color:'#fff', marginTop:-22,
          boxShadow:'0 4px 20px rgba(91,95,237,.5)',
        }}>+</div>
      </Link>
      <Link href="/rides"  className={`nav-item ${path==='/rides'  ?'active':''}`}>
        <span style={{fontSize:20}}>🎟️</span> נסיעות
      </Link>
      <Link href="/profile" className={`nav-item ${path==='/profile'?'active':''}`}>
        <span style={{fontSize:20}}>👤</span> פרופיל
      </Link>
    </div>
  );
}
