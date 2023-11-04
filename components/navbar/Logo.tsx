import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link className="cursor-pointer" href="/">
      <Image alt="logo" src="/logo.svg" width={100} height={100} />
    </Link>
  );
}
