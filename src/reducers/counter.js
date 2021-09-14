const counter = (state = 0, action) => {
  switch (action.type) {
    case "INC":
      state = state + 1;
      break;
    case "DEC":
      state = state - 1;
      break;
    default:
      return state;
  }
  return state;
};
export default counter;
