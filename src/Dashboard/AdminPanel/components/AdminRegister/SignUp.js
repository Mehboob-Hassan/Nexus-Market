import React, { useState } from "react";
import { Box, Typography, Grid, TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import LoginIcon from "@mui/icons-material/Login";
import CssBaseline from "@mui/material/CssBaseline";
import { useNavigate } from "react-router-dom";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInput-underline:before": {
    color: "white",
    borderBottomColor: "#703D70",
  },
  "& .MuiInput-underline:after": {
    color: "white",
    borderBottomColor: "white",
  },
  "& #custom-css-outlined-input": {
    color: "white",
  },
});

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [wallet, setWallet] = useState("");

  let navigate = useNavigate();

  const handleSignUp = () => {
    setTimeout(() => {
      navigate("/AdminLogin");
    }, 1000);
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xl={6}
        lg={6}
        md={6}
        sm={false}
        xs={false}
        sx={{
          display: { lg: "block", md: "block", sm: "none", xs: "none" },
          backgroundImage: "url(./assets/loginBg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          width: "80%",
          backgroundColor: "#FAF9FE",
        }}
      >
        <Box
          sx={{
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          <img src="./assets/LogoForWhite2.png" width="230px" />
        </Box>
      </Grid>
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12} elevation={6} square>
        <Box
          sx={{
            backgroundColor: "#1F2552",
            height: { lg: "100vh", md: "100vh", sm: "100vh", xs: "auto" },
            width: "100%",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: { lg: "100vh", md: "100vh", sm: "100vh", xs: "auto" },
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#252C61",
                height: "auto",
                width: { lg: "70%", md: "70%", sm: "70%", xs: "90%" },
                boxShadow: "1px 2px 18px 2px cornSilk",
              }}
            >
              <Box sx={{ m: "30px" }}>
                <Box>
                  <Typography
                    sx={{
                      color: "#FF6391",
                      fontSize: "27px",
                      fontWeight: 800,
                      mt: "20px",
                    }}
                  >
                    Welcome <span style={{ color: "white" }}>to Sign Up</span>
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#6C76C6", fontSize: "12px", mt: "10px" }}
                  >
                    Variations of passages of Lorem Ipsum available, but the
                    majority have suffered alteration in some form by injected
                    humour.
                  </Typography>
                </Box>
                <Box sx={{ mt: "20px" }}>
                  <CssTextField
                    fullWidth
                    margin="normal"
                    placeholder="Name"
                    type="text"
                    variant="standard"
                    id="custom-css-outlined-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <CssTextField
                    fullWidth
                    margin="normal"
                    placeholder="Email"
                    type="text"
                    variant="standard"
                    id="custom-css-outlined-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <CssTextField
                    fullWidth
                    margin="normal"
                    placeholder="Phone"
                    type="number"
                    variant="standard"
                    id="custom-css-outlined-input"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />

                  <CssTextField
                    fullWidth
                    margin="normal"
                    placeholder="Wallet Address"
                    type="text"
                    variant="standard"
                    id="custom-css-outlined-input"
                    value={wallet}
                    onChange={(e) => setWallet(e.target.value)}
                  />
                </Box>
                <Box sx={{ mt: "20px" }}>
                  <Button
                    variant="contained"
                    sx={{ width: "40%" }}
                    onClick={handleSignUp}
                  >
                    Sign up
                  </Button>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    mt: "30px",
                  }}
                >
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{ color: "#6C76C6", fontSize: "12px", mt: "10px" }}
                    >
                      Forgot your password?
                    </Typography>
                  </Box>
                  <Box>
                    <Button
                      variant="text"
                      endIcon={<LoginIcon />}
                      onClick={() => navigate("/AdminLogin")}
                    >
                      Sign in
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignUp;
