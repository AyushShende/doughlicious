'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import prisma from '@/lib/db';
import { getUser } from '@/queries/getUser';
import { SaveAddressFormState } from '@/lib/types';

const saveAddressSchema = z.object({
  street: z.string().trim().min(4, {
    message: 'Must be more than 4 characters',
  }),
  city: z.string({ required_error: 'Please enter city' }).trim().min(3, {
    message: 'Must be more than 3 characters',
  }),
  country: z.string({ required_error: 'Please enter country' }).trim().min(3, {
    message: 'Must be more than 3 characters',
  }),
  zip: z.string({ required_error: 'Please enter zip code' }).trim().min(6, {
    message: 'Must be more than 6 characters',
  }),
});

export async function saveAddress(
  formState: SaveAddressFormState,
  formData: FormData
): Promise<SaveAddressFormState> {
  const result = saveAddressSchema.safeParse({
    street: formData.get('street'),
    city: formData.get('city'),
    country: formData.get('country'),
    zip: formData.get('zip'),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const user = await getUser();
  if (!user) {
    return {
      errors: {
        _actionError: ['You must be signed in to perform this action'],
      },
    };
  }

  try {
    await prisma.address.upsert({
      where: { userId: user.id },
      update: {
        street: result.data.street,
        city: result.data.city,
        country: result.data.country,
        zipCode: result.data.zip,
      },
      create: {
        userId: user.id,
        street: result.data.street,
        city: result.data.city,
        country: result.data.country,
        zipCode: result.data.zip,
      },
    });
  } catch (error) {
    console.log(error);
    return {
      errors: {
        _actionError: ['Database Error: Failed to update address'],
      },
    };
  }

  revalidatePath('/cart');
  redirect('/cart');
}
