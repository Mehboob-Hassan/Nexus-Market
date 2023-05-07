import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.sass";
import MarketPlaceCard from "../MarketPlaceCard";
import OfferCard from "../OfferCard";
import FilterCard from "../FilterCard";
import CreateButton from "../CreateButton";
import { AiOutlineClose } from "react-icons/ai";
import { Box } from "@mui/material";
import logo from "./Ef_Logo2.png";
import { useTheme } from "@mui/material/styles";
import logoBlack from "./LogoForBlack.png";
import logoWhite from "./LogoForWhite2.png";

export default function ({ closeBtnClickHandler }) {
  const [close, setclose] = useState(false);
  const theme = useTheme();
  return (
    <>
      <Box
        className={styles.bg}
        sx={{
          height: { lg: "1508px", md: "1508px", sm: "auto", xs: "auto" },
          overflowY: "scroll",
          bgcolor: "background.sideBr",
          color: "text.primary",
          boxShadow: "4px 0 10px -2px gray",
        }}
      >
        <Box className={styles.close}>
          <AiOutlineClose
            onClick={() => {
              closeBtnClickHandler();
            }}
            color="text.primary"
            size={20}
          />
        </Box>
        <Box className={styles.logo}>
          <Link to={"/"}>
            <img
              src={theme.palette.mode === "dark" ? logoBlack : logoWhite}
              width="250px"
            />
          </Link>
        </Box>
        <Box className={styles.create}>
          <CreateButton />
        </Box>
        <Box className={styles.market}>
          <MarketPlaceCard />
        </Box>
        <Box className={styles.filter}>
          <FilterCard />
        </Box>
        <Box className={styles.offerCrd}>
          <OfferCard />
        </Box>
      </Box>
    </>
  );
}
