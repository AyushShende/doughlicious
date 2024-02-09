import Link from 'next/link';
import { FaShoppingCart, FaBars } from 'react-icons/fa';

import Logo from '@/components/logo';
import HeaderAuth from './HeaderAuth';
import { fetchCartItems } from '@/queries/cart';
import MobileNavigation from './MobileNavigation';

export default async function Navbar() {
  const cartItems = await fetchCartItems();
  const cartSize =
    cartItems?.reduce((acc, item) => acc + item.quantity, 0) || 0;

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
              {cartSize}
            </span>
          </div>
        </Link>
        <HeaderAuth />
      </div>

      <Link className="md:hidden" href="/cart">
        <div className="relative">
          <FaShoppingCart size={26} />
          <span className="absolute -right-3 -top-3 h-6 w-6 rounded-full bg-gray-100 text-center text-orange-500">
            {cartSize}
          </span>
        </div>
      </Link>

      {/* MOBILE HAMBURGER MENU */}
      <div className="md:hidden">
        <MobileNavigation />
      </div>
    </nav>
  );
}
