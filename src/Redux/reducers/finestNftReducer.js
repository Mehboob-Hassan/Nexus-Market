const finestNftReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "FinestNFT":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default finestNftReducer;
