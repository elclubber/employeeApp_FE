// Selector to get employees from the Redux state
export const selectEmployees = (state) => state.employee.employees;

// Selector to get loading state
export const selectEmployeeLoading = (state) => state.employee.loading;

// Selector to get error state
export const selectEmployeeError = (state) => state.employee.error;
