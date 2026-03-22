'use client';
import Link from 'next/link';
import HoppaLogo from '@/components/HoppaLogo';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" style={{flexShrink:0}}>
      <path fill="#fff" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="rgba(255,255,255,.85)" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="rgba(255,255,255,.7)" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="rgba(255,255,255,.9)" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
}

function WelcomeContent() {
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', padding:'48px 28px 40px' }} className="fade-in">
      <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:12 }}>
        <HoppaLogo size={50} color="#5B5FED" />
        <p style={{ color:'#aaa', fontSize:14, letterSpacing:.5 }}>Your Campus Ride</p>
        <div style={{ marginTop:28, textAlign:'center' }}>
          <h1 style={{ fontSize:26, fontWeight:800, color:'#1A1A2E', lineHeight:1.3 }}>
            נסיעות משותפות<br/>לסטודנטים 🎓
          </h1>
          <p style={{ color:'#888', fontSize:14, marginTop:10, lineHeight:1.6 }}>
            מצא או פרסם נסיעה בקלות<br/>ונסע יחד עם סטודנטים מהאוניברסיטה
          </p>
        </div>
      </div>

      <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
        {session ? (
          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <p style={{ fontWeight: 600, color: '#1A1A2E' }}>
              מחובר בתור: {session.user?.name || session.user?.email}
            </p>
            <Link href="/home" style={{ textDecoration: 'none' }}>
              <button className="btn-primary">לעמוד הבית</button>
            </Link>
            <button 
              className="btn-secondary" 
              onClick={() => signOut()}
              style={{ padding: '12px', borderRadius: '12px', border: '1px solid #ddd', background: '#fff', color: '#555', cursor: 'pointer', fontWeight: 600, fontFamily: 'inherit' }}
            >
              התנתק
            </button>
          </div>
        ) : (
          <>
            <button 
              className="btn-primary" 
              onClick={() => signIn('google', { callbackUrl: '/home' })}
            >
              <GoogleIcon /> כניסה עם Google
            </button>
            <p style={{ textAlign:'center', fontSize:12, color:'#ccc', marginTop:4 }}>
              בכניסה אתה מסכים לתנאי השימוש ומדיניות הפרטיות
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default function WelcomePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WelcomeContent />
    </Suspense>
  );
}

