'use client';

import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';

import HeaderAuth from './HeaderAuth';

export default function MobileNavigation() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClose = () => setShowMenu(!showMenu);

  return (
    <div className="relative flex items-center gap-4">
      <FaBars onClick={handleClose} size={26} />
      {showMenu && (
        <div className="absolute top-10 right-16 flex flex-col z-10 bg-white border border-gray-200 py-2 px-4 rounded shadow-md">
          <Link
            onClick={handleClose}
            className="text-gray-800 hover:text-orange-500"
            href="/menu"
          >
            Menu
          </Link>
          <Link
            onClick={handleClose}
            className="text-gray-800 hover:text-orange-500"
            href="/orders"
          >
            Orders
          </Link>
        </div>
      )}
      <HeaderAuth />
    </div>
  );
}
