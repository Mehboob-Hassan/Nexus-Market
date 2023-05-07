import React, { useState } from "react";
import styles from "./Layout.module.sass";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import Sidebar2 from "../Sidebar2";
import { AiOutlineCopyright } from "react-icons/ai";
import { Box, Switch, Typography } from "@mui/material";
import Index from "../DarkTheme/Index";
import Footer from "../Footer/Footer";
import { useTheme } from "@mui/material/styles";

export default function Layout(props) {
  const [sidebar, setsidebar] = useState(true);
  function data() {
    setsidebar(!sidebar);
    console.log("data =====", sidebar);
  }

  const theme = useTheme();

  return (
    <>
      <Box
        className={styles.bg}
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        <Box className={sidebar ? `${styles.sidebar}` : `${styles.hide}`}>
          <Sidebar data={data} />
        </Box>
        <Box
          className={styles.rightDiv}
          sx={{
            bgcolor: "background.default",
            color: "text.primary",
          }}
        >
          <Box sx={{ ml: { lg: "8px", md: "8px", sm: "0px", xs: "0px" } }}>
            <Navbar data={data} />
          </Box>
          <Box className={styles.hero}>
            <Box className={styles.heroLeft}>{props.children}</Box>
            <Box className={styles.heroSide}>
              <Sidebar2 />
            </Box>
          </Box>
        </Box>
      </Box>
      {/* <Box className={styles.footer}>
        <Typography>
          <AiOutlineCopyright /> 2021 Lowin NFT, Inc 
        </Typography>
       <Index  />
      </Box> */}
      <Footer />
    </>
  );
}
