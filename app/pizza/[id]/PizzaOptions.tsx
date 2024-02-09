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

  if (actionState?.errors._actionError) {
    toast.error(actionState.errors._actionError?.join(', '));
  }
  return (
    <div className="mb-8">
      <label htmlFor="pizzaSize" className="block text-lg mb-2">
        Choose Size:
      </label>
      <select
        id="pizzaSize"
        onChange={(e) => setPizzaSize(e.target.value as Size)}
        className="block w-full rounded-md bg-gray-100 px-4 py-2 outline-none focus:border-2 focus:border-orange-300"
      >
        <option value="SMALL">Small</option>
        <option value="MEDIUM">Medium</option>
        <option value="LARGE">Large</option>
      </select>

      <div className="mt-4 flex items-center gap-4">
        <button
          disabled={quantity === 1}
          onClick={() => setQuantity((prev) => prev - 1)}
          className="text-orange-500 bg-white border border-orange-500 px-4 py-2 rounded-full focus:outline-none disabled:opacity-50"
        >
          <FaMinus />
        </button>
        <span className="text-xl font-semibold">{quantity}</span>
        <button
          onClick={() => setQuantity((prev) => prev + 1)}
          className="text-orange-500 bg-white border border-orange-500 px-4 py-2 rounded-full focus:outline-none"
        >
          <FaPlus />
        </button>
      </div>

      <form className="mt-6" action={dispatch}>
        <FormButton>Add to Cart</FormButton>
      </form>
    </div>
  );
}
