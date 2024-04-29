'use client';

import type { Metadata } from 'next';
import './globals.scss';
import Footer from '@/components/footer/Footer';




const metadata: Metadata = {
  title: 'Company Growers',
  description: 'Digital marketing agency',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
