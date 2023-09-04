// create auth slice

import { createSlice } from "@reduxjs/toolkit";

import { getAllEC, getSingleEC } from "./ecApiSlice";

const ecSlice = createSlice({
  name: "ecs",
  initialState: {
    ecs: [],
    // ecs: localStorage.getItem("ecs")
    //   ? JSON.parse(localStorage.getItem("ecs"))
    //   : [],

    error: null,
    message: null,
    pagination: null,
    // ec: localStorage.getItem("ec")
    //   ? JSON.parse(localStorage.getItem("ec"))
    //   : null,
    ec:  null,
  },
  reducers: {
    setMessageEmpty: (state) => {
      state.message = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllEC.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getAllEC.fulfilled, (state, action) => {
        state.ecs = action.payload.data;
        state.ec = action.payload.data[0];
        localStorage.setItem("ecs", JSON.stringify(action.payload.data));
        localStorage.setItem("ec", JSON.stringify(action.payload.data[0]));
        state.pagination = action.payload.pagination;
      })

      // get single  blog
      .addCase(getSingleEC.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getSingleEC.fulfilled, (state, action) => {
        state.ec = action.payload.data;
      });
  },
});

// selectors


// actions
export const { setMessageEmpty } = ecSlice.actions;
// exports
export default ecSlice.reducer;
