

// import authReducer from "../features/auth/authSlice";
// import advisorsReducer from "../features/advisors/advisorSlice";
// import programsReducer from "../features/programs/programSlice";
// import blogsReducer from "../features/blogs/blogSlice";
// import ecsReducer from "../features/ec/ecSlice";
// import slidersReducer from "../features/slider/sliderSlice";
// import subscriberReducer from "../features/subscriber/subscriberSlice";
// import organizationsReducer from "../features/organizationForm/orgSlice";

import { configureStore } from "@reduxjs/toolkit";
import advisorsReducer from "/app/advisors/advisorSlice";
import ecsReducer from "/app/executive-committee/ecSlice.jsx";
import programsReducer from "/app/programs/programSlice.jsx";
import blogsReducer from "/app/posts/postSlice.jsx";
import slidersReducer from '/components/slider/sliderSlice.jsx'
import subscriberReducer from '/components/subscriber/subscriberSlice.jsx'
import authReducer from "/app/login/authRedux/authSlice.jsx";

const store = configureStore({
  reducer: {
    auth: authReducer,
    advisors: advisorsReducer,
    programs: programsReducer,
    blogs : blogsReducer,
    ecs : ecsReducer,
    sliders : slidersReducer,
    subscriber : subscriberReducer,
    // organization : organizationsReducer,
    // user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}),
  devTools: true,
});

export default store;
