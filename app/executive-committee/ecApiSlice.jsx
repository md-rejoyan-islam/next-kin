import ApiURL from "@/components/api/Api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// get all executive committee 
export const getAllEC = createAsyncThunk("ecs/getAllEC", async () => {
  try {
    const response = await axios.get(
      `${ApiURL}/api/v1/ec`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error.message);
  }
});

// single executive committee 
export const getSingleEC = createAsyncThunk("ecs/getSingleEC", async (id) => {
    try {
        const response = await axios.get(
        `${ApiURL}/api/v1/ec/${id}`,
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
