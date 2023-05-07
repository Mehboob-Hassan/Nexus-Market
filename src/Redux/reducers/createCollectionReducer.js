const createCollectionReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "CreateCollection":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default createCollectionReducer;
