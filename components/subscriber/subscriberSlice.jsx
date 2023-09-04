// create auth slice

import { createSlice } from "@reduxjs/toolkit";
import { addSubscriber } from "./subscriberApiSlice";

const subscriberSlice = createSlice({
  name: "subscriber",
  initialState: {
    subscriber: null,
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
      .addCase(addSubscriber.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addSubscriber.fulfilled, (state, action) => {
        state.subscriber = action.payload.data;
        state.message = action.payload.message;
      });
  },
});

// selectors

// actions
export const { setMessageEmpty } = subscriberSlice.actions;
// exports
export default subscriberSlice.reducer;
