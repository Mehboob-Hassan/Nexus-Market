const collectionByAddressReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "CollectionByAddress":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default collectionByAddressReducer;
