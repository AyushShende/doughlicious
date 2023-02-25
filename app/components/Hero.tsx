import Image from 'next/image';
import HeroImg from '@/public/hero.png';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-primary-200 to-primary-100 md:flex px-4 md:px-20 mb-4">
      <div className="flex flex-col flex-1 gap-4 justify-center">
        <p className="font-shadows font-semibold capitalize text-xl text-primary-500 md:text-2xl">
          eat, sleep and
        </p>
        <h1 className="text-4xl capitalize text-gray-800 font-bold mb-4 md:text-6xl">
          more than just <span className="text-primary-500">pizza</span>
        </h1>
        <p>
          Our menu has something for everyone. We are the tastiest and fastest
          pizzeria in town. Get you favourites delivered right to your door.
        </p>
        <Link
          href="/pizza"
          className="bg-primary-300 w-36 text-center font-semibold rounded-full text-white py-2 px-6 transition-all ease-in-out duration-300 hover:bg-primary-400"
        >
          Order Now
        </Link>
      </div>
      <div className="flex-1">
        <Image className="" src={HeroImg} alt="girl eating pizza" />
      </div>
    </section>
  );
};
export default Hero;
