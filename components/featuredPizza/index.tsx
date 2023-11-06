import Link from 'next/link';
import Button from '../button';
import PizzaCard from '../pizzaCard';

export default function FeaturedPizza() {
  return (
    <section className="padding-y max-container text-center">
      <h4 className="sub-heading">popular dishes</h4>
      <h2 className="sec-heading md:text-4xl">Discover our menu</h2>
      <div className="my-6 flex flex-col items-center justify-center gap-6 sm:flex-row sm:overflow-x-auto">
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
      <Link href="/menu">
        <Button>View All</Button>
      </Link>
    </section>
  );
}
