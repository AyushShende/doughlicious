import Image from 'next/image';
import Link from 'next/link';
import Button from '../button';

export default function PizzaCard() {
  return (
    <div className="w-72 rounded-xl p-4 shadow-xl">
      {/* CARD IMAGE */}

      <Image
        className="mx-auto"
        src="/pizza1.png"
        width={200}
        height={200}
        alt="pizza"
      />

      {/* CARD CONTENT */}
      <div className="text-center">
        <p className="mb-2 truncate text-2xl font-bold capitalize text-gray-700">
          Margherita
        </p>
        <p className="mb-4 truncate text-center text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        <div className="flex items-center justify-around">
          <p className="text-2xl font-bold">$50</p>
          <Link href={`/pizzas/id`}>
            <Button>Order now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
