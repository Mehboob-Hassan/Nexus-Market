import React from "react";
import styles from "./Dashboard.module.sass";
import Layout from "../../components/Layout";
import { style } from "@mui/system";
import NFTCard from "../../components/NFTCard";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { cardData } from "../../config";
import { useTheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles({
//   button: {
//     "&..MuiButton-root:hover": {
//       backgroundColor: "black",
//     },
//   },
// });

export default function Dashboard() {
  // const card = [
  //   {
  //     id: 1,
  //     title: "Crypto Hero Marc 1",
  //     img: "ozean_Images/Images/Background (1).png",
  //   },
  //   {
  //     id: 2,
  //     title: "Crypto Hero Marc 2",
  //     img: "ozean_Images/Images/Background (2).png",
  //   },
  //   {
  //     id: 3,
  //     title: "Crypto Hero Marc 3",
  //     img: "ozean_Images/Images/Background (3).png",
  //   },
  //   {
  //     id: 4,
  //     title: "Crypto Hero Marc 4",
  //     img: "ozean_Images/Images/Background (4).png",
  //   },
  //   {
  //     id: 5,
  //     title: "Crypto Hero Marc 5",
  //     img: "ozean_Images/Images/Background (5).png",
  //   },
  //   {
  //     id: 6,
  //     title: "Crypto Hero Marc 6",
  //     img: "ozean_Images/Images/Background (6).png",
  //   },
  //   {
  //     id: 7,
  //     title: "Crypto Hero Marc 7",
  //     img: "ozean_Images/Images/Background (7).png",
  //   },
  //   {
  //     id: 8,
  //     title: "Crypto Hero Marc 8",
  //     img: "ozean_Images/Images/Background (8).png",
  //   },
  // ];

  const theme = useTheme();
  // const classes = useStyles();

  return (
    <>
      <Layout>
        <Box className={styles.container}>
          <Box className={styles.filter}>
            <Box className={styles.filterSection}>
              <Typography variant="body2" sx={{ color: "text.primary" }}>
                19,299 results
              </Typography>
              <Box className={styles.filterItems}>
                <Box className={styles.filterItem}>
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "capitalize",
                      color: "background.fontClr",
                      backgroundColor: "background.dashBoardBtnClr",
                      color: "white",
                    }}
                    endIcon={<CloseIcon sx={{ width: "15px" }} />}
                    className={styles.button}
                  >
                    Eth
                  </Button>
                </Box>
                <Box className={styles.filterItem}>
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "capitalize",
                      color: "background.fontClr",
                      backgroundColor: "background.dashBoardBtnClr",
                      color: "white",
                    }}
                    endIcon={<CloseIcon sx={{ width: "15px" }} />}
                    className={styles.button}
                  >
                    Pol
                  </Button>
                </Box>
                <Box className={styles.filterItem}>
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "capitalize",
                      color: "background.fontClr",
                      backgroundColor: "background.dashBoardBtnClr",
                      color: "white",
                    }}
                    endIcon={<CloseIcon sx={{ width: "15px" }} />}
                    className={styles.button}
                  >
                    Bit
                  </Button>
                </Box>
                <Box className={styles.filterItem}>
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "capitalize",
                      color: "background.fontClr",
                      backgroundColor: "background.dashBoardBtnClr",
                      color: "white",
                    }}
                    endIcon={<CloseIcon sx={{ width: "15px" }} />}
                    className={styles.button}
                  >
                    Mel
                  </Button>
                </Box>
                <Box className={styles.filterItem}>
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "capitalize",
                      color: "background.fontClr",
                      backgroundColor: "background.dashBoardBtnClr",
                      color: "white",
                    }}
                    endIcon={<CloseIcon sx={{ width: "15px" }} />}
                    className={styles.button}
                  >
                    Dol
                  </Button>
                </Box>
                <Box
                  sx={{
                    ml: "10px",
                  }}
                >
                  <Button
                    variant="text"
                    sx={{
                      textTransform: "capitalize",
                      color: "background.fontClr",
                    }}
                  >
                    Clear All
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className={styles.cardContainer}>
            {cardData &&
              cardData.map((v, i) => {
                return <NFTCard image={v.img} title={v.title} id={v.id} />;
              })}
          </Box>
        </Box>
      </Layout>
    </>
  );
}
