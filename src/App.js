import React from "react";
import logo from "./logo.svg";
import styles from "./App.module.sass";
import Dashboard from "./screens/Dashboard";
import Error from "./screens/Error";
import { Route, Routes } from "react-router-dom";
import Maintenance from "./screens/Maintenance";
import Profile from "./screens/Profile";
import CategoriesListing from "./screens/CategoriesListing";
import Dashboard2 from "./screens/Dashboard2";
import EditProfile from "./screens/EditProfile";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ItemDetails from "./screens/ItemDetail";
import theme from "./styles/style";
import { StatsContextProvider } from "./context/StatsContext";
import AdminPanel from "./Dashboard/AdminPanel/components/index";
import AdminLogin from "./Dashboard/AdminPanel/components/AdminLogin/Login";
import AdminSignup from "./Dashboard/AdminPanel/components/AdminRegister/SignUp";
import { red, grey, deepOrange } from "@mui/material/colors";
import { useEffect } from "react";
import Createnft from "./screens/CreateNft/Createnft";

import { HomePage } from "./Dashboard/AdminPanel/components/HomePage";
import AdminDashboard from "./Dashboard/AdminPanel/components/AdminDashboard";
import { Exchange } from "./Dashboard/AdminPanel/components/Exchange";
import YourTransactions from "./Dashboard/AdminPanel/components/YourTransactions";
import { Affiliation } from "./Dashboard/AdminPanel/components/Affiliation";
import { Settings } from "./Dashboard/AdminPanel/components/Settings";
import { Tutorials } from "./Dashboard/AdminPanel/components/Tutorials";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import PublicRoutes from "./utils/PublicRoutes";
import { CreateCollecyionScreen } from "./screens/CreateCollecyionScreen/CreateCollecyionScreen";
import Collection from "./screens/Collections/Collection";
import CollectionCard from "./screens/Collections/CollectionCard";
import CollectionByID from "./screens/Collections/CollectionByID";
import MyCollection from "./screens/MyCollections/MyCollection";
import { UpdateCollectionScreen } from "./screens/CreateCollecyionScreen/UpdateCollectionScreen";
import Marketplace from "./screens/MarketPlace/Marketplace";
import HowItWork from "./screens/HowItWorks/HowItWork";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

function App() {
  const [mode, setMode] = React.useState("dark");

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          localStorage.setItem("mode", prevMode === "dark" ? "light" : "dark");
          return prevMode === "dark" ? "light" : "dark";
        });
      },
    }),
    []
  );

  useEffect(() => {
    const currentMode = localStorage.getItem("mode");
    if (currentMode === null || currentMode === "") return setMode("dark");
    setMode(currentMode);
  }, []);

  const theme = React.useMemo(() =>
    createTheme({
      palette: {
        mode,
        ...(mode === "light"
          ? {
              // palette values for light mode
              primary: red,
              divider: red[200],
              background: {
                default: "#fff",
                navbrclr: "#fff",
                navbrclrIcon: "#e4e6eb",
                finestNft: "#e4e6eb",
                paper: "#010613",
                walletHolder: "#e4e6eb",
                topCreatorNftclr: "#e4e6eb",
                sideBr: "#fff",
                snakbarClr: "#232121",
                fontClr: "#003452",
                iconClr: "#003452",
                iconClrUserList: "#003452",
                dashBoardBtnClr: "#232121",
                inputColor: "#fafafa",
              },
              typography: {
                primary: "#fff",
                secondary: grey[500],
              },
            }
          : {
              // palette values for dark mode
              primary: { main: "#010613" },
              secondary: { main: "#0A1F2F" },
              divider: "#010613",
              background: {
                default: "#02121D",
                navbrclr: "#0A1F2F",
                finestNft: "#0A1F2F",
                navbrclrIcon: "#10151c",
                paper: "#010613",
                walletHolder: "#2f2f2f",
                topCreatorNftclr: "#10151c",
                sideBr: "#000000",
                snakbarClr: "#CC5DD1",
                fontClr: "#CC5DD1",
                iconClr: "#fff",
                iconClrUserList: "#fff",
                dashBoardBtnClr: "#232121",
              },
              typography: {
                primary: "#fff",
                secondary: grey[500],
              },
            }),
      },
    })
  );
  const _id = "";
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route exact path="/" element={<Dashboard2 />} />
          <Route exact path="/Collections" element={<Collection />} />
          <Route exact path="/CollectionCard" element={<CollectionCard />} />
          <Route exact path="/MyCollections" element={<MyCollection />} />
          <Route exact path="/Marketplace" element={<Marketplace />} />
          <Route exact path="/FAQ" element={<HowItWork />} />

          <Route
            exact
            path="/Collections/Collection/:id"
            element={<CollectionByID />}
          />

          <Route
            exact
            path="/MyCollections/Collection/:id"
            element={<CollectionByID />}
          />
          <Route
            exact
            path="/MyCollections/Collection/Update/:id"
            element={<UpdateCollectionScreen />}
          />

          <Route
            exact
            path="/nft/:tokenAddress/:tokenId"
            element={
              <div className={styles.container}>
                <ItemDetails />
              </div>
            }
          />
          <Route
            exact
            path="/error"
            element={
              <Error
                headingText="404"
                subHeadingText="Oops! This Page is Not Found."
                discriptionText="The requested page dose not exist"
              />
            }
          />
          <Route
            exact
            path="/error2"
            element={
              <Error
                headingText="500"
                subHeadingText="Oops! This Page is Not Found."
                discriptionText="The requested page dose not exist"
              />
            }
          />

          <Route exact path="/maintenance" element={<Maintenance />} />

          <Route
            exact
            path="/CreateCollection"
            element={<CreateCollecyionScreen />}
          />

          <Route
            exact
            path="/categoriesListing"
            element={<CategoriesListing />}
          />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/editProfile" element={<EditProfile />} />
          {/* <Route exact path="/AdminPanel" element={<AdminPanel />} /> */}
          {/* <Route exact path="/AdminLogin" element={<AdminLogin />} />*/}
          <Route exact path="/AdminSignUp" element={<AdminSignup />} />
          <Route exact path="/CreateNft" element={<Createnft />} />

          <Route path="/" element={<ProtectedRoutes />}>
            <Route
              exact
              path="/AdminPanel"
              element={
                <AdminPanel>
                  <HomePage />
                </AdminPanel>
              }
            />
            <Route
              exact
              path="/adminDashboard"
              element={
                <AdminPanel>
                  <AdminDashboard />
                </AdminPanel>
              }
            />
            <Route
              exact
              path="/exchange"
              element={
                <AdminPanel>
                  <Exchange />
                </AdminPanel>
              }
            />
            <Route
              exact
              path="/transactions"
              element={
                <AdminPanel>
                  <YourTransactions />
                </AdminPanel>
              }
            />
            <Route
              exact
              path="/affiliation"
              element={
                <AdminPanel>
                  <Affiliation />
                </AdminPanel>
              }
            />
            <Route
              exact
              path="/settings"
              element={
                <AdminPanel>
                  <Settings />
                </AdminPanel>
              }
            />
            <Route
              exact
              path="/tutorials"
              element={
                <AdminPanel>
                  <Tutorials />
                </AdminPanel>
              }
            />
          </Route>

          <Route path="/AdminLogin" element={<PublicRoutes />}>
            {" "}
            <Route exact path="/AdminLogin" element={<AdminLogin />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
