import PropTypes from 'prop-types';

const Modal = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-gray-800 w-3/4 max-w-5xl p-6 rounded-lg shadow-lg overflow-y-auto max-h-[90vh] relative custom-scrollbar">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-200 text-4xl hover:text-gray-400"
        >
          &times;
        </button>
        <div className="mt-8">{children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
