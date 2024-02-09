import { getServerSession } from 'next-auth';

import { authOptions } from '@/app/api/auth/[...nextauth]/options';

export async function getUser() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return;
  }

  return session.user;
}
