import { all } from 'redux-saga/effects';
import { authSaga } from './authSagas';
import { employeeSaga } from './employeeSaga';

export default function* rootSaga() {
    yield all([
        authSaga(),  // Include the auth saga
        employeeSaga(),  // Include the employee saga
    ]);
}
