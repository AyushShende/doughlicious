import type { Metadata } from 'next';
import { inter } from '@/components/fonts';
import './globals.css';

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
