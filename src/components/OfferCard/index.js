import React from "react";
import styles from "./OfferCard.module.sass";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FlakyRoundedIcon from "@mui/icons-material/FlakyRounded";
import cardImg from "./Rectangle 10@4x.png";

export default function OfferCard() {
  const theme = useTheme();
  return (
    <>
      <Box
        className={styles.bg}
        sx={{
          bgcolor: "background.finestNft",
          // boxShadow: "0 4px 10px -2px gray",
        }}
      >
        <Box className={styles.img}>
          <img src={cardImg} alt="cant load image" />
        </Box>
        <Box className={styles.lowerCard}>
          <Typography sx={{ fontWeight: "bold", color: "background.fontClr" }}>
            Crypto Hero Marce
          </Typography>
          <Box className={styles.name}>
            <Typography sx={{ color: "background.iconClr" }}>
              Crypto hero Marce
            </Typography>
            <Typography>
              {/* <img src="./ozean_Images/Discount.svg" /> */}
              <FlakyRoundedIcon sx={{ color: "background.iconClr" }} />
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
