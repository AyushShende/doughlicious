import Link from 'next/link';
import Logo from './Logo';
import { FaShoppingCart, FaBars } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="max-container flex justify-between items-center padding-x padding-y bg-orange-400 font-semibold text-white">
      <Logo />

      <div className="hidden items-center gap-10 md:flex">
        <Link href="/menu">Menu</Link>
        <Link href="/orders">My Orders</Link>
        <Link href="/cart">
          <div className="relative">
            <FaShoppingCart size={26} />
            <span className="absolute -right-3 -top-3 h-6 w-6 rounded-full bg-gray-100 text-center text-orange-400">
              {5}
            </span>
          </div>
        </Link>
      </div>

      {/* MOBILE HAMBURGER MENU */}
      <FaBars size={26} className="md:hidden" />
    </nav>
  );
}
