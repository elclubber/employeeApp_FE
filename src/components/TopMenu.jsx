import { useEffect, useState } from 'react';
import LogoutButton from './LogoutButton';  // Import the LogoutButton

const TopMenu = () => {
  const [username, setUsername] = useState('');

  // Retrieve username from localStorage on mount
  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <nav className="bg-cyan-800 fixed w-full p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">
          Welcome, {username || 'User'}!
        </h1>
        <LogoutButton className="ml-4" /> {/* Use the LogoutButton component */}
      </div>
    </nav>
  );
};

export default TopMenu;
