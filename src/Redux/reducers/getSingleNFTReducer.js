const getSingleNFTReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "GetSingleNFT":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default getSingleNFTReducer;
