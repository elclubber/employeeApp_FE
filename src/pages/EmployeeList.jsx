import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_EMPLOYEES_START, DELETE_EMPLOYEE } from '../constants/ActionTypesConstants';
import { PROGRESS_END } from '../constants/AppConstants';
import { selectEmployees, selectEmployeeError } from '../store/selectors/employeeSelector';
import EmployeeListComponent from '../components/employee/EmployeeListComponent';
import TopMenu from '../components/TopMenu';
import EmployeeForm from '../components/employee/EmployeeForm';
import Modal from '../components/modals/Modal';
import ErrorModal from '../components/modals/ErrorModal';
import SuccessModal from '../components/modals/SuccessModal';

function EmployeeList() {
  const dispatch = useDispatch();
  const employees = useSelector(selectEmployees);
  const error = useSelector(selectEmployeeError);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorModal, setErrorModal] = useState({ isOpen: false, message: '' });
  const [successModal, setSuccessModal] = useState({ isOpen: false, message: '' });

  useEffect(() => {
    dispatch({ type: FETCH_EMPLOYEES_START });
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      setErrorModal({ isOpen: true, message: error });
    }
  }, [error]);

  const closeErrorModal = () => {
    setErrorModal({ isOpen: false, message: '' });
  };

  const showSuccessModal = (message) => {
    setSuccessModal({ isOpen: true, message });
    setTimeout(() => setSuccessModal({ isOpen: false, message: '' }), PROGRESS_END);
  };

  const handleDelete = (id) => {
    dispatch({ type: DELETE_EMPLOYEE, payload: id });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <TopMenu />
      <div className="container mx-auto p-6 pt-24">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-teal-700 hover:bg-teal-900 text-white px-6 py-2 mb-6 rounded shadow"
        >
          Add Employee
        </button>
        <EmployeeListComponent employees={employees} onDelete={handleDelete} />
        <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
          <EmployeeForm
            closeModal={() => setIsModalOpen(false)}
            showSuccessModal={showSuccessModal}
          />
        </Modal>
        <ErrorModal
          isOpen={errorModal.isOpen}
          message={errorModal.message}
          onClose={closeErrorModal}
        />
        <SuccessModal
          isOpen={successModal.isOpen}
          message={successModal.message}
          onClose={() => setSuccessModal({ isOpen: false, message: '' })}
        />
      </div>
    </div>
  );
}

export default EmployeeList;
