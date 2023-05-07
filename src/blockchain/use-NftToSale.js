import React from "react";
import { useSate, useEffect } from "react";
import { ethers } from "ethers";
import { getSigner, NexusTokenContract, getChainID } from "./use-Instances";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TransferNftAction } from "../Redux/actions";
import { cancelListingAction } from "../Redux/actions";
// // // // // // // // // // // // // /
//
//
//  send nft to Sale
//
//
// // // // // // // // // // // // // /
const sendNftTOSale = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const nftToSale = async (price, tokenID) => {
    try {
      var tokenInstance = await NexusTokenContract();

      console.log("this is nft Price", price);
      console.log("this is nft tokenID", tokenID);
      console.log("this is nft tokenInstance", tokenInstance);

      const EtherToWei = ethers.utils.parseUnits(price, "ether").toString();
      console.log("this is price Ether ToWei", EtherToWei);
      tokenInstance.listItem(tokenID, EtherToWei);

      return { success: true };
    } catch (err) {
      return { success: false };
    }
  };

  const transferNFT = async (tokenID, newOwner, tokenAddress) => {
    try {
      console.log("tokenID", tokenID);
      var from = await getSigner();
      from = from._address;
      console.log("fromAddr", from);
      console.log("To", newOwner);
      console.log("tokenID", tokenID);

      var tokenInstance = await NexusTokenContract();

      tokenInstance.transferNFT(newOwner, tokenID);

      var newOwner007 = newOwner;
      await tokenInstance.on(
        "NftTransfered",
        (from, newOwner, tokenId, timestamp) => {
          var info = {
            from,
            newOwner,
            tokenId,
            timestamp,
          };

          // Save Data to dataBase
          dispatch(TransferNftAction(tokenID, newOwner007, tokenAddress));
          setTimeout(() => {
            console.log("its Navigated");
            navigate("/MyCollections");
          }, 2000);
        }
      );

      return { success: true, msg: "token Transfered Successfully" };
    } catch (err) {
      return { success: false };
    }
  };

  // handle cancel Listing
  const cancelListing = async (tokenID, tokenAddress) => {
    try {
      console.log("this is tokenID", tokenID);
      var tokenInstance = await NexusTokenContract();
      tokenInstance.cancel(tokenID);
      // event EventCanceled(uint256 indexed tokenId, address indexed seller);
      await tokenInstance.on("EventCanceled", (tokenId, seller) => {
        var info = {
          tokenId,
          seller,
        };

        // Save Data to dataBase
        dispatch(cancelListingAction(tokenID, tokenAddress));
      });
    } catch (err) {
      return { success: false };
    }
  };

  return { nftToSale, transferNFT, cancelListing };
};

export { sendNftTOSale };
