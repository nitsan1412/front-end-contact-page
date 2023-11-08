import { createSlice } from "@reduxjs/toolkit";
import fetchData from "../../services/api";

const initialState = {
  user: {},
  jwt: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: async (state, action) => {
      // payload : email, password
      await fetchData("/auth/login", "post", null, action.payload)
        .then((res) => {
          state.jwt = res.token;
          state.user = res.userData;
        })
        .catch((error) => {
          console.error("Error login:", error);
        });
    },
    signup: async (state, action) => {
      // payload : {email, password, userName, }
      await fetchData("/auth/signup", "post", null, action.payload)
        .then(async (res) => {
          if (res.success) {
            state.jwt = res.token;
            state.user = res.userData;
          }
        })
        .catch((error) => {
          console.error("Error sign-in:", error);
          throw error;
        });
    },
    logout: (state) => {
      state.jwt = "";
      state.user = {};
    },
  },
});

export const { logout, signup, login } = userSlice.actions;

export default userSlice.reducer;
