import { call, put, takeEvery } from 'redux-saga/effects';
import APIConstants from '../../constants/APIConstants';
import {
    fetchEmployeesStart,
    fetchEmployeesSuccess,
    fetchEmployeesFailure,
    addEmployeeSuccess,
    deleteEmployeeSuccess,
} from '../slices/employeeSlice';

// API call helpers
const fetchEmployeesAPI = async () => {
    const response = await fetch(APIConstants.EMPLOYEE_LIST);
    return response.json();
};

const addEmployeeAPI = async (employee) => {
    const response = await fetch(APIConstants.ADD_EMPLOYEE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(employee),
    });
    return response.json();
};

// Sagas
function* fetchEmployeesSaga() {
    try {
        const employees = yield call(fetchEmployeesAPI);
        yield put(fetchEmployeesSuccess(employees));
    } catch (error) {
        yield put(fetchEmployeesFailure(error.message));
    }
}

function* addEmployeeSaga(action) {
    try {
        const newEmployee = yield call(addEmployeeAPI, action.payload);
        yield put(addEmployeeSuccess(newEmployee));

        // Fetch the updated list of employees immediately after adding
        yield put(fetchEmployeesStart());  // Dispatch to re-fetch the employee list
    } catch (error) {
        console.error('Failed to add employee:', error);
    }
}

export function* employeeSaga() {
    yield takeEvery('employee/fetchEmployeesStart', fetchEmployeesSaga);
    yield takeEvery('employee/addEmployee', addEmployeeSaga);
    yield takeEvery('employee/deleteEmployee', function* (action) {
        try {
            // yield call(deleteEmployeeAPI, action.payload);
            yield put(deleteEmployeeSuccess(action.payload));

            // Fetch updated list after deletion
            yield put(fetchEmployeesStart());
        } catch (error) {
            console.error('Failed to delete employee:', error);
        }
    });
}
