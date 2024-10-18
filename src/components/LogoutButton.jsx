import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { selectIsAuthenticated } from '../store/selectors/authSelector'; // Import selector

const LogoutButton = ({ className }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectIsAuthenticated); // Use selector

  const handleLogout = () => {
    dispatch({ type: 'auth/logout' }); // Dispatch logout action
  };

  // Navigate to login page if the user is logged out
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/'); // Navigate to the login page
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
