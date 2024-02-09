'use client';

import { useFormState } from 'react-dom';

import { addPizza } from '@/actions/pizza/addPizza';
import FormButton from '@/components/formButton';

export default function AddNewPizzaForm() {
  const [actionState, dispatch] = useFormState(addPizza, {
    errors: {},
  });

  return (
    <form action={dispatch}>
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1">
          <label className="font-medium text-lg" htmlFor="title">
            Title
          </label>
          <input
            className="border-2 rounded-md px-2 py-1 border-blue-600 focus:outline-none focus:border-orange-400"
            type="text"
            name="title"
            id="title"
          />
          <p className="text-red-400 text-sm">
            {actionState?.errors.title
              ? actionState.errors.title?.join(', ')
              : null}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-medium text-lg" htmlFor="description">
            Description
          </label>
          <input
            className="border-2 rounded-md px-2 py-1 border-blue-600 focus:outline-none focus:border-orange-400"
            type="text"
            name="description"
            id="description"
          />
          <p className="text-red-400 text-sm">
            {actionState?.errors.description
              ? actionState.errors.description?.join(', ')
              : null}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-medium text-lg" htmlFor="price">
            Price
          </label>
          <input
            className="border-2 rounded-md px-2 py-1 border-blue-600 focus:outline-none focus:border-orange-400"
            type="number"
            name="price"
            id="price"
          />
          <p className="text-red-400 text-sm">
            {actionState?.errors.price
              ? actionState.errors.price?.join(', ')
              : null}
          </p>
        </div>
        <div className="flex items-center sm:flex-col sm:items-start gap-2">
          <label className="font-medium text-lg" htmlFor="image">
            Image
          </label>
          <input
            className="text-sm text-slate-400 file:rounded-full file:text-orange-500 file:font-medium file:bg-orange-50 file:border-0 file:px-3 file:py-2 hover:file:bg-orange-100"
            type="file"
            name="image"
            id="image"
            accept="image/png, image/jpeg, image/jpg"
          />
          <p className="text-red-400 text-sm">
            {actionState?.errors.image
              ? actionState.errors.image?.join(', ')
              : null}
          </p>
        </div>
      </div>
      <p className="text-red-400 text-sm text-center">
        {actionState?.errors._actionError
          ? actionState.errors._actionError?.join(', ')
          : null}
      </p>
      <FormButton className="mx-auto mt-4">Create</FormButton>
    </form>
  );
}
