import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ROUTE_PATHS } from '../constants/AppConstants';

const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to={ROUTE_PATHS.HOME} />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
