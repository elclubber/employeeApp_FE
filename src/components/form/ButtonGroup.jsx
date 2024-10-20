import PropTypes from 'prop-types';
import Button from './Button';

const ButtonGroup = ({ step, onNext, onBack, onSubmit, onCancel }) => (
  <div className="flex justify-between space-x-2 mt-4">
    {step === 2 && (
      <div className="flex justify-start">
        <Button
          onClick={onBack}
          label="Back"
          className="bg-orange-500 rounded-md hover:bg-yellow-600 text-white"
        />
      </div>
    )}

    <div className="flex justify-end space-x-2 flex-grow">
      {step === 1 ? (
        <>
          <Button
            onClick={onNext}
            label="Next"
            className="bg-blue-500 rounded-md hover:bg-blue-600 text-white"
          />
          <Button
            onClick={onCancel}
            label="Cancel"
            className="bg-gray-600 rounded-md hover:bg-gray-800 text-white"
          />
        </>
      ) : (
        <>
          <Button
            onClick={onSubmit}
            label="Submit"
            className="bg-green-500 rounded-md hover:bg-green-600 text-white"
          />
          <Button
            onClick={onCancel}
            label="Cancel"
            className="bg-gray-600 rounded-md hover:bg-gray-800 text-white"
          />
        </>
      )}
    </div>
  </div>
);

ButtonGroup.propTypes = {
  step: PropTypes.number.isRequired,
  onNext: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default ButtonGroup;
