// register user

import ApiURL from "@/components/api/Api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userRegister = createAsyncThunk(
  "auth/userRegister",
  async (data) => {
    try {
      const response = await axios.post(
        `${ApiURL}/api/v1/auth/register`,
        data,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error.message);
    }
  }
);

// login user
export const userLogin = createAsyncThunk("auth/userLogin", async (data) => {
  const { router } = data;
  try {
    const response = await axios.post(
      `${ApiURL}/api/v1/auth/login`,
      { ...data.data },
      {
        withCredentials: true,
      }
    );
    setTimeout(() => {
      router.push('/profile')
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error.message);
    
  }
});

// logout  user
export const userLogout = createAsyncThunk("auth/userLogout", async () => {
  try {
    const response = await axios.post(
      `${ApiURL}/api/v1/auth/logout`,
      {},
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error.message);
  }
});

// logged in user
export const loggedInUser = createAsyncThunk("auth/loggedInUser", async () => {
  try {
    const response = await axios.get(`${ApiURL}/api/v1/auth/me`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error.message);
  }
});

export const updateUserData = createAsyncThunk(
  "auth/updateUserData",
  async (data) => {
    try {
      const response = await axios.patch(
        `${ApiURL}/api/v1/users/${data.id}`,
        data.data,
        {
          withCredentials: true,
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error.message);
    }
  }
);

// update user photo
export const updateUserPhoto = createAsyncThunk(
  "auth/updateUserPhoto",
  async (data) => {
    const { userId } = Object.fromEntries(data);
    try {
      const response = await axios.patch(
        `${ApiURL}/api/v1/users/${userId}`,
        data,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error.message);
    }
  }
);

// update user password
export const updateUserPassword = createAsyncThunk(
  "auth/updateUserPassword",
  async (data) => {
    try {
      const response = await axios.patch(
        `${ApiURL}/api/v1/users/password-update`,
        data,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error.message);
    }
  }
);

// send account active code
export const sendActiveCode = createAsyncThunk(
  "auth/sendActiveCode",
  async (data) => {
    try {
      const response = await axios.post(
        `${ApiURL}/api/v1/auth/resend-active-code`,
        data,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error.message);
    }
  }
);

//  account activate
export const activeAccount = createAsyncThunk(
  "auth/activeAccount",
  async (data) => {
    try {
      const response = await axios.post(
        `${ApiURL}/api/v1/auth/activate`,
        data,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error.message);
    }
  }
);

// find account
export const findAccount = createAsyncThunk(
  "auth/findAccount",
  async (data) => {
    try {
      const response = await axios.post(
        `${ApiURL}/api/v1/auth/find-account`,
        data,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error.message);
    }
  }
);

// password reset code send
export const passwordResetCodeSend = createAsyncThunk(
  "auth/passwordResetCodeSend",
  async (data) => {
    try {
      const response = await axios.post(
        `${ApiURL}/api/v1/auth/password-reset-code`,
        data,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error.message);
    }
  }
);

// password reset
export const passwordReset = createAsyncThunk(
  "auth/passwordReset",
  async (data) => {
    console.log(data);
    try {
      const response = await axios.post(
        `${ApiURL}/api/v1/auth/password-reset`,
        data,
        {
          withCredentials: true,
        }
      );
 
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error.message);
    }
  }
);
