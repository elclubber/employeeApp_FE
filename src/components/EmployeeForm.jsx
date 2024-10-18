import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Input from './Input';
import Button from './Button';
import { ADD_EMPLOYEE } from '../constants/actionTypes';
import { EMPLOYEE_FORM_FIELDS } from '../constants/formConstants';

const EmployeeForm = ({ closeModal }) => {
  const [employee, setEmployee] = useState({ name: '', email: '', position: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch({ type: ADD_EMPLOYEE, payload: employee });
    closeModal();
    navigate('/employee-list');
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Add Employee</h2>
      {EMPLOYEE_FORM_FIELDS.map((field) => (
        <Input
          key={field.key}
          type={field.type}
          placeholder={field.placeholder}
          value={employee[field.key]}
          onChange={(e) =>
            setEmployee({ ...employee, [field.key]: e.target.value })
          }
        />
      ))}
      <div className="flex space-x-2">
        <Button
          onClick={handleSubmit}
          label="Submit"
          className="bg-green-500 text-white"
        />
        <Button onClick={closeModal} label="Cancel" className="bg-gray-500 text-white"/>
      </div>
    </div>
  );
};

EmployeeForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default EmployeeForm;
