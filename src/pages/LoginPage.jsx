import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import APIConstants from '../constants/APIConstants';

function LoginPage() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch(APIConstants.LOGIN, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
        credentials: 'include',  // Include cookies in the request
      });

      if (!response.ok) throw new Error('Invalid credentials');
      
      // Save the authentication status in localStorage
      localStorage.setItem('isAuthenticated', JSON.stringify(true));
      
      navigate('/employee-list');  // Redirect after login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-center text-2xl mb-4">Login</h1>
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border mb-2"
          value={credentials.username}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border mb-2"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        />
        <button onClick={handleLogin} className="w-full bg-blue-500 text-white py-2">
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
