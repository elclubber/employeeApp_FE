import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectIsAuthenticated, selectAuthError } from '../store/selectors/authSelector'; 
import logo from '../assets/logo-novity-login.png';

function LoginPage() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const error = useSelector(selectAuthError);

  const handleLogin = () => {
    dispatch({ type: 'auth/login', payload: credentials });
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/employee-list');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 space-y-6">
      <img src={logo} alt="Logo" className="h-24 mb-4" />
      <div className="w-full max-w-sm bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-white mb-6">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 mb-4 border rounded bg-gray-700 text-white"
          value={credentials.username}
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 border rounded bg-gray-700 text-white"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
        <button
          onClick={handleLogin}
          className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
