import React from "react";
import styles from "./CollectionCard.module.sass";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const RelatedCollectionCard = ({
  heading,
  description,
  avatarImage,
  coverImage,
}) => {
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
          // sx={{
          //   transition: "transform .2s",
          //   "&:hover": {
          //     transform: "scale(1.04)",
          //   },
          // }}
        >
          <img src={coverImage} alt="coverimg" />
        </Box>
        <Box className={styles.avatarImage}>
          <img src={avatarImage} alt="avatarimg" />
        </Box>
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

export default RelatedCollectionCard;
