import React, { useState } from "react";
import { Box, Button, InputAdornment, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import Loginbac from "../../assets/loginpage.png";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleBlur = () => setError(!email.trim());

  const handleLogin = () => {
    if (email.trim()) {
      navigate("/email-otp");
      console.log("OTP Sent");
    } else {
      setError(true);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: `url(${Loginbac}) center/cover no-repeat`,
        display: "flex",
        alignItems: "center",
        pl: 7,
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          p: { xs: 4, sm: 6, md: 5 }, // Responsive padding
          borderRadius: 5,
          maxWidth: { xs: "90%", sm: 350 }, // Responsive width
          width: "100%",
          boxShadow: 3,// Adjust height for small screens
          mx: "auto", // Centers the card horizontally for smaller screens
          mt: { xs: 5, sm: 10, lg: 4, xl: 4 }, // Margin-top set to 4 for lg and xl
          ml: { lg: 16, xl: 10 }, // Adds left margin for lg and xl screens
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 4 }}>

          <Box sx={{ backgroundColor: "#001F3F", borderRadius: "50%", width: 38, height: 38 }} />
          <Typography
            sx={{
              width: "130px",
              ml: 1,
              fontSize: "1rem",
              borderLeft: "2px solid #D1D8C5",
              pl: 3,
              color: "#3D3D3D",
            }}
          >
            Beast Forces Gym
          </Typography>
        </Box>

        <Typography variant="h5" align="center" sx={{ fontSize: "1.6rem", color: "#4C585B", mb: 2 }}>
          Forget Your Password?
        </Typography>

        <Typography variant="h5" align="center" sx={{ fontSize: "0.70rem", color: "#E4003A", textTransform: "capitalize" ,mb: 3 }}>
          Enter your Email below to receive your OTP
        </Typography>

        <TextField
          sx={{
            backgroundColor: "#EEEEEE",
            borderRadius: "12px",
            "& .MuiOutlinedInput-root": {
              backgroundColor: "#EEEEEE",
              borderRadius: "12px",
              "& fieldset": { border: "none" },
            },
            "& .MuiInputBase-input": { fontSize: "15px", p: "10px 5px" },
          }}
          placeholder="Email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={handleBlur}
          error={error}
          helperText={error ? "Please Enter the EmailID" : ""}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon sx={{ fontSize: "18px" }} />
              </InputAdornment>
            ),
          }}
        />

        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#E4003A", textTransform: "capitalize", px: 5 }}
            onClick={handleLogin}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ForgotPasswordPage;
