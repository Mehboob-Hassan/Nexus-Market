import React from "react";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material/styles";
import connectWallet from "./images/connectWallet.png";
import logout from "./images/logout.png";
import darkModeImg from "./images/darkMode.png";
import editProfileImg from "./images/web3.jpg";

const data = [
  {
    id: "1",
    question: "Creating a Nexus Galaxy Account",
    ans: "Follow the given steps to create your account and start trading NFTs on Nexus Galaxy:",
    question1: "1. Acquiring Digital Currency (ETH)",
    ans1: "ETH stand for Ethereum, a digital currency which powers the transactions on the Ethereum Blockchain. ETH currency mints and purchases your NFTs and pays for gas fees (transaction fees) which complete the transaction.",
    question2: "2. Crypto Wallet",
    ans2: "A crypto wallet works as both a wallet and debit card. It store your digital currency, i.e. Ethereum, and processes transactions on the Ethereum blockchain. Closed Sea is only a means to interact with others on the blockchain, where as a crypto wallet helps translate your actions into transaction on the blockchain. Each wallet has a unique wallet address which you will use to complete the transactions. Your transaction record is available on etherscan.io. It is recommended to check Etherscan after each transaction.",
    question3: "Nexus Galaxy",
    ans3: "You now need to connect your wallet to Nexus Galaxy to carry out transactions.",
    image: connectWallet,
  },
  {
    id: "2",
    question: "What are the key terms to know before I get started?",
    ans: "Here's a list of key terms used in the NFT space and it's a helpful to review before you get started.",
    bullet1:
      "Non-Fungible Tokens (NFTs) – Non-Fungible Tokens (NFTs) are special, digital items with blockchain-managed ownership. Examples of NFTs include digital art, collectibles, virtual reality items, crypto domain names, ownership records for physical assets, etc.",
    bullet2:
      "Ethereum – Ethereum is a blockchain, and ETH is the currency used to make transactions on the Ethereum blockchain.",
    bullet3:
      "Gas Fees – Think of gas fees as Ethereum blockchain transaction costs. ChainCollection does not contribute in setting gas fees – they are determined by supply/demand across the network (blockchain).",
    bullet4:
      "Crypto Wallet – A crypto wallet is an application or hardware device that allows individuals to store and retrieve digital assets.",
    bullet5:
      "Wallet Address – Your wallet address is unique. It’s the address people will use when they are sending crypto or NFTs to your crypto wallet.",
    bullet6:
      "Seed Phrase – Your seed phrase is a list of words that can be used to recover your crypto in case you forget your password or lose access to your wallet. Don’t store your seed phrase on an online cloud storage service and never share it with anyone.",
    bullet7:
      "Collection – A collection is a body of work, like a store or gallery. If you see someone refer to an ChainCollection collection as a store or gallery, don’t get confused – it’s all the same. We use the term collection to keep things simple.",
    image: "",
  },
  {
    id: "3",
    question: "How do i edit my Nexus Galaxy profile",
    ans: "You can customize your account through settings. There will be an additional security prompt before you can continue. You can customize your username, profile photo, bio, and email address among other things.",
    image: editProfileImg,
  },
  {
    id: "4",
    question: "How do I log out of my Nexus Galaxy account?",
    ans: "To log out of your Nexus Galaxy account, kindly follow the steps below. Go to the profile icon on the top right of the screen. On the dropdown menu click on Log Out.",
    image: logout,
  },
  {
    id: "5",
    question:
      "If I am uncomfortable with the lighter mode theme will I be able to switch to dark mode?",
    ans: "Yes you can switch from light mode to dark mode and vice versa",
    image: darkModeImg,
  },
];

const NftTabEssential = () => {
  let theme = useTheme();

  return (
    <Box>
      <Box sx={{ width: "100%" }}>
        {data &&
          data?.map((v, i) => {
            return (
              <Box
                sx={{
                  borderTop: `1px solid ${theme.palette.background.fontClr}`,
                }}
              >
                <Accordion
                  sx={{
                    background: "transparent",
                    boxShadow: "none",
                    mt: "20px",
                    mb: "20px",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ padding: "0px" }}
                  >
                    <Typography sx={{ fontWeight: 600 }}>
                      {v?.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ color: "text.secondary" }}>
                      {v?.ans}
                    </Typography>
                    {v?.bullet1 ? (
                      <Box>
                        <Typography sx={{ color: "text.secondary" }}>
                          <li> {v?.bullet1}</li>
                        </Typography>
                        <Typography sx={{ color: "text.secondary" }}>
                          <li> {v?.bullet2}</li>
                        </Typography>
                        <Typography sx={{ color: "text.secondary" }}>
                          <li> {v?.bullet3}</li>
                        </Typography>
                        <Typography sx={{ color: "text.secondary" }}>
                          <li> {v?.bullet4}</li>
                        </Typography>
                        <Typography sx={{ color: "text.secondary" }}>
                          <li> {v?.bullet5}</li>
                        </Typography>
                        <Typography sx={{ color: "text.secondary" }}>
                          <li> {v?.bullet6}</li>
                        </Typography>
                        <Typography sx={{ color: "text.secondary" }}>
                          <li> {v?.bullet7}</li>
                        </Typography>
                      </Box>
                    ) : (
                      ""
                    )}

                    <Typography
                      sx={{
                        color: "text.secondary",
                        fontSize: "25px",
                        fontWeight: 800,
                      }}
                    >
                      {v?.question1}
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                      {v?.ans1}
                    </Typography>
                    <Typography
                      sx={{
                        color: "text.secondary",
                        fontSize: "25px",
                        fontWeight: 800,
                      }}
                    >
                      {v?.question2}
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                      {v?.ans2}
                    </Typography>
                    <Typography
                      sx={{
                        color: "text.secondary",
                        fontSize: "25px",
                        fontWeight: 800,
                      }}
                    >
                      {v?.question3}
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                      {v?.ans3}
                    </Typography>
                    {v?.image != "" ? (
                      <Box
                        sx={{
                          width: "100%",
                        }}
                      >
                        <img
                          src={v?.image}
                          alt="image not found"
                          width="100%"
                          height="100%"
                        />
                      </Box>
                    ) : (
                      ""
                    )}
                  </AccordionDetails>
                </Accordion>
              </Box>
            );
          })}
      </Box>
    </Box>
  );
};

export default NftTabEssential;
