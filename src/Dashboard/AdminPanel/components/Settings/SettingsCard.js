import React from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import IconButton from "@mui/material/IconButton";

export const SettingsCard = ({ title, subTitle, buttonTitle }) => {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#ffffff",
          pl: 3,
          pr: 3,
          pt: 2,
          pb: 2,
          borderRadius: "6px",
          display: "flex",
          flexDirection: {lg: "row", md: "row", sm: "row", xs: "column"},
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Box width="100%">
          <Box>
            <Typography
              sx={{ fontSize: "28px", fontWeight: "400", color: "#354052" }}
            >
              {title}
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                color: "#1F2552",
                opacity: "80%",
                mt: "10px",
                lineHeight: "24px",
                width: {lg: "50%", md: "50%", sm: "50%", xs: "100%"},
              }}
            >
              {subTitle}
            </Typography>
          </Box>
        </Box>

        <Box sx={{mt: {lg: "0px", md: "0px", sm: "0px", xs: "20px"}}}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              width: {lg: "200px", md: "200px", sm: "150px", xs: "150px"},
              height: {lg: "56px", md: "56px", sm: "56px", xs: "46px"},
              color: "#ffffff",
              backgroundColor: "#42BBFA",
              ":hover": {
                backgroundColor: "#42BBFA",
              },
            }}
          >
            {buttonTitle}
          </Button>
        </Box>
      </Box>
    </div>
  );
};
