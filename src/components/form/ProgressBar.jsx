import PropTypes from 'prop-types';

const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-gray-600 rounded-full h-4">
      <div
        className="bg-green-500 h-4 rounded-full transition-all duration-300"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default ProgressBar;
