import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import EmployeeList from './pages/EmployeeList';
import ProtectedRoute from './components/ProtectedRoute';
import useAuth from './hooks/useAuth';

const RouterComponent = () => {
  const isAuthenticated = useAuth();  // Check if the user is authenticated

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/employee-list"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <EmployeeList />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />  {/* Handle unknown routes */}
    </Routes>
  );
};

export default RouterComponent;
