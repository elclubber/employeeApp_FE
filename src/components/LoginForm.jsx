import PropTypes from 'prop-types';
import logo from '../assets/logo-novity-login.png';

const LoginForm = ({ credentials, onChange, onSubmit, error }) => {
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
          onChange={(e) => onChange('username', e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 border rounded bg-gray-700 text-white"
          value={credentials.password}
          onChange={(e) => onChange('password', e.target.value)}
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
