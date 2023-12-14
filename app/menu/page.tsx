import { notFound } from 'next/navigation';

import PizzaCard from '@/components/pizzaCard';
import { getPizzas } from '@/actions/queries/pizza';

export const metadata = {
  title: 'Menu - Doughlicious',
};

export default async function MenuPage() {
  const pizzas = await getPizzas();

  if (!pizzas) {
    return notFound();
  }

  return (
    <section className="padding-y max-container min-h-screen overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
        {pizzas.map((pizza) => (
          <PizzaCard key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </section>
  );
}
