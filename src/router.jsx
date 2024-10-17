// src/router.jsx
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import EmployeeForm from './pages/EmployeeForm';
import EmployeeList from './pages/EmployeeList';

const RouterComponent = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/add-employee" element={<EmployeeForm />} />
    <Route path="/employee-list" element={<EmployeeList />} />
    <Route path="*" element={<Navigate to="/" />} /> {/* Handle unknown routes */}
  </Routes>
);

export default RouterComponent;
