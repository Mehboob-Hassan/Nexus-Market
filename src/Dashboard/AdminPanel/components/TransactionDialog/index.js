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
import { CustomButton } from "./CustomButton";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import IconButton from "@mui/material/IconButton";


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
          width: "720px",
          padding: "16px 32px 16px 32px",
        },
      }}
    >
      <DialogTitle
        sx={{
          color: "#354052",
          fontSize: { lg: "28px", md: "28px", sm: "26px", xs: "22px" },
          textAlign: "center",
          fontWeight: "400",
          paddingTop: "0px",
        }}
      >
        Your Transactions
      </DialogTitle>

      <Box>
        <Divider
          variant="middle"
          orientation="horizontal"
          style={{
            backgroundColor: "#474747",
            color: "#474747",
            opacity: "20%",
          }}
        />
      </Box>

      <Box
        mt="20px"
        width="100%"
        sx={{
          display: "flex",
          flexDirection: { lg: "row", md: "row", sm: "row", xs: "column" },
        }}
      >
        <Box width="100%">
          <CustomButton heading={"Currency:"} title={"Bitcoin"} hasDropdown />
        </Box>

        <Box
          width="100%"
          sx={{
            ml: { lg: "20px", md: "20px", sm: "20px", xs: "0px" },
            mt: { lg: "0px", md: "0px", sm: "0px", xs: "10px" },
          }}
        >
          <CustomButton heading={"From:"} title={"Wallet"} hasDropdown />
        </Box>
      </Box>

      <Box
        mt="20px"
        width="100%"
        sx={{
          display: "flex",
          flexDirection: { lg: "row", md: "row", sm: "row", xs: "column" },
        }}
      >
        <Box width="100%">
          <CustomButton
            heading={"Coin Quantity:"}
            title={".98437"}
            subTitle={"BTC"}
          />
        </Box>

        <Box
          width="100%"
          sx={{
            ml: { lg: "20px", md: "20px", sm: "20px", xs: "0px" },
            mt: { lg: "0px", md: "0px", sm: "0px", xs: "10px" },
          }}
        >
          <CustomButton
            heading={"USD Price:"}
            title={"3,323"}
            subTitle={"USD"}
          />
        </Box>
      </Box>

      <Box
        mt="20px"
        sx={{
          display: "flex",
          flexDirection: { lg: "row", md: "row", sm: "row", xs: "column" },
        }}
      >
        <Box width="100%">
          <Box>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "400",
                color: "#1F2552",
                mb: "8px",
                opacity: "40%",
              }}
            >
              {/* Order Type */}
              Send To
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { lg: "row", md: "row", sm: "row", xs: "column" },
              width: "100%",
            }}
          >
            <Box
              width="100%"
              sx={{
                cursor: "pointer",
                border: "1px solid #C5C9CE",

                width: "100%",
                height: { lg: "50px", md: "50px", sm: "auto", xs: "auto" },
                display: "flex",
                justifyContent: "space-between",
                borderRadius: "2px",
              }}
            >
              <Box
                sx={{
                  paddingLeft: {
                    lg: "16px",
                    md: "16px",
                    sm: "16px",
                    xs: "8px",
                  },
                  paddingTop: { lg: "12px", md: "12px", sm: "12px", xs: "8px" },
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Typography
                  sx={{
                    alignItems: "center",
                    fontSize: {
                      lg: "18px",
                      md: "18px",
                      sm: "18px",
                      xs: "12px",
                    },
                    fontWeight: "400",
                    color: "#1F2552",
                  }}
                >
                  https://www.chncoin.com?rfl-328YHPD
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                border: "1px solid #C5C9CE",
                width: { lg: "10%", md: "10%", sm: "10%", xs: "100%" },
                height: { lg: "50px", md: "50px", sm: "auto", xs: "auto" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IconButton>
                <QrCode2Icon sx={{ color: "#000000" }} />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box mt="20px" sx={{ display: "flex" }}>
        <Box width="100%" mr="20px">
          <CustomButton
            heading={"Transaction Fee:"}
            title={"priority"}
            hasDropdown
          />
        </Box>

        <Box
          width="100%"
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "300",
              color: "#42BBFA",

              mt: "40px",
            }}
          >
            2.30 USD
          </Typography>
        </Box>
      </Box>

      <Box width="100%" mt="30px" mb="20px">
        <Button
          variant="contained"
          width="100%"
          sx={{
            backgroundColor: "#42BBFA",
            color: "#ffffff",
            width: "100%",
            height: "46px",
            ":hover": { backgroundColor: "#42BBFA" },
          }}
        >
          Send Now
        </Button>
      </Box>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function TransactionDialog({ open, setOpen }) {
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div>
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
}
