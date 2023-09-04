import ApiURL from "@/components/api/Api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// get all blogs data
export const getAllBlogs = createAsyncThunk(
  "blogs/getAllBlogs",
  async (data) => {
    try {
      const response = await axios.get(
        `${ApiURL}/api/v1/posts?page=${data ? data.page : 1}`,{
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error.message);
    }
  }
);

// get single blog data
export const getSingleBlog = createAsyncThunk(
  "blogs/getSingleBlog",
  async (slug) => {
    try {
      const response = await axios.get(`${ApiURL}/api/v1/posts/${slug}`,{
        withCredentials: true,
      });

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error.message);
    }
  }
);

// comment on a blog
export const commentOnBlog = createAsyncThunk(
  "blogs/commentOnBlog",
  async (value) => {
    try {
      const { id, data } = value;
      const response = await axios.patch(
        `${ApiURL}/api/v1/posts/${id}`,
        { comment: { ...data } },
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
