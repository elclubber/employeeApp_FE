import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import logo from '../assets/logo-novity-login.png';

const LoginForm = ({ credentials, onChange, onSubmit, error }) => {
  const usernameRef = useRef(null); // Reference to focus the username input on load

  useEffect(() => {
    usernameRef.current?.focus(); // Focus on the username input on component mount
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSubmit(); // Trigger onSubmit when Enter is pressed
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 space-y-6">
      <img src={logo} alt="Logo" className="h-24 mb-4" />
      <div className="w-full max-w-sm bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-white mb-6">Login test</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <input
          ref={usernameRef} // Focus input on mount
          type="text"
          placeholder="Username"
          className="w-full p-3 mb-4 border rounded bg-gray-700 text-white"
          value={credentials.username}
          onChange={(e) => onChange('username', e.target.value)}
          onKeyDown={handleKeyDown} // Handle Enter key for username input
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 border rounded bg-gray-700 text-white"
          value={credentials.password}
          onChange={(e) => onChange('password', e.target.value)}
          onKeyDown={handleKeyDown} // Handle Enter key for password input
        />
        <button
          onClick={onSubmit}
          className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  credentials: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default LoginForm;
