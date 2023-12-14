import PizzaCard from '@/components/pizzaCard';
import { getPizzas } from '@/actions/queries/pizza';
import { notFound } from 'next/navigation';

export default async function FeaturedPizza() {
  const pizzas = await getPizzas();
  if (!pizzas) {
    return notFound();
  }

  return (
    <section className="padding-y max-container text-center">
      <h4 className="sub-heading">popular dishes</h4>
      <h2 className="sec-heading md:text-4xl">Discover our menu</h2>
      <div className="my-6 flex flex-col items-center justify-center gap-6 sm:flex-row sm:overflow-x-auto">
        {pizzas.map((pizza) => (
          <PizzaCard key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </section>
  );
}
