'use client';

import { MdDelete } from 'react-icons/md';
import { useFormStatus } from 'react-dom';

export default function DeleteLoader() {
  const { pending } = useFormStatus();

  if (!pending) {
    return null;
  }
  return (
    <div className="absolute inset-0 bg-orange-50 opacity-80 flex items-center justify-center">
      <MdDelete className="animate-wiggle text-orange-500" size={60} />
    </div>
  );
}
