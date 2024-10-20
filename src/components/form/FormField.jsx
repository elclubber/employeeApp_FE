import PropTypes from 'prop-types';
import Input from './Input';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const FormField = ({ field, value, onChange, error }) => {
  const isValid = value && !error;

  return (
    <div className="relative w-full mb-2">
      {field.type === 'select' ? (
        <select
          className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={value}
          onChange={(e) => onChange(field.key, e.target.value)}
        >
          <option value="" className="text-gray-400">
            {field.placeholder}
          </option>
          {field.options.map((option) => (
            <option key={option} value={option} className="text-black">
              {option}
            </option>
          ))}
        </select>
      ) : (
        <Input
          type={field.type}
          placeholder={field.placeholder}
          value={value}
          onChange={(e) => onChange(field.key, e.target.value, e)}
        />
      )}

      {isValid ? (
        <FaCheckCircle className="absolute right-4 top-4 text-green-500" />
      ) : (
        value && <FaTimesCircle className="absolute right-4 top-4 text-red-500" />
      )}

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

FormField.propTypes = {
  field: PropTypes.shape({
    key: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default FormField;
