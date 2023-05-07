import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";


export const YourTransactionBox = ({setOpen}) => {
  return (
    <div>
      <Box sx={{display: "flex", flexDirection: {lg: "row", md: "row", sm: "column", xs: "column"}, justifyContent: "space-between",  backgroundColor: "#F0F2F5", p: 3}}>
        <Box>
          <Box>
            <Typography
              sx={{ color: "#354052", fontSize: "22px", fontWeight: "400" }}
            >
              Your Transactions
            </Typography>
          </Box>

          <Box mt="20px">
            <Button
            onClick={() => setOpen(true)}
              variant="contained"
              sx={{
                backgroundColor: "#42BBFA",
                width: "150px",
                height: "46px",
                ":hover": {
                  backgroundColor: "#42BBFA",
                },
              }}
            >
              Send
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#42BBFA",
                color: "#42BBFA",
                width: "150px",
                height: "46px",
                ml: {lg: "20px", md: "20px", sm: "0px", xs: "0px"},
                mt: {lg: "0px", md: "0px", sm: "10px", xs: "10px"},
                ":hover": {
                  borderColor: "#42BBFA",
                  color: "#42BBFA",
                },
              }}
            >
              Request
            </Button>
          </Box>
        </Box>

        <Box sx={{mt: {lg: "0px", md: "0px", sm: "20px", xs: "20px"}}}>
        <Typography
              sx={{ color: "#354052", fontSize: "22px", fontWeight: "400" }}
            >
              Total Balance
            </Typography>
            <Typography
              sx={{ color: "#354052", fontSize: "22px", fontWeight: "400" }}
            >
              $439.98
            </Typography>
        </Box>
      </Box>
    </div>
  );
};
