import PropTypes from 'prop-types';

const Input = ({ type, placeholder, value, onChange, hasError }) => (
  <input
    type={type}
    placeholder={placeholder}
    className={`w-full p-3 bg-gray-700 text-white border rounded-md mb-4 
      ${hasError ? 'border-red-500' : 'border-gray-600'}
      focus:outline-none focus:ring-2 focus:ring-cyan-500`}
    value={value}
    onChange={onChange}
  />
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  hasError: PropTypes.bool,
};

export default Input;