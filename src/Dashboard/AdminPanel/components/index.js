import * as React from "react";
import { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LinkIcon from "@mui/icons-material/Link";
import SettingsIcon from "@mui/icons-material/Settings";
import CircleIcon from "@mui/icons-material/Circle";
import { HomePage } from "./HomePage";
import { TransactionIcon } from "./HomePage/Icons/TransactionIcon";
import { DashboardIcon } from "./HomePage/Icons/DashboardIcon";
import { ExchangeIcon } from "./HomePage/Icons/ExchangeIcon";
import { AffiliationsIcon } from "./HomePage/Icons/AffiliationsIcon";
// import { Dashboard } from "./Dashboard";
import { Exchange } from "./Exchange";
import { YourTransactions } from "./YourTransactions";
import { Affiliation } from "./Affiliation";
import { Settings } from "./Settings";
import { Tutorials } from "./Tutorials";
import IntroduceDialog from "./IntroduceDialog";
import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  backgroundColor: "#1f2552",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  backgroundColor: "#1f2552",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer({ children }) {
  let navigate = useNavigate();
  const theme = useTheme();

  const [openHome, setOpenHome] = useState(true);
  const [openDashboard, setOpenDashboard] = useState(false);
  const [openExchange, setOpenExchange] = useState(false);
  const [openTransaction, setOpenTransaction] = useState(false);
  const [openAffiliations, setOpenAffiliations] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);

  const [openDialog, setOpenDialog] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [selectButton, setSelectButton] = useState(true);
  const [selectButton2, setSelectButton2] = useState(false);
  const [selectButton3, setSelectButton3] = useState(false);
  const [selectButton4, setSelectButton4] = useState(false);
  const [selectButton5, setSelectButton5] = useState(false);
  const [selectButton6, setSelectButton6] = useState(false);
  const [selectButton7, setSelectButton7] = useState(false);
  const [selectButton8, setSelectButton8] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleButton1 = () => {
    setSelectButton(true);
    setSelectButton2(false);
    setSelectButton3(false);
    setSelectButton4(false);
    setSelectButton5(false);
    setSelectButton6(false);
    setSelectButton7(false);
    setSelectButton8(false);
    navigate("/AdminPanel");
  };

  const handleButton2 = () => {
    setSelectButton(false);
    setSelectButton2(true);
    setSelectButton3(false);
    setSelectButton4(false);
    setSelectButton5(false);
    setSelectButton6(false);
    setSelectButton7(false);
    setSelectButton8(false);

    navigate("/adminDashboard");
  };

  const handleButton3 = () => {
    setSelectButton(false);
    setSelectButton2(false);
    setSelectButton3(true);
    setSelectButton4(false);
    setSelectButton5(false);
    setSelectButton6(false);
    setSelectButton7(false);
    setSelectButton8(false);

    navigate("/exchange");
  };

  const handleButton4 = () => {
    setSelectButton(false);
    setSelectButton2(false);
    setSelectButton3(false);
    setSelectButton4(true);
    setSelectButton5(false);
    setSelectButton6(false);
    setSelectButton7(false);
    setSelectButton8(false);

    navigate("/transactions");
  };

  const handleButton5 = () => {
    setSelectButton(false);
    setSelectButton2(false);
    setSelectButton3(false);
    setSelectButton4(false);
    setSelectButton5(true);
    setSelectButton6(false);
    setSelectButton7(false);
    setSelectButton8(false);

    navigate("/affiliation");
  };

  const handleButton6 = () => {
    setSelectButton(false);
    setSelectButton2(false);
    setSelectButton3(false);
    setSelectButton4(false);
    setSelectButton5(false);
    setSelectButton6(true);
    setSelectButton7(false);
    setSelectButton8(false);

    navigate("/settings");
  };

  const handleButton7 = () => {
    setSelectButton(false);
    setSelectButton2(false);
    setSelectButton3(false);
    setSelectButton4(false);
    setSelectButton5(false);
    setSelectButton6(false);
    setSelectButton7(true);
    setSelectButton8(false);
    navigate("/tutorials");
  };

  const handleButton8 = () => {
    setSelectButton(false);
    setSelectButton2(false);
    setSelectButton3(false);
    setSelectButton4(false);
    setSelectButton5(false);
    setSelectButton6(false);
    setSelectButton7(false);
    setSelectButton8(true);
    localStorage.removeItem("user");
    navigate("/AdminLogin");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ backgroundColor: "white" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon sx={{ color: "#1f2552" }} />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ color: "#1f2552" }}
          >
            Nexus Galaxy
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              onClick={() => navigate("/")}
              sx={{
                cursor: "pointer",
              }}
            >
              {open ? (
                <img src="./assets/LogoForBlack.png" width="170px" />
              ) : (
                ""
              )}
            </Box>
            <Box>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon sx={{ color: "white" }} />
                ) : (
                  <ChevronLeftIcon sx={{ color: "white" }} />
                )}
              </IconButton>
            </Box>
          </Box>
        </DrawerHeader>
        <Divider />

        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={handleButton1}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#1C214A",
                    padding: "24px",
                    // border: "1px solid #979797",
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <HomeIcon
                    sx={{
                      fill: selectButton ? "#FF8B64" : "rgba(255,255,255,0.8)",
                    }}
                  />
                </Box>
              </ListItemIcon>
              <ListItemText
                primary="Home"
                sx={{
                  opacity: open ? 1 : 0,
                  color: selectButton ? "#FF8B64" : "rgba(255,255,255,0.8)",
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={handleButton2}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#1C214A",
                    padding: "24px",
                    // border: "1px solid #979797",
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box width="18px" height="18px">
                    <DashboardIcon
                      color={
                        selectButton2 ? "#FF8B64" : "rgba(255,255,255,0.8)"
                      }
                    />
                  </Box>
                </Box>
              </ListItemIcon>
              <ListItemText
                primary="Dashboard"
                sx={{
                  opacity: open ? 1 : 0,
                  color: selectButton2 ? "#FF8B64" : "rgba(255,255,255,0.8)",
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={handleButton3}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#1C214A",
                    padding: "24px",
                    // border: "1px solid #979797",
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <DescriptionIcon
                    sx={{
                      fill: selectButton3 ? "#FF8B64" : "rgba(255,255,255,0.8)",
                    }}
                  />
                </Box>
                {/* </Box> */}
              </ListItemIcon>
              <ListItemText
                primary="Exchange"
                sx={{
                  opacity: open ? 1 : 0,
                  color: selectButton3 ? "#FF8B64" : "rgba(255,255,255,0.8)",
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={handleButton4}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#1C214A",
                    padding: "24px",
                    // border: "1px solid #979797",
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box width="18px" height="18px">
                    <TransactionIcon
                      color={
                        selectButton4 ? "#FF8B64" : "rgba(255,255,255,0.8)"
                      }
                    />
                  </Box>
                </Box>
              </ListItemIcon>
              <ListItemText
                primary="Transaction"
                sx={{
                  opacity: open ? 1 : 0,
                  color: selectButton4 ? "#FF8B64" : "rgba(255,255,255,0.8)",
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={handleButton5}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#1C214A",
                    padding: "24px",
                    // border: "1px solid #979797",
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <AffiliationsIcon
                    color={selectButton5 ? "#FF8B64" : "rgba(255,255,255,0.8)"}
                  />
                  {/* </Box> */}
                </Box>
              </ListItemIcon>
              <ListItemText
                primary="Affiliations"
                sx={{
                  opacity: open ? 1 : 0,
                  color: selectButton5 ? "#FF8B64" : "rgba(255,255,255,0.8)",
                }}
              />
            </ListItemButton>
          </ListItem>

          <Divider variant="inset" component="li" />

          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={handleButton6}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#1C214A",
                    padding: "24px",
                    // border: "1px solid #979797",
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* <Box width="18px" height="18px"> */}
                  {/* <img
                    src="./assets/adminPanel_Images/Icons/TransactionIcon.svg"
                    alt=""
                    // width="100%" height="auto"
                  /> */}

                  <SettingsIcon
                    sx={{
                      fill: selectButton6 ? "#FF8B64" : "rgba(255,255,255,0.8)",
                    }}
                  />
                  {/* </Box> */}
                </Box>
              </ListItemIcon>
              <ListItemText
                primary="Settings"
                sx={{
                  opacity: open ? 1 : 0,
                  color: "white",
                  color: selectButton6 ? "#FF8B64" : "rgba(255,255,255,0.8)",
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={handleButton7}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#1C214A",
                    padding: "24px",
                    // border: "1px solid #979797",
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CircleIcon
                    sx={{
                      fill: selectButton7 ? "#FF8B64" : "rgba(255,255,255,0.8)",
                    }}
                  />
                </Box>
              </ListItemIcon>
              <ListItemText
                primary="Help"
                sx={{
                  opacity: open ? 1 : 0,
                  color: "white",
                  color: selectButton7 ? "#FF8B64" : "rgba(255,255,255,0.8)",
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={handleButton8}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#1C214A",
                    padding: "24px",
                    // border: "1px solid #979797",
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <LogoutIcon
                    sx={{
                      fill: selectButton8 ? "#FF8B64" : "rgba(255,255,255,0.8)",
                    }}
                  />
                </Box>
              </ListItemIcon>
              <ListItemText
                primary="Logout"
                sx={{
                  opacity: open ? 1 : 0,
                  color: "white",
                  color: selectButton8 ? "#FF8B64" : "rgba(255,255,255,0.8)",
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          //  p: 3,
          // backgroundColor: "#f0f2f5",
          // backgroundColor: "#F8F8FB",         //for homepage
          // height: "100vh"
          width: "100%",
          overflowX: "hidden",
        }}
      >
        <DrawerHeader />

        {children}
      </Box>
    </Box>
  );
}
