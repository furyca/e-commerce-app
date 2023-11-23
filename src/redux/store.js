import { configureStore } from "@reduxjs/toolkit";
import rootSlice from "./rootSlice";

const store = configureStore({
  reducer: {
    rootSlice: rootSlice
  },
});

export default store;
