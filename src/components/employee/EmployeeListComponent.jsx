import PropTypes from 'prop-types';

const EmployeeListComponent = ({ employees, onDelete }) => {
  if (!employees || employees.length === 0) {
    return <div>No employees found.</div>;
  }

  return (
    <ul className="space-y-4">
      {employees.map((employee) => (
        <li 
          key={employee.id} 
          className="flex flex-col p-4 border rounded shadow-sm bg-white"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">{employee.name}</h3>
            <button
              onClick={() => onDelete(employee.id)}
              className="text-red-500"
            >
              Delete
            </button>
          </div>
          <div className="mt-2">
            <p><strong>Email:</strong> {employee.email}</p>
            <p><strong>Position:</strong> {employee.position}</p>
            <p><strong>Age:</strong> {employee.age}</p>
            <p><strong>Phone:</strong> {employee.phone}</p>
            <p><strong>Department:</strong> {employee.department}</p>
            <p><strong>Joining Date:</strong> {employee.joiningDate}</p>
            <p><strong>Employee Type:</strong> {employee.employeeType}</p>
            <p><strong>Marital Status:</strong> {employee.maritalStatus}</p>
            <p><strong>Salary:</strong> ${employee.salary}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

EmployeeListComponent.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      phone: PropTypes.string,
      department: PropTypes.string,
      joiningDate: PropTypes.string,
      employeeType: PropTypes.string,
      maritalStatus: PropTypes.string,
      salary: PropTypes.number,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default EmployeeListComponent;
