import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import employeeReducer from './employeeSlice';
import rootSaga from './sagas';

// Initialize saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure the Redux store with employee reducer and saga middleware
const store = configureStore({
    reducer: {
        employee: employeeReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

// Run the root saga
sagaMiddleware.run(rootSaga);

export default store;
