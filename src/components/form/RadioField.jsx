import PropTypes from 'prop-types';

const RadioField = ({ field, value, onChange }) => (
  <div className="bg-gray-700 bg-opacity-40 p-4 rounded-md mt-4 mb-4">
    <label className="block text-gray-500 text-lg font-semibold mb-2">
      {field.placeholder}
    </label>
    <div className="flex flex-wrap gap-4">
      {field.options.map((option) => (
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
);

RadioField.propTypes = {
  field: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RadioField;
