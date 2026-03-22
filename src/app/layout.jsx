import './globals.css';

export const metadata = {
  title: 'Hoppa — Your Campus Ride',
  description: 'נסיעות משותפות לסטודנטים',
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <div className="page-wrapper">
          <div className="phone">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
