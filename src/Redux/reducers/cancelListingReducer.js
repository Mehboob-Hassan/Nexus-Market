const cancelListingReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "CancelListing":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default cancelListingReducer;
