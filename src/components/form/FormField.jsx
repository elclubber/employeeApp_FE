import PropTypes from 'prop-types';
import Input from './Input';

const FormField = ({ field, value, onChange }) => {
  if (field.type === 'select') {
    return (
      <select
        key={field.key}
        className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        value={value}
        onChange={(e) => onChange(field.key, e.target.value)}
      >
        <option value="" className="text-gray-400">{field.placeholder}</option>
        {field.options.map((option) => (
          <option key={option} value={option} className="text-black">
            {option}
          </option>
        ))}
      </select>
    );
  }

  return (
    <Input
      key={field.key}
      type={field.type}
      placeholder={field.placeholder}
      value={value}
      onChange={(e) => onChange(field.key, e.target.value, e)}
    />
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
};

export default FormField;
