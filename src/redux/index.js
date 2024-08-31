import { configureStore } from "@reduxjs/toolkit";
import tongDoSlice from "./tongDo/tongDoSlice";

export const store = configureStore({
  reducer: { tongDoReducer: tongDoSlice },
});
