const transferNFTReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "TransferNFT":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default transferNFTReducer;
