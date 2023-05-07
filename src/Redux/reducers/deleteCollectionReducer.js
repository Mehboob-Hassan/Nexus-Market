const deleteCollectionReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "DeleteCollection":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default deleteCollectionReducer;
