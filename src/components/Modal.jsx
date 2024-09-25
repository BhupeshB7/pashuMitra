import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 overflow-y-auto  h-[110%] bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg relative min-w-[90%] top-60 md:min-w-[800px] ">
        <button
          onClick={onClose}
          className="absolute top-[90%] right-12 md:right-24 text-red-950 px-3 md:px-6 py-1 bg-red-300 rounded-full text-sm md:text-xl z-50"
        >
          close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
