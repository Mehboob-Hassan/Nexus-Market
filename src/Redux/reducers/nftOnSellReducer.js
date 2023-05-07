const nftOnSellReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "NFtOnSell":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default nftOnSellReducer;
