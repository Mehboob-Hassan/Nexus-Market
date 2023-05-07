const saveWalletAddressReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "SaveWallet":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default saveWalletAddressReducer;
