import Link from 'next/link';
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import Image from 'next/image';
import { getServerSession } from 'next-auth';

import Logo from '@/components/logo';
import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import AuthActions from './AuthActions';
import { fetchCartItems } from '@/actions/queries/cart';

export default async function Navbar() {
  const cartItems = await fetchCartItems();

  const cartSize =
    cartItems?.reduce((acc, item) => acc + item.quantity, 0) || 0;

  const session = await getServerSession(authOptions);

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
        {session?.user ? (
          <AuthActions authenticated={true}>
            <Image
              src={session?.user.image || ''}
              alt="profile pic"
              width={50}
              height={50}
              className="rounded-full shadow-md"
            />
          </AuthActions>
        ) : (
          <AuthActions
            authenticated={false}
            className="rounded px-2 py-1 bg-slate-50 text-orange-500 transition hover:bg-slate-100"
          >
            Sign In
          </AuthActions>
        )}
      </div>

      {/* MOBILE HAMBURGER MENU */}
      <FaBars size={26} className="md:hidden" />
    </nav>
  );
}
