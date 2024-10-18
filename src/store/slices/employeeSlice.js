import { createSlice } from '@reduxjs/toolkit';

const employeeSlice = createSlice({
    name: 'employee',
    initialState: {
        employees: [],
        loading: false,
        error: null,
    },
    reducers: {
        fetchEmployeesStart: (state) => {
            state.loading = true;
        },
        fetchEmployeesSuccess: (state, action) => {
            state.employees = action.payload;
            state.loading = false;
        },
        fetchEmployeesFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        addEmployeeSuccess: (state, action) => {
            state.employees.push(action.payload);
        },
        deleteEmployeeSuccess: (state, action) => {
            state.employees = state.employees.filter((emp) => emp.id !== action.payload);
        },
    },
});

export const {
    fetchEmployeesStart,
    fetchEmployeesSuccess,
    fetchEmployeesFailure,
    addEmployeeSuccess,
    deleteEmployeeSuccess,
} = employeeSlice.actions;

export default employeeSlice.reducer;
