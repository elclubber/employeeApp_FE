import { useState } from 'react';
import useApi from '../hooks/useApi';
import APIConstants from '../constants/APIConstants';
import TopMenu from '../components/TopMenu';
import EmployeeListComponent from '../components/EmployeeListComponent';
import EmployeeForm from '../components/EmployeeForm';

function EmployeeList() {
  const { data: employees, error, loading } = useApi(APIConstants.EMPLOYEE_LIST);
  const [isModalOpen, setIsModalOpen] = useState(false);  // State to manage modal visibility

  const handleDelete = (id) => {
    console.log(`Delete logic for employee with ID: ${id}`);
    // TODO: Implement actual delete logic here
  };

  const openModal = () => setIsModalOpen(true);  // Open the modal
  const closeModal = () => setIsModalOpen(false);  // Close the modal

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <TopMenu />
      <div className="p-4">
        <h1 className="text-2xl mb-4">Employee List</h1>
        <button
          onClick={openModal}
          className="bg-blue-500 text-white px-4 py-2 mb-4"
        >
          Add Employee
        </button>
        <EmployeeListComponent employees={employees} onDelete={handleDelete} />

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-lg">
              <EmployeeForm closeModal={closeModal} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default EmployeeList;
