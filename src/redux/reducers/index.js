import { combineReducers } from "redux";
import users from "./userReducer";
import banks from "./bankReducer";
import accounts from "./accountReducer";

export default combineReducers({
  users,
  banks,
  accounts
});