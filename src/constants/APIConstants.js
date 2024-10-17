const API_URL = import.meta.env.VITE_API_URL;

const APIConstants = {
    LOGIN: `${API_URL}/auth/login`,
    EMPLOYEE_LIST: `${API_URL}/api/employeeList`,
    ADD_EMPLOYEE: `${API_URL}/api/addEmployee`,
    DELETE_EMPLOYEE: `${API_URL}/api/deleteEmployee`,
    UPDATE_EMPLOYEE: `${API_URL}/api/updateEmployee`,
};

export default APIConstants;
