'use client';
export default function HoppaLogo({ size = 40, color = '#fff' }) {
  return (
    <div style={{ display:'flex', alignItems:'center', gap:4 }}>
      <span style={{ fontSize:size*0.65, fontWeight:800, color, letterSpacing:-1, fontFamily:"'Outfit',sans-serif" }}>
        Hoppa
      </span>
      <svg width={size*0.5} height={size*0.5} viewBox="0 0 32 32" fill="none">
        <path d="M4 28L16 4L28 28" stroke={color} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="16" y1="4" x2="16" y2="28" stroke={color} strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3"/>
        <circle cx="16" cy="18" r="2.5" fill={color}/>
      </svg>
    </div>
  );
}
