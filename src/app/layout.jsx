import './globals.css';
import Providers from '@/components/Providers';

export const metadata = {
  title: 'Hoppa — Your Campus Ride',
  description: 'נסיעות משותפות לסטודנטים',
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
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

