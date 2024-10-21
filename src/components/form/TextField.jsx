import PropTypes from 'prop-types';
import Input from './Input';

const TextField = ({ field, value, onChange }) => (
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
);

TextField.propTypes = {
  field: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextField;
