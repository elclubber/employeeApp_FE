export const EMPLOYEE_FORM_FIELDS = [
    { type: 'text', placeholder: 'Name', key: 'name', required: true },
    { type: 'email', placeholder: 'Email', key: 'email', required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
    { type: 'text', placeholder: 'Position', key: 'position', required: true },
    { type: 'number', placeholder: 'Age', key: 'age', required: true, min: 18, max: 65 },
    { type: 'text', placeholder: 'Phone Number', key: 'phone', required: true, pattern: /^\d{8,15}$/ },
    { type: 'text', placeholder: 'Address', key: 'address', required: true },
    { type: 'text', placeholder: 'Department', key: 'department' },
    { type: 'date', placeholder: 'Joining Date', key: 'joiningDate', required: true },
    { type: 'number', placeholder: 'Salary', key: 'salary', required: true, min: 0 },
    { type: 'select', placeholder: 'Marital Status', key: 'maritalStatus', options: ['Single', 'Married', 'Divorced', 'Widowed'], required: true },
    { type: 'select', placeholder: 'Employee Type', key: 'employeeType', options: ['Full-Time', 'Part-Time', 'Intern', 'Contractor'], required: true },
    { type: 'file', placeholder: 'Employee Image', key: 'image', required: false }
];
