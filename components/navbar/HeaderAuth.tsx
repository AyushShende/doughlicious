'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

import Button from '../button';

export default function HeaderAuth() {
  const session = useSession();
  const [showOptions, setShowOptions] = useState(false);

  const handleClick = () => {
    setShowOptions((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-4 cursor-pointer">
      {session.status === 'loading' ? null : session.data?.user ? (
        <div className="relative">
          <Image
            onClick={handleClick}
            src={session?.data.user.image || ''}
            alt="profile pic"
            width={50}
            height={50}
            className="rounded-full shadow-md"
          />
          {showOptions && (
            <div className="absolute top-14 right-0 bg-white border border-gray-200 py-2 px-4 rounded shadow-md">
              {session.data.user.role === 'admin' && (
                <ul className="mb-2">
                  <li>
                    <Link
                      className="text-gray-800 hover:text-orange-500"
                      onClick={handleClick}
                      href="/admin/order"
                    >
                      Orders
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={handleClick}
                      className="text-gray-800 hover:text-orange-500"
                      href="/admin/pizza"
                    >
                      Pizzas
                    </Link>
                  </li>
                </ul>
              )}

              <button
                onClick={() => signOut()}
                className="text-gray-800 hover:text-orange-500"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <Button
          onClick={() => signIn()}
          className="bg-slate-50 text-orange-500 hover:bg-slate-100"
        >
          Sign In
        </Button>
      )}
    </div>
  );
}
