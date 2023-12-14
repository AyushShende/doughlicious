import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';

export async function getUser() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return;
  }

  return session.user;
}
