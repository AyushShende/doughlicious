import Image from 'next/image';
import Link from 'next/link';

export default function EmptyCart() {
  return (
    <main className="padding-y padding-x">
      <Image
        className="mx-auto mb-8"
        src="/empty_cart.svg"
        alt="empty cart"
        width={400}
        height={400}
      />
      <div className="text-center">
        <h2 className="mb-2 text-2xl font-bold">Your Cart is Empty!</h2>
        <p>
          Explore our yummy{' '}
          <Link className="font-semibold text-orange-400" href="/menu">
            options
          </Link>
        </p>
      </div>
    </main>
  );
}
