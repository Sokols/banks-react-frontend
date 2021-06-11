import { combineReducers } from "redux";
import users from "./userReducer";
import banks from "./bankReducer";

export default combineReducers({
  users,
  banks
});