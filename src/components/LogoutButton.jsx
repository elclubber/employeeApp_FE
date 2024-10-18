import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import APIConstants from '../constants/APIConstants';

const LogoutButton = ({ className }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch(APIConstants.LOGOUT, {
        method: 'POST',
        credentials: 'include',
      });

      if (response.ok) {
        // Clear local storage and navigate to login page
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('username');
        navigate('/');
      }
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

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
