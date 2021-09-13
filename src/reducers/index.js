import addReducer from "./addReducer";
import { combineReducers } from "redux";
const allReducers = combineReducers({
  state1: addReducer,
});
export default allReducers;