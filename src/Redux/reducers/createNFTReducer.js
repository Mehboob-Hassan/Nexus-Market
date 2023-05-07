const createNFTReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "CreateNFT":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default createNFTReducer;
