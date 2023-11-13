import { createSlice } from "@reduxjs/toolkit";
import fetchData from "../services/api";

const initialState = {
  user: {},
  jwt: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      const { token, user } = action.payload;
      state.jwt = token;
      state.userInfo = user;
    },
    logout: (state) => {
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
export const signup = (data) => async (dispatch) => {
  try {
    const res = await fetchData("/auth", "post", null, data);
    dispatch(loginSuccess(res));
  } catch (error) {
    console.error("Error login:", error);
  }
};

export default userSlice.reducer;
