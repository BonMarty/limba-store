import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  token: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials(state: AuthState, action: PayloadAction<{ token: string }>) {
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },

    logout(state: AuthState) {
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const authReducer = authSlice.reducer;

export const { setCredentials, logout } = authSlice.actions;

export const selectAuthToken = (state: { auth: AuthState }) => state.auth.token;
export const selectAuthIsAuthenticated = (state: { auth: AuthState }) => state.auth.isAuthenticated;
