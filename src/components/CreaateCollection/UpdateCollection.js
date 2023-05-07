import React, { useRef, useState, useEffect } from "react";
import styles from "../EditProfileForm/EditProfileForm.module.sass";
import Typography from "@mui/material/Typography";
import { Box, Select, TextField, FormControl, MenuItem } from "@mui/material";
import { useFormik } from "formik";
import { createCollectionSchema } from "../../schemas/createCollectionSchema";
import TextInputField from "../TextInputField";
import PreviewImage from "../PreviewImage";
import { useTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import {
  getAllCategoriesAction,
  profileUpdateAction,
} from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
// import { makeStyles } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import { ExpandMoreRounded } from "@material-ui/icons";
import { InputLabel } from "@mui/material";
import { createCollectionAction } from "../../Redux/actions";
import CircularProgress from "@mui/material/CircularProgress";
import avatarImg from "./avatarMen.png";
import bgImg from "./bg.jpg";
import { updateCollectionSchema } from "../../schemas/updateCollectionSchema";
import pencilIcon from "./Pencil.svg";
import { updateCollectionAction } from "../../Redux/actions";

const UpdateCollection = () => {
  let navigate = useNavigate();
  const avatarFileRef = useRef(null);
  const coverImageFileRef = useRef(null);
  let dispatch = useDispatch();

  const updateCollectionRes = useSelector(
    (state) => state.updateCollectionReducer.users
  );

  console.log("ResOfUpdateCollection", updateCollectionRes);

  let { id } = useParams();

  const [CreateCollectionNavigate, setCreateCollectionNavigate] =
    useState(false);
  const [isLoading, setLoading] = useState(false);
  //   const {
  //     values,
  //     errors,
  //     touched,
  //     handleBlur,
  //     handleChange,
  //     handleSubmit,
  //     setFieldValue,
  //   } = useFormik({
  //     initialValuesOfUpdateCollection,
  //     validationSchema: updateCollectionSchema,
  //     onSubmit: (values, action) => {
  //       console.log("CheckValueOfCreateCollection", values);

  //       let formData = new FormData();

  //       Object.keys(values).map((keys) => {
  //         formData.append(keys, values[keys]);
  //         console.log("check_KeysCreateCollection", formData.get(keys));
  //       });

  //       setTimeout(() => {
  //         // dispatch(createCollectionAction(formData));
  //         setCreateCollectionNavigate(true);
  //         setLoading(true);
  //         // setTimeout(() => {
  //         //   navigate("/Collections");
  //         // }, 1000);
  //       }, 1000);
  //     },
  //   });

  const theme = useTheme();

  const [selectValue, setselectValue] = useState("");

  const useStyles = makeStyles(() => ({
    formControl: {
      "& .MuiInputBase-root:hover": {
        border: "none",
      },
      "& .MuiInputBase-root": {
        color: "#827D9D",
        borderColor: theme.palette.background.fontClr,
        borderWidth: "1px",
        borderStyle: "solid",
        borderRadius: "100px",
        minWidth: "370px",
        justifyContent: "center",
      },
      "& .MuiSelect-select.MuiSelect-select": {
        paddingRight: "0px",
      },
    },
    select: {
      width: "100%",
      fontSize: "auto",
      "&:focus": {
        backgroundColor: "transparent",
        borderColor: theme.palette.background.fontClr,
      },
    },
    selectIcon: {
      // position: "relative",
      color: theme.palette.background.fontClr,
      fontSize: "20px",
    },
    paper: {
      borderRadius: 12,
      marginTop: 8,
    },
    list: {
      paddingTop: 0,
      paddingBottom: 0,
      "& li": {
        fontWeight: 200,
        paddingTop: 8,
        paddingBottom: 8,
        fontSize: "auto",
      },
      "& li.Mui-selected": {
        minWith: "300px",
        color: "#fffff",
        backgroundColor: theme.palette.background.fontClr,
      },
      "& li.Mui-selected:hover": {
        backgroundColor: theme.palette.background.fontClr,
      },
    },
  }));

  const classes = useStyles();

  const menuProps = {
    // width: "100%",
    classes: {
      list: classes.list,
      paper: classes.paper,
    },
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "center",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "center",
    },
    getContentAnchorEl: null,
  };

  //   console.log("AllCategoriesResFromCollection", allCategoriesRes);

  console.log("ValueSelected", selectValue);

  const [name, setName] = useState("");
  const [desp, setDesp] = useState("");
  const [externalLink, setExternalLink] = useState("");
  const [avatar, setAvatar] = useState("");
  const [background, setBackground] = useState("");

  let formData = new FormData();

  console.log("avatarCheck", avatar);

  const handleUpdateForm = () => {
    formData.append("name", name);
    formData.append("id", id);
    formData.append("description", desp);
    formData.append("externalUrl", externalLink);
    formData.append("avatar", avatar);
    formData.append("background", background);

    setTimeout(() => {
      dispatch(updateCollectionAction(formData));
      setCreateCollectionNavigate(true);
      setLoading(true);
    }, 1000);
  };

  useEffect(() => {
    if (
      updateCollectionRes?.success === true &&
      CreateCollectionNavigate === true
    ) {
      setTimeout(() => {
        setLoading(false);
        navigate(`/MyCollections/Collection/${id}`);
        setCreateCollectionNavigate(false);
      }, 1000);
    }
  }, [updateCollectionRes]);

  return (
    <>
      <Box
        className={styles.eightyPercentWrapper}
        sx={{
          bgcolor: "background.default",
          // boxShadow: "0 4px 10px -2px gray",
        }}
      >
        <Box className={styles.ninetyFivePercentWrapper}>
          <Box className={styles.editProfileFormContainer_col1}>
            <Box className={styles.headingWrapper}>
              <Typography
                variant="h5"
                fontWeight={500}
                gutterBottom
                sx={{
                  color: "text.primary",
                }}
              >
                New Collection
              </Typography>
            </Box>
            <Box>
              <Box className={styles.inputWrapper}>
                <TextInputField
                  label="Name"
                  value={name}
                  onChangeHandler={(e) => setName(e.target.value)}
                  placeholder="name"
                />
              </Box>
              <Box className={styles.inputWrapper}>
                <TextInputField
                  label="Description"
                  value={desp}
                  onChangeHandler={(e) => setDesp(e.target.value)}
                  placeholder="Description"
                  rows={7}
                  multiline
                />
              </Box>
              <Box className={styles.inputWrapper}>
                <TextInputField
                  label="External Link"
                  value={externalLink}
                  onChangeHandler={(e) => setExternalLink(e.target.value)}
                  placeholder="External Link"
                />
              </Box>
              <Box className={styles.buttonWrapper}>
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    backgroundColor: "background.fontClr",
                    width: "200px",
                  }}
                  onClick={handleUpdateForm}
                >
                  Update Collection
                  {isLoading ? (
                    <CircularProgress
                      color="secondary"
                      size="10"
                      sx={{ ml: "10px", width: "30px" }}
                    />
                  ) : (
                    ""
                  )}
                </Button>
              </Box>
            </Box>
          </Box>
          <Box className={styles.editProfileFormContainer_col2}>
            <Box className={styles.avatarUploadWrapper}>
              <Box className={styles.headingWrapper}>
                <Typography
                  variant="h5"
                  fontWeight={500}
                  gutterBottom
                  sx={{
                    color: "text.primary",
                  }}
                >
                  Avatar Image
                </Typography>
              </Box>
              <Box className={styles.avatarImgWrapper}>
                {avatar ? (
                  <PreviewImage file={avatar} alt="avatar_img" />
                ) : (
                  <img src={avatarImg} alt="avatar_img" />
                )}
                <Box className={styles.pencilIconWrapper}>
                  <input
                    ref={avatarFileRef}
                    hidden
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      setAvatar(e.target.files[0]);
                    }}
                  />
                  <img
                    src={pencilIcon}
                    alt="cant load image"
                    onClick={() => avatarFileRef.current.click()}
                  />
                </Box>
              </Box>
            </Box>
            <Box className={styles.coverImgUploadWrapper}>
              <Box className={styles.headingWrapper}>
                <Typography
                  variant="h5"
                  fontWeight={500}
                  gutterBottom
                  sx={{
                    color: "text.primary",
                  }}
                >
                  Cover Image
                </Typography>
              </Box>
              <Box className={styles.coverImgWrapper}>
                {background ? (
                  <PreviewImage file={background} alt="cover_img" />
                ) : (
                  <img src={bgImg} alt="avatar_img" />
                )}
                <Box className={styles.uploadBtnWrapper}>
                  <input
                    ref={coverImageFileRef}
                    hidden
                    accept="image/*"
                    type="file"
                    onChange={(e) => {
                      setBackground(e.target.files[0]);
                    }}
                  />
                  <Button
                    onClick={() => coverImageFileRef.current.click()}
                    variant="contained"
                    sx={{
                      backgroundColor: "background.fontClr",
                    }}
                  >
                    Upload
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default UpdateCollection;
