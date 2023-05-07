import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Layout from "../../components/Layout";
import styles from "../Dashboard2/Dashboard2.module.sass";
import NFTCard from "../../components/NFTCard";
import Navbar from "../../components/Navbar";
import { Grid } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import { useTheme } from "@mui/material/styles";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import SnackbarContent from "@mui/material/SnackbarContent";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CollectionCard from "../Collections/CollectionCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AllCollectionAction } from "../../Redux/actions";
import Pagination from "@mui/material/Pagination";
import { Link } from "react-router-dom";
import { getCollectionByAddressAction } from "../../Redux/actions";
import { getAllCategoriesAction } from "../../Redux/actions";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const MyCollection = () => {
  const card = [
    {
      img: "ozean_Images/Images/Background (1).png",
    },
    {
      img: "ozean_Images/Images/Background (2).png",
    },
    {
      img: "ozean_Images/Images/Background (3).png",
    },
    {
      img: "ozean_Images/Images/Background (4).png",
    },
    {
      img: "ozean_Images/Images/Background (5).png",
    },
    {
      img: "ozean_Images/Images/Background (6).png",
    },
  ];

  const theme = useTheme();

  const [dispSnakbr, setdispSnakbr] = useState("block");

  const handleSnakbar = () => {
    setdispSnakbr("none");
  };

  const action = (
    // <Button
    //   size="small"
    //   variant="text"
    //   onClick={handleSnakbar}
    //   sx={{ m: "0px", p: "0px" }}
    //   endIcon={
    //     <CloseIcon
    //       sx={{ color: theme.palette.mode === "light" ? "#fff" : "#04131c" }}
    //       onClick={handleSnakbar}
    //     />
    //   }
    // />
    <IconButton aria-label="close" sx={{ fontSize: "10px" }}>
      <CloseIcon
        sx={{
          color: theme.palette.mode === "light" ? "#fff" : "#04131c",
          fontSize: "18px",
        }}
        onClick={handleSnakbar}
      />
    </IconButton>
  );

  const walletAddressGet = useSelector(
    (state) => state.saveWalletAddressReducer.users
  );

  console.log("this is Address", walletAddressGet);

  const [pageCount, setPageCount] = useState(1);
  const handleChangePagination = (event, value) => {
    setPageCount(value);
    dispatch(getCollectionByAddressAction(value, walletAddressGet, size));
  };

  const [value, setValue] = React.useState(0);
  const [size, setSize] = React.useState(6);

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCollectionByAddressAction(pageCount, walletAddressGet, size));
  }, [walletAddressGet]);

  const AllCollectionRes = useSelector(
    (state) => state.collectionByAddressReducer.users
  );

  // console.log("thisIsResCollection", AllCollectionRes);

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
            flexDirection: "column",
            alignItems: "center",
            // justifyContent: "center",
            height: "auto",
            mt: "40px",
          }}
        >
          <Box>
            <Typography
              sx={{ color: "primary", fontWeight: "bold", fontSize: "35px" }}
            >
              My Collections
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ color: "primary", fontSize: "15px" }}>
              Create, manage collections of unique NFTs to share and sell.
            </Typography>
          </Box>

          <Box>
            <Box>
              <Grid container spacing={2} sx={{ mt: "80px" }}>
                {AllCollectionRes?.data &&
                  AllCollectionRes?.data?.map((v, i) => {
                    console.log("DataMapCollection", v._id);

                    return (
                      <>
                        <Grid
                          item
                          lg={
                            AllCollectionRes?.data?.length >= 3
                              ? 4
                              : AllCollectionRes?.data?.length == 1
                              ? 12
                              : AllCollectionRes?.data?.length == 2
                              ? 6
                              : null
                          }
                          md={
                            AllCollectionRes?.data?.length >= 3
                              ? 4
                              : AllCollectionRes?.data?.length == 1
                              ? 12
                              : AllCollectionRes?.data?.length == 2
                              ? 6
                              : null
                          }
                          sm={AllCollectionRes?.data?.length >= 3 ? 6 : 12}
                          xs={12}
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Link
                            style={{
                              textDecoration: "none",
                              color:
                                theme.palette.mode === "dark"
                                  ? "white"
                                  : "#212121",
                            }}
                            to={`Collection/${v?._id}`}
                          >
                            <CollectionCard
                              arr={true}
                              image={v?.avatar?.url}
                              title={v?.name}
                              ownerFname={v?.owner?.firstName}
                              ownerLname={v?.owner?.lastName}
                              // owner="acb"
                              despc={v?.description}
                              id={v?._id}
                            />
                          </Link>
                        </Grid>
                      </>
                    );
                  })}
              </Grid>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Pagination
                  count={AllCollectionRes?.totalPages}
                  page={pageCount}
                  onChange={handleChangePagination}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default MyCollection;
