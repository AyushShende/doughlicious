'use client';

import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';
import { MdDelete } from 'react-icons/md';

import { deletePizza } from '@/actions/pizza/deletePizza';

export default function DeletePizzaBtn({ pizzaId }: { pizzaId: string }) {
  const [actionState, dispatch] = useFormState(
    deletePizza.bind(null, {
      pizzaId,
    }),
    { errors: {} }
  );

  if (actionState?.errors._actionError) {
    toast.error(actionState.errors._actionError?.join(', '));
  }

  return (
    <form action={dispatch}>
      <button>
        <MdDelete className="cursor-pointer" size={22} />
      </button>
    </form>
  );
}
