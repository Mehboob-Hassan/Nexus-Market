import React from "react";
import { useSate, useEffect } from "react";
import { ethers } from "ethers";
import { getSigner, NexusTokenContract, getChainID } from "./use-Instances";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Buy Nft functions
const BuyNFT = async () => {
  const buyNow = async () => {
    try {
      const nexusContractInstance = await NexusTokenContract();
    } catch (err) {
      console.log("this is err", err);
    }
  };

  return { buyNow };
};

export { BuyNFT };
