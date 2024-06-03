import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../Slices/appSlice";
import { apiSlice } from "../Slices/apiSlice";

const store = configureStore({
  reducer: {
    counter: appReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;