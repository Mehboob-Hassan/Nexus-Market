import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";
import { Box, Typography, styled, IconButton } from "@mui/material";
import styles from "./Footer.module.sass";
import DarkMode from "../DarkTheme/Index";
import Theme from "../Theme";
import { ColorModeContext } from "../../App";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "@mui/material/styles";

// const colorWraper = styled(Typography)(({theme})=>({
//    color:theme.typography.
// }))

const Footer = ({ toggleDarkMode, setToggleDarkMode }) => {
  const theme = useTheme();

  console.log("checkThemeStatus", theme.palette.mode);
  const colorMode = React.useContext(ColorModeContext);
  return (
    <>
      <Box
        className={styles.footer}
        sx={{
          bgcolor: "background.finestNft",
          color: "text.primary",
        }}
      >
        <Typography>
          Copyright <AiOutlineCopyright /> 2023, Nexus Galaxy
        </Typography>
        <Box display={"flex"} alignItems={"center"} mr={"2"}>
          {/* <Typography>
              Light Theme
            </Typography>
            <DarkMode toggleDarkMode={toggleDarkMode} setToggleDarkMode={setToggleDarkMode} />
            <Theme className="theme-big" /> */}
          <IconButton
            sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
