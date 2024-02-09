'use client';

import { MdDelete } from 'react-icons/md';
import { useFormStatus } from 'react-dom';

export default function DeleteLoader() {
  const { pending } = useFormStatus();

  return pending ? (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
      <MdDelete className="animate-wiggle text-orange-500" size={40} />
    </div>
  ) : null;
}
