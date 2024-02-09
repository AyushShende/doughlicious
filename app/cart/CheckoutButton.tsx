'use client';

import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';

import { createCheckoutSession } from '@/actions/stripe';
import FormButton from '@/components/formButton';

export default function CheckoutButton() {
  const [actionState, dispatch] = useFormState(createCheckoutSession, {
    errors: {},
  });

  if (actionState?.errors._actionError) {
    toast.error(actionState.errors._actionError?.join(', '));
  }
  return (
    <form action={dispatch}>
      <FormButton className="w-full">Place Order</FormButton>
    </form>
  );
}
