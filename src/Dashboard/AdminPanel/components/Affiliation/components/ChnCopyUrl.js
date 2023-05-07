import React from 'react'
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import IconButton from "@mui/material/IconButton";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export const ChnCopyUrl = () => {
  return (
    <div>
        <Box sx={{ backgroundColor: "#ffffff", p: 6, borderRadius: "6px",  }} >
        <Box  sx={{justifyContent: "center", display: "flex"}}>
            <Typography  sx={{fontSize: {lg: "22px", md: "22px", sm: "22px", xs: "18px"}, fontWeight: "400", color: "#354052"}}>Join with CHN Community</Typography>
        </Box>

        <Box
            sx={{
              display: "flex",
              flexDirection: { lg: "row", md: "row", sm: "row", xs: "column" },
              width: "100%",
              mt: "30px"
            }}
          >
            <Box
              width="100%"
              sx={{
                cursor: "pointer",
                // border: "1px solid #C5C9CE",
                backgroundColor: "#EFF2F5",

                width: "100%",
                height: { lg: "50px", md: "50px", sm: "auto", xs: "auto" },
                display: "flex",
                justifyContent: "space-between",
                // borderRadius: "8px",
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
                borderTopRightRadius: {lg: "0px", md: "0px", sm: "10px", xs: "10px"},
                borderBottomRightRadius: {lg: "0px", md: "0px", sm: "10px", xs: "10px"}
              }}
            >
              <Box
                sx={{
                  paddingLeft: {
                    lg: "46px",
                    md: "46px",
                    sm: "46px",
                    xs: "16px",
                  },
                //   paddingTop: { lg: "12px", md: "12px", sm: "12px", xs: "8px" },
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  height: {lg: "auto", md: "auto", sm: "auto", xs: "56px"}
                }}
              >
                <Typography
                  sx={{
                    alignItems: "center",
                    fontSize: {
                      lg: "14px",
                      md: "14px",
                      sm: "14px",
                      xs: "10px",
                    },
                    
                    fontWeight: "400",
                    color: "#1F2552",
                  }}
                >
                  https://www.chncoin.com?rfl-328YHPD
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                border: "1px solid #C5C9CE",
                backgroundColor: "#EFF2F5",
                width: { lg: "10%", md: "10%", sm: "10%", xs: "100%" },
                height: { lg: "50px", md: "50px", sm: "auto", xs: "auto" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderBottomRightRadius: "10px",
                borderTopRightRadius: "10px",
                borderTopLeftRadius: {lg: "0px", md: "0px", sm: "10px", xs: "10px"},
                borderBottomLeftRadius: {lg: "0px", md: "0px", sm: "10px", xs: "10px"},
              }}
            >
              <IconButton>
                <ContentCopyIcon sx={{ color: "#354052" }} />
              </IconButton>
            </Box>
          </Box>

        <Box mt="40px"  sx={{justifyContent: "center", display: "flex"}}>
            <Typography sx={{fontSize: {lg: "14px", md: "14px", sm: "14px", xs: "12px"}, fontWeight: "400", color: "#1F2552", opacity: "80%", textAlign: "center"}}>
            Established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that.
            </Typography>
        </Box>
        </Box>
    </div>
  )
}
