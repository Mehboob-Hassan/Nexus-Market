import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material";

const ScreenLoading = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress
        size="80px"
        sx={{
          color: theme.palette.background.fontClr,
          width: "80px",
        }}
      />
      <Typography sx={{ mt: "10px" }}>Loading...</Typography>
    </Box>
  );
};

export default ScreenLoading;
