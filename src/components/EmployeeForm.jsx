import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import APIConstants from '../constants/APIConstants';

const EmployeeForm = ({ closeModal }) => {
  const [employee, setEmployee] = useState({ name: '', email: '', position: '' });
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await fetch(APIConstants.ADD_EMPLOYEE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(employee),
      });

      if (!response.ok) throw new Error('Failed to add employee');
      alert('Employee added successfully!');
      closeModal();  // Close the modal after successful submission
      navigate('/employee-list');  // Redirect to the employee list
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Add Employee</h2>
      <input
        type="text"
        placeholder="Name"
        className="w-full p-2 border mb-2"
        value={employee.name}
        onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 border mb-2"
        value={employee.email}
        onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
      />
      <input
        type="text"
        placeholder="Position"
        className="w-full p-2 border mb-2"
        value={employee.position}
        onChange={(e) => setEmployee({ ...employee, position: e.target.value })}
      />
      <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 mr-2">
        Submit
      </button>
      <button onClick={closeModal} className="bg-gray-500 text-white px-4 py-2">
        Cancel
      </button>
    </div>
  );
};

export default EmployeeForm;
