import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import EmployeeList from './pages/EmployeeList';
import ProtectedRoute from './components/ProtectedRoute';
import useAuth from './hooks/useAuth';
import { ROUTE_PATHS } from './constants/AppConstants';

const RouterComponent = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path={ROUTE_PATHS.HOME} element={<LoginPage />} />
      <Route
        path={ROUTE_PATHS.EMPLOYEE_LIST}
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <EmployeeList />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to={ROUTE_PATHS.HOME} />} />
    </Routes>
  );
};

export default RouterComponent;
