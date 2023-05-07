import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";
import styles from "./Maintenance.module.sass";

const Maintenance = () => {
  return (
    <>
      <Box className={styles.maintenanceContentcontainer}>
        <Box className={styles.maintenanceContentWrapper}>
          <Box className={styles.imageWrapper}>
            <img
              src="./assets/LogoForBlack.png"
              alt="Nexus Galaxy Logo"
              width="300px"
            />
          </Box>
          <Box className={styles.detailsWrapper}>
            <Typography className={styles.headingText}>
              Hang on! We are under maintenance{" "}
            </Typography>
            <Typography className={styles.discriptionText}>
              It will not take a long time till we get the error fixed. We will
              live again in,
            </Typography>
          </Box>
          <Box className={styles.timerWrapper}>
            <Typography className={styles.timerText}>
              00 : 04 : 13 : 39
            </Typography>
          </Box>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            className={styles.inputWrapper}
          >
            <input type="text" placeholder="Enter your email" />
            <button onClick={(e) => e.preventDefault()}>Notify me</button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Maintenance;
