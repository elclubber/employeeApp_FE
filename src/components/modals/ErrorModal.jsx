import PropTypes from 'prop-types';

const ErrorModal = ({ isOpen, message, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-rose-700 w-3/4 max-w-md p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-4">Error</h2>
        <p className="text-white mb-6">{message}</p>
        <button
          onClick={onClose}
          className="w-full bg-rose-950 hover:bg-gray-900 text-white py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

ErrorModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  message: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default ErrorModal;
