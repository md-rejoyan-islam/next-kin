import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import ApiURL from "../../components/apiURL/ApiURL";

// get all programs data
export const getAllPrograms = createAsyncThunk(
  "programs/getAllPrograms",
  async (data) => {
    try {
      const response = await axios.get(
        `${ApiURL}/api/v1/programs?page=${
          data ? data.page : 1
        }`,
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
