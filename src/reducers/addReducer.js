const initialState = {
  item: 0,
};
const addReducer = (state = initialState.item, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      state = state + 1;
      break;
    default:
      console.log("no answer");
  }
  return state;
};
export default addReducer;
