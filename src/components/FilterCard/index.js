import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import styles from "./Filter.module.sass";
import { StylesContext } from "@material-ui/styles";
import { style } from "@mui/system";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import WindowIcon from "@mui/icons-material/Window";
import AssessmentIcon from "@mui/icons-material/Assessment";
import Groups2Icon from "@mui/icons-material/Groups2";
import PendingIcon from "@mui/icons-material/Pending";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FlakyRoundedIcon from "@mui/icons-material/FlakyRounded";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";

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
  let navigate = useNavigate();
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
        Filter
      </Typography>

      <Accordion
        sx={{
          bgcolor: "background.finestNft",
          color: "text.primary",
          boxShadow: "none",
        }}
        elevation={0}
        className={classes.hideBorder}
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
                className={styles.iconColor}
              /> */}
              <WindowIcon
                className={styles.iconColor}
                sx={{ color: "background.iconClr" }}
              />
            </Box>
            <Box>
              <Typography sx={{ color: "text.primary" }}>Status</Typography>
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: "text.primary" }}>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="ABC" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="ABC" />
                </ListItemButton>
              </ListItem>
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        elevation={0}
        className={classes.hideBorder}
        sx={{
          bgcolor: "background.finestNft",
          color: "text.primary",
          boxShadow: "none",
        }}
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
              {/* <img src="ozean_Images/Chart.svg" className={styles.iconColor} /> */}
              <AssessmentIcon
                className={styles.iconColor}
                sx={{ color: "background.iconClr" }}
              />
            </Box>
            <Box>
              <Typography>Price</Typography>
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="ABC" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="ABC" />
                </ListItemButton>
              </ListItem>
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        elevation={0}
        className={classes.hideBorder}
        sx={{
          bgcolor: "background.finestNft",
          color: "text.primary",
        }}
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
              {/* <img src="ozean_Images/3 User.svg" className={styles.iconColor} /> */}
              <Groups2Icon
                className={styles.iconColor}
                sx={{ color: "background.iconClr" }}
              />
            </Box>
            <Box>
              <Typography>Collection</Typography>
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <List>
              <ListItem disablePadding>
                <ListItemButton onClick={() => navigate("/CreateCollection")}>
                  <ListItemText primary="Create Collection" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="ABC" />
                </ListItemButton>
              </ListItem>
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        elevation={0}
        className={classes.hideBorder}
        sx={{
          bgcolor: "background.finestNft",
          color: "text.primary",
        }}
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
                src="ozean_Images/More Circle.svg"
                className={styles.iconColor}
              /> */}
              <PendingIcon
                className={styles.iconColor}
                sx={{ color: "background.iconClr" }}
              />
            </Box>
            <Box>
              <Typography>Chains</Typography>
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="ABC" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="ABC" />
                </ListItemButton>
              </ListItem>
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        elevation={0}
        className={classes.hideBorder}
        sx={{
          bgcolor: "background.finestNft",
          color: "text.primary",
        }}
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
              {/* <img src="ozean_Images/Bag 3.svg" className={styles.iconColor} /> */}
              <ShoppingBagIcon
                className={styles.iconColor}
                sx={{ color: "background.iconClr" }}
              />
            </Box>
            <Box>
              <Typography>Category</Typography>
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="ABC" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="ABC" />
                </ListItemButton>
              </ListItem>
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        elevation={0}
        className={classes.hideBorder}
        sx={{
          bgcolor: "background.finestNft",
          color: "text.primary",
        }}
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
                src="ozean_Images/Discount.svg"
                className={styles.iconColor}
              /> */}
              <FlakyRoundedIcon
                className={styles.iconColor}
                sx={{ color: "background.iconClr" }}
              />
            </Box>
            <Box>
              <Typography>On sale</Typography>
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="ABC" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="ABC" />
                </ListItemButton>
              </ListItem>
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
