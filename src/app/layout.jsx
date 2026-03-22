import './globals.css';
import AuthProvider from '@/components/AuthProvider';

export const metadata = {
  title: 'Hoppa — Your Campus Ride',
  description: 'נסיעות משותפות לסטודנטים',
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <AuthProvider>
          <div className="page-wrapper">
            <div className="phone">
              {children}
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
