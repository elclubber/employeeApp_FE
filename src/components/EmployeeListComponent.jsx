import PropTypes from 'prop-types';

const EmployeeListComponent = ({ employees, onDelete }) => {
    if (!employees || employees.length === 0) {
      return <div>No employees found.</div>;
    }
  
    return (
      <ul>
        {employees.map((employee) => (
          <li key={employee.id} className="flex justify-between items-center mb-2">
            <span>{employee.name}</span>
            <button
              onClick={() => onDelete(employee.id)}
              className="text-red-500"
            >
              Delete
            </button>
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
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default EmployeeListComponent;  