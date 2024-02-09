import CheckoutButton from './CheckoutButton';
import { CartItemsWithPizza } from '@/lib/types';

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
    <div className="bg-gray-50 p-4 space-y-4 rounded-lg">
      <div className="flex justify-between">
        <span className="text-lg font-semibold">Sub Total</span>
        <span className="text-lg font-semibold">₹{cartTotal || 0}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-lg font-semibold">Discount</span>
        <span className="text-lg font-semibold">
          {discount === 0 ? '-' : discount}
        </span>
      </div>
      <div className="flex justify-between">
        <span className="text-lg font-semibold">Taxes and Charges</span>
        <span className="text-lg font-semibold">
          {charges === 0 ? '-' : charges}
        </span>
      </div>
      <hr />
      <div className="flex justify-between mt-2">
        <span className="text-xl font-semibold">Grand Total</span>
        <span className="text-xl font-semibold">
          ₹{cartTotal ? cartTotal - discount - charges : 0}
        </span>
      </div>
      <hr className="my-2" />
      <CheckoutButton />
    </div>
  );
}
