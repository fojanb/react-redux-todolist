import inputReducer from "./inputReducer";
import { combineReducers } from "redux";
const allReducers = combineReducers({
  state1 : inputReducer,
});
export default allReducers;