import PropTypes from 'prop-types';
import Input from './Input';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const FormField = ({ field, value, onChange, error }) => {
  const isValid = value && !error;

  return (
    <div className="relative w-full  mb-4">
      {field.type === 'radio' ? (
        <div className="bg-gray-700 bg-opacity-40 p-4 rounded-md mt-4 mb-4">
          <label className="block text-gray-500 text-lg font-semibold mb-2">
            {field.placeholder}
          </label>
          <div className="flex flex-wrap gap-4">
            {field.options.map((option, index) => (
              <label
                key={option}
                className="flex items-center space-x-2 text-white cursor-pointer"
              >
                <input
                  type="radio"
                  name={field.key}
                  value={option}
                  checked={value === option}
                  onChange={(e) => onChange(field.key, e.target.value)}
                  className="form-radio h-5 w-5 text-cyan-500 focus:ring-cyan-400"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
      ) : field.type === 'select' ? (
        <div className="w-full mb-4">
          <label className="block text-gray-500 text-lg font-semibold mb-2">
            {field.placeholder}
          </label>
          <select
            className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            value={value || field.options[0]} // Default to first option
            onChange={(e) => onChange(field.key, e.target.value)}
          >
            {field.options.map((option) => (
              <option key={option} value={option} className="text-white">
                {option}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <div className="w-full">
          <label className="block text-gray-500 text-lg font-semibold mb-2">
            {field.placeholder}
          </label>
          <Input
            type={field.type}
            placeholder={field.placeholder || ''}
            value={value}
            onChange={(e) => onChange(field.key, e.target.value, e)}
          />
        </div>
      )}

      {isValid ? (
        <FaCheckCircle className="absolute right-8 top-14 text-green-500" />
      ) : (
        value && <FaTimesCircle className="absolute right-8 top-14 text-red-500" />
      )}

      {error && <p className="text-red-500 text-sm">{error}</p>}
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
