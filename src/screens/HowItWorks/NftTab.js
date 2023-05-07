import React from "react";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material/styles";
import marketplace from "./images/marketplace.png";

const data = [
  {
    id: "1",
    question: "What is a Non-Fungible Token?",
    ans: "Non-Fungible Tokens (NFTs) are unique, digital items with blockchain-managed ownership. Examples of NFTs include digital art, collectibles, virtual reality items, crypto domain names, ownership records for physical assets, and more. Don't get overwhelmed by the idea of fungibility, it's just the ability of a good or asset to be interchanged with other individual goods or assets of the same type.",
    image: "",
  },
  {
    id: "2",
    question: "How do I search for NFT’s?",
    ans: "If you're new to NFTs, it can all be enormous at first, but you've come to the right place. At ChainCollection, there are many ways to search through thousands of NFTs. If you know what you're looking for, you can search directly in the search bar.",
    image: "",
  },
  {
    id: "3",
    question: "From where i can access the NFT Marketlace?",
    ans: "You can access the NFT Marketlace from Navigation",
    image: marketplace,
  },
];

const NftTab = () => {
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

export default NftTab;
