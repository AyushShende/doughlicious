import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import { GiShoppingBag } from 'react-icons/gi';
const Navbar = () => {
  return (
    <nav className="px-4 flex font-semibold items-start justify-between py-4 md:px-20">
      <div>
        <h2 className="font-bold text-2xl">DoughLicious</h2>
      </div>
      <div>
        <Link className="" href="/">
          <GiShoppingBag />
        </Link>
      </div>
      <FiMenu className="md:hidden" />
      <div className="hidden md:flex gap-10">
        <Link className="" href="/">
          Home
        </Link>
        <Link className="" href="/menu">
          Menu
        </Link>
        <Link href="/contact">Contact</Link>
        <Link href="/contact">My Orders</Link>
      </div>
    </nav>
  );
};
export default Navbar;
