import PizzaCard from '@/components/pizzaCard';

export const metadata = {
  title: 'Menu - Doughlicious',
};

export default function MenuPage() {
  return (
    <section className="padding-y max-container overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </section>
  );
}
