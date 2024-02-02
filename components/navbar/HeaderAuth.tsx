'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Button from '../button';
import { useState } from 'react';
import Link from 'next/link';

export default function HeaderAuth() {
  const session = useSession();

  const [showOptions, setShowOptions] = useState(false);
  const handleClick = () => {
    setShowOptions((prev) => !prev);
  };

  let authData: React.ReactNode;

  if (session.status === 'loading') {
    authData = null;
  } else if (session.data?.user) {
    authData = (
      <div className="relative cursor-pointer">
        <Image
          onClick={handleClick}
          src={session?.data.user.image || ''}
          alt="profile pic"
          width={50}
          height={50}
          className="rounded-full shadow-md"
        />
        {showOptions && (
          <div className="absolute top-14 bg-orange-50 text-orange-500 px-2 py-1 rounded">
            {session.data.user.role === 'admin' && (
              <Link onClick={handleClick} href={'/admin'}>
                Dashboard
              </Link>
            )}

            <button className="cursor-pointer" onClick={() => signOut()}>
              Logout
            </button>
          </div>
        )}
      </div>
    );
  } else {
    authData = (
      <Button
        onClick={() => signIn()}
        className="bg-slate-50 text-orange-500 hover:bg-slate-100"
      >
        Sign In
      </Button>
    );
  }

  return authData;
}
