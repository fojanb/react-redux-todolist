import addDeleteReducer from "./addDeleteReducer";
import { combineReducers } from "redux";
const allReducers = combineReducers({
  state1: addDeleteReducer,
});
export default allReducers;