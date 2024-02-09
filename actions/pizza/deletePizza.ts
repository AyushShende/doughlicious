'use server';

import prisma from '@/lib/db';
import { ActionState } from '@/lib/types';
import { getUser } from '../../queries/getUser';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { getPizza } from '../../queries/pizza';
import { BUCKET_NAME, supabaseClient } from '@/lib/supabase';

type DeletePizzaParams = {
  pizzaId: string;
};

export async function deletePizza(
  { pizzaId }: DeletePizzaParams,
  formState: ActionState
): Promise<ActionState> {
  const user = await getUser();

  if (!user || user.role !== 'admin') {
    return {
      errors: {
        _actionError: ['Access Denied'],
      },
    };
  }
  try {
    const pizza = await getPizza(pizzaId);
    const fileName = pizza?.image.split('/').pop();
    if (!fileName) {
      return {
        errors: {
          _actionError: ['Failed to delete pizza files'],
        },
      };
    }
    const { data, error } = await supabaseClient.storage
      .from(BUCKET_NAME)
      .remove([fileName]);

    if (error) {
      return {
        errors: {
          _actionError: ['Failed to delete pizza files'],
        },
      };
    }
    await prisma.pizza.delete({
      where: { id: pizzaId },
    });
  } catch (error) {
    console.log(error);
    return {
      errors: {
        _actionError: ['Database Error: Failed to delete pizza'],
      },
    };
  }
  revalidatePath('/admin/pizza');
  redirect('/admin/pizza');
}
