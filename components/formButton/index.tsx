'use client';

import { useFormStatus } from 'react-dom';

import Button from '../button';
import { cn } from '@/utils/cn';

export default function FormButton({
  children,
  className,
  disabled,
}: {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}) {
  const { pending } = useFormStatus();

  return (
    <Button
      className={cn('text-lg', className)}
      type="submit"
      disabled={pending || disabled}
      isLoading={pending}
    >
      {children}
    </Button>
  );
}
