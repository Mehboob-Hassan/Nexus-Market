import React from "react";
import styles from "./Credit.module.sass";
import { Box, Typography } from "@mui/material";
import CardImg from "./Credit card.png";

export default function CreditCard() {
  return (
    <>
      <Box className={styles.bg}>
        <img src={CardImg} />
        {/* <Box className={styles.top}>
          <Typography>$1,903</Typography>
          <img src="./ozean_Images/Icons/Chip.svg" />
        </Box>
        <Box className={styles.middle}>
          <Typography>Credit limit</Typography>
          <Typography>$5,000</Typography>
        </Box>
        <Box className={styles.bottom}>
          <Typography>Daily shipping card ****2456</Typography>
          <img src="./ozean_Images/Icons/Finance logo.svg" />
        </Box> */}
      </Box>
    </>
  );
}
