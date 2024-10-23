import PropTypes from 'prop-types';
import { EMPLOYEE_FIELDS } from '../../constants/formConstants';

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
          {employee.image && (
            <img
              src={employee.image}
              alt={`${employee.name}'s profile`}
              className="w-16 h-16 mr-4 rounded-full"
            />
          )}
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-semibold text-white">
              {employee.name}
            </h3>
            <button
              onClick={() => onDelete(employee.id)}
              className="bg-orange-700 hover:bg-orange-900 text-white px-4 py-2 rounded-md transition-all duration-200 shadow-md"
            >
              Delete
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4 text-white">
            {EMPLOYEE_FIELDS.map(({ label, key, format }) => (
              <p key={key}>
                <strong className="text-gray-400">{label}:</strong>{' '}
                {format ? format(employee[key]) : employee[key] || 'N/A'}
              </p>
            ))}
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
