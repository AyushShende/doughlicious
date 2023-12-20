'use client';

import { saveAddress } from '@/actions/saveAddress';
import FormButton from '@/components/formButton';
import { Address } from '@prisma/client';

import { useFormState } from 'react-dom';

type AddressBoxProps = {
  address?: Address | null;
};

export default function AddressBox({ address }: AddressBoxProps) {
  const [actionState, dispatch] = useFormState(saveAddress, { errors: {} });
  return (
    <form className="bg-gray-50 space-y-4 p-4" action={dispatch}>
      <div className="flex justify-between items-center space-x-2">
        <label className="font-semibold" htmlFor="">
          Street:
        </label>
        <input
          className="p-2  outline outline-2 rounded outline-blue-500 focus:outline-orange-400"
          type="text"
          name="street"
          defaultValue={address?.street}
        />
      </div>
      <p className="text-red-400 text-sm">
        {actionState?.errors.street
          ? actionState.errors.street?.join(', ')
          : null}
      </p>
      <div className="flex justify-between items-center space-x-2">
        <label className="font-semibold" htmlFor="">
          City:
        </label>
        <input
          className="p-2 w-fit outline outline-2 rounded outline-blue-500 focus:outline-orange-400"
          type="text"
          name="city"
          defaultValue={address?.city}
        />
      </div>
      <p className="text-red-400 text-sm">
        {actionState?.errors.city ? actionState.errors.city?.join(', ') : null}
      </p>
      <div className="flex justify-between items-center space-x-2">
        <label className="font-semibold" htmlFor="">
          Country:
        </label>
        <input
          className="p-2 w-fit outline outline-2 rounded outline-blue-500 focus:outline-orange-400"
          type="text"
          name="country"
          defaultValue={address?.country}
        />
      </div>
      <p className="text-red-400 text-sm">
        {actionState?.errors.country
          ? actionState.errors.country?.join(', ')
          : null}
      </p>
      <div className="flex justify-between items-center space-x-2">
        <label className="font-semibold" htmlFor="">
          zip:
        </label>
        <input
          className="p-2 w-fit outline outline-2 rounded outline-blue-500 focus:outline-orange-400"
          type="text"
          name="zip"
          defaultValue={address?.zipCode}
        />
      </div>
      <p className="text-red-400 text-sm">
        {actionState?.errors.zip ? actionState.errors.zip?.join(', ') : null}
      </p>

      <p className="text-red-400 text-sm">
        {actionState?.errors._actionError
          ? actionState.errors._actionError?.join(', ')
          : null}
      </p>

      <p></p>
      <FormButton className="w-full" disabled={!actionState?.errors}>
        {actionState?.errors ? 'save' : 'updated'}
      </FormButton>
    </form>
  );
}
