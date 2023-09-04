import ApiURL from "@/components/api/Api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// get all advisors data
export const getAllAdvisors = createAsyncThunk("advisors/getAllAdvisors", async () => {
    try {
        const response = await axios.get(
          `${ApiURL}/api/v1/advisors`
        );
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error.message);
    }
    }
);