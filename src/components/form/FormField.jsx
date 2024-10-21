import PropTypes from 'prop-types';
import RadioField from './RadioField';
import SelectField from './SelectField';
import TextField from './TextField';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const FormField = ({ field, value, onChange, error }) => {
  const isValid = value && !error;

  const renderField = () => {
    switch (field.type) {
      case 'radio':
        return <RadioField field={field} value={value} onChange={onChange} />;
      case 'select':
        return <SelectField field={field} value={value} onChange={onChange} />;
      default:
        return <TextField field={field} value={value} onChange={onChange} />;
    }
  };

  return (
    <div className="relative w-full mb-4">
      {renderField()}

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
