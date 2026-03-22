'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ScreenHeader from '@/components/ScreenHeader';
import { CITIES } from '@/lib/data';

export default function CreatePage() {
  const router = useRouter();
  const [from,  setFrom]  = useState('');
  const [to,    setTo]    = useState('');
  const [date,  setDate]  = useState('');
  const [time,  setTime]  = useState('');
  const [seats, setSeats] = useState('1');
  const [price, setPrice] = useState('');
  const [notes, setNotes] = useState('');
  const [done,  setDone]  = useState(false);

  const valid = from && to && from !== to && date && time && Number(price) > 0;

  const handleSubmit = () => {
    if (!valid) return;
    setDone(true);
    setTimeout(() => router.push('/home'), 2200);
  };

  if (done) return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:16, padding:32 }} className="fade-in">
      <div className="check-in" style={{ fontSize:70 }}>🎉</div>
      <h2 style={{ fontSize:24, fontWeight:800, color:'#1A1A2E', textAlign:'center' }}>הנסיעה פורסמה!</h2>
      <p style={{ fontSize:14, color:'#888', textAlign:'center', lineHeight:1.6 }}>
        הנסיעה שלך הופיעה בלוח המודעות.<br/>נוסעים יוכלו להצטרף בקרוב.
      </p>
      <div className="tag" style={{ fontSize:14, padding:'10px 20px', marginTop:8 }}>{from} → {to} · {time}</div>
      <div style={{ fontSize:13, color:'#aaa' }}>₪{price} לנוסע · {seats} מקומות</div>
    </div>
  );

  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column' }}>
      <ScreenHeader title="יצירת נסיעה 🚗" />

      <div style={{ flex:1, overflowY:'auto', padding:'24px 20px 36px', display:'flex', flexDirection:'column', gap:18 }} className="fade-in">

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
          <div className="input-group">
            <span className="input-label">📍 מוצא</span>
            <select className="input-field" value={from} onChange={e=>setFrom(e.target.value)}>
              <option value="">בחר עיר</option>
              {CITIES.map(c=><option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div className="input-group">
            <span className="input-label">🏁 יעד</span>
            <select className="input-field" value={to} onChange={e=>setTo(e.target.value)}>
              <option value="">בחר עיר</option>
              {CITIES.filter(c=>c!==from).map(c=><option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
          <div className="input-group">
            <span className="input-label">📅 תאריך</span>
            <input className="input-field" type="date" value={date} onChange={e=>setDate(e.target.value)} />
          </div>
          <div className="input-group">
            <span className="input-label">⏰ שעה</span>
            <input className="input-field" type="time" value={time} onChange={e=>setTime(e.target.value)} />
          </div>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
          <div className="input-group">
            <span className="input-label">💺 מקומות</span>
            <select className="input-field" value={seats} onChange={e=>setSeats(e.target.value)}>
              {[1,2,3,4].map(n=><option key={n} value={n}>{n} מקומות</option>)}
            </select>
          </div>
          <div className="input-group">
            <span className="input-label">💰 מחיר לנוסע (₪)</span>
            <input className="input-field" type="number" placeholder="25" value={price} onChange={e=>setPrice(e.target.value)} min="0" />
          </div>
        </div>

        <div className="input-group">
          <span className="input-label">📝 הערות (אופציונלי)</span>
          <input className="input-field" placeholder="למשל: עוצר בתחנת רכבת..." value={notes} onChange={e=>setNotes(e.target.value)} />
        </div>

        {valid && (
          <div style={{ background:'#F0FFF4', border:'1px solid #BBF7D0', borderRadius:14, padding:'14px 16px' }} className="fade-in">
            <p style={{ fontSize:13, color:'#166534', fontWeight:600, marginBottom:4 }}>תצוגה מקדימה ✅</p>
            <p style={{ fontSize:13, color:'#15803D', lineHeight:1.6 }}>
              {from} → {to} · {date} בשעה {time}<br/>{seats} מקומות · ₪{price} לנוסע
            </p>
          </div>
        )}

        <div style={{ flex:1 }} />
        <button className="btn-primary" onClick={handleSubmit} disabled={!valid}>פרסם נסיעה 🚀</button>
      </div>
    </div>
  );
}
