import Delivery from '@/components/delivery';
import FeaturedPizza from '@/components/featuredPizza';
import Hero from '@/components/hero';
import Testimonials from '@/components/testimonials';

export default function Home() {
  return (
    <section>
      <Hero />
      <FeaturedPizza />
      <Delivery />
      <Testimonials />
    </section>
  );
}
