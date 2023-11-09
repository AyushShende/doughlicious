import { NextRequestWithAuth, withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req: NextRequestWithAuth) {
    if (
      req.nextUrl.pathname.startsWith('/admin') &&
      req.nextauth.token?.role !== 'admin'
    ) {
      // rewrite is used so the url will still be that of the page you were trying to access but the page rendered will be of 'unauthorized'
      return NextResponse.rewrite(new URL('/unauthorized', req.url));
    }
  },
  {
    callbacks: {
      // !! converts a falsey or truthy value to false or true respectively
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = { matcher: ['/orders', '/admin'] };
