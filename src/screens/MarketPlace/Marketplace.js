import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Layout from "../../components/Layout";
import styles from "../Dashboard2/Dashboard2.module.sass";
import NFTCard from "../../components/NFTCard";
import Navbar from "../../components/Navbar";
import { CircularProgress, Grid } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import { useTheme } from "@mui/material/styles";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import SnackbarContent from "@mui/material/SnackbarContent";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AllCollectionAction } from "../../Redux/actions";
import Pagination from "@mui/material/Pagination";
import { Link } from "react-router-dom";
import ScreenLoading from "../../components/Loading/ScreenLoading";
import MarketplaceFilters from "./MarketplaceFilters";
import { cardData } from "../../config";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import "./custom.css";
import { NFtOnSellAction } from "../../Redux/actions";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const Marketplace = () => {
  const filtersData = [
    {
      category: "Status",
      Data: [
        {
          id: "1",
          name: "Purchase Now",
        },
        {
          id: "2",
          name: "New",
        },
        {
          id: "3",
          name: "Has Offers",
        },
      ],
    },
    {
      category: "Chain",
      Data: [
        {
          id: "1",
          name: "Binance",
        },
        {
          id: "2",
          name: "Ethereum",
        },
        {
          id: "3",
          name: "Polygon",
        },
      ],
    },
    {
      category: "Price",
      Data: [
        {
          id: "1",
          name: "All NFT",
        },
        {
          id: "2",
          name: "Most Liked NFT",
        },
        {
          id: "3",
          name: "Least Liked NFT",
        },
      ],
    },
  ];

  let dispatch = useDispatch();

  console.log("THisIsDataJson", filtersData);
  const theme = useTheme();
  let onSell = true;

  const [pageCount, setPageCount] = React.useState(1);

  const ChainId = useSelector((state) => state.saveChainIdReducer.users);

  const handleChangePagination = (event, value) => {
    setPageCount(value);
    console.log("ThisIsPaginationValue", value);
    dispatch(NFtOnSellAction(ChainId, value, onSell));
  };
  //   chainId, pageCount, onSell
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const NFtOnSellResponse = useSelector(
    (state) => state.nftOnSellReducer.users
  );

  console.log("ThisIsNFtOnSell", NFtOnSellResponse);

  useEffect(() => {
    dispatch(NFtOnSellAction(ChainId, pageCount, onSell));
  }, [ChainId]);

  return (
    <>
      <Box
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        <Navbar />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            mt: "20px",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            indicatorColor="inherit"
            textColor="inherit"
            scrollButtons
            aria-label="visible arrows tabs example"
            sx={{
              [`& .${tabsClasses.scrollButtons}`]: {
                "&.Mui-disabled": { opacity: 0.3 },
              },
              "& button": { textTransform: "capitalize" },
            }}
          >
            <Tab label="All NFT" {...a11yProps(0)} />
            <Tab label="Collectibles" {...a11yProps(1)} />
            <Tab label="Football Arts" {...a11yProps(2)} />
            <Tab label="Music" {...a11yProps(3)} />
            <Tab label="Domain" {...a11yProps(4)} />
            <Tab label="Animal" {...a11yProps(5)} />
            <Tab label="#007" {...a11yProps(6)} />
          </Tabs>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "auto",
            display: "flex",
            flexDirection: { lg: "row", md: "row", sm: "row", xs: "column" },
            alignItems: { lg: "start", md: "start", sm: "start", xs: "center" },
            justifyContent: {
              lg: "space-between",
              md: "space-between",
              sm: "space-between",
              xs: "center",
            },
            padding: "20px",
          }}
        >
          <Box
            sx={{
              width: { lg: "30%", md: "30%", sm: "30%", xs: "100%" },
              mt: "15px",
            }}
          >
            <Box>
              <MarketplaceFilters filtersData={filtersData} />
            </Box>
            <Box sx={{ mt: "50px" }}>
              <MarketplaceFilters filtersData={filtersData} />
            </Box>
          </Box>
          <Box sx={{ width: { lg: "65%", md: "65%", sm: "65%", xs: "100%" } }}>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={value}
              onChangeIndex={handleChangeIndex}
              style={{ padding: "0px !important" }}
            >
              <TabPanel value={value} index={0} dir={theme.direction}>
                <Grid container spacing={2}>
                  {NFtOnSellResponse?.nfts &&
                    NFtOnSellResponse?.nfts?.map((v, i) => {
                      return (
                        <Grid
                          item
                          lg={4}
                          md={6}
                          sm={6}
                          xs={12}
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <NFTCard
                            image={v.image}
                            title={v.name}
                            id={v._id}
                            price={v?.price}
                            tokenAddress={v?.tokenAddress}
                            tokenId={v?.tokenId}
                            type={v.fileType}
                            walletAddress={v?.owner?.address}
                          />
                        </Grid>
                      );
                    })}

                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <Pagination
                      count={NFtOnSellResponse?.totalPages}
                      page={pageCount}
                      onChange={handleChangePagination}
                    />
                  </Box>
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={1} dir={theme.direction}>
                Item Two
              </TabPanel>
              <TabPanel value={value} index={2} dir={theme.direction}>
                Item Three
              </TabPanel>
            </SwipeableViews>
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Marketplace;
