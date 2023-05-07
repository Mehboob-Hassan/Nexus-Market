import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import IconButton from "@mui/material/IconButton";
import { IntroduceDialogSlider } from "./components/IntroduceDialogSlider";

const Data = [
  {
    title: "Introduce Chain Coin",
    subTitle:
      "Established fact that a reader will be distracted by the readable content of a page when looking at its layout. words combined with a handful of model.",
    image: "./assets/adminPanel_Images/Introduce.png",
  },
  {
    title: "Introduce Chain Coin",
    subTitle:
      "Established fact that a reader will be distracted by the readable content of a page when looking at its layout. words combined with a handful of model.",
    image: "./assets/adminPanel_Images/Introduce.png",
  },
  {
    title: "Introduce Chain Coin",
    subTitle:
      "Established fact that a reader will be distracted by the readable content of a page when looking at its layout. words combined with a handful of model.",
    image: "./assets/adminPanel_Images/Introduce.png",
  },
];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      PaperProps={{
        style: {
          backgroundColor: "#ffffff",
          // boxShadow: 'none',
          width: "100%",
          height: { lg: "600px", md: "600px", sm: "600px", xs: "auto" },

          overflowX: "hidden",
        },
      }}
    >
      <Box width="100%">
        <IntroduceDialogSlider data={Data} />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          pr: 4,
          mt: { lg: "70px", md: "70px", sm: "70px", xs: "50px" },
          pb: "20px",
        }}
      >
        <Box>
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#42BBFA",
              width: { lg: "180px", md: "180px", sm: "180px", xs: "100px" },
              height: { lg: "50px", md: "50px", sm: "50px", xs: "30px" },
              ":hover": { backgroundColor: "#42BBFA" },
            }}
          >
            Next
          </Button>
        </Box>
        <Box ml="10px">
          <Button
            variant="outlined"
            color="primary"
            sx={{
              color: "#42BBFA",
              border: "1px solid #42BBFA",
              width: { lg: "180px", md: "180px", sm: "180px", xs: "100px" },
              height: { lg: "50px", md: "50px", sm: "50px", xs: "30px" },
              ":hover": { border: "1px solid #42BBFA" },
            }}
          >
            Skip
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function IntroduceDialog({ open, setOpen }) {
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div
      sx={{
        width: "100%",
        overflowX: "hidden",
      }}
    >
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
}
