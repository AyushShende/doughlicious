import Delivery from '@/components/delivery';
import FeaturedPizza from '@/components/featuredPizza';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import Testimonials from '@/components/testimonials';

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedPizza />
      <Delivery />
      <Testimonials />
    </main>
  );
}
