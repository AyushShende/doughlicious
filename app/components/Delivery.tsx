import Image from 'next/image';
import rider from '@/public/delivery.svg';

const Delivery = () => {
  return (
    <section className="py-8 px-4 md:flex md:py-10 md:px-20">
      <div className="flex-1">
        <Image src={rider} alt="" />
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-4xl mb-4 text-gray-800 py-2">
          Express Delivery
        </h3>
        <p className="mb-6">
          We are the fastest pizzeria in town. That's why we promise that if we
          can't deliver to you within 30 minutes, the pizza is free. Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Suscipit ipsum hic
          corporis soluta asperiores eum temporibus ipsa assumenda qui unde esse
          placeat voluptates, quisquam quaerat porro maiores a? Sed, assumenda!
        </p>
        <button className="bg-primary-300 rounded-full text-white py-2 px-6 transition-all ease-in-out duration-300 hover:bg-primary-400">
          Order Now
        </button>
      </div>
    </section>
  );
};
export default Delivery;
