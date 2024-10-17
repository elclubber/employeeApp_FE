import useApi from '../hooks/useApi';
import APIConstants from '../constants/APIConstants';

function EmployeeList() {
  const { data: employees, error, loading } = useApi(APIConstants.EMPLOYEE_LIST);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Handle the case where employees are not available
  if (!employees || employees.length === 0) {
    return <div>No employees found.</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Employee List</h1>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id} className="flex justify-between items-center mb-2">
            <span>{employee.name}</span>
            <button
              onClick={() => console.log('Delete logic here')}
              className="text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
