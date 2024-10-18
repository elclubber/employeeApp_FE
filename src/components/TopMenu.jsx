import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import APIConstants from '../constants/APIConstants';

const TopMenu = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  // Retrieve username from localStorage or session state
  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch(APIConstants.LOGOUT, {
        method: 'POST',
        credentials: 'include',
      });

      if (response.ok) {
        // Clear localStorage and redirect to login
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('username');
        navigate('/');
      }
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  return (
    <div className="flex justify-between items-center p-4 bg-blue-600 text-white">
      <div className="text-xl">Welcome, {username || 'User'}!</div>
      <button
        onClick={handleLogout}
        className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
};

export default TopMenu;
