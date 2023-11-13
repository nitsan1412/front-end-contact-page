import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import userReducer from "./features/userSlice";
// import backgroundReducer from "../features/backgroundSlice";
// import kidsReducer from "../features/kidsSlice";
// import trachersReducer from "../features/trachersSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    // background: backgroundReducer,
    // kids: kidsReducer,
    // trachers: trachersReducer,
  },
  middleware: [thunk],  
});
