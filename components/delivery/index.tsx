import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/button';

export default function Delivery() {
  return (
    <section className="padding-y padding-x max-container grid md:grid-cols-2 gap-6">
      <Image
        src="/delivery.svg"
        width={500}
        height={500}
        alt="delivery rider"
        className="mx-auto"
      />

      <div className="self-center text-center md:text-left">
        <h2 className="sec-heading md:text-4xl">Express Delivery</h2>
        <p className="mb-6">
          We are the fastest pizzeria in town. That&apos;s why we promise that
          if we can&apos;t deliver to you within 30 minutes, the pizza is free.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
          ipsum hic corporis soluta asperiores eum temporibus ipsa assumenda qui
          unde esse placeat voluptates, quisquam quaerat porro maiores a? Sed,
          assumenda!
        </p>
        <Link href="/menu">
          <Button>Order Now</Button>
        </Link>
      </div>
    </section>
  );
}
