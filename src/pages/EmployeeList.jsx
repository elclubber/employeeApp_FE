import { useState } from 'react';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  const deleteEmployee = (index) => {
    const newEmployees = employees.filter((_, i) => i !== index);
    setEmployees(newEmployees);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Employee List</h1>
      <ul>
        {employees.map((employee, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <span>{employee.name}</span>
            <button onClick={() => deleteEmployee(index)} className="text-red-500">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
