import React from "react";
import styles from "./Notification.module.sass";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import notificationImg from "./circle_3.png";

export default function Notification() {
  const theme = useTheme();

  return (
    <>
      <Box
        className={styles.bg}
        sx={{
          bgcolor: "background.topCreatorNftclr",
          color: "text.primary",
        }}
      >
        <Typography
          className={styles.heading}
          sx={{ color: "background.fontClr" }}
        >
          Notification
        </Typography>
        {[1, 2, 3].map((v, i) => {
          return (
            <Box className={styles.container}>
              <Box className={styles.profile}>
                <img src={notificationImg} alt="cant load image" />
              </Box>
              <Box className={styles.text}>
                <Typography variant="body2" sx={{ color: "text.primary" }}>
                  Juliet:Revenant #61
                </Typography>
                <Typography variant="body2">
                  Has been sold{" "}
                  <Box component="span" sx={{ color: "background.fontClr" }}>
                    2 Eth
                  </Box>
                </Typography>
                <Typography variant="body2">27 oct 2021 at 07:05 pm</Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
}
