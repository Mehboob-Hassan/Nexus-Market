import React from "react";
import { Link } from "react-router-dom";
import styles from "./Error.module.sass";
import { Box, Typography, Button } from "@mui/material";

const Error = ({ headingText, subHeadingText, discriptionText }) => {
  return (
    <>
      <Box className={styles.errorContentcontainer}>
        <Box className={styles.errorContentWrapper}>
          <Box className={styles.errorHeadingText}>
            <Typography variant="h1">{headingText}</Typography>
          </Box>
          <Box className={styles.errorSubHeadingText}>
            <Typography variant="h2">{subHeadingText}</Typography>
          </Box>
          <Box className={styles.errorDiscriptionText}>
            <Typography>{discriptionText}</Typography>
          </Box>
          <Box className={styles.buttonWrapper}>
            <Button>
              <Link to="/">Back to Home</Link>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Error;
