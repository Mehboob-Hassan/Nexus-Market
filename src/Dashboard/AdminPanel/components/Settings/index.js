import React from 'react'
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { AffiliateHeadBox } from '../Affiliation/components/AffiliateHeadBox';
import { SettingsCard } from './SettingsCard';



const CardsData = [
    {
        title : "Privacy",
        subTitle: "Established fact that a reader will be distracted by the readable content of a page.",
        buttonTitle: "View Now"
    },
    {
        title : "Terms of Service",
        subTitle: "Established fact that a reader will be distracted by the readable content of a page.",
        buttonTitle: "View Now"
    },
    {
        title : "About",
        subTitle: "Established fact that a reader will be distracted by the readable content of a page.",
        buttonTitle: "View Now"
    },
    {
        title : "Support",
        subTitle: "Established fact that a reader will be distracted by the readable content of a page.",
        buttonTitle: "View Now"
    }
]




export const Settings = () => {
  return (
    <div>
        <Box  sx={{ p: 3, backgroundColor: "#F8F8FB", }}>
        <Box>
          <Typography
            sx={{ color: "#354052", fontSize: "28px", fontWeight: "400" }}
          >
            Your Affiliations
          </Typography>
        </Box>

        <Box mt="20px">
          <AffiliateHeadBox
            title={"Wallet ID"}
            subTitle={
              "Established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has."
            }
            codeTitle={"a63ofck-5b57-4f24-8ba3-b76d15330ac2"}
            
          />
        </Box>

        <Box mt="20px">
            {CardsData.map((item) => {
                return (
                    <>
                    
                    <Box mb="20px"><SettingsCard title={item.title} subTitle={item.subTitle} buttonTitle={item.buttonTitle} /></Box>
                    </>
                )
            })}
        </Box>
        </Box>
    </div>
  )
}
