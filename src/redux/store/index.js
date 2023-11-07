import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favReducer from "../reducers/Fav";
import jobsReducer from "../reducers/jobs";

const singleReducer = combineReducers({
  fav: favReducer,
  jobs: jobsReducer,
});

const store = configureStore({
  reducer: singleReducer,
});

export default store;
