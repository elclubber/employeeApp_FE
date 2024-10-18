import { createSlice } from '@reduxjs/toolkit';

// Load initial auth state from localStorage
const loadAuthState = () => {
  const isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated')) || false;
  const username = localStorage.getItem('username') || '';
  return { isAuthenticated, username, error: null };
};

const authSlice = createSlice({
  name: 'auth',
  initialState: loadAuthState(),  // Load state from localStorage
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.username = action.payload;
      state.error = null;

      // Save to localStorage
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('username', action.payload);
    },
    loginFailure: (state, action) => {
      state.isAuthenticated = false;
      state.username = '';
      state.error = action.payload;

      // Clear localStorage on login failure
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('username');
    },
    logoutSuccess: (state) => {
      state.isAuthenticated = false;
      state.username = '';

      // Clear localStorage on logout
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('username');
    },
  },
});

export const { loginSuccess, loginFailure, logoutSuccess } = authSlice.actions;
export default authSlice.reducer;
