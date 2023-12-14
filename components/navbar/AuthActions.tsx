'use client';

import { cn } from '@/utils/cn';
import { signIn, signOut } from 'next-auth/react';
import { useState } from 'react';

type AuthActionsProps = {
  children: React.ReactNode;
  className?: string;
  authenticated: boolean;
};

export default function AuthActions({
  children,
  className,
  authenticated,
}: AuthActionsProps) {
  const [showOptions, setShowOptions] = useState(false);
  const handleClick = () => {
    authenticated ? setShowOptions((prev) => !prev) : signIn();
  };

  return (
    <div
      className={cn('relative cursor-pointer', className)}
      onClick={handleClick}
    >
      {children}
      {authenticated && showOptions && (
        <div className="absolute top-14 bg-orange-50 text-orange-500 px-2 py-1 rounded">
          <div className="cursor-pointer" onClick={() => signOut()}>
            Logout
          </div>
        </div>
      )}
    </div>
  );
}
