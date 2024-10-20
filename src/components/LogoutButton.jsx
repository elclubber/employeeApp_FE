import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { selectIsAuthenticated } from '../store/selectors/authSelector';
import { LOGOUT } from '../constants/ActionTypesConstants';
import { ROUTE_PATHS } from '../constants/AppConstants';

const LogoutButton = ({ className }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const handleLogout = () => {
    dispatch({ type: LOGOUT });
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(ROUTE_PATHS.HOME);
    }
  }, [isAuthenticated, navigate]);

  return (
    <button
      onClick={handleLogout}
      className={`bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-6 rounded-md transition-all duration-300 shadow-md ${className}`}
    >
      Logout
    </button>
  );
};

LogoutButton.propTypes = {
  className: PropTypes.string,
};

export default LogoutButton;
