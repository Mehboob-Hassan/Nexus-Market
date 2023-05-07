import React from "react";
import styles from "./UserList.module.sass";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import BookmarkRemoveRoundedIcon from "@mui/icons-material/BookmarkRemoveRounded";
import userImg from "./circle_2.png";

export default function UserList() {
  const theme = useTheme();

  return (
    <>
      <Box
        className={styles.bg}
        sx={{
          bgcolor: "background.topCreatorNftclr",
          color: "text.primary",
        }}
      >
        <Typography
          className={styles.heading}
          sx={{ color: "background.fontClr" }}
        >
          Top Creator NFTs
        </Typography>
        {[1, 2, 3, 4, 5].map((v, i) => {
          return (
            <Box className={styles.user}>
              <Box className={styles.profile}>
                <img src={userImg} />
                <Box className={styles.name}>
                  <Typography variant="body2" sx={{ color: "text.primary" }}>
                    Meta Vers
                  </Typography>
                  <Typography variant="body2">@meta</Typography>
                </Box>
              </Box>
              {/* <img src="./ozean_Images/Icons/Bookmark.svg" /> */}
              <BookmarkRemoveRoundedIcon
                sx={{
                  color: "background.iconClrUserList",
                  width: "30px",
                  height: "40px",
                }}
              />
            </Box>
          );
        })}
      </Box>
    </>
  );
}
