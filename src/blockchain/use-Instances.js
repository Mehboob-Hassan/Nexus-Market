import { ethers } from "ethers";
import Web3Modal from "web3modal";

const web3Modal = new Web3Modal({
  cacheProvider: true, // optional
});

let signer = null;
let chainID;
let provider;
let accounts;

const nexusTokenABI = require("./ABIs/NexusToken.json");

// MultiChain Token Addresses
const nexusTokenAddr_BscTestNet =
  process.env.REACT_APP_NEXUSGALAXYADDR_BscTestNet;

const REACT_APP_NEXUSGALAXYADDR_MumBaiTestNet =
  process.env.REACT_APP_NEXUSGALAXYADDR_MumBaiTestNet;

console.log(
  "this is contract address of new Addrss",
  nexusTokenAddr_BscTestNet
);
// // // // // // // // // / // // // // //
//
//
//       Wallet Connect
//
//
// // // // // // // // // / // / // // //

// cooonect wallet
const ConnectWalelt = () => {
  // connect wallet function2
  const connectWltFun2 = async (id) => {
    try {
      let networkData;

      // switch (id) {
      //   //bsctestnet

      //   case 97:
      //     networkData = [
      //       {
      //         chainId: "0x61",

      //         chainName: "BSC TESTNET",
      //         rpcUrls: [
      //           "https://bsc-testnet.nodereal.io/v1/2893a4092a9f4a7fb625ec52c4624586",
      //         ],

      //         nativeCurrency: {
      //           name: "TBNB COIN",

      //           symbol: "TBNB",

      //           decimals: 18,
      //         },

      //         blockExplorerUrls: ["https://testnet.bscscan.com/"],
      //       },
      //     ];

      //     break;

      //   //bscmainet

      //   case 56:
      //     networkData = [
      //       {
      //         chainId: "0x38",

      //         chainName: "BSC MAINET",

      //         // rpcUrls: ["https://bsc-dataseed1.binance.org"],
      //         rpcUrls: [
      //           "https://bsc-mainnet.nodereal.io/v1/2893a4092a9f4a7fb625ec52c4624586",
      //         ],

      //         nativeCurrency: {
      //           name: "BINANCE COIN",

      //           symbol: "BNB",

      //           decimals: 18,
      //         },

      //         blockExplorerUrls: ["https://testnet.bscscan.com/"],
      //       },
      //     ];

      //     break;

      //   // Ethereum Chain
      //   case 1:
      //     networkData = [
      //       {
      //         chainId: "0x1",

      //         chainName: "Ethereum MAINET",

      //         rpcUrls: [
      //           "https://eth-mainnet.nodereal.io/v1/2893a4092a9f4a7fb625ec52c4624586",
      //         ],

      //         nativeCurrency: {
      //           name: "ETH COIN",

      //           symbol: "ETH",

      //           decimals: 18,
      //         },

      //         blockExplorerUrls: ["https://etherscan.io/"],
      //       },
      //     ];

      //     break;

      //   // Ethereum TestNet (Goerli)
      //   case 5:
      //     networkData = [
      //       {
      //         chainId: "0x5",

      //         chainName: "GOERLI",

      //         rpcUrls: [
      //           "https://goerli.infura.io/v3/2da324e55f2b4c24a456b29a06f2bab7",
      //         ],

      //         nativeCurrency: {
      //           name: "Goerli COIN",

      //           symbol: "ETH",

      //           decimals: 18,
      //         },

      //         blockExplorerUrls: ["https://goerli.etherscan.io/"],
      //       },
      //     ];

      //     break;

      //   // Polygon Mainnet
      //   case 137:
      //     networkData = [
      //       {
      //         chainId: "0x89",

      //         chainName: "POLYGON MAINNET",

      //         rpcUrls: [
      //           "https://polygon-mainnet.nodereal.io/v1/2893a4092a9f4a7fb625ec52c4624586",
      //         ],

      //         nativeCurrency: {
      //           name: "MATIC COIN",

      //           symbol: "MATIC",

      //           decimals: 18,
      //         },

      //         blockExplorerUrls: ["https://polygonscan.com"],
      //       },
      //     ];

      //     break;

      //   // POLYGON TESTNET
      //   case 80001:
      //     networkData = [
      //       {
      //         chainId: "0x13881",

      //         chainName: "MUMBAI",

      //         rpcUrls: [
      //           "https://polygon-mumbai.g.alchemy.com/v2/UNe41YGMXsJ-EDY67O30PLGJ30RdBjSD",
      //         ],

      //         nativeCurrency: {
      //           name: "MATIC COIN",

      //           symbol: "MATIC",

      //           decimals: 18,
      //         },

      //         blockExplorerUrls: ["https://polygonscan.com"],
      //       },
      //     ];

      //     break;

      //   default:
      //     break;
      // }

      // // agregar red o cambiar red

      // await window.ethereum.request({
      //   method: "wallet_addEthereumChain",

      //   params: networkData,
      // });
      // provider = new ethers.providers.Web3Provider(window.ethereum);
      // var accounts = await provider.send("eth_requestAccounts");
      // accounts = accounts[0];
      // signer = provider.getSigner();
      // console.log("this is signer", signer);
      // chainID = id;
      // provider = new ethers.providers.Web3Provider(window.ethereum);
      // accounts = await provider.send("eth_requestAccounts", []);
      // accounts = accounts[0];
      // signer = provider.getSigner();
      // console.log("this is signer", signer);

      // const network = await provider.getNetwork();

      // return { success: true, network: network.chainId, accounts };

      const web3Provider = await web3Modal.connect();
      provider = new ethers.providers.Web3Provider(web3Provider);
      var accounts = await provider.listAccounts();
      accounts = accounts[0];
      const network = await provider.getNetwork();
      chainID = network.chainId;
      signer = provider.getSigner(accounts);

      console.log("this account", signer);
      // console.log("this account");

      return { success: true, network: network.chainId, accounts };
    } catch (err) {
      return { success: false };
    }
  };

  return { connectWltFun2 };
};

// // // // // // // // // / // // // // //
//
//
//       Signer function
//
//
// // // // // // // // // / // / // // //

const getSigner = () => {
  return signer;
};
const getChainID = () => {
  return chainID;
};

// // // // // // // // // / // // // // //
//
//
//       DISCONNECT WALLET
//
//
// // // // // // // // // / // / // // //

const disConnectWallet = async () => {
  signer = null;
  provider = null;
};

// // // // // // // // // / // // // // //
//
//
//       NEXUS CONTRACT
//
//
// // // // // // // // // / // / // // //
const NexusTokenContract = async () => {
  try {
    var tokenAddress = null;

    console.log("nexus token nexusTokenInstance", signer);
    const nexusTokenInstance = new ethers.Contract(
      nexusTokenAddr_BscTestNet,
      nexusTokenABI,
      signer
    );

    console.log("nexus token nexusTokenInstance", nexusTokenInstance);
    tokenAddress = nexusTokenInstance.address;

    localStorage.setItem("tokenAddress", tokenAddress);
    return nexusTokenInstance;
  } catch (err) {
    console.log("this is an Error", err);
  }
};

// exporting functions
export {
  ConnectWalelt,
  getSigner,
  NexusTokenContract,
  getChainID,
  disConnectWallet,
};
