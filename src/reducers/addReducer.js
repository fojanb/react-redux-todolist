const addReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      state = state + 1;
      break;
    case "DELETE_ITEM":
      state = state - 1;
      break;
    default:
      return state;
  }
  return state;
};
export default addReducer;
