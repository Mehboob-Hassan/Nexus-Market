import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { SplineAreaChart } from "./SplineAreaChart";
import { BuyAndSell } from "./components/BuyAndSell/BuyAndSell";
import { TotalPriceBox } from "./components/TotalPriceBox/TotalPriceBox";
import DataGrid1 from "./components/DataGrid1";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import DataGrid2 from "./components/DataGrid2";

export const HomePage = () => {
  return (
    <div>
      <Box sx={{ backgroundColor: "#F8F8FB", p: 3 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
          }}
        >
          <Box
            width="100%"
            sx={{ backgroundColor: "#FFFFFF", height: "auto", p: "16px" }}
          >
            <SplineAreaChart title={"1 BTC - $5636 . 1 CHN - $674"} />
          </Box>
          <Box width="100%">
            <Box
              // width="100%"
              sx={{
                backgroundColor: "#FFFFFF",
                height: "auto",
                ml: { lg: "10px", md: "10px", sm: "0px", xs: "0px" },
              }}
            >
              <BuyAndSell />
            </Box>
            <Box
              // width="100%"
              sx={{
                backgroundColor: "#FFFFFF",
                height: "auto",
                ml: { lg: "10px", md: "10px", sm: "0px", xs: "0px" },
                mt: "10px",
                pt: "16px",
                pb: "16px",
                pl: "32px",
                pr: "32px",
              }}
            >
              <TotalPriceBox />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            mt: "10px",
            flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
          }}
        >
          <Box width="100%" mr="10px">
            <Box
              mt="16px"
              mb="10px"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{ color: "#1F2552", fontSize: "18px", fontWeight: "400" }}
              >
                Buying Summary
              </Typography>

              <IconButton>
                <MoreHorizIcon sx={{ fill: "#979797" }} />
              </IconButton>
            </Box>
            <Box
              width="100%"
              sx={{
                backgroundColor: "#FFFFFF",
                height: "auto",
                p: "16px",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box width="100%">
                  <DataGrid1 />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "1%",
                    ml: "10px",
                  }}
                >
                  <HorizontalRuleIcon
                    sx={{
                      transform: "rotate(90deg)",
                      width: "40px",
                      height: "46px",
                      fill: "#979797",
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>

          <Box width="96%">
            <Box
              mt="16px"
              mb="10px"
              width="100%"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{ color: "#1F2552", fontSize: "18px", fontWeight: "400" }}
              >
                Selling Summary
              </Typography>

              <IconButton>
                <MoreHorizIcon sx={{ fill: "#979797" }} />
              </IconButton>
            </Box>
            <Box
              width="100%"
              sx={{
                backgroundColor: "#FFFFFF",
                height: "auto",
                p: "16px",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box width="100%">
                  <DataGrid2 />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "1%",
                    ml: "10px",
                  }}
                >
                  <HorizontalRuleIcon
                    sx={{
                      transform: "rotate(90deg)",
                      width: "40px",
                      height: "46px",
                      fill: "#979797",
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
