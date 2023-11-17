import Link from 'next/link';
import { FaShoppingCart, FaBars } from 'react-icons/fa';

import Logo from '@/components/logo';
import { getCartSize } from '@/lib/data';

export default async function Navbar() {
  const cartSize = await getCartSize();

  return (
    <nav className="max-container flex justify-between items-center padding-x py-4 bg-orange-500 font-semibold text-white">
      <Logo />

      <div className="hidden items-center gap-10 md:flex">
        <Link href="/menu">Menu</Link>
        <Link href="/orders">My Orders</Link>
        <Link href="/cart">
          <div className="relative">
            <FaShoppingCart size={26} />
            <span className="absolute -right-3 -top-3 h-6 w-6 rounded-full bg-gray-100 text-center text-orange-500">
              {cartSize || 0}
            </span>
          </div>
        </Link>
      </div>

      {/* MOBILE HAMBURGER MENU */}
      <FaBars size={26} className="md:hidden" />
    </nav>
  );
}
