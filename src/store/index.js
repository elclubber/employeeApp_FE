import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import employeeReducer from './slices/employeeSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';

// Initialize saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure the Redux store with reducers and middleware
const store = configureStore({
  reducer: {
    auth: authReducer,
    employee: employeeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

// Run sagas
sagaMiddleware.run(rootSaga);

export default store;
