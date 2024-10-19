import { createSlice } from '@reduxjs/toolkit';

// Load initial auth state from localStorage
const loadAuthState = () => {
  const isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated')) || false;
  const username = localStorage.getItem('username') || '';
  return { isAuthenticated, username, isLoading: false, error: null };
};

const authSlice = createSlice({
  name: 'auth',
  initialState: loadAuthState(),
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.username = action.payload;
      state.isLoading = false;
      state.error = null;

      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('username', action.payload);
    },
    loginFailure: (state, action) => {
      state.isAuthenticated = false;
      state.username = '';
      state.error = action.payload;
      state.isLoading = false;

      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('username');
    },
    logoutStart: (state) => {
      state.isLoading = true;
    },
    logoutSuccess: (state) => {
      state.isAuthenticated = false;
      state.username = '';
      state.isLoading = false;
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('username');
    },
  },
});

export const { loginSuccess, loginFailure, logoutSuccess, loginStart, logoutStart } = authSlice.actions;
export default authSlice.reducer;
