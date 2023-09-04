// create auth slice

import { createSlice } from "@reduxjs/toolkit";
import { getAllAdvisors } from "./advisorApiSlice";

const advisorsSlice = createSlice({
  name: "advisors",
  initialState: {
    // advisors: localStorage.getItem("advisors")
    //   ? JSON.parse(localStorage.getItem("advisors"))
    //   : [],
    advisors:  [],

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
      .addCase(getAllAdvisors.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getAllAdvisors.fulfilled, (state, action) => {
        state.advisors = action.payload.data;
        // localStorage.setItem("advisors", JSON.stringify(action.payload.data));
      });
  },
});

// selectors
export const getAdvisorsData = (state) => state.advisors;

// actions
export const { setMessageEmpty } = advisorsSlice.actions;
// exports
export default advisorsSlice.reducer;
