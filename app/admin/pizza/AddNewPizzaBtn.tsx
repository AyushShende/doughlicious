'use client';

import { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import AddPizzaModal from './AddPizzaModal';

export default function AddNewPizzaBtn() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsModalOpen(true)}
        className="absolute top-2 right-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full p-2 focus:outline-none"
      >
        <MdAdd size={24} />
      </button>
      <AddPizzaModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
}
