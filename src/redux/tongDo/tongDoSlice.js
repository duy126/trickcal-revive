import { createSlice } from "@reduxjs/toolkit";

const initialState = { tongDo: [], tongDoChiTiet: [] };

const tongDoSlice = createSlice({
  name: "tongDoSlice",
  initialState,
  reducers: {
    upLoadTongDo: (state, action) => {
      state.tongDo = action.payload;
    },
    upLoadTongDoChiTiet: (state, action) => {
      state.tongDoChiTiet = action.payload;
    },
  },
});

export const { upLoadTongDo, upLoadTongDoChiTiet } = tongDoSlice.actions;

export default tongDoSlice.reducer;
