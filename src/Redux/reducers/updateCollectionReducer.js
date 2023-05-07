const updateCollectionReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "UpdateCollection":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default updateCollectionReducer;
