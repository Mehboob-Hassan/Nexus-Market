import { ethers } from "ethers";
import { uploadIMGToPinata, uploadJSONTOPinata } from "./PinataAPI";
import { getSigner, NexusTokenContract, getChainID } from "./use-Instances";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNftAction } from "../Redux/actions";
import { useNavigate } from "react-router-dom";
// // // // // // // // // / // // // // //
//
//
//       MINT NFT FUNCTION
//
//
// // // // // // // // // / // / // // //

// this is test functions
const MintNFTController = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const [tokenID, setTokenID] = useState();

  const mintNFT = async (
    file,
    name,
    desc,
    externalLink,
    royality,
    CollectionID,
    setLoading
  ) => {
    try {
      var NexusTokenContractInstance = await NexusTokenContract();
      var signer = await getSigner();
      var chainID = await getChainID();
      console.log("this is chainID", chainID);
      var userAddr = signer._address;
      var tokenAddress = localStorage.getItem("tokenAddress");
      if (userAddr == null) {
        userAddr = localStorage.getItem("wltAddr");
      }
      console.log("this is signer", signer);

      var result = await uploadIMGToPinata(file);
      console.log("this is result while uplaod image", result);
      var royality = parseInt(royality) * 100;

      if (result.success == true) {
        var imgURL = result.imgURL;
        var jsonUploaded = await uploadJSONTOPinata(
          imgURL,
          name,
          desc,
          externalLink
        );
        console.log("this is result of jsonUploaded", jsonUploaded);
        console.log(
          "this is result of NexusTokenContractInstance",
          NexusTokenContractInstance
        );
        // if token URI Created
        if (jsonUploaded.success == true) {
          var tokenURI = jsonUploaded.tokenURI;

          var tx = await NexusTokenContractInstance.createItem(
            tokenURI,
            royality.toString()
          );

          await NexusTokenContractInstance.on(
            "MarketItemCreated",
            (tokenId, sender, timestamp) => {
              var info = {
                tokenId,
                sender,
                timestamp,
              };

              var tokenID = info.tokenId.toString();

              let formDataNFT = {
                name: name,
                description: desc,
                externalLink: externalLink,
                tokenAddress: tokenAddress,
                address: userAddr,
                tokenId: tokenID,
                CollectionID: CollectionID,
                tokenUri: tokenURI,
                chainId: chainID,
                royality: parseInt(royality) * 100,
                image: imgURL,
                fileType: file?.type,
              };

              setTimeout(() => {
                dispatch(createNftAction(formDataNFT));
                setTimeout(() => {
                  setLoading(false);
                  navigate("/profile");
                }, 500);
              }, 1000);
            }
          );
        }
      }
    } catch (err) {
      setLoading(false);
      return { success: false };
    }
  };

  return { mintNFT };
};

export { MintNFTController };
