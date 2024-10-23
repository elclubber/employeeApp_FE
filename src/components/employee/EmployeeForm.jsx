import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonGroup from '../form/ButtonGroup';
import FormField from '../form/FormField';
import ProgressBar from '../form/ProgressBar';
import { ADD_EMPLOYEE } from '../../constants/ActionTypesConstants';
import { EMPLOYEE_FORM_FIELDS } from '../../constants/FormConstants';
import { keyType, ROUTE_PATHS, STEP, FIELD_TYPE, PROGRESS_START, SUCCESS_MESSAGE } from '../../constants/AppConstants';
import { toBase64 } from '../../helpers/appHelper';
import { validateField, validateFields } from '../../helpers/validationHelper';
import { calculateProgress } from '../../utils/formUtils';

const EmployeeForm = ({ closeModal, showSuccessModal }) => {
  const initialState = EMPLOYEE_FORM_FIELDS.reduce((acc, field) => {
    acc[field.key] = field.type === FIELD_TYPE.RADIO || field.type === FIELD_TYPE.SELECT
      ? field.options[0]
      : '';
    return acc;
  }, {});

  const [employee, setEmployee] = useState(initialState);
  const [image, setImage] = useState(null);
  const [step, setStep] = useState(STEP.FIRST);
  const [progress, setProgress] = useState(PROGRESS_START);
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentFields =
    step === STEP.FIRST
      ? EMPLOYEE_FORM_FIELDS.slice(STEP.MIN_FIELDS_COUNT, STEP.MAX_FIELDS_COUNT)
      : EMPLOYEE_FORM_FIELDS.slice(STEP.MAX_FIELDS_COUNT);

  useEffect(() => {
    const { progressPercentage } = calculateProgress(employee, EMPLOYEE_FORM_FIELDS);
    setProgress(progressPercentage);
  }, [employee]);

  const handleInputChange = (key, value, e) => {
    if (key === keyType.IMAGE) {
      setImage(e.target.files[0]);
    }

    setEmployee((prevState) => ({ ...prevState, [key]: value }));
    const field = EMPLOYEE_FORM_FIELDS.find((f) => f.key === key);
    const error = validateField(field, value);
    setErrors((prevErrors) => ({ ...prevErrors, [key]: error }));
  };

  const handleNextStep = () => {
    const stepFields = EMPLOYEE_FORM_FIELDS.slice(STEP.MIN_FIELDS_COUNT, STEP.MAX_FIELDS_COUNT);
    const stepErrors = validateFields(stepFields, employee);
    setErrors(stepErrors);

    if (Object.keys(stepErrors).length === 0) {
      setStep(STEP.SECOND);
    }
  };

  const handleBackStep = () => {
    setImage(null);
    setEmployee((prevState) => ({ ...prevState, image: '' }));
    setStep(STEP.FIRST);
  };

  const handleSubmit = async () => {
    const remainingFields = EMPLOYEE_FORM_FIELDS.slice(STEP.MAX_FIELDS_COUNT);
    const remainingErrors = validateFields(remainingFields, employee);
    setErrors(remainingErrors);

    if (Object.keys(remainingErrors).length === 0) {
      let base64Image = null;
      if (image) {
        base64Image = await toBase64(image);
      }

      const employeeData = { ...employee, image: base64Image };
      dispatch({ type: ADD_EMPLOYEE, payload: employeeData });

      closeModal();
      showSuccessModal(SUCCESS_MESSAGE);
      navigate(ROUTE_PATHS.EMPLOYEE_LIST);
    }
  };

  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-cyan-300">New Employee</h2>
        <div className="w-1/2">
          <ProgressBar progress={progress} />
        </div>
      </div>

      {currentFields.map((field) => (
        <div key={field.key}>
          <FormField
            field={field}
            value={employee[field.key]}
            onChange={handleInputChange}
            error={errors ? errors[field.key] : ''}
          />
        </div>
      ))}

      <ButtonGroup
        step={step}
        onNext={handleNextStep}
        onBack={handleBackStep}
        onSubmit={handleSubmit}
        onCancel={closeModal}
      />
    </div>
  );
};

EmployeeForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
  showSuccessModal: PropTypes.func
};

export default EmployeeForm;
