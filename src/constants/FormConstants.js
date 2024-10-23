import { formatSalary } from '../utils/formUtils';
export const EMPLOYEE_FORM_FIELDS = [
    { type: 'text', placeholder: 'Name', key: 'name', required: true },
    { type: 'email', placeholder: 'Email', key: 'email', required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
    { type: 'text', placeholder: 'Position', key: 'position', required: true },
    { type: 'number', placeholder: 'Age', key: 'age', required: true, min: 18, max: 65 },
    { type: 'text', placeholder: 'Phone Number', key: 'phone', required: true, pattern: /^\d{8,15}$/ },
    { type: 'text', placeholder: 'Address', key: 'address', required: true },
    { type: 'text', placeholder: 'Department', key: 'department', required: true },
    { type: 'number', placeholder: 'Salary', key: 'salary', required: true, min: 0 },
    { type: 'date', placeholder: 'Joining Date', key: 'joiningDate', required: true },
    { type: 'select', placeholder: 'Employee Type', key: 'employeeType', options: ['Full-Time', 'Part-Time', 'Intern', 'Contractor'], required: true },
    {
        type: 'radio',
        placeholder: 'Marital Status',
        key: 'maritalStatus',
        options: ['Single', 'Married', 'Divorced', 'Widowed']
    },
    { type: 'file', placeholder: 'Profil Picture', key: 'image', required: false }
];

export const EMPLOYEE_FIELDS = [
    { label: 'Email', key: 'email' },
    { label: 'Position', key: 'position' },
    { label: 'Age', key: 'age' },
    { label: 'Phone', key: 'phone' },
    { label: 'Department', key: 'department' },
    { label: 'Joining Date', key: 'joiningDate' },
    { label: 'Employee Type', key: 'employeeType' },
    { label: 'Marital Status', key: 'maritalStatus' },
    { label: 'Salary', key: 'salary', format: formatSalary },
];
