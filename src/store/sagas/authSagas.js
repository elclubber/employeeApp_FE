import { call, put, takeEvery } from 'redux-saga/effects';
import APIConstants from '../../constants/APIConstants';
import { loginSuccess, loginFailure, logoutSuccess } from '../slices/authSlice';

// Helper function to call the login API
const loginAPI = async (credentials) => {
  const response = await fetch(APIConstants.LOGIN, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error('Invalid credentials');
  }
  return response.json();
};

// Saga to handle login
function* handleLogin(action) {
  try {
    const { username } = yield call(loginAPI, action.payload);
    yield put(loginSuccess(username));
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

// Saga to handle logout
function* handleLogout() {
  try {
    yield put(logoutSuccess());
  } catch (error) {
    console.error('Logout failed:', error);
  }
}

// Watcher saga to listen for login and logout actions
export function* authSaga() {
  yield takeEvery('auth/login', handleLogin);
  yield takeEvery('auth/logout', handleLogout);
}
