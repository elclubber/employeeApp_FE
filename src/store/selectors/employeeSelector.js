// Selector to get employees from the Redux state
export const selectEmployees = (state) => state.employee.employees;

// Selector to get loading state
export const selectEmployeeIsLoading = (state) => state.employee.isLoading;

// Selector to get error state
export const selectEmployeeError = (state) => state.employee.error;
