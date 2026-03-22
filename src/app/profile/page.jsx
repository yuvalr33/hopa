'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const router = useRouter();
  const [name,  setName]  = useState('');
  const [phone, setPhone] = useState('');
  const valid = name.trim().length > 1 && phone.trim().length >= 9;

  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column' }} className="fade-in">
      <div style={{ background:'#5B5FED', padding:'52px 28px 32px' }}>
        <p style={{ color:'rgba(255,255,255,.7)', fontSize:13, marginBottom:6 }}>ברוך הבא ל-Hoppa 👋</p>
        <h1 style={{ color:'#fff', fontSize:26, fontWeight:800 }}>קצת עלייך</h1>
        <p style={{ color:'rgba(255,255,255,.6)', fontSize:13, marginTop:6, lineHeight:1.5 }}>
          נצטרך כמה פרטים כדי להתחיל
        </p>
      </div>

      <div style={{ flex:1, padding:'28px 24px 36px', display:'flex', flexDirection:'column', gap:20 }}>
        <div className="input-group">
          <span className="input-label">שם מלא</span>
          <input className="input-field" placeholder="ישראל ישראלי" value={name} onChange={e=>setName(e.target.value)} />
        </div>
        <div className="input-group">
          <span className="input-label">מספר טלפון</span>
          <input className="input-field" placeholder="050-0000000" value={phone} onChange={e=>setPhone(e.target.value)} type="tel" />
        </div>

        <div style={{ background:'#FFF8E7', border:'1px solid #FFE49A', borderRadius:12, padding:'14px 16px' }}>
          <p style={{ fontSize:13, color:'#9A6F00', lineHeight:1.6 }}>
            📱 הטלפון שלך יוצג לנוסעים <strong>רק לאחר</strong> שהצטרפו לנסיעה שלך
          </p>
        </div>

        <div style={{ flex:1 }} />

        <button className="btn-primary" disabled={!valid} onClick={() => valid && router.push('/home')}>
          בוא נתחיל 🚀
        </button>
      </div>
    </div>
  );
}
