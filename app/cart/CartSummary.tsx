import CheckoutButton from './CheckoutButton';
import { CartItem } from '@prisma/client';

export type CartItemsWithPizza = CartItem & {
  pizza: {
    title: string;
    image: string;
    description: string;
    price: number;
  };
};

export default async function CartSummary({
  cartItems,
}: {
  cartItems: CartItemsWithPizza[];
}) {
  const cartTotal = cartItems.reduce(
    (acc, item) => acc + item.pizza.price * item.quantity,
    0
  );
  const discount = 0;
  const charges = 0;

  return (
    <div className="space-y-2 bg-gray-50 h-fit p-4">
      <div className="flex justify-between">
        <span className="text-l font-semibold">Sub Total</span>
        <span className="text-l font-semibold">₹{cartTotal || 0}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-l font-semibold">Discount</span>
        <span className="text-l font-semibold">
          {discount === 0 ? '-' : discount}
        </span>
      </div>
      <div className="flex justify-between">
        <span className="text-l font-semibold">Taxes and Charges</span>
        <span className="text-l font-semibold">
          {charges === 0 ? '-' : charges}
        </span>
      </div>
      <hr />
      <div className="flex justify-between">
        <span className="text-xl font-semibold">Grand Total</span>
        <span className="text-xl font-semibold">
          ₹{cartTotal ? cartTotal - discount - charges : 0}
        </span>
      </div>
      <hr />
      <CheckoutButton />
    </div>
  );
}
