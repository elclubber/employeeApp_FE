import { useSelector } from 'react-redux';
import LogoutButton from './LogoutButton';
import logo from '../assets/nov.png';

const TopMenu = () => {
  const username = useSelector((state) => state.auth.username);
  return (
<nav className="bg-cyan-800 p-4 fixed w-full">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" />
          <h1 className="text-white text-2xl font-bold capitalize">
            {username || 'User'}
          </h1>
        </div>
        <LogoutButton className="ml-4" />
      </div>
    </nav>
  );
};
export default TopMenu;
