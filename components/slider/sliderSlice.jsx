// create auth slice

import { createSlice } from "@reduxjs/toolkit";
import { allSliders } from "./sliderApiSlice";

const slidersSlice = createSlice({
  name: "sliders",
  initialState: {
    // sliders: localStorage.getItem("sliders")
    //   ? JSON.parse(localStorage.getItem("sliders"))
    //   : null,
    sliders: [],

    error: null,
    message: null,
  },
  reducers: {
    setMessageEmpty: (state) => {
      state.message = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(allSliders.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(allSliders.fulfilled, (state, action) => {
        state.sliders = action.payload.data;
        localStorage.setItem("sliders", JSON.stringify(action.payload.data));
      });
  },
});

// selectors

// actions
export const { setMessageEmpty } = slidersSlice.actions;
// exports
export default slidersSlice.reducer;
