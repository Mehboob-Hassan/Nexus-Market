import React from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";


export const EmailBox = () => {
  const CustomTextField = styled(TextField)({
    width: "100%",
    "& label.MuiInputLabel-root": {
      display: "none",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "unset",
    },
    "& .MuiOutlinedInput-root": {
      width: "100%",
      "& input": {
        width: "100%",
        color: "black",
        height: "19px",
        backgroundColor: "#EFF2F5",
        fontSize: "14px",
        fontWeight: "400",
        borderRadius: "4px",
        padding: "12px 24px 12px 24px",
      },
      "& input::placeholder": {
        color: "#1F2552",
        fontSize: "14px",
        fontWeight: "400",
        opacity: "50%",
      },
      "& fieldset": {
        borderColor: "unset",
        display: "none",
      },
      "&": {
        padding: 0,
        margin: "5px 0",
        position: "static",
      },
      "& textarea#mui-3": {
        width: "100%",
        height: "auto",
        overflow: "auto",
        padding: "12px 24px 12px 24px",
        // border: "1px solid #EFF2F5",
        backgroundColor: "#EFF2F5",
        overflowWrap: "break-word",
        fontSize: "14px",
        fontWeight: "400",
        color: "black",
      },
      "& textarea#mui-3::placeholder": {
        color: "#1F2552",
        opacity: "50%",
      },
    },
  });

  return (
    <div>
      <Box sx={{ backgroundColor: "#ffffff", p: 6, borderRadius: "6px" }}>
        <Box sx={{display: "flex", justifyContent: "center"}}> 
        <Typography sx={{fontSize: {lg: "22px", md: "22px", sm: "22px", xs: "18px"}, fontWeight: "400", color: "#354052"}}>Email Some one</Typography>
        </Box>
        <Box mt="20px">
        <CustomTextField
          placeholder="User Name"
        
        />
        </Box>

        <Box>
        <CustomTextField
          placeholder="User Email"
        />
        </Box>

        <Box>
        <CustomTextField
          placeholder="User Email"       
            multiline = {true}
            rows={3}
        />
        </Box>

        <Box mt="20px">
            <Button variant="contained" sx={{backgroundColor: "#42BBFA", color: "#ffffff", width: "100%", height: "46px", ":hover" : {
                backgroundColor: "#42BBFA"
            } }}>
              Send Invite
            </Button>
        </Box>
      </Box>
    </div>
  );
};
