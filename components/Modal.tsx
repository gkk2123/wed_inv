
import React, { ReactNode, useEffect } from 'react';

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden'; // Prevent background scroll

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto'; // Restore scroll
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[100] p-4 transition-opacity duration-300 ease-in-out" // p-4 for outer viewport margin
      onClick={onClose} // Close on overlay click
    >
      <div 
        className="bg-white p-[5px] rounded-xl shadow-2xl relative transform transition-all duration-300 ease-in-out scale-95 animate-modal-appear inline-block" // p-[5px] for tight image border, inline-block to fit content
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal content
      >
        <button
          onClick={onClose}
          className="absolute top-1 right-1 text-gray-500 hover:text-gray-800 text-3xl z-10 bg-white/50 rounded-full w-8 h-8 flex items-center justify-center leading-none" // Adjusted position and slight styling for better visibility
          aria-label="Close modal"
        >
          &times;
        </button>
        {children}
      </div>
      <style>{`
        @keyframes modal-appear {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-modal-appear { animation: modal-appear 0.3s ease-out forwards; }
      `}</style>
    </div>
  );
};
