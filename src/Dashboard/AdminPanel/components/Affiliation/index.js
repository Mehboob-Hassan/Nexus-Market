import React from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { AffiliateHeadBox } from "./components/AffiliateHeadBox";
import { RefferalCode } from "./components/RefferalCode";
import { ChnCopyUrl } from "./components/ChnCopyUrl";
import { EmailBox } from "./components/EmailBox";
import ReferalBonusDataGrid from "./components/ReferalBonusDataGrid";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

export const Affiliation = () => {
  return (
    <div>
   
      <Box sx={{ p: 3, backgroundColor: "#F8F8FB", }}>
        <Box>
          <Typography
            sx={{ color: "#354052", fontSize: "28px", fontWeight: "400" }}
          >
            Your Affiliations
          </Typography>
        </Box>

        <Box mt="20px">
          <AffiliateHeadBox
            title={"The benefits of affiliate"}
            subTitle={
              "Established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here."
            }
            // codeTitle={"a63ofck-5b57-4f24-8ba3-b76d15330ac2"}
          />
        </Box>

        <Box width="100%" sx={{ display: "flex", flexDirection: {lg: "row", md:"row", sm: "column", xs: "column"}, }}>
          <Box  mt="30px" sx={{width: {lg: "60%", md: "60%", sm: "100%", xs: "100%" }}}>
            <RefferalCode />
          </Box>

          <Box width="100%" mt="30px"  sx={{ml: {lg: "20px", md: "20px", sm: "0px", xs: "0px"}}}>
            <ChnCopyUrl />
          </Box>
        </Box>

        <Box sx={{ display: "flex", flexDirection: {lg: "row", md:"row", sm: "column", xs: "column"}, width: "100%" }}>
          <Box mt="20px"  sx={{width: {lg: "61%", md: "75%", sm: "100%", xs: "100%" }}}>
            <EmailBox />
          </Box>

          <Box
            width="100%"
            // ml="20px"
            mt="20px"
            sx={{ backgroundColor: "#ffffff", p: 2, borderRadius: "4px",  ml: {lg: "20px", md: "20px", sm: "0px", xs: "0px"} }}
          >
            <Box>
              <Typography
                sx={{
                  color: "#354052",
                  fontSize: {lg: "28px", md: "28px", sm: "26px", xs: "24px"},
                  fontWeight: "400",
                  pt: 1,
                  pl: 1,
                }}
              >
                Referral Bonus
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", pl: 1 }}>
              <Box width="100%">
                <ReferalBonusDataGrid />
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
    </div>
  );
};
