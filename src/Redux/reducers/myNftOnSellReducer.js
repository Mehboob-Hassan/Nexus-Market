const myNftOnSellReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "myNftOnSell":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default myNftOnSellReducer;
