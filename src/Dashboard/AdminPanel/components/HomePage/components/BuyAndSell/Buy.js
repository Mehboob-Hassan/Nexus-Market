import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export const Buy = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          width: "100%",
          height: "auto",
          padding: {lg: "16px", md: "16px", sm: "16px", xs: "0px"},
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: {lg: "row", md: "row", sm: "row", xs: "column"},
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: {lg: "22px", md: "22px", sm: "22px", xs: "16px"},
                color: "#1F2552",
              }}
            >
              Total Balance
            </Typography>
            <Typography
              sx={{
                fontSize: {lg: "18px", md: "18px", sm: "18px", xs: "14px"},
                color: "#1F2552",
              }}
            >
              $5478.54
            </Typography>
          </Box>

          <Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                sx={{
                  color: "#1F2552",
                  fontSize: {lg : "14px", md: "14px", sm: "14px", xs: "12px"},
                  mt: {lg: "0px", md: "0px", sm: "0px", xs: "10px"},
                  fontWeight: "400",
                }}
              >
                Bid:{" "}
              </Typography>
              <Typography
                sx={{
                  color: "#00CE7D",
                  fontSize: {lg : "14px", md: "14px", sm: "14px", xs: "12px"},
                  fontWeight: "500",
                  ml: "8px",
                }}
              >
                1.216{" "}
              </Typography>
              <NorthIcon
                sx={{ fill: "#00CE7D", width: "18px", height: "14px" }}
              />
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                sx={{
                  color: "#1F2552",
                  fontSize: {lg : "14px", md: "14px", sm: "14px", xs: "12px"},
                  fontWeight: "400",
                }}
              >
                Ask:{" "}
              </Typography>
              <Typography
                sx={{
                  color: "#E55235",
                  fontSize: {lg : "14px", md: "14px", sm: "14px", xs: "12px"},
                  fontWeight: "500",
                  ml: "8px",
                }}
              >
                {" "}
                0.216{" "}
              </Typography>
              <SouthIcon
                sx={{ fill: "#E55235", width: "18px", height: "14px" }}
              />
            </Box>
          </Box>
        </Box>

        <Box mt="20px">
          <Divider
            variant="middle"
            color="#D8D8D8"
            backgroundColor="#D8D8D8"
            style={{ opacity: 0.25 }}
          />
        </Box>

        <Box>
          <Box
            mt="20px"
            sx={{ display: "flex", flexDirection: {lg: "row", md: "row", sm: "row", xs: "column"}, justifyContent: "space-between" }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "#1F2552",
                  mb: "8px",
                  opacity: "40%",
                }}
              >
                Order Type
              </Typography>
              <Button
                variant="outlined"
                endIcon={
                  <KeyboardArrowDownIcon
                    sx={{ color: "#808FA3", fill: "#808FA3" }}
                  />
                }
                id="demo-customized-button"
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                disableElevation
                onClick={handleClick}
                sx={{
                  border: "1px solid #C5C9CE",
                  fontSize: "12px",
                  fontWeight: "400",
                  color: "#1F2552",
                  width: "174px",
                  height: "34px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                Limit Order
              </Button>
              <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                  "aria-labelledby": "demo-customized-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} disableRipple>
                  Edit
                </MenuItem>
              </StyledMenu>
            </Box>

            <Box>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "#1F2552",
                  mb: "8px",
                  opacity: "40%",
                }}
              >
                Coin Quantity
              </Typography>
              <Button
                variant="outlined"
                endIcon={"BTC"}
                sx={{
                  border: "1px solid #C5C9CE",
                  fontSize: "12px",
                  fontWeight: "400",
                  color: "#1F2552",
                  width: "174px",
                  height: "34px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                10
              </Button>
            </Box>
          </Box>

          <Box
            mt="20px"
            sx={{ display: "flex", flexDirection: {lg: "row", md: "row", sm: "row", xs: "column"}, justifyContent: "space-between" }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "#1F2552",
                  mb: "8px",
                  opacity: "40%",
                }}
              >
                Price
              </Typography>
              <Button
                variant="outlined"
                endIcon={"USD"}
                sx={{
                  border: "1px solid #C5C9CE",
                  fontSize: "12px",
                  fontWeight: "400",
                  color: "#1F2552",
                  width: "174px",
                  height: "34px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                12420,60
              </Button>
            </Box>

            <Box>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "#1F2552",
                  mb: "8px",
                  opacity: "40%",
                }}
              >
                Charge
              </Typography>
              <Button
                variant="outlined"
                endIcon={"USD"}
                sx={{
                  border: "1px solid #C5C9CE",
                  fontSize: "12px",
                  fontWeight: "400",
                  color: "#1F2552",
                  width: "174px",
                  height: "34px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                2
              </Button>
            </Box>
          </Box>
        </Box>

        <Box
          mt="30px"
          sx={{
            display: "flex",
            flexDirection: {lg: "row", md: "row", sm: "column", xs: "column"},
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: {lg: "row", md: "row", sm: "column", xs: "column"}, alignItems: "center" }}>
            <Button
              variant="contained"
              sx={{
                fontSize: "12px",
                fontWeight: "400",
                color: "#ffffff",
                backgroundColor: "#42BBFA",
                width: "174px",
                height: "38px",
              }}
            >
              Place buy order
            </Button>
          </Box>
          <Box>
            <Button
              variant="text"
              sx={{ fontSize: "12px", fontWeight: "400", color: "#42BBFA" }}
            >
              Place buy order
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
