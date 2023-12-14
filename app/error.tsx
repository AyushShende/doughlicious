'use client';
import Image from 'next/image';
import { useEffect } from 'react';

import serverErrorImg from '@/public/server_error.svg';
import Button from '@/components/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="padding-x py-16 max-container flex-center flex-col">
      <Image src={serverErrorImg} alt="internal server error" />
      <h2 className="text-lg font-semibold">Something went wrong!</h2>
      <p className="font-light my-2 text-sm">Error: {error.message}</p>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}
