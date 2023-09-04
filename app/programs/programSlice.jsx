// create auth slice

import { createSlice } from "@reduxjs/toolkit";
import { getAllPrograms } from "./programsApiSlice";

const programsSlice = createSlice({
  name: "programs",
  initialState: {
    // programs: localStorage.getItem("programs")
    //   ? JSON.parse(localStorage.getItem("programs"))
    //   : [],
    programs: [],

    error: null,
    message: null,
    // pagination: localStorage.getItem("programs.pagination")
    //   ? JSON.parse(localStorage.getItem("programs.pagination"))
    //   : null,
    pagination: null,
  },
  reducers: {
    setMessageEmpty: (state) => {
      state.message = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPrograms.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getAllPrograms.fulfilled, (state, action) => {
        state.programs = action.payload.data;
        state.pagination = action.payload.pagination;
        localStorage.setItem("programs", JSON.stringify(action.payload.data));
        localStorage.setItem(
          "programs.pagination",
          JSON.stringify(action.payload.pagination)
        );
      });
  },
});

// selectors
export const getProgramsData = (state) => state.advisors;

// actions
export const { setMessageEmpty } = programsSlice.actions;
// exports
export default programsSlice.reducer;
