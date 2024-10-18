import { call, put, takeEvery } from 'redux-saga/effects';
import APIConstants from '../constants/APIConstants';
import {
    fetchEmployeesStart,
    fetchEmployeesSuccess,
    fetchEmployeesFailure,
    addEmployeeSuccess,
    deleteEmployeeSuccess,
} from './employeeSlice';

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

const deleteEmployeeAPI = async (id) => {
    await fetch(`${APIConstants.DELETE_EMPLOYEE}/${id}`, {
        method: 'DELETE',
    });
};

// Sagas
function* fetchEmployeesSaga() {
    try {
        yield put(fetchEmployeesStart());
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
    } catch (error) {
        console.error('Failed to add employee:', error);
    }
}

function* deleteEmployeeSaga(action) {
    try {
        yield call(deleteEmployeeAPI, action.payload);
        yield put(deleteEmployeeSuccess(action.payload));
    } catch (error) {
        console.error('Failed to delete employee:', error);
    }
}

export default function* rootSaga() {
    yield takeEvery('employee/fetchEmployeesStart', fetchEmployeesSaga);
    yield takeEvery('employee/addEmployee', addEmployeeSaga);
    yield takeEvery('employee/deleteEmployee', deleteEmployeeSaga);
}
