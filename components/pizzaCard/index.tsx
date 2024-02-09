import Image from 'next/image';
import Link from 'next/link';

import type { Pizza } from '@prisma/client';
import Button from '@/components/button';

export default function PizzaCard({ pizza }: { pizza: Pizza }) {
  return (
    <div className="w-72 min-w-[250px] rounded-xl p-4 shadow-lg bg-white">
      {/* CARD IMAGE */}
      <div className="relative w-full h-40 mb-4">
        <Image
          className="object-cover w-full h-full"
          src={pizza.image}
          width={200}
          height={200}
          alt="pizza"
        />
      </div>

      {/* CARD CONTENT */}
      <div className="text-center">
        <p className="mb-2 text-xl font-bold text-gray-800 capitalize">
          {pizza?.title}
        </p>
        <p className="mb-4 text-sm text-gray-600">{pizza?.description}</p>
        <div className="flex items-center justify-center">
          <p className="text-xl font-bold text-orange-500">₹{pizza?.price}</p>
          <Link href={`/pizza/${pizza?.id}`}>
            <Button className="ml-4">Order Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
