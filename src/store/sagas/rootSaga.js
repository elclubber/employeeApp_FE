import { all } from 'redux-saga/effects';
import { employeeSaga } from './employeeSaga';

// Combine all sagas
export default function* rootSaga() {
    yield all([
        employeeSaga(),
        // Add other sagas here if needed
    ]);
}
