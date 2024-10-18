import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../form/Button';
import FormField from '../form/FormField';
import { ADD_EMPLOYEE } from '../../constants/actionTypes';
import { EMPLOYEE_FORM_FIELDS } from '../../constants/formConstants';

const EmployeeForm = ({ closeModal }) => {
  const [employee, setEmployee] = useState(
    EMPLOYEE_FORM_FIELDS.reduce((acc, field) => {
      acc[field.key] = '';
      return acc;
    }, {})
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (key, value) => {
    setEmployee((prevState) => ({ ...prevState, [key]: value }));
  };

  const handleSubmit = () => {
    dispatch({ type: ADD_EMPLOYEE, payload: employee });
    closeModal();
    navigate('/employee-list');
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Add Employee</h2>
      {EMPLOYEE_FORM_FIELDS.map((field) => (
        <FormField
          key={field.key}
          field={field}
          value={employee[field.key]}
          onChange={handleInputChange}
        />
      ))}
      <div className="flex space-x-2">
        <Button
          onClick={handleSubmit}
          label="Submit"
          className="bg-green-500 text-white"
        />
        <Button onClick={closeModal} label="Cancel" />
      </div>
    </div>
  );
};

EmployeeForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default EmployeeForm;
