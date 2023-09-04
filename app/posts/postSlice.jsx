// create auth slice

import { createSlice } from "@reduxjs/toolkit";
import { commentOnBlog, getAllBlogs, getSingleBlog } from "./postsApiSlice";

const blogsSlice = createSlice({
  name: "blogs",
  initialState: {
    // blogs: localStorage.getItem("blogs")
    //   ? JSON.parse(localStorage.getItem("blogs"))
    //   : [],
    blogs: [],

    error: null,
    message: null,

    // blog: localStorage.getItem("blog")
    //   ? JSON.parse(localStorage.getItem("blog"))
    //   : null,
    // pagination: localStorage.getItem("blogs.pagination")
    //   ? JSON.parse(localStorage.getItem("blogs.pagination"))
    //   : null,
    blog: null,
    pagination: null,
  },
  reducers: {
    setMessageEmpty: (state) => {
      state.message = null;
      state.error = null;
    },
    setBlogEmpty:(state)=>{
      state.blog = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllBlogs.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getAllBlogs.fulfilled, (state, action) => {
        state.blogs = action.payload.data;
        state.pagination = action.payload.pagination;
        localStorage.setItem("blogs", JSON.stringify(action.payload.data));
        localStorage.setItem(
          "blogs.pagination",
          JSON.stringify(action.payload.pagination)
        );
      })

      // get single  blog
      .addCase(getSingleBlog.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getSingleBlog.fulfilled, (state, action) => {
        state.blog = action.payload.data;
        localStorage.setItem("blog", JSON.stringify(action.payload.data));
      })

      // comment on blog
      .addCase(commentOnBlog.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(commentOnBlog.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.blog = action.payload.data;
        localStorage.setItem("blog", JSON.stringify(action.payload.data));
      });
  },
});

// selectors
export const getBlogsData = (state) => state.advisors;

// actions
export const { setMessageEmpty } = blogsSlice.actions;
export const { setBlogEmpty } = blogsSlice.actions;
// exports
export default blogsSlice.reducer;
