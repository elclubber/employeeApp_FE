import PropTypes from 'prop-types';

const Loader = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-85 z-50 flex items-center justify-center">
      <div className="loader animate-spin h-16 w-16 border-t-4 border-white rounded-full"></div>
    </div>
  );
};

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Loader;
