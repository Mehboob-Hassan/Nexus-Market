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
    backgroundColor: "#ffffff",
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

export const CustomButton = ({ heading, title, subTitle, hasDropdown }) => {
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
      <Box>
        <Typography
          sx={{
            fontSize: {lg: "18px", md: "18px", sm: "18px", xs: "14px"},
            fontWeight: "400",
            color: "#1F2552",
            mb: "8px",
            opacity: "40%",
          }}
        >
          {/* Order Type */}
          {heading}
        </Typography>
        <Button
          variant="outlined"
          endIcon={
            hasDropdown && (
              <KeyboardArrowDownIcon
                sx={{ color: "#808FA3", fill: "#808FA3" }}
              />
            )
          }
          id="demo-customized-button"
          aria-controls={open ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          disableElevation
          onClick={handleClick}
          sx={{
            border: "1px solid #C5C9CE",
            fontSize: {lg: "18px", md: "18px", sm: "18px", xs: "14px"},
            fontWeight: "400",
            color: "#1F2552",
            width: "100%",
            height: "50px",
            display: "flex",
            justifyContent: "space-between",
            borderRadius: "2px",
            textTransform: "capitalize",
          }}
        >
          {/* Limit Order */}
          <Box>{title}</Box>
          {/* <Box sx={{opacity: "80%"}}>{subTitle}</Box> */}
          <Box sx={{opacity: "80%"}}>{subTitle}</Box>
        </Button>

        {hasDropdown && (
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
              {/* Edit */}
            </MenuItem>
          </StyledMenu>
        )}
      </Box>
    </div>
  );
};
