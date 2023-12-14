import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex-center flex-col padding-x padding-y max-container">
      <Image
        src="/not_found.svg"
        alt="resource not found"
        width={600}
        height={600}
      />
      <p className="text-lg">Could not find requested resource</p>
      <Link className="text-lg font-semibold py-2 text-orange-400" href="/">
        Return Home
      </Link>
    </section>
  );
}
