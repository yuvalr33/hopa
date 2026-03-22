'use client';
import Link from 'next/link';
import BottomNav from '@/components/BottomNav';
import { MOCK_RIDES } from '@/lib/data';

function ActionCard({ icon, title, sub, color, href }) {
  return (
    <Link href={href} style={{ textDecoration:'none' }}>
      <div style={{
        background:color, borderRadius:20, padding:'20px 16px',
        cursor:'pointer', transition:'transform .15s, box-shadow .15s',
        boxShadow:`0 6px 20px ${color}40`,
      }}
        onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow=`0 12px 30px ${color}55`; }}
        onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow=`0 6px 20px ${color}40`; }}
      >
        <div style={{ fontSize:30, marginBottom:10 }}>{icon}</div>
        <div style={{ color:'#fff', fontWeight:700, fontSize:16 }}>{title}</div>
        <div style={{ color:'rgba(255,255,255,.75)', fontSize:12, marginTop:3 }}>{sub}</div>
      </div>
    </Link>
  );
}

function MiniCard({ ride }) {
  return (
    <div className="ride-card" style={{ display:'flex', alignItems:'center', gap:12 }}>
      <div style={{ width:44, height:44, borderRadius:14, background:'#EEF0FF', display:'flex', alignItems:'center', justifyContent:'center', fontSize:17, fontWeight:700, color:'#5B5FED', flexShrink:0 }}>
        {ride.avatar}
      </div>
      <div style={{ flex:1, minWidth:0 }}>
        <div style={{ fontWeight:700, fontSize:14, color:'#1A1A2E' }}>{ride.from} → {ride.to}</div>
        <div style={{ fontSize:12, color:'#aaa', marginTop:2 }}>{ride.time} · {ride.driver}</div>
      </div>
      <div style={{ textAlign:'left', flexShrink:0 }}>
        <div style={{ fontWeight:800, fontSize:15, color:'#5B5FED' }}>₪{ride.price}</div>
        <div style={{ fontSize:11, color:'#ccc', marginTop:1 }}>{ride.seats} מקומות</div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'בוקר טוב ☀️' : hour < 17 ? 'צהריים טובים 🌤️' : 'ערב טוב 🌙';

  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column' }}>
      <div style={{ background:'#5B5FED', padding:'52px 24px 28px', borderRadius:'0 0 28px 28px' }}>
        <p style={{ color:'rgba(255,255,255,.75)', fontSize:13 }}>{greeting}</p>
        <h1 style={{ color:'#fff', fontSize:26, fontWeight:800, marginTop:4 }}>לאן נוסעים היום?</h1>
      </div>

      <div style={{ flex:1, overflowY:'auto', padding:'24px 20px 16px', display:'flex', flexDirection:'column', gap:20 }} className="fade-in">
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14 }}>
          <ActionCard icon="🚗" title="צור נסיעה"  sub="אני הנהג"  color="#5B5FED" href="/create" />
          <ActionCard icon="🔍" title="חפש נסיעה" sub="אני נוסע"  color="#22C55E" href="/search" />
        </div>

        <div>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:12 }}>
            <h2 style={{ fontSize:16, fontWeight:700, color:'#1A1A2E' }}>נסיעות אחרונות</h2>
            <Link href="/search" style={{ color:'#5B5FED', fontSize:13, fontWeight:600, textDecoration:'none' }}>הכל ›</Link>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
            {MOCK_RIDES.slice(0,3).map(r => <MiniCard key={r.id} ride={r} />)}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
