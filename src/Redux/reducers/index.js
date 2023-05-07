import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import UpdateProfileReducer from "./UpdateProfileReducer";
import saveWalletAddressReducer from "./saveWalletAddressReducer";
import createNFTReducer from "./createNFTReducer";
import createCollectionReducer from "./createCollectionReducer";
import dashUserDataReducer from "./dashUserDataReducer";
import getAllCollectionReducer from "./getAllCollectionReducer";
import singleCollectionReducer from "./singleCollectionReducer";
import collectionByAddressReducer from "./collectionByAddressReducer";
import deleteCollectionReducer from "./deleteCollectionReducer";
import getAllCategoriesReducer from "./getAllCategoriesReducer";
import updateCollectionReducer from "./updateCollectionReducer";
import nftByCollectionIdReducer from "./nftByCollectionIdReducer";
import saveChainIdReducer from "./saveChainIdReducer";
import getSingleNFTReducer from "./getSingleNFTReducer";
import phpAPIReducer from "./phpAPIReducer";
import putNftOnSaleReducer from "./putNftOnSaleReducer";
import transferNFTReducer from "./transferNFTReducer";
import nftOnSellReducer from "./nftOnSellReducer";
import myNftOnSellReducer from "./myNftOnSellReducer";
import cancelListingReducer from "./cancelListingReducer";
import finestNftReducer from "./finestNftReducer";

const rootReducer = combineReducers({
  loginReducer,
  UpdateProfileReducer,
  saveWalletAddressReducer,
  dashUserDataReducer,
  createNFTReducer,
  createCollectionReducer,
  getAllCollectionReducer,
  singleCollectionReducer,
  collectionByAddressReducer,
  deleteCollectionReducer,
  getAllCategoriesReducer,
  updateCollectionReducer,
  nftByCollectionIdReducer,
  saveChainIdReducer,
  getSingleNFTReducer,
  phpAPIReducer,
  putNftOnSaleReducer,
  transferNFTReducer,
  nftOnSellReducer,
  myNftOnSellReducer,
  cancelListingReducer,
  finestNftReducer,
});

export default rootReducer;
