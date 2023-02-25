import Link from 'next/link';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Delivery from './components/Delivery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Menu />
      <Delivery />
      <Testimonials />
    </>
  );
}
