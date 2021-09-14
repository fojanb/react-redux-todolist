const inputReducer = (state = "", action) => {
  if (action.type === "ADD_ITEM") {
    state = action.DATA;
  }
  else {
    state = "";
  }
  return state;
};
export default inputReducer;
