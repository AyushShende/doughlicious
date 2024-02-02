import GitHubProvider, { GithubProfile } from 'next-auth/providers/github';
import { NextAuthOptions } from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

import prisma from '@/lib/db';
import { mergeCart } from '@/actions/cart/mergeCarts';

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
      profile(profile: GithubProfile) {
        return {
          id: profile.id.toString(),
          name: profile.name,
          email: profile.email,
          image: profile.avatar_url,
          role: profile.role ?? 'user',
        };
      },
    }),
  ],
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.role = token.role;
        session.user.id = token.sub;
      }
      return session;
    },
  },
  events: {
    async signIn({ user: { id } }) {
      await mergeCart(id);
    },
  },
};
