import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_EMPLOYEES_START, ADD_EMPLOYEE, DELETE_EMPLOYEE } from '../constants/actionTypes';
import {
    selectEmployees,
    selectEmployeeLoading,
    selectEmployeeError,
} from '../store/selectors/employeeSelector';
import EmployeeListComponent from '../components/employee/EmployeeListComponent';
import TopMenu from '../components/TopMenu';
import EmployeeForm from '../components/employee/EmployeeForm';
import Modal from '../components/Modal';  // Import the Modal component

function EmployeeList() {
    const dispatch = useDispatch();
    const employees = useSelector(selectEmployees);
    const loading = useSelector(selectEmployeeLoading);
    const error = useSelector(selectEmployeeError);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Fetch employees when component mounts
    useEffect(() => {
        dispatch({ type: FETCH_EMPLOYEES_START });
    }, [dispatch]);

    const handleAddEmployee = (employee) => {
        dispatch({ type: ADD_EMPLOYEE, payload: employee });
        setIsModalOpen(false);
    };

    const handleDelete = (id) => {
        dispatch({ type: DELETE_EMPLOYEE, payload: id });
    };

    if (loading) return <div className="text-white text-center p-6">Loading...</div>;
    if (error) return <div className="text-red-500 text-center p-6">Error: {error}</div>;

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <TopMenu />
            <div className="container mx-auto p-6">
                <h1 className="text-4xl font-bold mb-6 text-center">Employee List</h1>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-teal-700 hover:bg-teal-900 text-white px-6 py-2 mb-6 rounded shadow"
                >
                    Add Employee
                </button>
                <EmployeeListComponent employees={employees} onDelete={handleDelete} />
                
                {/* Use the Modal component */}
                <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
                    <EmployeeForm
                        onAddEmployee={handleAddEmployee}
                        closeModal={() => setIsModalOpen(false)}
                    />
                </Modal>
            </div>
        </div>
    );
}

export default EmployeeList;
