import Image from 'next/image';

import EmptyCart from '@/app/cart/EmptyCart';
import CartSummary from '@/app/cart/CartSummary';
import RemoveFromCartBtn from './RemoveFromCartBtn';
import { fetchCartItems } from '@/actions/queries/cart';
import AddressBox from './AddressBox';
import { fetchAddress } from '@/actions/queries/address';

export const metadata = {
  title: 'Your Cart - Doughlicious',
};

export default async function CartPage() {
  const cartItems = await fetchCartItems();
  const address = await fetchAddress();

  if (!cartItems) {
    return <EmptyCart />;
  }

  return (
    <section className="padding-y padding-x max-container min-h-screen md:grid md:grid-cols-4 gap-6">
      {/* CART ITEMS */}
      <div className="col-span-3 mb-6">
        {cartItems.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row gap-2 relative rounded-lg mb-3 bg-gray-50 p-2"
            >
              <RemoveFromCartBtn cartItemId={item.id} />

              <Image width={150} height={150} src="/pizza4.png" alt="pizza" />
              <div className="w-full space-y-2 p-4">
                <div className="flex items-center gap-1">
                  <h4 className="text-xl capitalize font-semibold">
                    {item.pizza.title}
                  </h4>
                  <span className="text-sm font-extralight">
                    (x{item.quantity})
                  </span>
                </div>

                <p className="">{item.pizza.description}</p>
                <div className="flex justify-between">
                  <p>Size: {item.size}</p>
                  <p className="text-xl font-bold">
                    ₹{item.quantity * item.pizza.price}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="space-y-4">
        <AddressBox address={address} />
        <CartSummary cartItems={cartItems} />
      </div>
    </section>
  );
}
