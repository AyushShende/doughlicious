import Image from 'next/image';

import { shadows } from '@/components/fonts';

export default function Hero() {
  return (
    <section className="max-container padding-x py-6 md:grid md:grid-cols-2 bg-gradient-to-b from-orange-200 to-orange-100">
      {/* CONTENT */}
      <div className="flex flex-col justify-center gap-2 md:gap-4">
        <h4
          className={`${shadows.className} text-xl md:text-2xl font-semibold capitalize text-orange-500`}
        >
          eat, sleep and
        </h4>
        <h1 className="primary-heading md:mb-3">
          more than just <strong className="text-orange-500">pizza</strong>
        </h1>
        <p>
          Our menu has something for everyone. We are the tastiest and fastest
          pizzeria in town. Get you favourites delivered right to your door.
        </p>
      </div>

      {/* IMAGE  */}
      <Image
        className="object-cover"
        src="/hero.png"
        width={700}
        height={700}
        alt="girl eating pizza"
      />
    </section>
  );
}
