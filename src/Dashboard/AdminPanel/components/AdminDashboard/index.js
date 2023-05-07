import React from "react";
import {useState} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { DashboardCards } from "./components/DashboardCards";
import { Grid } from "@mui/material";
import { SplineAreaChart } from "../HomePage/SplineAreaChart";
import DataGrid1 from "../HomePage/components/DataGrid1";
import DashboardDataGrid from "./components/DashboardDataGrid";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from '@mui/material/IconButton';

const DashboardCard = [
  {
    title: "BTC Deposit",
    price: "$1119,86",
    subTitle: "+14.5 (1,35%)",
    subTitleColor: "#00CE7D",
  },
  {
    title: "CHN Coin",
    price: "$38,93",
    subTitle: "+14.5 (1,35%)",
    subTitleColor: "#E55541",
  },
  {
    title: "USERS",
    price: "46,22",
    subTitle: "+14.5 (1,35%)",
    subTitleColor: "#00CE7D",
  },
  {
    title: "BTC Raised",
    price: "45,25",
    subTitle: "+14.5 (1,35%)",
    subTitleColor: "#E55541",
  },
];

 const AdminDashboard = () => {

    const [activaCard, setActivaCard] = useState(false);

    const handleCard = () => {
        setActivaCard(current => (!current))
    }

  return (
    <div>
       <Box sx={{ backgroundColor: "#FFFFFF", p: 3 }}>


        <Box>
          <Grid container spacing={1}>
            {DashboardCard.map((item) => {
              return (
                <>
                  <Grid item lg={3} md={4} sm={6} xs={6}>
                    <DashboardCards data={item} handleCard={handleCard} activaCard={activaCard} />
                  </Grid>
                </>
              );
            })}
          </Grid>
        </Box>
        
        <Box mt="20px" sx={{backgroundColor: "#FFFFFF", border: "1px solid #E6EAEE",  borderRadius: "4px",}}>
            <SplineAreaChart title={"CHN Coin Chart"} hasIconButtons/> 
        </Box>

        <Box>
        <Box>
        <Box mt="16px" mb="10px" sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <Typography
              sx={{ color: "#1F2552", fontSize: {lg: "18px", md: "18px", sm: "18px", xs: "14px"}, fontWeight: "400" }}
            >
              Buy & Sell Summary
            </Typography>

            <IconButton><MoreHorizIcon sx={{fill: "#979797"}}/></IconButton>
          </Box>
        </Box>

        <Box sx={{border: "1px solid #E6EAEE" , mt:"20px", borderRadius: "4px"}}>
            <DashboardDataGrid/>
        </Box>
        </Box>

      </Box>
    </div>
  );
};


export default AdminDashboard;