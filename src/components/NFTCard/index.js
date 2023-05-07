import React from "react";
import styles from "./Card.module.sass";
import { Link, useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import audioPoster from "./DJ.jpg";
import { useSelector } from "react-redux";

export default function NFTCard({
  image,
  title,
  id,
  style,
  price,
  tokenAddress,
  tokenId,
  type,
  walletAddress,
}) {
  const theme = useTheme();

  let navigate = useNavigate();

  const walletAddressGet = useSelector(
    (state) => state.saveWalletAddressReducer.users
  );

  console.log("NFTCardWalletAddress", walletAddressGet);

  return (
    <>
      <Box
        className={styles.container}
        sx={{
          bgcolor: "background.finestNft",
          color: "text.primary",
          boxShadow: "0 4px 10px -2px gray",
        }}
      >
        <Box className={styles.img}>
          {type?.includes("video") ? (
            <video
              width="100%"
              height="100%"
              src={image}
              loop={"loop"}
              autoplay={"autoplay"}
              style={{ objectFit: "cover", borderRadius: "20px" }}
            />
          ) : type?.includes("audio") ? (
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(${audioPoster})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                position: "relative",
                borderRadius: "20px",
              }}
            >
              <audio
                id="audio"
                src={image}
                controls
                style={{
                  position: "absolute",
                  bottom: 15,
                  width: "100%",
                  height: "400px",
                  opacity: "0.5",
                }}
              />
            </Box>
          ) : (
            <img src={image} alt="cant load image" />
          )}
        </Box>
        <Box className={styles.lowerCard}>
          <Box className={styles.upper}>
            <Box className={styles.name}>
              <Typography sx={{ color: "background.fontClr" }}>
                {title}
              </Typography>
              <Typography sx={{ color: "text.primary" }}>{title}</Typography>
            </Box>
            <Box className={styles.price}>
              <Typography>Price</Typography>
              <Typography sx={{ color: "text.primary" }}>
                {price ? `$ ${price}` : "$0.00"}
              </Typography>
            </Box>
          </Box>
          <Box
            className={styles.buy}
            style={style}
            sx={{ color: "text.primary" }}
          >
            {walletAddressGet === walletAddress ? (
              <Button
                variant="text"
                onClick={() => navigate(`/nft/${tokenAddress}/${tokenId}`)}
                size="small"
                sx={{
                  color: "text.primary",
                  textTransform: "capitalize",
                  p: "0px",
                  m: "0px",
                }}
              >
                View NFT
              </Button>
            ) : (
              <Button
                variant="text"
                onClick={() => navigate(`/nft/${tokenAddress}/${tokenId}`)}
                size="small"
                sx={{
                  color: "text.primary",
                  textTransform: "capitalize",
                  p: "0px",
                  m: "0px",
                }}
              >
                Buy Now
              </Button>
            )}

            {price ? "" : <Typography>2 days left</Typography>}
          </Box>
        </Box>
      </Box>
    </>
  );
}
