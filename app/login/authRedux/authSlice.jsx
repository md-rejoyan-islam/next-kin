// create auth slice

import { createSlice } from "@reduxjs/toolkit";
import {
  activeAccount,
  findAccount,
  loggedInUser,
  passwordReset,
  passwordResetCodeSend,
  sendActiveCode,
  updateUserData,
  updateUserPassword,
  updateUserPhoto,
  userLogin,
  userLogout,
  userRegister,
} from "./authApiSlice";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    // user: localStorage.getItem("user")
    //   ? JSON.parse(localStorage.getItem("user"))
    //   : null,
    user: null,
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
      // register
      .addCase(userRegister.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.message = action.payload.message;
      })

      // login
      .addCase(userLogin.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.user = action.payload.data;
        state.message = action.payload.message;
        localStorage.setItem("user", JSON.stringify(action.payload.data));
      })

      // logout
      .addCase(userLogout.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(userLogout.fulfilled, (state, action) => {
        state.user = null;
        state.message = action.payload.message;
        localStorage.removeItem("user");
      })

      // logged in user
      .addCase(loggedInUser.rejected, (state) => {
        // state.error = action.error.message;
        state.user = null;
      })
      .addCase(loggedInUser.fulfilled, (state, action) => {
        state.user = action.payload.data;
        localStorage.setItem("user", JSON.stringify(action.payload.data));
        // state.message = action.payload.message;
      })

      // update user data
      .addCase(updateUserData.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updateUserData.fulfilled, (state, action) => {
        state.user = action.payload.data;
        state.message = action.payload.message;
        localStorage.setItem("user", JSON.stringify(action.payload.data));
      })

      // update user photo
      .addCase(updateUserPhoto.rejected, (state) => {
        state.error = "Something went wrong!.";
      })
      .addCase(updateUserPhoto.fulfilled, (state, action) => {
        state.user = action.payload.data;
        state.message = "Photo updated successfully!";
        localStorage.setItem("user", JSON.stringify(action.payload.data));
      })

      // user password update
      .addCase(updateUserPassword.rejected, (state) => {
        state.error = "Something went wrong!.";
      })
      .addCase(updateUserPassword.fulfilled, (state, action) => {
        state.user = action.payload.data;
        state.message = action.payload.message;
      })

      // send activate code
      .addCase(sendActiveCode.rejected, (state) => {
        state.error =
          "Something went wrong to send active code in your email!.";
      })
      .addCase(sendActiveCode.fulfilled, (state, action) => {
        state.message = action.payload.message;
      })

      // active account
      .addCase(activeAccount.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(activeAccount.fulfilled, (state, action) => {
        state.message = action.payload.message;
      })

      // find account
      .addCase(findAccount.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(findAccount.fulfilled, (state) => {
        state.message = "User found!";
      })

      // password reset code send
      .addCase(passwordResetCodeSend.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(passwordResetCodeSend.fulfilled, (state, action) => {
        state.message = action.payload.message;
      })

      // password reset
      .addCase(passwordReset.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(passwordReset.fulfilled, (state, action) => {
        state.message = action.payload.message;
      });
  },
});

// selectors
export const getAuthData = (state) => state.auth;

// actions
export const { setMessageEmpty } = authSlice.actions;
// exports
export default authSlice.reducer;
