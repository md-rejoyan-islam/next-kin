// new subscriber

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import ApiURL from "../api/Api";


export const addSubscriber = createAsyncThunk(
  "subscriber/addSubscriber",
  async (data) => {
    try {
      const response = await axios.post(`${ApiURL}/api/v1/subscribers`, data, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error.message);
    }
  }
);
