import PropTypes from 'prop-types';

const SelectField = ({ field, value, onChange }) => (
  <div className="w-full mb-4">
    <label className="block text-gray-500 text-lg font-semibold mb-2">
      {field.placeholder}
    </label>
    <select
      className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
      value={value || field.options[0]}
      onChange={(e) => onChange(field.key, e.target.value)}
    >
      {field.options.map((option) => (
        <option key={option} value={option} className="text-white">
          {option}
        </option>
      ))}
    </select>
  </div>
);

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectField;
