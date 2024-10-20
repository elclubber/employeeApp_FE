import { call, put, takeEvery } from 'redux-saga/effects';
import {
  FETCH_EMPLOYEES_START,
  ADD_EMPLOYEE,
  DELETE_EMPLOYEE,
} from '../../constants/ActionTypesConstants';
import {
  getEmployeesStart,
  fetchEmployeesSuccess,
  fetchEmployeesFailure,
  addEmployeeStart,
  addEmployeeSuccess,
  deleteEmployeeStart,
  deleteEmployeeSuccess,
} from '../slices/employeeSlice';
import {
  fetchEmployeesAPI,
  addEmployeeAPI,
  deleteEmployeeAPI,
} from '../../helpers/apiHelpers';

import { formatEmployees } from '../../helpers/dataFormatterHelper';

// Fetch Employees Saga
function* fetchEmployeesSaga() {
  try {
    yield put(getEmployeesStart());
    const employees = yield call(fetchEmployeesAPI);
    const formattedEmployees = formatEmployees(employees);
    yield put(fetchEmployeesSuccess(formattedEmployees));
  } catch (error) {
    yield put(fetchEmployeesFailure(error.message));
  }
}

// Add Employee Saga
function* addEmployeeSaga(action) {
  try {
    yield put(addEmployeeStart());
    const newEmployee = yield call(addEmployeeAPI, action.payload);
    yield put(addEmployeeSuccess(newEmployee));
    yield put({ type: FETCH_EMPLOYEES_START });
  } catch (error) {
    console.error('Failed to add employee:', error);
  }
}

// Delete Employee Saga
function* deleteEmployeeSaga(action) {
  try {
    yield put(deleteEmployeeStart());
    yield call(deleteEmployeeAPI, action.payload);
    yield put(deleteEmployeeSuccess(action.payload));
    yield put({ type: FETCH_EMPLOYEES_START });  // Re-fetch employees
  } catch (error) {
    console.error('Failed to delete employee:', error);
  }
}

// Employee Saga Watchers
export function* employeeSaga() {
  yield takeEvery(FETCH_EMPLOYEES_START, fetchEmployeesSaga);
  yield takeEvery(ADD_EMPLOYEE, addEmployeeSaga);
  yield takeEvery(DELETE_EMPLOYEE, deleteEmployeeSaga);
}
