import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    // Redirect to login if the user is not authenticated
    return <Navigate to="/" />;
  }

  // Render the child components if authenticated
  return children;
};

export default ProtectedRoute;
