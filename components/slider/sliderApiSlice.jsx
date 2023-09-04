// all slider

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import ApiURL from "../api/Api";

export const allSliders = createAsyncThunk(
  "sliders/allSliders",
  async () => {
    try {
      const response = await axios.get(`${ApiURL}/api/v1/sliders`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error.message);
    }
  }
);
