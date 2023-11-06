import Delivery from '@/components/delivery';
import FeaturedPizza from '@/components/featuredPizza';
import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import PizzaCard from '@/components/pizzaCard';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedPizza />
      <Delivery />
    </main>
  );
}
