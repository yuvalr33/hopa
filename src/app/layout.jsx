import { Heebo } from 'next/font/google';
import './globals.css';
import Providers from '@/components/Providers';

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  display: 'swap',
  variable: '--font-heebo',
});

export const metadata = {
  title: 'Hoppa — Your Campus Ride',
  description: 'נסיעות משותפות לסטודנטים',
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} font-heebo`}>
      <body>
        <Providers>
          <div className="page-wrapper">
            <div className="phone">
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}

