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

const CreateCollection = () => {
  let navigate = useNavigate();
  const avatarFileRef = useRef(null);
  const coverImageFileRef = useRef(null);
  let dispatch = useDispatch();
  const walletAddressGet = useSelector(
    (state) => state.saveWalletAddressReducer.users
  );
  const CreateCollectionRes = useSelector(
    (state) => state.createCollectionReducer.users
  );

  console.log("ResOfCreatedCollection", CreateCollectionRes);
  const initialValues = {
    address: walletAddressGet,
    name: "",
    categoryID: "",
    description: "",
    externalUrl: "",
    avatar: null,
    background: null,
  };

  const [avatarPro, setAvatarPro] = useState("");
  const [bgPro, setBgPro] = useState("");
  const [CreateCollectionNavigate, setCreateCollectionNavigate] =
    useState(false);
  const [isLoading, setLoading] = useState(false);
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: createCollectionSchema,
    onSubmit: (values, action) => {
      console.log("CheckValueOfCreateCollection", values);

      let formData = new FormData();

      Object.keys(values).map((keys) => {
        formData.append(keys, values[keys]);
        console.log("check_KeysCreateCollection", formData.get(keys));
      });

      setTimeout(() => {
        dispatch(createCollectionAction(formData));
        setCreateCollectionNavigate(true);
        setLoading(true);
      }, 1000);
    },
  });

  useEffect(() => {
    if (
      CreateCollectionRes.status === true &&
      CreateCollectionNavigate === true
    ) {
      setTimeout(() => {
        setLoading(false);
        navigate("/MyCollections");
        setCreateCollectionNavigate(false);
      }, 1000);
    }
  }, [CreateCollectionRes]);

  const theme = useTheme();

  const [userName, setName] = useState("");
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

  useEffect(() => {
    dispatch(getAllCategoriesAction());
  }, []);

  const allCategoriesRes = useSelector(
    (state) => state.getAllCategoriesReducer.users
  );
  console.log("AllCategoriesResFromCollection", allCategoriesRes);

  const handleChangeSelect = (event) => {
    setselectValue(event.target.value);
  };

  console.log("ValueSelected", selectValue);

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
            <Box component="form" onSubmit={handleSubmit} autoComplete="off">
              <Box className={styles.inputWrapper}>
                <TextInputField
                  label="Name"
                  name="name"
                  value={values.name}
                  onChangeHandler={handleChange}
                  // onChange={(e) => setname(e.target.value)}
                  onBlurHandler={handleBlur}
                  placeholder="name"
                  errors={errors.name}
                  touched={touched.name}
                />
              </Box>
              {/* <Box className={styles.inputWrapper}>
                <TextInputField
                  label="Lastname"
                  name="lastName"
                  value={values.lastName}
                  onChangeHandler={handleChange}
                  onBlurHandler={handleBlur}
                  placeholder="Last Name"
                  errors={errors.lastName}
                  touched={touched.lastName}
                />
              </Box> */}
              <Box className={styles.inputWrapper}>
                <TextInputField
                  label="Description"
                  name="description"
                  value={values.bio}
                  onChangeHandler={handleChange}
                  onBlurHandler={handleBlur}
                  placeholder="Description"
                  errors={errors.description}
                  touched={touched.description}
                  rows={7}
                  multiline
                />
              </Box>
              <Box className={styles.inputWrapper}>
                <TextInputField
                  label="External Link"
                  name="externalUrl"
                  value={values.externalUrl}
                  onChangeHandler={handleChange}
                  onBlurHandler={handleBlur}
                  placeholder="External Link"
                  errors={errors.externalUrl}
                  touched={touched.externalUrl}
                />
              </Box>

              <Box className={styles.inputWrapper}>
                <InputLabel
                  sx={{ color: theme.palette.background.fontClr, mb: "10px" }}
                >
                  category
                </InputLabel>
                <FormControl
                  //   sx={{ m: 1, minWidth: 120 }}
                  className={classes.formControl}
                >
                  <Select
                    value={values.categoryID}
                    // value={selectValue}
                    name="categoryID"
                    variant="outlined"
                    onChange={handleChange}
                    displayEmpty
                    MenuProps={menuProps}
                    inputProps={{ "aria-label": "Without label" }}
                    // className={classes.select}
                    classes={{
                      select: classes.select,
                      icon: classes.selectIcon,
                    }}
                    IconComponent={ExpandMoreRounded}
                  >
                    <MenuItem value="" sx={{ color: "white" }}>
                      <em>None</em>
                    </MenuItem>
                    {allCategoriesRes?.data &&
                      allCategoriesRes?.data?.map((v, i) => (
                        <MenuItem value={v?._id} sx={{ color: "white" }}>
                          {v?.name}
                        </MenuItem>
                      ))}
                    {/* <MenuItem value={10} sx={{ color: "white" }}>
                     Arts
                   </MenuItem>
                   <MenuItem value={20} sx={{ color: "white" }}>
                     Fashion
                   </MenuItem>
                   <MenuItem value={30} sx={{ color: "white" }}>
                     Sports
                   </MenuItem> */}
                  </Select>
                </FormControl>
              </Box>

              <Box className={styles.buttonWrapper}>
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    backgroundColor: "background.fontClr",
                    width: "200px",
                  }}
                >
                  Create Collection
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
                {values.avatar ? (
                  <PreviewImage file={values.avatar} alt="avatar_img" />
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
                      setFieldValue("avatar", e.target.files[0]);
                    }}
                  />
                  <img
                    src="./ozean_Images/Icons/Pencil.svg"
                    alt="cant load image"
                    onClick={() => avatarFileRef.current.click()}
                  />
                </Box>
                {errors.avatar && touched.avatar ? (
                  <Typography
                    sx={{ color: "#9c3c3c", mt: "5px", ml: "10px" }}
                    variant="caption"
                  >
                    {errors.avatar}
                  </Typography>
                ) : null}
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
                {values.background ? (
                  <PreviewImage file={values.background} alt="cover_img" />
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
                      setFieldValue("background", e.target.files[0]);
                      setBgPro(e.target.files[0]);
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
              {errors.background && touched.background ? (
                <Typography
                  sx={{ color: "#9c3c3c", mt: "5px", ml: "10px" }}
                  variant="caption"
                >
                  {errors.background}
                </Typography>
              ) : null}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CreateCollection;
