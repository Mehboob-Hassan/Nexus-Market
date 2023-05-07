import React from "react";
import styles from "./CreateButton.module.sass";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import { useNavigate } from "react-router-dom";

export default function CreateButton() {
  const theme = useTheme();
  let navigate = useNavigate();
  return (
    <>
      <Box
        className={styles.bg}
        sx={{
          bgcolor: "background.finestNft",
          cursor: "pointer",
          // boxShadow: "0 4px 10px -2px gray",
        }}
        onClick={() => navigate("/CreateNft")}
      >
        {/* <img src="./ozean_Images/Icons/Plus.svg" alt="cant load image" /> */}
        <AddBoxRoundedIcon sx={{ color: "background.iconClr" }} />
        <Typography
          variant="h6"
          className={styles.heading}
          sx={{ color: "text.primary" }}
        >
          Create NFT
        </Typography>
      </Box>
    </>
  );
}
