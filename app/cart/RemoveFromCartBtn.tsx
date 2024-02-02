'use client';

import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';
import { MdDelete } from 'react-icons/md';

import { removeFromCart } from '@/actions/cart/removeFromCart';
import DeleteLoader from './DeleteLoader';

export default function RemovePizzaFromCartButton({
  cartItemId,
}: {
  cartItemId: string;
}) {
  const [actionState, dispatch] = useFormState(
    removeFromCart.bind(null, cartItemId),
    {
      errors: {},
    }
  );

  if (actionState.errors._actionError) {
    toast.error(actionState.errors._actionError?.join(', '));
  }

  return (
    <form action={dispatch}>
      <button
        type="submit"
        className="absolute top-2 right-2 cursor-pointer text-slate-500"
      >
        <MdDelete size={24} />
      </button>
      <DeleteLoader />
    </form>
  );
}
