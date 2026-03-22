'use client';
import Link from 'next/link';

export default function ScreenHeader({ title, backHref = '/home' }) {
  return (
    <div className="screen-header">
      <Link href={backHref} className="back-btn">←</Link>
      <h2 style={{ fontSize:18, fontWeight:700, color:'#1A1A2E' }}>{title}</h2>
    </div>
  );
}
