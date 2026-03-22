'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ScreenHeader from '@/components/ScreenHeader';
import BottomNav from '@/components/BottomNav';
import { CITIES, MOCK_RIDES } from '@/lib/data';

function RideCard({ ride, onJoin }) {
  return (
    <div className="ride-card fade-in">
      <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:12 }}>
        <div style={{ width:46, height:46, borderRadius:14, background:'#EEF0FF', display:'flex', alignItems:'center', justifyContent:'center', fontSize:19, fontWeight:700, color:'#5B5FED', flexShrink:0 }}>
          {ride.avatar}
        </div>
        <div style={{ flex:1 }}>
          <div style={{ fontWeight:700, fontSize:15, color:'#1A1A2E' }}>{ride.driver}</div>
          <div style={{ fontSize:12, color:'#aaa' }}>⭐ {ride.rating} · {ride.trips} נסיעות</div>
        </div>
        <div style={{ fontWeight:800, fontSize:20, color:'#5B5FED' }}>₪{ride.price}</div>
      </div>

      <div className="divider" />

      <div style={{ display:'flex', alignItems:'center', gap:10, margin:'12px 0' }}>
        <div style={{ flex:1, textAlign:'right' }}>
          <div style={{ fontWeight:700, fontSize:15, color:'#1A1A2E' }}>{ride.from}</div>
          <div style={{ fontSize:12, color:'#aaa', marginTop:2 }}>{ride.time}</div>
        </div>
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:3 }}>
          <div style={{ width:8, height:8, borderRadius:'50%', background:'#5B5FED' }} />
          <div style={{ width:1, height:20, background:'#ddd' }} />
          <div style={{ width:8, height:8, borderRadius:'50%', border:'2px solid #5B5FED' }} />
        </div>
        <div style={{ flex:1, textAlign:'left' }}>
          <div style={{ fontWeight:700, fontSize:15, color:'#1A1A2E' }}>{ride.to}</div>
          <div style={{ fontSize:12, color:'#aaa', marginTop:2 }}>~2 שעות</div>
        </div>
      </div>

      <div style={{ display:'flex', gap:8, marginBottom:14 }}>
        <span className="tag">🪑 {ride.seats} מקומות</span>
        <span className="tag">📅 {ride.date}</span>
      </div>

      <button className="btn-primary" style={{ padding:'13px' }} onClick={()=>onJoin(ride)}>
        הצטרף לנסיעה
      </button>
    </div>
  );
}

export default function SearchPage() {
  const router = useRouter();
  const [from,     setFrom]     = useState('באר שבע');
  const [to,       setTo]       = useState('תל אביב');
  const [searched, setSearched] = useState(false);
  const [joined,   setJoined]   = useState(null);

  const results = MOCK_RIDES.filter(r=>r.from===from && r.to===to);

  const handleJoin = (ride) => {
    setJoined(ride);
    setTimeout(() => router.push('/home'), 2400);
  };

  if (joined) return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:16, padding:32 }} className="fade-in">
      <div className="check-in" style={{ fontSize:70 }}>✅</div>
      <h2 style={{ fontSize:24, fontWeight:800, color:'#1A1A2E', textAlign:'center' }}>הצטרפת לנסיעה!</h2>
      <p style={{ fontSize:14, color:'#888', textAlign:'center', lineHeight:1.6 }}>פרטי הנהג זמינים עכשיו</p>
      <div className="tag" style={{ fontSize:14, padding:'10px 20px', marginTop:4 }}>{joined.from} → {joined.to} · {joined.time}</div>
      <div style={{ marginTop:16, background:'#F0FFF4', border:'1px solid #BBF7D0', borderRadius:14, padding:'16px 20px', textAlign:'center', width:'100%' }}>
        <p style={{ fontSize:12, color:'#166534', marginBottom:4 }}>📱 טלפון הנהג</p>
        <p style={{ fontSize:18, fontWeight:700, color:'#15803D' }}>050-0000000</p>
        <p style={{ fontSize:12, color:'#888', marginTop:4 }}>{joined.driver}</p>
      </div>
    </div>
  );

  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column' }}>
      <ScreenHeader title="חפש נסיעה 🔍" />

      <div style={{ padding:'16px 20px', background:'#fff', borderBottom:'1px solid #F0F0FF' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginBottom:10 }}>
          <select className="input-field" value={from} onChange={e=>setFrom(e.target.value)} style={{ fontSize:14 }}>
            {CITIES.map(c=><option key={c} value={c}>{c}</option>)}
          </select>
          <select className="input-field" value={to} onChange={e=>setTo(e.target.value)} style={{ fontSize:14 }}>
            {CITIES.filter(c=>c!==from).map(c=><option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <button className="btn-primary" style={{ padding:'13px' }} onClick={()=>setSearched(true)}>
          חפש נסיעות
        </button>
      </div>

      <div style={{ flex:1, overflowY:'auto', padding:'16px 20px', display:'flex', flexDirection:'column', gap:12 }}>
        {searched && results.length===0 ? (
          <div style={{ textAlign:'center', padding:'50px 20px' }} className="fade-in">
            <div style={{ fontSize:56, marginBottom:14 }}>😕</div>
            <p style={{ color:'#888', fontSize:15, fontWeight:600 }}>אין נסיעות זמינות היום</p>
            <p style={{ color:'#ccc', fontSize:13, marginTop:6, lineHeight:1.5 }}>נסה עיר אחרת או תאריך אחר</p>
            <button className="btn-secondary" style={{ marginTop:24 }} onClick={()=>router.push('/create')}>
              פרסם נסיעה משלך 🚗
            </button>
          </div>
        ) : (
          (searched ? results : MOCK_RIDES).map(ride=>(
            <RideCard key={ride.id} ride={ride} onJoin={handleJoin} />
          ))
        )}
      </div>

      <BottomNav />
    </div>
  );
}
