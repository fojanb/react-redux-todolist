import addDeleteReducer from "./addDeleteReducer";
import inputReducer from "./inputReducer";
import { combineReducers } from "redux";
const allReducers = combineReducers({
  state1: addDeleteReducer,
  state2 : inputReducer,
});
export default allReducers;