'use client';
import ScreenHeader from '@/components/ScreenHeader';
import BottomNav from '@/components/BottomNav';

export default function RidesPage() {
  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column' }}>
      <ScreenHeader title="הנסיעות שלי 🎟️" backHref="/home" />
      <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:12, padding:32 }}>
        <div style={{ fontSize:56 }}>🚗</div>
        <p style={{ color:'#888', fontSize:15, fontWeight:600 }}>עוד אין נסיעות</p>
        <p style={{ color:'#ccc', fontSize:13 }}>פרסם נסיעה ראשונה או הצטרף לאחת</p>
      </div>
      <BottomNav />
    </div>
  );
}
