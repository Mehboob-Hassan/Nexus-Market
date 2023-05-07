const saveChainIdReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "ChainID":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default saveChainIdReducer;
