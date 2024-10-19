import { createSlice } from '@reduxjs/toolkit';

const employeeSlice = createSlice({
    name: 'employee',
    initialState: {
        employees: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        getEmployeesStart: (state) => {
            state.isLoading = true;
        },
        fetchEmployeesSuccess: (state, action) => {
            state.employees = action.payload;
            state.isLoading = false;
        },
        fetchEmployeesFailure: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        addEmployeeStart: (state) => {
            state.isLoading = true;
        },
        addEmployeeSuccess: (state, action) => {
            state.employees.push(action.payload);
            state.isLoading = false;
        },
        deleteEmployeeStart: (state) => {
            state.isLoading = true;
        },
        deleteEmployeeSuccess: (state, action) => {
            state.employees = state.employees.filter((emp) => emp.id !== action.payload);
            state.isLoading = false;
        },
    },
});

export const {
    getEmployeesStart,
    fetchEmployeesSuccess,
    fetchEmployeesFailure,
    addEmployeeStart,
    addEmployeeSuccess,
    deleteEmployeeStart,
    deleteEmployeeSuccess,
} = employeeSlice.actions;

export default employeeSlice.reducer;
