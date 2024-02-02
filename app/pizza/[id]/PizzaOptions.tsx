'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';
import { Size } from '@prisma/client';

import FormButton from '@/components/formButton';
import { addToCart } from '@/actions/cart/addToCart';

export default function PizzaOptions() {
  const [quantity, setQuantity] = useState<number>(1);
  const [pizzaSize, setPizzaSize] = useState<Size>('SMALL');

  const { id } = useParams();

  const [actionState, dispatch] = useFormState(
    addToCart.bind(null, {
      quantity,
      pizzaSize,
      pizzaId: id as string,
    }),
    { errors: {} }
  );

  if (actionState.errors._actionError) {
    toast.error(actionState.errors._actionError?.join(', '));
  }
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

      <form action={dispatch}>
        <FormButton>Add to Cart</FormButton>
      </form>
    </>
  );
}
