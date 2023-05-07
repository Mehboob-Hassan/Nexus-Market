import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  IconButton,
  Pagination,
  Typography,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import styles from "../Profile/Profile.module.sass";
import { useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import bgImage from "../Profile/bg.jpg";
import avatarman from "../Profile/avatarMen.png";
import EditIcon from "@mui/icons-material/Edit";
import { dashUserDataAction } from "../../Redux/actions";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/Footer";
import NFTimg from "./NFTImg.avif";
import NFTbg from "./bgNFT.avif";
import { getSingleCollectionAction } from "../../Redux/actions";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteCollectionAction } from "../../Redux/actions";
import CollectionCard from "../../components/CollectionCard";
import { getNFTbyCollectionIdAction } from "../../Redux/actions";
import { getChainID } from "../../blockchain/use-Instances";
import ScreenLoading from "../../components/Loading/ScreenLoading";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <>
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
      </div>
    </>
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

const CollectionByID = () => {
  let { id } = useParams();

  console.log("ThisIsParamID", id);

  let dispatch = useDispatch();
  const theme = useTheme();

  const [profileDataState, setProfileDataState] = useState("test");
  const [btnCollection, setBtnCollection] = useState(false);
  const [deletedCollectionNavigate, setdeletedCollectionNavigate] =
    useState(false);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const walletAddressGet = useSelector(
    (state) => state.saveWalletAddressReducer.users
  );

  const chainIdGet = useSelector((state) => state.saveChainIdReducer.users);

  console.log("CheckingChainIDFRes", chainIdGet);
  //   useEffect(() => {
  //     if (ProfileData) {
  //       setProfileDataState(ProfileData);
  //     }
  //   });

  //   useEffect(() => {
  //     dispatch(dashUserDataAction());
  //   }, []);

  //   const ProfileData = useSelector((state) => state.dashUserDataReducer.users);
  const ProfileData = "";

  console.log("this is profile dataProfileScrren", ProfileData);

  const useStyles = makeStyles({
    btn: {
      "&:hover": {
        backgroundColor: "#232121",
      },
    },
  });

  const classes = useStyles();

  let navigate = useNavigate();

  const singleCollectionResponse = useSelector(
    (state) => state.singleCollectionReducer.users
  );
  const deletedCollectionRes = useSelector(
    (state) => state.deleteCollectionReducer.users
  );

  const [pageCount, setPageCount] = React.useState(1);
  const [chainId, setChainId] = useState("");

  const handleChangePagination = (event, value) => {
    setPageCount(value);
    dispatch(getNFTbyCollectionIdAction(id, value, chainIdGet));
  };

  useEffect(() => {
    dispatch(getSingleCollectionAction(id));
    dispatch(getNFTbyCollectionIdAction(id, pageCount, chainIdGet));
  }, [chainIdGet]);

  const nftsByCollectionIdRes = useSelector(
    (state) => state.nftByCollectionIdReducer.users
  );

  console.log("nftsByCollectionIdRes", nftsByCollectionIdRes?.data);
  console.log("ThisIsSingleCollectionResByID1", singleCollectionResponse);

  const handleDeleteCollection = () => {
    dispatch(deleteCollectionAction(id));
    setdeletedCollectionNavigate(true);
  };

  useEffect(() => {
    if (
      deletedCollectionRes.status === true &&
      deletedCollectionNavigate === true
    ) {
      setTimeout(() => {
        navigate("/MyCollections");
        setdeletedCollectionNavigate(false);
      }, 1000);
    }
  }, [deletedCollectionRes, deletedCollectionNavigate]);

  useEffect(() => {
    if (walletAddressGet === singleCollectionResponse?.data?.owner?.address) {
      setBtnCollection(true);
    } else {
      setBtnCollection(false);
    }
  }, [walletAddressGet, singleCollectionResponse]);

  return (
    <Box
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <Navbar />
      {singleCollectionResponse?.data ? (
        <Box
          className={styles.profileContainerWrapper}
          sx={{
            bgcolor: "background.default",
            color: "text.primary",
          }}
        >
          <Box
            className={styles.profileContainer}
            sx={{
              bgcolor: "background.default",
              color: "text.primary",
            }}
          >
            <Box className={styles.bioDataWrapper}>
              <Box
                sx={{
                  width: "100%",
                  height: "200px",
                  backgroundImage:
                    profileDataState === "test"
                      ? `url(${singleCollectionResponse?.data?.background?.url})`
                      : `url(${NFTbg})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  borderRadius: "18px",
                }}
              >
                {btnCollection ? (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      width: "100%",
                      justifyContent: "flex-end",
                      p: "15px",
                    }}
                  >
                    <Box>
                      <Button
                        variant="contained"
                        sx={{
                          textTransform: "capitalize",
                          backgroundColor: "background.fontClr",
                          "&:hover": {
                            backgroundColor: "#69686d",
                          },
                        }}
                        endIcon={<BorderColorIcon />}
                        onClick={() =>
                          navigate(
                            `/MyCollections/Collection/Update/${singleCollectionResponse?.data?._id}`
                          )
                        }
                      >
                        Edit
                      </Button>
                    </Box>
                    <Box sx={{ ml: "10px" }}>
                      <Button
                        variant="contained"
                        sx={{
                          textTransform: "capitalize",
                          backgroundColor: "background.fontClr",
                          "&:hover": {
                            backgroundColor: "#69686d",
                          },
                        }}
                        endIcon={<DeleteIcon />}
                        onClick={handleDeleteCollection}
                      >
                        Delete
                      </Button>
                    </Box>
                  </Box>
                ) : null}
              </Box>
              <Box
                sx={{
                  width: "180px",
                  height: "180px",
                  backgroundImage:
                    profileDataState === "test"
                      ? `url(${singleCollectionResponse?.data?.avatar?.url})`
                      : `url(${NFTimg})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "start",
                  border: `5px solid ${theme.palette.background.fontClr}`,
                  borderRadius: "50%",
                  margin: "-90px auto 1.2rem",
                }}
              ></Box>
              <Box className={styles.bioDataInfoWrapper}>
                <Typography className={styles.nameText}>
                  {profileDataState === "test"
                    ? singleCollectionResponse?.data?.name
                    : "asdsad@_39-89"}
                </Typography>

                <Typography variant="body2" className={styles.descriptionText}>
                  {profileDataState === "test"
                    ? singleCollectionResponse?.data?.owner?.address
                    : "0x...jkbcv90"}
                </Typography>

                <Typography className={styles.descriptionText}>
                  {profileDataState === "test"
                    ? singleCollectionResponse?.data?.description
                    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi arcu mi, cursus sed ante et, eleifend feugiat diam. Maecenas viverra lectus id odio laoreet, sit amet rhoncus magna volutpat."}
                </Typography>
              </Box>
            </Box>
            {/* <Box className={styles.nftsByCategoriesWrapper}>
            <Box sx={{ width: "100%" }}>
              <Tabs
                sx={{ "& button": { textTransform: "capitalize" } }}
                indicatorColor="inherit"
                textColor="inherit"
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                centered
              >
                <Tab label="Collected" {...a11yProps(0)} />
                <Tab label="Created" {...a11yProps(1)} />
                <Tab label="On Sale" {...a11yProps(2)} />
                <Tab label="Offers" {...a11yProps(3)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Box className={styles.cardContainer}>
                {cardData &&
                  cardData.map((v, i) => {
                    return <NFTCard image={v.img} title={v.title} id={v.id} />;
                  })}
              </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
              Create
            </TabPanel>
            <TabPanel value={value} index={2}>
              On Sale
            </TabPanel>
            <TabPanel value={value} index={3}>
              Offers
            </TabPanel>
          </Box> */}
            {nftsByCollectionIdRes?.data?.length >= 1 ? (
              <Box>
                <Grid container spacing={2}>
                  {nftsByCollectionIdRes?.data &&
                    nftsByCollectionIdRes?.data?.map((v, i) => {
                      console.log("thisIsNFTDetail", v);
                      return (
                        <Grid
                          item
                          lg={
                            nftsByCollectionIdRes?.data?.length >= 3
                              ? 4
                              : nftsByCollectionIdRes?.data?.length == 1
                              ? 12
                              : nftsByCollectionIdRes?.data?.length == 2
                              ? 6
                              : null
                          }
                          md={
                            nftsByCollectionIdRes?.data?.length >= 3
                              ? 4
                              : nftsByCollectionIdRes?.data?.length == 1
                              ? 12
                              : nftsByCollectionIdRes?.data?.length == 2
                              ? 6
                              : null
                          }
                          sm={nftsByCollectionIdRes?.data?.length >= 3 ? 6 : 12}
                          xs={12}
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Link
                            to={`/nft/${v?.tokenAddress}/${v?.tokenId}`}
                            style={{
                              textDecoration: "none",
                            }}
                          >
                            <CollectionCard
                              key={i}
                              heading={v?.name}
                              description={v?.description}
                              coverImage={v?.image}
                              type={v?.fileType}
                            />
                          </Link>
                        </Grid>
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
                    count={nftsByCollectionIdRes?.totalPages}
                    page={pageCount}
                    onChange={handleChangePagination}
                  />
                </Box>
              </Box>
            ) : (
              <Box sx={{ mt: "50px" }}>
                <Typography sx={{ textAlign: "center" }}>
                  No data found
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      ) : (
        <ScreenLoading />
      )}

      <Footer />
    </Box>
  );
};

export default CollectionByID;
