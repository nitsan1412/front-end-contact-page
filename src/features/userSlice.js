import { createSlice } from "@reduxjs/toolkit";
import fetchData from "../services/api";

const initialState = {
  userInfo: {},
  jwt: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      const { user } = action.payload;
      state.userInfo = user;
      if (action.payload.token) {
        localStorage.setItem("jwt", action.payload.token);
        state.jwt = action.payload.token;
      } else {
        state.jwt = localStorage.getItem("jwt");
      }
    },
    logout: (state) => {
      localStorage.removeItem("jwt");
      state.jwt = "";
      state.userInfo = {};
    },
  },
});

export const { logout, loginSuccess } = userSlice.actions;

export const login = (data) => async (dispatch) => {
  try {
    const res = await fetchData("/auth/login", "post", null, data);
    dispatch(loginSuccess(res));
  } catch (error) {
    console.error("Error login:", error);
  }
};

export const loginWithJwt = (jwt) => async (dispatch) => {
  try {
    const res = await fetchData("/auth/getUserInfo", "get", jwt);
    if (res.success) {
      dispatch(loginSuccess(res));
    } else dispatch(logout());
  } catch (error) {
    console.error("Error login:", error);
  }
};
export const signup = (data) => async (dispatch) => {
  try {
    const res = await fetchData("/auth", "post", null, data);
    dispatch(loginSuccess(res));
  } catch (error) {
    console.error("Error login:", error);
  }
};

export default userSlice.reducer;
