import React, { useRef, useState, useEffect } from "react";
import styles from "./EditProfileForm.module.sass";
import Typography from "@mui/material/Typography";
import { Box, TextField } from "@mui/material";
import { useFormik } from "formik";
import { signUpSchema } from "../../schemas";
import TextInputField from "../TextInputField";
import PreviewImage from "../PreviewImage";
import { useTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import { loginAction, profileUpdateAction } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { dashUserDataAction } from "../../Redux/actions";
import CircularProgress from "@mui/material/CircularProgress";

const EditProfileForm = () => {
  let navigate = useNavigate();
  const avatarFileRef = useRef(null);
  const coverImageFileRef = useRef(null);
  let dispatch = useDispatch();

  const walletAddressGet = useSelector(
    (state) => state.saveWalletAddressReducer.users
  );

  // let newAddress = walletAddressGet.toLowerCase();

  // console.log("LowCaseAddress", newAddress);

  const initialValues = {
    // address: newAddress,
    firstName: "",
    lastName: "",
    description: "",
    twitter: "",
    facebook: "",
    instagram: "",
    avatar: null,
    background: null,
  };

  const [avatarPro, setAvatarPro] = useState("");
  const [bgPro, setBgPro] = useState("");
  const [UpdateProfileState, setUpdateProfileState] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const UpdateProfileResponse = useSelector(
    (state) => state.UpdateProfileReducer.users
  );

  // setUpdateProfileState(UpdateProfileResponse);

  // useEffect(() => {
  //   if (UpdateProfileResponse) {
  //     setUpdateProfileState(UpdateProfileResponse);
  //   }
  // });

  console.log("ThisIsUpdateProfileRes", UpdateProfileState);

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
    // validationSchema: signUpSchema,
    onSubmit: async (values, action) => {
      let formData = new FormData();

      Object.keys(values).map((keys) => {
        formData.append(keys, values[keys]);
        console.log("check_Keys", formData.get(keys));
      });

      dispatch(profileUpdateAction(formData));
      setUpdateProfileState(true);
      setLoading(true);
    },
  });

  useEffect(() => {
    if (UpdateProfileResponse.status === true && UpdateProfileState === true) {
      dispatch(dashUserDataAction());
      setTimeout(() => {
        setLoading(false);
        navigate("/profile");
        setUpdateProfileState(false);
      }, 1000);
    }
  }, [UpdateProfileResponse]);

  const theme = useTheme();

  const [userName, setName] = useState("");

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
                Profile Settings
              </Typography>
            </Box>
            <Box component="form" onSubmit={handleSubmit} autoComplete="off">
              <Box className={styles.inputWrapper}>
                <TextInputField
                  label="Firstname"
                  name="firstName"
                  value={values.firstName}
                  onChangeHandler={handleChange}
                  // onChange={(e) => setName(e.target.value)}
                  onBlurHandler={handleBlur}
                  placeholder="Firstname"
                  errors={errors.firstName}
                  touched={touched.firstName}
                />
              </Box>
              <Box className={styles.inputWrapper}>
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
              </Box>
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
                  label="Links"
                  name="facebook"
                  value={values.facebook}
                  onChangeHandler={handleChange}
                  onBlurHandler={handleBlur}
                  placeholder="facebook"
                  errors={errors.facebook}
                  touched={touched.facebook}
                />
                <TextInputField
                  name="twitter"
                  value={values.twitter}
                  onChangeHandler={handleChange}
                  onBlurHandler={handleBlur}
                  placeholder="twitter"
                  errors={errors.twitter}
                  touched={touched.twitter}
                />
                <TextInputField
                  name="instagram"
                  value={values.instagram}
                  onChangeHandler={handleChange}
                  onBlurHandler={handleBlur}
                  placeholder="Instagram"
                  errors={errors.instagram}
                  touched={touched.instagram}
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
                >
                  Submit
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
                  Profile Image
                </Typography>
              </Box>
              <Box className={styles.avatarImgWrapper}>
                {values.avatar ? (
                  <PreviewImage file={values.avatar} alt="avatar_img" />
                ) : (
                  <img
                    src="./ozean_Images/Images/avatar.png"
                    alt="avatar_img"
                  />
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
                  <img
                    src="./ozean_Images/Images/coverimage.png"
                    alt="avatar_img"
                  />
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

export default EditProfileForm;
