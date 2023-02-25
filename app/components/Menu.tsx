import Link from 'next/link';
import PizzaCard from './PizzaCard';

const Menu = () => {
  return (
    <section className="text-center px-4 py-8 md:py-10 md:px-20">
      <p className="uppercase font-semibold  text-primary-400">
        popular dishes
      </p>
      <h3 className="capitalize text-4xl mb-6 font-bold text-gray-800">
        Discover our menu
      </h3>
      <div className="md:flex md:gap-8 mb-6 md:mb-10 ">
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
      <Link
        href="/menu"
        className="bg-primary-300 rounded-full text-white py-2 px-6 transition-all ease-in-out duration-300 hover:bg-primary-400"
      >
        View All
      </Link>
    </section>
  );
};
export default Menu;
