// Helper function to format employee data
export const formatEmployees = (employees) => {
    return employees.map((employee) => ({
        ...employee,
        age: Number(employee.age),
    }));
};
