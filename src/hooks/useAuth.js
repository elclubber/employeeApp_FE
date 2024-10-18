import { useDispatch, useSelector } from 'react-redux';
import { logoutSuccess } from '../store/slices/authSlice';

const useAuth = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(logoutSuccess());  // Dispatch logoutSuccess

  return { isAuthenticated, handleLogout };
};

export default useAuth;
