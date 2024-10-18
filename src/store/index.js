import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import employeeReducer from './slices/employeeSlice';
import rootSaga from './sagas/rootSaga';  // Import root saga

// Initialize saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure Redux store with reducers and middleware
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
