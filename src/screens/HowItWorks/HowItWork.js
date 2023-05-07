import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/Footer";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import TokenIcon from "@mui/icons-material/Token";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import BarChartIcon from "@mui/icons-material/BarChart";
import "./custom.css";
import NftTab from "./NftTab";
import NftTabEssential from "./NftTabEssential";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const HowItWork = () => {
  const theme = useTheme();

  const [value, setValue] = useState(0);
  const [mobWidth, setMobWidth] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInnerWidth = () => {
    if (window.outerWidth <= 425) {
      setMobWidth(true);
    } else {
      setMobWidth(false);
    }
  };

  setInterval(handleInnerWidth, 1000);

  return (
    <Box
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <Navbar />
      <Box
        sx={{
          m: { lg: "50px", md: "50px", sm: "50px", xs: "20px" },
        }}
      >
        <Box>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            LEARN HOW TO GET STARTED
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: { lg: "40px", md: "40px", sm: "40px", xs: "20px" },
            }}
          >
            Frequently asked questions
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          overflowX: "hidden",
          bgcolor: "background.default",
          display: "flex",
          flexDirection: { lg: "row", md: "row", sm: "row", xs: "column" },
          alignItems: "start",
          height: "auto",
          p: { lg: "30px", md: "30px", sm: "30px", xs: "20px" },
        }}
      >
        <Tabs
          orientation={mobWidth ? "horizontal" : "vertical"}
          variant="scrollable"
          scrollButtons="auto"
          value={value}
          onChange={handleChange}
          indicatorColor="inherit"
          textColor="inherit"
          aria-label="Vertical tabs example"
          sx={{ width: { lg: "40%", md: "70%", sm: "130%", xs: "auto" } }}
        >
          <Tab
            icon={<TokenIcon />}
            iconPosition="start"
            label="NFT"
            {...a11yProps(0)}
          />
          <Tab
            icon={<LabelImportantIcon />}
            iconPosition="start"
            sx={{ textTransform: "capitalize" }}
            label="Essentials"
            {...a11yProps(1)}
          />
          <Tab
            icon={<FolderSharedIcon />}
            iconPosition="start"
            sx={{ textTransform: "capitalize" }}
            label="Profile Fundamentals"
            {...a11yProps(2)}
          />
          <Tab
            icon={<BarChartIcon />}
            iconPosition="start"
            sx={{ textTransform: "capitalize" }}
            label="Trading on Nexus Galaxy"
            {...a11yProps(3)}
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          <NftTab />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <NftTabEssential />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <NftTab />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <NftTab />
        </TabPanel>
      </Box>
      <Footer />
    </Box>
  );
};

export default HowItWork;
