import * as React from "react";
import Accordion from "@mui/material/Accordion";
import Box from "@mui/material/Box";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./MarketPlace.module.sass";
import { StylesContext } from "@material-ui/styles";
import { style } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import WindowIcon from "@mui/icons-material/Window";
import AssessmentIcon from "@mui/icons-material/Assessment";
import DescriptionIcon from "@mui/icons-material/Description";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  hideBorder: {
    "&.MuiAccordion-root:before": {
      display: "none",
    },
  },
});

export default function MarketPlaceCard() {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <Box
      className={styles.bg}
      sx={{
        bgcolor: "background.finestNft",
        // boxShadow: "0 4px 10px -2px gray",
      }}
    >
      <Typography
        className={styles.heading}
        sx={{
          color: "background.fontClr",
          // boxShadow: "0 4px 10px -2px gray",
        }}
      >
        Marketplace
      </Typography>
      <Box
        sx={
          {
            // bgcolor: "background.finestNft",
            // color: "text.primary",
            // boxShadow: "0 4px 10px -2px gray",
          }
        }
      >
        <Accordion
          sx={{
            bgcolor: "background.finestNft",
            boxShadow: "none",
          }}
          elevation={0}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={styles.icon} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Box sx={{ mr: "8px" }}>
                {/* <img
                  src="ozean_Images/Category.svg"
                  alt="cant load image"
                  className={styles.iconColor}
                /> */}
                <WindowIcon
                  className={styles.iconColor}
                  sx={{ color: "background.iconClr" }}
                />
              </Box>
              <Box>
                <Typography sx={{ color: "text.primary" }}>Category</Typography>
              </Box>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "text.primary" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            bgcolor: "background.finestNft",
            boxShadow: "none",
            // border: "1px solid blue",
          }}
          elevation={0}
          className={classes.hideBorder}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={styles.icon} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Box sx={{ mr: "8px" }}>
                {/* <img
                  src="ozean_Images/Chart.svg"
                  className={styles.iconColor}
                /> */}
                <AssessmentIcon
                  className={styles.iconColor}
                  sx={{ color: "background.iconClr" }}
                />
              </Box>{" "}
              <Box>
                <Typography>Stats</Typography>
              </Box>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            bgcolor: "background.finestNft",
            boxShadow: "none",
          }}
          elevation={0}
          className={classes.hideBorder}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={styles.icon} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Box sx={{ mr: "8px" }}>
                {/* <img
                  src="ozean_Images/Paper.svg"
                  className={styles.iconColor}
                /> */}
                <DescriptionIcon
                  className={styles.iconColor}
                  sx={{ color: "background.iconClr" }}
                />
              </Box>{" "}
              <Box>
                <Typography>Resources</Typography>
              </Box>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}
