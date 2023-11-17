'use client';

import { useSession } from 'next-auth/react';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

import Button from '@/components/button';
import { addToCart } from '@/lib/actions';
import { Size } from '@prisma/client';

export default function PizzaOptions() {
  const [quantity, setQuantity] = useState<number>(1);
  const [pizzaSize, setPizzaSize] = useState<Size>('SMALL');

  const { id } = useParams();
  const { data } = useSession();
  const router = useRouter();

  const handleClick = async () => {
    if (!data?.user) {
      return router.push(`/api/auth/signin?callbackUrl=/pizza/${id}`);
    }
    try {
      await addToCart({
        quantity,
        pizzaSize,
        pizzaId: id as string,
        userId: data?.user.id,
        orderStatus: 'pending',
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <select
        onChange={(e) => setPizzaSize(e.target.value as Size)}
        className="my-4 block rounded bg-gray-100 px-1 py-1 outline-none"
      >
        <option value="SMALL">small</option>
        <option value="MEDIUM">medium</option>
        <option value="LARGE">large</option>
      </select>

      <div className="mb-6 flex w-fit items-center border-2 border-slate-400">
        <button
          disabled={quantity === 1}
          onClick={() => setQuantity((prev) => prev - 1)}
          className="flex h-6 w-6 items-center justify-center disabled:cursor-not-allowed"
        >
          <FaMinus />
        </button>
        <span className="flex h-6 w-8 items-center justify-center border-x-2 border-slate-400">
          {quantity}
        </span>
        <button
          className="flex h-6 w-6 items-center justify-center"
          onClick={() => setQuantity((prev) => prev + 1)}
        >
          <FaPlus />
        </button>
      </div>
      <Button onClick={handleClick} className="rounded-lg">
        Add to Cart
      </Button>
    </>
  );
}
