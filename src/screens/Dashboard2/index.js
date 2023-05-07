import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Layout from "../../components/Layout";
import styles from "./Dashboard2.module.sass";
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
import { useSelector, useDispatch } from "react-redux";
import { NFtOnSellAction } from "../../Redux/actions";
import CustomSlider from "./CustomSlider";
import { finestNftAction } from "../../Redux/actions";
import { useNavigate } from "react-router-dom";

const Dashboard2 = () => {
  let dispatch = useDispatch();
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

  let navigate = useNavigate();

  const [dispSnakbr, setdispSnakbr] = useState("block");

  const handleSnakbar = () => {
    setdispSnakbr("none");
  };

  const action = (
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

  const ChainIdRes = useSelector((state) => state.saveChainIdReducer.users);
  let pageCount = 1;
  let onSell = true;

  useEffect(() => {
    dispatch(NFtOnSellAction(ChainIdRes, pageCount, onSell));
    dispatch(finestNftAction());
  }, [ChainIdRes]);

  useEffect(() => {
    dispatch(finestNftAction());
  }, []);

  const NFtOnSellResponse = useSelector(
    (state) => state.nftOnSellReducer.users
  );

  const FinestNFTResponse = useSelector(
    (state) => state.finestNftReducer.users
  );

  console.log("ThisIsFinestnFTResDashBoard", FinestNFTResponse);

  return (
    <>
      <Box
        sx={{
          bgcolor: "background.snakbarClr",
          color: "text.primary",
          display: `${dispSnakbr}`,
        }}
      >
        <SnackbarContent
          message="Nexus Galaxy is under deveploment phase"
          sx={{ bgcolor: "background.snakbarClr" }}
          action={action}
        />
      </Box>
      <Box
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        <Navbar />
        <Box
          className={styles.upper}
          sx={{
            bgcolor: "background.finestNft",
            color: "text.primary",
          }}
        >
          <Box
            className={styles.left}
            sx={{
              mt: { lg: "0px", md: "0px", sm: "0px", xs: "20px" },
            }}
          >
            <Typography
              sx={{ color: "text.primary", textAlign: "center" }}
              variant="h5"
            >
              The Most Finest NFTs in the World.
            </Typography>
            <Box className={styles.btnContainer}>
              <Typography variant="body2">NFT are all the hype now</Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "background.fontClr",
                  textTransform: "capitalize",
                }}
                onClick={() => navigate("/Marketplace")}
              >
                Buy now
              </Button>
            </Box>
          </Box>
          {/* className={styles.right} */}
          <Box
            sx={{
              width: { lg: "65%", md: "70%", sm: "50%", xs: "100%" },
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                bgcolor: "background.finestNft",
                color: "text.primary",
                width: "100%",
              }}
            >
              <CustomSlider FinestNFTResponse={FinestNFTResponse} />
            </Box>
          </Box>
        </Box>
        <Box className={styles.lower}>
          <Typography variant="h5" sx={{ color: "white" }}>
            Explore NFTs
          </Typography>
          <Box className={styles.cardContainer}>
            {NFtOnSellResponse?.nfts &&
              NFtOnSellResponse?.nfts?.map((v, i) => {
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
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Dashboard2;
