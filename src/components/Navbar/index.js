import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.sass";
import Sidebar from "../Sidebar";
import Sidebar2 from "../Sidebar2";
import { FaBars } from "react-icons/fa";
import { Avatar, Box } from "@mui/material";
import Box2 from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Button, IconButton } from "@mui/material";
import List from "@mui/material/List";
import List2 from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItem2 from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import logo from "./Ef_Logo2.png";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import "../../App.css";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../Redux/actions";
import MenuIcon from "@mui/icons-material/Menu";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../walletweb3/connectors";
import { ethers, providers } from "ethers";
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';

import {
  ConnectWalelt,
  disConnectWallet,
} from "../../blockchain/use-Instances";
import { saveWalletAddressAction } from "../../Redux/actions";
import loginReducer from "../../Redux/reducers/loginReducer";
import { dashUserDataAction } from "../../Redux/actions";
import Tooltip from "@mui/material/Tooltip";
import LogoDark from "./LogoForBlackNavbar.png";
import LogoWhite from "./LogoForWhiteNavbar.png";
import { saveChainIdAction } from "../../Redux/actions";
import ArrowImg from "./Arrow - Left Circle.svg";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { getSigner } from "../../blockchain/use-Instances";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

export default function Navbar(props) {
  const theme = useTheme();

  const [connectedAccount, setConnectedAccount] = useState("");
  const [CheckProfileDropDown, setProfileDropDown] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [chainID, setChainID] = useState();

  console.log("WalletAddressFetched", connectedAccount);

  const ProfileData = useSelector((state) => state.dashUserDataReducer.users);

  const { connectWltFun2 } = ConnectWalelt();
  const connectWeb3Wallet = async (id) => {
    try {
      console.log("useEffect Runs...", id);
      var result = await connectWltFun2(id);
      console.log("this is result", result.network);
      if (result.success == true) {
        setConnectedAccount();
        setProfileDropDown(true);
        setIsWalletConnected(true);
        let formData = new FormData();
        let name = "B219zhuakewb";
        if (connectedAccount === ProfileData?.address) {
          formData.append("address", result.accounts);
        } else {
          formData.append("address", result.accounts);
          formData.append("firstName", name);
          formData.append("lastName", "");
          formData.append("description", "");
          formData.append("avatar", "");
          formData.append("background", "");
          formData.append("twitter", "");
          formData.append("facebook", "");
          formData.append("instagram", "");
        }
        dispatch(loginAction(formData));
        dispatch(saveWalletAddressAction(result.accounts));
        dispatch(saveChainIdAction(result?.network));
        // saving data to LS
        localStorage.setItem("isWalletConnected", true);
        localStorage.setItem("wltAddr", result.accounts);
        localStorage.setItem("chainID", result?.network);
        setOpen(false);
        setChainID(id);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getProviderOrSigner = async (needSigner = false) => {
    try {
      const web3modal = new Web3Modal();
      const provider = await web3modal.connect();
      const web3Provider = new providers.Web3Provider(provider);

      if (needSigner) {
        const signer = web3Provider.getSigner();
        return signer;
      }
      return web3Provider;
    } catch (error) {
      console.log(error);
    }
  }

  const connectEth = async () => {
    if(window.ethereum !== undefined){
      const provider = await getProviderOrSigner();
      provider.on("accountsChanged", function (accounts) {
        console.log("this is accountsChanged", accounts);
        connectWeb3Wallet(97);
      });
  
      // detect Network change
      provider.on("chainChanged", function (networkId) {
        var chain = parseInt(networkId);
        console.log("this is chainCHanged", chain);
        connectWeb3Wallet(97);
      });
    }else{
      const provider = new WalletConnectProvider({
        infuraId: 'https://mainnet.infura.io/v3/2e7f229d901e4926ae6f766f78f6c90c', // Replace with your Infura project ID
      });

      console.log("Else part running");
      console.log(provider);
      await provider.connect();
      const web3Provider = new providers.Web3Provider(provider);
      try {
        await web3Provider.send('eth_requestAccounts', []);
      } catch (error) {
        console.log("Error in getting provider");
      }
    }
  }

  // disconnect Wallet
  const disconnectWeb3Modal = async () => {
    await disConnectWallet();
    setProfileDropDown(false);
    console.log("you disConnected Wallet");
    localStorage.setItem("isWalletConnected", false);
    localStorage.removeItem("wltAddr");
    localStorage.removeItem("chainID");
    setIsWalletConnected(false);
  };

  useEffect(() => {
    connectEth();
    dispatch(dashUserDataAction());
    var chainID007 = localStorage.getItem("chainID");

    var signer = getSigner();
    console.log("this is signer007", signer);
    if (signer == null) {
      connectWeb3Wallet(Number(97));
    } else {
      setProfileDropDown(true);
    }
    //   // let formData1 = new FormData();
    //   // formData1.append("address", ProfileData?.address);
    //   // dispatch(loginAction({ address: connectedAccount }));
  }, []);

  var inputStyles = {
    // border: '1px solid #cbcbcb',
    color: "darkGray",
  };

  var placeholderStyles = {
    ...inputStyles,
    color: "#999999",
  };

  console.log("ThemeCheck", theme);

  let navigate = useNavigate();

  // ______________________________
  const [state, setState] = React.useState({
    left: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const toggleDrawer2 = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => {
    if (anchor == "left") {
      return (
        <Box
          sx={{
            width: anchor === "top" || anchor === "bottom" ? "auto" : 300,
            backgroundColor: "background.sideBr",
          }}
          role="presentation"
        // onClick={toggleDrawer(anchor, false)}
        // onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {["Inbox"].map((text, index) => (
              <ListItem button key={text}>
                {/* <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} /> */}
                <Sidebar
                  closeBtnClickHandler={() => {
                    setState({ ...state, left: false });
                  }}
                />
              </ListItem>
            ))}
          </List>
          {/* <Divider /> */}
          {/* <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
        </Box>
      );
    }
    if (anchor == "right") {
      return (
        <Box2
          sx={{
            width: anchor === "top" || anchor === "bottom" ? "auto" : 300,
            backgroundColor: "#010613",
          }}
          role="presentation"
        >
          <List2>
            {["Inbox"].map((text, index) => (
              <ListItem2 button key={text}>
                {/* <ListItemIcon>
          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
        <ListItemText primary={text} /> */}
                <Sidebar2 />
              </ListItem2>
            ))}
          </List2>
          {/* <Divider /> */}
          {/* <List>
    {["All mail", "Trash", "Spam"].map((text, index) => (
      <ListItem button key={text}>
      <ListItemIcon>
      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
      </ListItemIcon>
      <ListItemText primary={text} />
      </ListItem>
      ))}
    </List> */}
        </Box2>
      );
    }
  };

  // ______________________________
  const [sidebar, setsidebar] = useState(false);
  const [IsActive, setIsActive] = useState(false);
  const [IsActive1, setIsActive1] = useState(false);
  // handler = () => {
  //   setIsActive(!IsActive);
  // };

  // {
  //   "walletAddress" : "23123123123123123126",
  //   "name" : "NabiBaksh",
  //   "email" : "nabibux2@gmail.com",
  //   "phone" : "03423597786"
  // }

  const handleToggle = () => {
    setIsActive(!IsActive);
  };
  const handleToggle1 = () => {
    setIsActive1(!IsActive1);
  };

  const handleClick = () => {
    setToggleButton(true);
  };

  const body = {
    userName: "Baksh007",
    walletAddress: "0xD420Ad0062D763068203d194A4cE06De7673f3CK",
    description: "",
    twitter: "",
    facebook: "",
    instagram: "",
  };

  let formData = new FormData();
  formData.append("userName", "Baksh007");
  formData.append(
    "walletAddress",
    "0xD420Ad0062D763068203d194A4cE06De7673f3CF"
  );
  // formData.append(body)
  // formData.append()

  const handleApi = () => {
    profileHit(formData);

    // setTimeout(() => {
    //   navigate('/profile');
    // }, 2000);
  };

  const stylingModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "auto",
    bgcolor: "background.finestNft",
    border: `1px solid ${theme.palette.background.fontClr}`,
    boxShadow: 24,
    p: 2,
    borderRadius: "10px",
  };

  const useStyles = makeStyles({
    button: {
      "&:hover": {
        backgroundColor: "#232121",
        border: "none",
      },
    },
  });

  let dispatch = useDispatch();

  console.log("thisIsProfileRes", ProfileData);

  const [toggleButton, setToggleButton] = useState(true);

  console.log("CheckButtonStatus", toggleButton);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const classes = useStyles();

  // const handleModalClick = () => {

  //   setTimeout(() => {
  //     getAccount();
  //   }, 1000);

  //   setToggleButton(false);
  //   handleClose();
  // };

  return (
    <>
      <Box
        className={styles.bg}
        sx={{
          bgcolor: "background.navbrclr",
          color: "text.primary",
          boxShadow: "0 4px 10px -2px gray",
        }}
      >
        {/* sx={{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'start'
          }} */}
        <Box>
          {/* <Box>
                  <img src={logo} width='10%' />
              </Box> */}
          <Box
            sx={{
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            <Typography variant="h6" className={styles.heading}>
              {theme.palette.mode === "dark" ? (
                <img src={LogoDark} width="270px" />
              ) : (
                <img src={LogoWhite} width="270px" />
              )}
              <MenuIcon
                onClick={toggleDrawer("left", true)}
                className={styles.ham}
                sx={{
                  color: "background.fontClr",
                }}
              />
            </Typography>
          </Box>
        </Box>
        <Box className={styles.navAside}>
          <Box
            className={styles.search}
            sx={{
              bgcolor: "background.navbrclrIcon",
            }}
          >
            <input
              placeholder="Search Item, collections and accounts"
              type="text"
              style={inputStyles}
              id="inputID"
            />
            {/* <img
              src="./ozean_Images/Icons/Search_Icon.svg"
              alt="cant load image"
            /> */}
            <IconButton>
              <SearchIcon sx={{ color: "background.fontClr" }} />
            </IconButton>
          </Box>
          <Box className={styles.icons}>
            <Tooltip title="Collections">
              <Box
                className={styles.icon}
                sx={{
                  bgcolor: "background.navbrclrIcon",
                }}
                onClick={() => navigate("/Collections")}
              >
                <IconButton aria-label="activity">
                  <LocalActivityIcon sx={{ color: "background.fontClr" }} />
                </IconButton>
              </Box>
            </Tooltip>

            <Tooltip title="Marketplace">
              <Box
                className={styles.icon}
                sx={{
                  bgcolor: "background.navbrclrIcon",
                }}
                onClick={() => navigate("/Marketplace")}
              >
                <IconButton aria-label="Marketplace">
                  <StorefrontIcon sx={{ color: "background.fontClr" }} />
                </IconButton>
              </Box>
            </Tooltip>

            <Box
              className={styles.dropdown1}
              sx={{
                color: "text.primary",
              }}
            >
              <Tooltip title="Information Menu">
                <Box
                  className={styles.icon}
                  sx={{
                    bgcolor: "background.navbrclrIcon",
                  }}
                  onClick={handleToggle1}
                >
                  <IconButton aria-label="Marketplace">
                    <ExpandMoreIcon sx={{ color: "background.fontClr" }} />
                  </IconButton>
                </Box>
              </Tooltip>
              <Box
                className={IsActive1 ? `${styles.links1}` : `${styles.hide1}`}
                sx={{
                  bgcolor: "background.finestNft",
                  color: "text.primary",
                }}
              >
                <Button
                  sx={{ color: "text.primary", textTransform: "capitalize" }}
                  variant="text"
                  onClick={() => {
                    handleToggle1();
                    navigate("/FAQ");
                  }}
                  startIcon={<QuestionMarkIcon />}
                >
                  How It Works
                </Button>
              </Box>
            </Box>
            {CheckProfileDropDown ? (
              <Box
                className={styles.dropdown}
                sx={{
                  color: "text.primary",
                }}
              >
                <Avatar
                  alt="Avatar"
                  src={ProfileData?.avatar?.url}
                  className={styles.avatar}
                  onClick={handleToggle}
                />

                <Box
                  className={IsActive ? `${styles.links}` : `${styles.hide}`}
                  sx={{
                    bgcolor: "background.finestNft",
                    color: "text.primary",
                  }}
                >
                  <Button
                    sx={{ color: "text.primary", textTransform: "capitalize" }}
                    variant="text"
                    onClick={() => {
                      handleToggle();
                      navigate("/profile");
                    }}
                  >
                    My Profile
                  </Button>

                  <Button
                    sx={{ color: "text.primary", textTransform: "capitalize" }}
                    variant="text"
                    onClick={() => {
                      handleClick();
                      handleToggle();
                      navigate("/MyCollections");
                    }}
                  >
                    My Collection
                  </Button>

                  <Button
                    sx={{ color: "text.primary", textTransform: "capitalize" }}
                    variant="text"
                    onClick={() => {
                      handleClick();
                      handleToggle();
                      disconnectWeb3Modal();
                    }}
                  >
                    Log Out
                  </Button>
                </Box>
              </Box>
            ) : (
              <Box
                className={styles.icon}
                sx={{
                  bgcolor: "background.navbrclrIcon",
                }}
              >
                <IconButton
                  aria-label="connect"
                  onClick={() => {
                    // handleOpen();
                    connectWeb3Wallet(97);
                    // connectWeb3Wallet();
                  }}
                >
                  <AddIcon sx={{ color: "background.fontClr" }} />
                </IconButton>
              </Box>
            )}

            {/* </Box> */}
            <Box className={styles.icon}>
              <img
                onClick={toggleDrawer("right", true)}
                src={ArrowImg}
                alt="cant load image"
              />
            </Box>
          </Box>
        </Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={stylingModal}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Box>
                <IconButton aria-label="connect" onClick={handleClose}>
                  <CloseIcon sx={{ color: "background.fontClr" }} />
                </IconButton>
              </Box>
            </Box>
            <Box sx={{ mt: "14px", mb: "14px" }}>
              <Box>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    bgcolor: "background.fontClr",
                    textTransform: "capitalize",
                    color: "#ffff",
                    border: "none",
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                  className={classes.button}
                  onClick={() => {
                    connectWeb3Wallet(56);
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: "10px",
                    }}
                  >
                    <img
                      src={
                        "https://res.cloudinary.com/learn2code/image/upload/v1680935322/nexusGalaxy/icons/bsc_asbwla.png"
                      }
                      width="30px"
                    />
                  </Box>
                  <Box>BINANCE SMART CHAIN</Box>
                </Button>
              </Box>

              {/* Box2 */}
              <Box sx={{ marginTop: "10px" }}>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    bgcolor: "background.fontClr",
                    textTransform: "capitalize",
                    color: "#ffff",
                    border: "none",
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                  className={classes.button}
                  onClick={() => {
                    connectWeb3Wallet(97);
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: "10px",
                    }}
                  >
                    <img
                      src={
                        "https://res.cloudinary.com/learn2code/image/upload/v1680935322/nexusGalaxy/icons/bsc_asbwla.png"
                      }
                      width="30px"
                    />
                  </Box>
                  <Box>BSC TEST NET</Box>
                </Button>
              </Box>

              <Box sx={{ marginTop: "10px" }}>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    bgcolor: "background.fontClr",
                    textTransform: "capitalize",
                    color: "#ffff",
                    border: "none",
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                  className={classes.button}
                  onClick={() => {
                    connectWeb3Wallet(1);
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: "10px",
                    }}
                  >
                    <img
                      src={
                        "https://res.cloudinary.com/learn2code/image/upload/v1680935322/nexusGalaxy/icons/ethereum_d1cskn.png"
                      }
                      width="30px"
                    />
                  </Box>
                  <Box>ETHEREUM MAINNET</Box>
                </Button>
              </Box>

              <Box sx={{ marginTop: "10px" }}>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    bgcolor: "background.fontClr",
                    textTransform: "capitalize",
                    color: "#ffff",
                    border: "none",
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                  className={classes.button}
                  onClick={() => {
                    connectWeb3Wallet(5);
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: "10px",
                    }}
                  >
                    <img
                      src={
                        "https://res.cloudinary.com/learn2code/image/upload/v1680935322/nexusGalaxy/icons/ethereum_d1cskn.png"
                      }
                      width="30px"
                    />
                  </Box>
                  <Box>GOERLI TESTNET</Box>
                </Button>
              </Box>

              {/* POLYGON */}
              <Box sx={{ marginTop: "10px" }}>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    bgcolor: "background.fontClr",
                    textTransform: "capitalize",
                    color: "#ffff",
                    border: "none",
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                  className={classes.button}
                  onClick={() => {
                    connectWeb3Wallet(137);
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: "10px",
                    }}
                  >
                    <img
                      src={
                        "https://res.cloudinary.com/learn2code/image/upload/v1680935322/nexusGalaxy/icons/polygon_oqzvpd.png"
                      }
                      width="30px"
                    />
                  </Box>
                  <Box>POLYGON</Box>
                </Button>
              </Box>

              {/* POLYGON TEST NET */}
              <Box sx={{ marginTop: "10px" }}>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    bgcolor: "background.fontClr",
                    textTransform: "capitalize",
                    color: "#ffff",
                    border: "none",
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                  className={classes.button}
                  onClick={() => {
                    connectWeb3Wallet(80001);
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: "10px",
                    }}
                  >
                    <img
                      src={
                        "https://res.cloudinary.com/learn2code/image/upload/v1680935322/nexusGalaxy/icons/polygon_oqzvpd.png"
                      }
                      width="30px"
                    />
                  </Box>
                  <Box>POLYGON TESTNET</Box>
                </Button>
              </Box>
              {/* <Box sx={{ mt: "10px" }}>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    bgcolor: "background.fontClr",
                    textTransform: "capitalize",
                    color: "#ffff",
                    border: "none",
                    width: "100%",
                  }}
                  className={classes.button}
                  >
                  MetaMask
                </Button>
              </Box> */}
            </Box>
          </Box>
        </Modal>
      </Box>
      {/* ________________________ */}
      <Box>
        {["left", "right"].map((anchor) => (
          <React.Fragment key={anchor}>
            {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </Box>
    </>
  );
}
