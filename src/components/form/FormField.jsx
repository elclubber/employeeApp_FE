import PropTypes from 'prop-types';
import Input from './Input';

const FormField = ({ field, value, onChange }) => {
  if (field.type === 'select') {
    return (
      <select
        key={field.key}
        className="w-full p-2 border mb-2"
        value={value}
        onChange={(e) => onChange(field.key, e.target.value)}
      >
        <option value="">{field.placeholder}</option>
        {field.options.map((option) => (
          <option key={option} value={option}>
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
      onChange={(e) => onChange(field.key, e.target.value)}
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
