// Selector to get the authentication status
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;

// Selector to get the username from the state
export const selectUsername = (state) => state.auth.username;

// Selector to get the error message, if any
export const selectAuthError = (state) => state.auth.error;

// Selector to get the loading status
export const selectIsAuthLoading = (state) => state.auth.isLoading;
