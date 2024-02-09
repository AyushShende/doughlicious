import { notFound } from 'next/navigation';

import PizzaCard from '@/components/pizzaCard';
import { getPizzas } from '@/queries/pizza';

export default async function FeaturedPizza() {
  const pizzas = await getPizzas();

  if (!pizzas) {
    return notFound();
  }

  const limitedPizzas = pizzas.slice(0, 4);

  return (
    <section className="max-container padding-x padding-y text-center">
      <h4 className="sub-heading">popular dishes</h4>
      <h2 className="sec-heading">Discover our menu</h2>

      <div className="flex overflow-x-auto">
        <div className="flex space-x-8">
          {limitedPizzas.map((pizza) => (
            <PizzaCard key={pizza.id} pizza={pizza} />
          ))}
        </div>
      </div>
    </section>
  );
}
