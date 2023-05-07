import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CancelIcon from "@mui/icons-material/Cancel";
import { IconButton } from "@mui/material";

export const TotalPriceBox = () => {
    const [open, setOpen] = React.useState(true);
    const handleClose = () => {
        setOpen(false);
      };
  return (
    <div>
      <Box
      // onClose={handleClose}
      // open={open}
        sx={{
          border: "1px solid #E9E9E9",
          borderRadius: "4px",
          backgroundColor: "#F7F7F7",
          height: "27px",
          display: "flex",
          justifyContent: "space-between",
          pl: "16px",
          pr: "16px",
          alignItems: "center",
        }}
      >
       {open ? (
        <>
         <Box>
          <Typography
            sx={{
              color: "#1F2552",
              fontSize: {lg: "14px", md: "14px", sm: "14px", xs: "8px"},
              fontWeight: "400",
            }}
          >
            43563 Cric
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box>
            {" "}
            <Typography
              sx={{
                color: "#1F2552",
                fontSize: {lg: "14px", md: "14px", sm: "14px", xs: "8px"},
                fontWeight: "400",
              }}
            >
              $46734
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", ml: "8px" }}>
            <IconButton onClick={handleClose}>
              <CancelIcon
                sx={{ width: "18px", height: "18px", fill: "#42BBFA" }}
              />
            </IconButton>
          </Box>
        </Box>
        </>
       ) : ""}
      </Box>
    </div>
  );
};
