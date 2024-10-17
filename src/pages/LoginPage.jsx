import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = () => {
    if (credentials.username && credentials.password) {
      navigate('/employee-list');
    } else {
      alert('Please enter valid credentials');
    }
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-center text-2xl mb-4">Login</h1>
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
