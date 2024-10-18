import PropTypes from 'prop-types';

const Input = ({ type, placeholder, value, onChange }) => (
  <input
    type={type}
    placeholder={placeholder}
    className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-500"
    value={value}
    onChange={onChange}
  />
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
