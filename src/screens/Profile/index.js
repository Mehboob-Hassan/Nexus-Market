import React, { useEffect, useState } from "react";
import styles from "./Profile.module.sass";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Layout from "../../components/Layout";
import NFTCard from "../../components/NFTCard";
import { Button, IconButton } from "@mui/material";
import { cardData } from "../../config";
import { useTheme } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { user_profile_image_URL } from "../../config";
import { user_profile_coverImage_URL } from "../../config";
import bgImage from "./bg.jpg";
import avatarman from "./avatarMen.png";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import loginReducer from "../../Redux/reducers/loginReducer";
import { loginAction, myNftOnSellAction } from "../../Redux/actions";
import { dashUserDataAction } from "../../Redux/actions";

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

const Profile = () => {
  let dispatch = useDispatch();
  const theme = useTheme();

  const [profileDataState, setProfileDataState] = useState("test");

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (ProfileData) {
      setProfileDataState(ProfileData);
    }
  });

  useEffect(() => {
    let onSell = true;
    dispatch(dashUserDataAction());
    dispatch(
      myNftOnSellAction(
        parseInt(localStorage.getItem("chainID")),
        localStorage.getItem("tokenAddress"),
        onSell
      )
    );
  }, []);

  const ProfileData = useSelector((state) => state.dashUserDataReducer.users);
  const myNftOnSellRes = useSelector((state) => state.myNftOnSellReducer.users);

  console.log("myNftOnSellResProfileScreen", myNftOnSellRes);

  const useStyles = makeStyles({
    btn: {
      "&:hover": {
        backgroundColor: "#232121",
      },
    },
  });

  const classes = useStyles();

  let navigate = useNavigate();

  return (
    <>
      <Layout>
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
                      ? `url(${bgImage})`
                      : `url(${ProfileData?.background?.url})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  borderRadius: "18px",
                }}
              ></Box>

              <Box
                sx={{
                  width: "180px",
                  height: "180px",
                  backgroundImage:
                    profileDataState === "test"
                      ? `url(${avatarman})`
                      : `url(${ProfileData?.avatar?.url})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "start",
                  border: `5px solid ${theme.palette.background.fontClr}`,
                  borderRadius: "50%",
                  margin: "-90px auto 1.2rem",
                }}
              ></Box>

              <Box
                sx={{
                  margin: "-90px auto 5.2rem",
                }}
              >
                <Box
                  sx={{
                    display: {
                      lg: "block",
                      md: "block",
                      sm: "block",
                      xs: "none",
                    },
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "background.fontClr",
                      textTransform: "capitalize",
                      color: "#ffff",
                      "&:hover": {
                        backgroundColor: "#69686d",
                      },
                    }}
                    className={classes.btn}
                    onClick={() => navigate("/editProfile")}
                  >
                    Update Profile
                  </Button>
                </Box>

                <Box
                  sx={{
                    display: {
                      lg: "none",
                      md: "none",
                      sm: "none",
                      xs: "block",
                    },
                  }}
                >
                  <IconButton onClick={() => navigate("/editProfile")}>
                    <EditIcon sx={{ color: "background.fontClr" }} />
                  </IconButton>
                </Box>
              </Box>
              <Box className={styles.bioDataInfoWrapper}>
                <Typography className={styles.nameText}>
                  {profileDataState === "test"
                    ? "B219zhuakewb"
                    : profileDataState?.firstName}
                </Typography>

                <Typography variant="body2" className={styles.descriptionText}>
                  {profileDataState === "test"
                    ? "0x...jkbcv90"
                    : ProfileData?.address}
                </Typography>

                <Typography className={styles.descriptionText}>
                  {profileDataState === "test"
                    ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi arcu mi, cursus sed ante et, eleifend feugiat diam. Maecenas viverra lectus id odio laoreet, sit amet rhoncus magna volutpat."
                    : ProfileData?.description}
                </Typography>
              </Box>
            </Box>
            <Box className={styles.nftsByCategoriesWrapper}>
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
                  <Tab label="On Sale" {...a11yProps(0)} />
                  <Tab label="Collected" {...a11yProps(1)} />
                  <Tab label="Created" {...a11yProps(2)} />
                  <Tab label="Offers" {...a11yProps(3)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <Box className={styles.cardContainer}>
                  {myNftOnSellRes?.data &&
                    myNftOnSellRes?.data?.map((v, i) => {
                      return (
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
                      );
                    })}
                </Box>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Box className={styles.cardContainer}>
                  {cardData &&
                    cardData.map((v, i) => {
                      return (
                        <NFTCard image={v.img} title={v.title} id={v.id} />
                      );
                    })}
                </Box>
              </TabPanel>
              <TabPanel value={value} index={2}>
                Create
              </TabPanel>
              <TabPanel value={value} index={3}>
                Offers
              </TabPanel>
            </Box>
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default Profile;
