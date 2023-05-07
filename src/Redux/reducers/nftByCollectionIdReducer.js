const nftByCollectionIdReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "NFTbyCollectionID":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default nftByCollectionIdReducer;
