import APIConstants from '../constants/APIConstants';

// Fetch all employees
export const fetchEmployeesAPI = async () => {
  const response = await fetch(APIConstants.EMPLOYEE_LIST);
  if (!response.ok) {
    throw new Error('Failed to fetch employees');
  }
  return response.json();
};

// Add a new employee
export const addEmployeeAPI = async (employee) => {
  const response = await fetch(APIConstants.ADD_EMPLOYEE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(employee),
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    const errorMessage = errorResponse.error || 'Failed to add employee';
    throw new Error(errorMessage);
  }

  return response.json();
};

// Delete an employee by ID
export const deleteEmployeeAPI = async (id) => {
  const response = await fetch(`${APIConstants.DELETE_EMPLOYEE}/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete employee');
  }
};
