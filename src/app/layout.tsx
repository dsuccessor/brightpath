import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'BrightPath Fin Integrated and Tech Limited | Financial Advisory & Fintech Consulting',
    template: '%s | BrightPath Fin Integrated and Tech Limited',
  },
  description:
    'BrightPath optimizes cross-border payments, strengthens financial operations, and builds fintech capacity through expert advisory and consulting for financial institutions worldwide.',
  keywords: [
    'fintech consulting',
    'cross-border payments',
    'FX advisory',
    'payment reconciliation',
    'financial advisory',
    'fintech training',
    'settlement optimization',
  ],
  openGraph: {
    title: 'BrightPath Fin Integrated and Tech Limited',
    description:
      'Optimizing Cross-Border Payments. Strengthening Financial Operations.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-[family-name:var(--font-inter)] antialiased bg-white text-gray-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
