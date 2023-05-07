const UpdateProfileReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "UpdateProfile":
      console.log("PayloadReducerWallet", action.payload);
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default UpdateProfileReducer;
