import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/features/userSlice";
// import backgroundReducer from "./store/features/backgroundSlice";
// import kidsReducer from "./store/features/kidsSlice";
// import trachersReducer from "./store/features/trachersSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    // background: backgroundReducer,
    // kids: kidsReducer,
    // trachers: trachersReducer,
  },
});
