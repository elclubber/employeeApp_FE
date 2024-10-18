import PropTypes from 'prop-types';

const Button = ({ onClick, label, className }) => (
  <button onClick={onClick} className={`px-4 py-2 ${className}`}>
    {label}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Button;
