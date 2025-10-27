import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ניצן ירושלמי תיווך וייעוץ נדל״ן ',
  description: 'עסק נדל"ן שמתמחה בשיווק, מכירה והשכרה של נכסים. מציג דירות, מגרשים ופרויקטים חדשים בצורה ברורה ואמינה, ומחבר בין קונים, מוכרים ומשקיעים',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#858585" />
      </head>
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          {/* Navbar will be inserted here */}
          <Navbar />

          {children}

        </div>
      </body>
    </html>
  );
}
