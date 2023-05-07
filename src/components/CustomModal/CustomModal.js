import { Box, IconButton, Modal, Typography, Button } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import TextInputField from "../TextInputField";

const Modalstyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { lg: 400, md: 400, sm: 350, xs: 300 },
  bgcolor: "background.default",
  color: "text.primary",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
};

const CustomModal = ({
  setOpenModal,
  openModal,
  Heading,
  description,
  instant,
  setBidPrice,
  BidPrice,
  balance,
  btn1,
  handleModalOpenState,
  handleModalOpenState2,
  setHandleModalOpenState,
  setHandleModalOpenState2,
  purchaseNowModal,
  bidModal,
  setPurchaseNowModal,
  setBidModal,
  descriptionTitle,
  handlePurchaseNFTFunc,
  btnDisp,
}) => {
  let theme = useTheme();

  const handleCloseModal = () => {
    setHandleModalOpenState(false);
    setBidModal(false);
  };
  const handleCloseModal2 = () => {
    setHandleModalOpenState2(false);
    setPurchaseNowModal(false);
  };

  return (
    <Box>
      <Modal
        open={handleModalOpenState}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={Modalstyle}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "17px",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
              >
                {Heading}
              </Typography>
            </Box>
            <Box>
              <IconButton onClick={handleCloseModal}>
                <CloseIcon sx={{ color: "text.primary", fontWeight: "bold" }} />
              </IconButton>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alginItems: "center",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Instant {instant}
              </Typography>
              <Typography variant="body2">{description}</Typography>
            </Box>
          </Box>
          <Box>
            <TextInputField
              type="number"
              placeholder="Enter Your Bid"
              value={BidPrice}
              onChangeHandler={(e) => setBidPrice(e.target.value)}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alginItems: "center",
              justifyContent: "space-between",
              mt: "15px",
            }}
          >
            <Box>
              <Typography>Service Fee</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontWeight: "bold" }}>2%</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alginItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography>Your Balance</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontWeight: "bold" }}>{balance}BNB</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alginItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography>Total Amount</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontWeight: "bold" }}>
                ${BidPrice ? BidPrice : 0}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ mt: "20px" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "background.fontClr",
                textTransform: "capitalize",
                width: "100%",
                borderRadius: "30px",
                "&:hover": {
                  backgroundColor: "#69686d",
                },
              }}
              disabled={BidPrice ? false : true}
            >
              {btn1}
            </Button>
            <Button
              variant="outlined"
              sx={{
                mt: "10px",
                borderColor: "background.fontClr",
                textTransform: "capitalize",
                width: "100%",
                borderRadius: "30px",
                color: "text.primary",
                "&:hover": {
                  borderColor: "#69686d",
                },
              }}
              onClick={handleCloseModal}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
      <Modal
        open={handleModalOpenState2}
        onClose={handleCloseModal2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={Modalstyle}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "17px",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
              >
                {Heading}
              </Typography>
            </Box>
            <Box>
              <IconButton onClick={handleCloseModal2}>
                <CloseIcon sx={{ color: "text.primary", fontWeight: "bold" }} />
              </IconButton>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alginItems: "center",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                {instant}
              </Typography>
              <Typography variant="body2">
                {description}{" "}
                <span style={{ fontWeight: "bold" }}>{descriptionTitle}</span>
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alginItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography>NFT Price</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontWeight: "bold" }}>{balance}BNB</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alginItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography>Total Amount</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontWeight: "bold" }}>
                ${BidPrice ? BidPrice : 0}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ mt: "20px" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "background.fontClr",
                textTransform: "capitalize",
                width: "100%",
                borderRadius: "30px",
                "&:hover": {
                  backgroundColor: "#69686d",
                },
              }}
              onClick={handlePurchaseNFTFunc}
              // disabled={BidPrice || btnDisp ? false : true}
            >
              {btn1}
            </Button>
            <Button
              variant="outlined"
              sx={{
                mt: "10px",
                borderColor: "background.fontClr",
                textTransform: "capitalize",
                width: "100%",
                borderRadius: "30px",
                color: "text.primary",
                "&:hover": {
                  borderColor: "#69686d",
                },
              }}
              onClick={handleCloseModal2}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default CustomModal;
