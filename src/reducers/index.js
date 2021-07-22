import { combineReducers } from "redux";
import posts from "./posts";
import user from "./userReducer";
export default combineReducers({
  posts,
  user,
});
