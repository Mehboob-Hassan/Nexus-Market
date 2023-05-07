import React from "react";
import styles from "./CollectionCard.module.sass";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import audioPoster from "./DJ.jpg";

const CollectionCard = ({
  heading,
  description,
  avatarImage,
  coverImage,
  type,
}) => {
  console.log("CoverImageURL", coverImage);
  const theme = useTheme();
  return (
    <>
      <Box
        className={styles.collectionCardContainer}
        sx={{
          cursor: "pointer",
          bgcolor: "background.finestNft",
          color: "text.primary",
          boxShadow: "0 4px 10px -2px gray",
          overflow: "hidden",
          "&:hover": {
            boxShadow: "0 4px 18px -2px gray",
          },
        }}
      >
        <Box
          className={styles.coverImage}
          sx={{
            transition: "transform .2s",
            "&:hover": {
              transform: "scale(1.04)",
            },
          }}
        >
          {type?.includes("video") ? (
            <video
              width="100%"
              height="100%"
              src={coverImage}
              loop={"loop"}
              autoplay={"autoplay"}
              style={{ objectFit: "cover", borderRadius: "18px" }}
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
                borderRadius: "18px",
              }}
            >
              <audio
                id="audio"
                src={coverImage}
                controls
                style={{
                  position: "absolute",
                  bottom: 15,
                  width: "100%",
                  opacity: "0.5",
                }}
              />
            </Box>
          ) : (
            <img src={coverImage} alt="coverimg" />
          )}
        </Box>
        {/* <Box className={styles.avatarImage}>
          <img src={avatarImage} alt="avatarimg" />
        </Box> */}
        <Box className={styles.infoContainer}>
          <Box className={styles.headingContainer}>
            <Typography>{heading}</Typography>
          </Box>
          <Box className={styles.descriptionContainer}>
            <Typography>{description}</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CollectionCard;
