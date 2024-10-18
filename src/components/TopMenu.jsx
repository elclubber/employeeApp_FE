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
        <nav className="bg-cyan-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">Welcome, {username || 'User'}!</h1>
          <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded">
            Logout
          </button>
        </div>
      </nav>
  );
};

export default TopMenu;
