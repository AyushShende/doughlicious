import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PizzaCard from '../components/PizzaCard';

const page = () => {
  return (
    <main>
      <div className="flex flex-wrap justify-center gap-4 my-16">
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </main>
  );
};
export default page;
