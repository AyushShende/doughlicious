import './globals.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Doughlicious',
  description: 'Fastest Pizzeria in town',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
