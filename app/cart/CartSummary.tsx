import Button from '@/components/button';

export default function CartSummary({ subtotal }: { subtotal: number }) {
  const discount = 0;
  const charges = 0;
  return (
    <div className="space-y-2 bg-gray-50 h-fit p-4">
      <div className="flex justify-between">
        <span className="text-l font-semibold">Sub Total</span>
        <span className="text-l font-semibold">₹{subtotal}</span>
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
          ₹{subtotal ? subtotal - discount - charges : 0}
        </span>
      </div>
      <hr />
      <Button className="rounded w-full">Place Order</Button>
    </div>
  );
}
