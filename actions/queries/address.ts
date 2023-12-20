import prisma from '@/lib/db';
import { unstable_noStore as noStore } from 'next/cache';
import { getUser } from '../getUser';

export const fetchAddress = async () => {
  noStore();
  const user = await getUser();
  if (!user) {
    return;
  }

  try {
    return prisma.address.findUnique({
      where: { userId: user.id },
    });
  } catch (error) {
    console.log(error);
    throw new Error('Database Error: Failed to fetch address');
  }
};
