import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null,
    error: null,
  },
  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload;
      if (username === "admin" && password === "flavoro123") {
        state.isAuthenticated = true;
        state.user = { name: username };
        state.error = null;
      } else {
        state.isAuthenticated = false;
        state.user = null;
        state.error = "Invalid credentials";
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { login, logout, clearError } = AuthSlice.actions;
export default AuthSlice.reducer;