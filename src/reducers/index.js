import counter from "./counter";
import inputReducer from "./inputReducer";
import { combineReducers } from "redux";
const allReducers = combineReducers({
  state1: counter,
  state2 : inputReducer,
});
export default allReducers;