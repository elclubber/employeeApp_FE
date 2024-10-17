import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import EmployeeForm from './pages/EmployeeForm';
import EmployeeList from './pages/EmployeeList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/add-employee" element={<EmployeeForm />} />
      <Route path="/employee-list" element={<EmployeeList />} />
    </Routes>
  );
}

export default App;
