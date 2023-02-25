import Pizza1 from '@/public/pizza1.png';
import Image from 'next/image';
import Link from 'next/link';

const PizzaCard = () => {
  return (
    <div className="p-4 w-80 rounded-xl shadow-xl">
      <div>
        <Image className="w-3/4 mx-auto" src={Pizza1} alt="" />
      </div>
      <div className="text-center">
        <p className="font-bold text-2xl mb-2 text-gray-800">FarmHouse Pizza</p>
        <p className="text-center text-sm mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
          repellat.
        </p>
        <div className="flex items-center justify-around">
          <p className="font-bold text-2xl">$15</p>
          <Link
            href="/pizza"
            className="bg-primary-300 rounded-full text-white py-2 px-6 transition-all ease-in-out duration-300 hover:bg-primary-400"
          >
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PizzaCard;
