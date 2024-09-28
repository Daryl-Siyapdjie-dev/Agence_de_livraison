import ReactDOM from "react-dom";

interface ModalProps {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, children, onClose }) => {
  // Créer un div dans le DOM où le portail va rendre la modal
  const modalRoot = document.getElementById("modal-root");

  return modalRoot
    ? ReactDOM.createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 ease-in-out">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl transform transition-transform duration-500 ease-in-out scale-100 hover:scale-105">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-blue-600">{title}</h2>
              <button
                onClick={onClose}
                className="text-gray-700 hover:text-gray-900 text-2xl px-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300"
              >
                ×
              </button>
            </div>
            <div className="modal-content max-h-[70vh] overflow-y-auto">
              {children}
            </div>
          </div>
        </div>,
        modalRoot
      )
    : null;
};

export default Modal;
