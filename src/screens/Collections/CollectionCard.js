import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import "./CardStyling.css";
import img from "./nft.avif";
import Logo from "./LogoForBlack.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleCollectionAction } from "../../Redux/actions";

const CollectionCard = ({
  image,
  title,
  despc,
  ownerLname,
  ownerFname,
  id,
}) => {
  console.log("ThisIsIDComp", id);
  // let { id } = useParams();
  let dispatch = useDispatch();
  let theme = useTheme();
  let navigate = useNavigate();

  const [collectionNav, setCollectionNav] = useState(false);

  const singleCollectionResponse = useSelector(
    (state) => state.singleCollectionReducer.users
  );
  const handleSingleCollection = () => {
    dispatch(getSingleCollectionAction(id));
    setCollectionNav(true);
  };

  useEffect(() => {
    if (singleCollectionResponse.status === true) {
      // navigate(`Collection/${id}`);
      setCollectionNav(false);
    }
  }, [singleCollectionResponse, collectionNav]);

  // console.log("thisIsSingleCollectionRes", singleCollectionResponse);

  return (
    <Box
      sx={{
        border: `5px solid ${theme.palette.background.fontClr}`,
        borderRadius: "12px",
        mb: "100px",
      }}
    >
      {/* <a
        href="https://www.mythrillfiction.com/the-dark-rider"
        alt="Mythrill"
        target="_blank"
      > */}
      <Box
        sx={{
          cursor: "pointer",
        }}
        onClick={() => handleSingleCollection()}
      >
        <div class="card">
          <div class="wrapper">
            <img src={image} class="cover-image" />
          </div>
          <Box
            //   sx={{
            //     mt: "150px",
            //     width: "100%",
            //     border: "1px solid red",
            //   }}
            class="titleBox"
          >
            <Typography
              sx={{
                color: theme.palette.background.fontClr.navbrclrIcon,
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{ color: theme.palette.background.fontClr.navbrclrIcon }}
            >
              By{" "}
              <span
                class="DespcStyle1"
                style={{ color: theme.palette.background.fontClr }}
              >
                {ownerFname}_{ownerLname}
              </span>
            </Typography>
          </Box>

          <img src={Logo} class="character" />
        </div>
      </Box>
      <div
        style={{
          width: "350px",
          height: "110px",
          padding: "10px",
          textAlign: "center",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography class="DespcStyle">{despc}</Typography>
      </div>
    </Box>
  );
};

export default CollectionCard;
