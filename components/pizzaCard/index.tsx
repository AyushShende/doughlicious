import Image from 'next/image';
import Link from 'next/link';

import type { Pizza } from '@prisma/client';
import Button from '@/components/button';

export default function PizzaCard({ pizza }: { pizza: Pizza }) {
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
          {pizza?.title}
        </p>
        <p className="mb-4 truncate text-center text-sm">
          {pizza?.description}
        </p>
        <div className="flex items-center justify-around">
          <p className="text-2xl font-bold">₹{pizza?.price}</p>
          <Link href={`/pizza/${pizza?.id}`}>
            <Button>Order now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
