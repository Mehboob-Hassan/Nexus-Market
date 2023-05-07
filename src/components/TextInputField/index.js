import React from "react";
import styles from "./TextInputField.module.sass";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";

const CustomTextField = styled(TextField)({
  width: "100%",
  "& label.MuiInputLabel-root": {
    display: "none",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "unset",
  },
  "& .MuiOutlinedInput-root": {
    width: "100%",
    "& input": {
      width: "100%",
      color: "#827D9D",
      backgroundColor: "transparent",
      fontSize: "14px",
      fontWeight: "500",
      // border: `1px solid red`,
      borderRadius: "56px",
      padding: "12px 24px 12px 24px",
    },
    "& input::placeholder": {
      color: "#827D9D",
      //opacity: "1"
    },
    "& fieldset": {
      borderColor: "unset",
      display: "none",
    },
    "&": {
      padding: 0,
      margin: "5px 0",
      position: "static",
    },
    "& textarea#mui-3": {
      width: "100%",
      height: "auto",
      overflow: "auto",
      padding: "12px 24px 12px 24px",
      // border: "1px solid #00A2FD",
      // borderRadius: "18px",
      overflowWrap: "break-word",
      backgroundColor: "transparent",
      fontSize: "14px",
      fontWeight: "500",
      color: "#827D9D",
    },
    "& textarea#mui-3::placeholder": {
      color: "#827D9D",
      opacity: "1",
    },
  },
});

const TextInputField = ({
  label,
  name,
  value,
  onChangeHandler,
  onBlurHandler,
  placeholder,
  errors,
  touched,
  multiline,
  rows,
  required = false,
}) => {
  const theme = useTheme();

  console.log("themme", theme);

  return (
    <>
      <Box className={styles.textInputFieldWrapper}>
        {label && (
          <label htmlFor="Username">
            <Typography
              sx={{
                color: "background.fontClr",
              }}
            >
              {label}
              {required && "*"}
            </Typography>
          </label>
        )}
        <CustomTextField
          margin="normal"
          placeholder={placeholder}
          name={name && name}
          value={value && value}
          onChange={onChangeHandler && onChangeHandler}
          onBlur={onBlurHandler && onBlurHandler}
          multiline={multiline && multiline}
          rows={rows && rows}
          sx={{
            border: `1px solid ${theme.palette.background.fontClr}`,
            borderRadius: rows ? "18px" : "56px",
          }}
        />
        {errors && touched ? (
          <Typography
            sx={{ color: "#9c3c3c", mt: "5px", ml: "10px" }}
            variant="caption"
          >
            {errors}
          </Typography>
        ) : null}
      </Box>
    </>
  );
};

export default TextInputField;
