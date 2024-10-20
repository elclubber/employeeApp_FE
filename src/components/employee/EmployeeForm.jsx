import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonGroup from '../form/ButtonGroup';
import FormField from '../form/FormField';
import ProgressBar from '../form/ProgressBar';
import { ADD_EMPLOYEE } from '../../constants/ActionTypesConstants';
import { EMPLOYEE_FORM_FIELDS } from '../../constants/FormConstants';
import { keyType, ROUTE_PATHS } from '../../constants/AppConstants';
import { toBase64 } from '../../helpers/appHelper';

const EmployeeForm = ({ closeModal }) => {
  const [employee, setEmployee] = useState(
    EMPLOYEE_FORM_FIELDS.reduce((acc, field) => {
      acc[field.key] = '';
      return acc;
    }, {})
  );

  const [image, setImage] = useState(null);
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(0);
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const filledFields = EMPLOYEE_FORM_FIELDS.filter(
      (field) => employee[field.key].trim() !== ''
    ).length;

    const progressPercentage = Math.round(
      (filledFields / EMPLOYEE_FORM_FIELDS.length) * 100
    );
    setProgress(progressPercentage);
  }, [employee]);

  const validateField = (field, value) => {
    let error = '';

    if (field.required && !value) {
      error = `${field.placeholder} is required.`;
    } else if (field.pattern && !field.pattern.test(value)) {
      error = `Invalid ${field.placeholder}.`;
    } else if (field.min !== undefined && value < field.min) {
      error = `${field.placeholder} must be at least ${field.min}.`;
    } else if (field.max !== undefined && value > field.max) {
      error = `${field.placeholder} cannot exceed ${field.max}.`;
    }

    return error;
  };

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
    const stepFields = EMPLOYEE_FORM_FIELDS.slice(0, 6);
    const stepErrors = validateFields(stepFields);
    if (Object.keys(stepErrors).length === 0) {
      setStep(2);
    }
  };

  const handleBackStep = () => {
    setStep(1);
  };

  const handleSubmit = async () => {
    const remainingFields = EMPLOYEE_FORM_FIELDS.slice(6);
    const remainingErrors = validateFields(remainingFields);

    if (Object.keys(remainingErrors).length === 0) {
      let base64Image = null;
      if (image) {
        base64Image = await toBase64(image);
      }

      const employeeData = { ...employee, image: base64Image };
      dispatch({ type: ADD_EMPLOYEE, payload: employeeData });

      closeModal();
      navigate(ROUTE_PATHS.EMPLOYEE_LIST);
    }
  };

  const validateFields = (fields) => {
    const newErrors = {};
    fields.forEach((field) => {
      const error = validateField(field, employee[field.key]);
      if (error) newErrors[field.key] = error;
    });
    setErrors((prevErrors) => ({ ...prevErrors, ...newErrors }));
    return newErrors;
  };

  const currentFields =
    step === 1 ? EMPLOYEE_FORM_FIELDS.slice(0, 6) : EMPLOYEE_FORM_FIELDS.slice(6);

  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-white">
          Add Employee
        </h2>
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
          />
          {errors[field.key] && (
            <p className="text-red-500 text-sm">{errors[field.key]}</p>
          )}
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
};

export default EmployeeForm;
