'use client';

import { useFormStatus } from 'react-dom';
import Button from '../button';
import { cn } from '@/utils/cn';

export default function FormButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { pending } = useFormStatus();
  return (
    <Button
      className={cn('text-lg', className)}
      // className="rounded-lg"
      type="submit"
      disabled={pending}
      isLoading={pending}
    >
      {children}
    </Button>
  );
}
