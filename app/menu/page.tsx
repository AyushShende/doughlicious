import { notFound } from 'next/navigation';
import { Metadata } from 'next';

import PizzaCard from '@/components/pizzaCard';
import { getPizzas } from '@/queries/pizza';

export const metadata: Metadata = {
  title: 'Menu',
};

export default async function MenuPage() {
  const pizzas = await getPizzas();

  if (!pizzas) {
    return notFound();
  }

  return (
    <section className="min-h-screen max-container bg-gray-100 padding-y">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Our Menu</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {pizzas.map((pizza) => (
            <PizzaCard key={pizza.id} pizza={pizza} />
          ))}
        </div>
      </div>
    </section>
  );
}
