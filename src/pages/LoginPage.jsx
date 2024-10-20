import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectIsAuthenticated, selectAuthError } from '../store/selectors/authSelector';
import { ROUTE_PATHS } from '../constants/AppConstants';
import { LOGIN } from '../constants/ActionTypesConstants';
import LoginForm from '../components/LoginForm';

function LoginPage() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const error = useSelector(selectAuthError);

  const handleInputChange = (key, value) => {
    setCredentials((prevState) => ({ ...prevState, [key]: value }));
  };

  const handleLogin = () => {
    dispatch({ type: LOGIN, payload: credentials });
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate(ROUTE_PATHS.EMPLOYEE_LIST);
    }
  }, [isAuthenticated, navigate]);

  return (
    <LoginForm
      credentials={credentials}
      onChange={handleInputChange}
      onSubmit={handleLogin}
      error={error}
    />
  );
}

export default LoginPage;
