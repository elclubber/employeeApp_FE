import PropTypes from 'prop-types';

const EmployeeListComponent = ({ employees, onDelete }) => {
  if (!employees || employees.length === 0) {
    return <div className="text-center text-white">No employees found.</div>;
  }

  return (
    <ul className="space-y-6">
      {employees.map((employee) => (
        <li 
          key={employee.id} 
          className="p-6 border border-gray-700 rounded-lg shadow-lg bg-gray-800"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-semibold text-white">{employee.name}</h3>
            <button
              onClick={() => onDelete(employee.id)}
              className="bg-orange-700 hover:bg-orange-900 text-white px-4 py-2 rounded-md transition-all duration-200 shadow-md"
            >
              Delete
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4 text-gray-300">
            <p><strong className="text-white">Email:</strong> {employee.email}</p>
            <p><strong className="text-white">Position:</strong> {employee.position}</p>
            <p><strong className="text-white">Age:</strong> {employee.age}</p>
            <p><strong className="text-white">Phone:</strong> {employee.phone}</p>
            <p><strong className="text-white">Department:</strong> {employee.department}</p>
            <p><strong className="text-white">Joining Date:</strong> {employee.joiningDate}</p>
            <p><strong className="text-white">Employee Type:</strong> {employee.employeeType}</p>
            <p><strong className="text-white">Marital Status:</strong> {employee.maritalStatus}</p>
            <p><strong className="text-white">Salary:</strong> ${employee.salary}</p>
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
