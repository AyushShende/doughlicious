'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { AddPizzaFormState } from '@/lib/types';
import { getUser } from '../../queries/getUser';
import prisma from '@/lib/db';
import { BUCKET_NAME, supabaseClient } from '@/lib/supabase';

const ACCEPTED_IMAGE_TYPES = ['image/png', 'image/jpg', 'image/jpeg'];
const MAX_IMAGE_SIZE = 5000000;

const addPizzaSchema = z.object({
  title: z.string({ required_error: 'Please enter title' }).trim().min(4, {
    message: 'Must be more than 4 characters',
  }),
  description: z
    .string({ required_error: 'Please enter description' })
    .trim()
    .min(4, {
      message: 'Must be more than 4 characters',
    }),
  price: z.coerce.number({ required_error: 'Please enter price' }).min(1, {
    message: 'Price cannot be negative',
  }),
  image: z
    .custom<File>((val) => val instanceof File, 'Please upload a file')
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
      'Please choose .png, .jpg or .jpeg format files only'
    )
    .refine((file) => file.size <= MAX_IMAGE_SIZE, 'Max file size is 5Mb'),
});

const handleFileUpload = async (file: File) => {
  const fileName = `${file.name.split('.')[0]}_${Date.now()}.${
    file.name.split('.')[1]
  }`;

  const { data, error } = await supabaseClient.storage
    .from(BUCKET_NAME)
    .upload(fileName, file);

  if (error) {
    console.log(error);
    return null;
  }

  const {
    data: { publicUrl },
  } = supabaseClient.storage.from(BUCKET_NAME).getPublicUrl(data?.path);

  return publicUrl;
};

export async function addPizza(
  formState: AddPizzaFormState,
  formData: FormData
): Promise<AddPizzaFormState> {
  const result = addPizzaSchema.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
    price: formData.get('price'),
    image: formData.get('image'),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const user = await getUser();

  if (!user || user.role !== 'admin') {
    return {
      errors: {
        _actionError: ['Access Denied'],
      },
    };
  }

  try {
    const imageUrl = await handleFileUpload(result.data.image);
    if (!imageUrl) {
      return {
        errors: {
          image: ['Error uploading file to bucket'],
        },
      };
    }

    await prisma.pizza.create({
      data: { ...result.data, image: imageUrl },
    });
  } catch (error) {
    console.log(error);
    return {
      errors: {
        _actionError: ['Database Error: Failed to Create Pizza'],
      },
    };
  }
  revalidatePath('/admin/pizza');
  redirect('/admin/pizza');
}
