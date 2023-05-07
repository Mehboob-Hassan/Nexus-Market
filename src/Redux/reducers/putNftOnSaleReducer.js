const putNftOnSaleReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "PutNFTonSale":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default putNftOnSaleReducer;
