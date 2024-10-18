import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployeesStart } from '../store/slices/employeeSlice';
import {
    selectEmployees,
    selectEmployeeLoading,
    selectEmployeeError,
} from '../store/selectors/employeeSelector';
import EmployeeListComponent from '../components/EmployeeListComponent';
import TopMenu from '../components/TopMenu';
import EmployeeForm from '../components/EmployeeForm';

function EmployeeList() {
    const dispatch = useDispatch();
    const employees = useSelector(selectEmployees);
    const loading = useSelector(selectEmployeeLoading);
    const error = useSelector(selectEmployeeError);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        dispatch(fetchEmployeesStart());
    }, [dispatch]);

    const handleAddEmployee = (employee) => {
        dispatch({ type: 'employee/addEmployee', payload: employee });
        setIsModalOpen(false);
    };

    const handleDelete = (id) => {
        dispatch({ type: 'employee/deleteEmployee', payload: id });
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <TopMenu />
            <div className="p-4">
                <h1 className="text-2xl mb-4">Employee List</h1>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-blue-500 text-white px-4 py-2 mb-4"
                >
                    Add Employee
                </button>
                <EmployeeListComponent employees={employees} onDelete={handleDelete} />
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white p-6 rounded shadow-lg">
                            <EmployeeForm onAddEmployee={handleAddEmployee} closeModal={() => setIsModalOpen(false)} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default EmployeeList;
