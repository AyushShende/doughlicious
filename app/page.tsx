import Delivery from '@/components/delivery';
import FeaturedPizza from '@/components/featuredPizza';
import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import PizzaCard from '@/components/pizzaCard';
import Testimonials from '@/components/testimonials';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedPizza />
      <Delivery />
      <Testimonials />
    </main>
  );
}
