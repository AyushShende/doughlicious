import type { Metadata } from 'next';

import { inter } from '@/components/fonts';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import AuthProvider from '@/context/AuthProvider';

export const metadata: Metadata = {
  title: 'Doughlicious',
  description: 'Best pizzeria in town',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
