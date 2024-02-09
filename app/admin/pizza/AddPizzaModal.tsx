'use client';

import AddNewPizzaForm from './AddNewPizzaForm';

type AddPizzaModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: (state: boolean) => void;
};

export default function AddPizzaModal({
  isModalOpen,
  setIsModalOpen,
}: AddPizzaModalProps) {
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {isModalOpen ? (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex justify-center items-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-6 rounded-md w-full max-w-2xl"
          >
            <div className="text-right">
              <button
                className="text-gray-500 cursor-pointer hover:text-gray-700"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
            <AddNewPizzaForm />
          </div>
        </div>
      ) : null}
    </>
  );
}
