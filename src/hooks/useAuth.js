import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../store/slices/authSlice';

const useAuth = () => {
  const isAuthenticated = useSelector((state) => !!state.auth.isAuthenticated);  // Ensure boolean value
  const dispatch = useDispatch();

  const handleLogin = () => dispatch(login());
  const handleLogout = () => dispatch(logout());

  return {
    isAuthenticated,  // Boolean value
    handleLogin,
    handleLogout
  };
};

export default useAuth;
