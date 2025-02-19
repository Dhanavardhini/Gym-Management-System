import React, { useState } from "react";
import { Box, TextField, Button, Typography, InputAdornment } from "@mui/material";
import { useNavigate } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Loginbac from "../../assets/loginpage.png";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (!storedEmail) {
      // First-time user: Save credentials and allow login
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      alert("Registration successful! You are now logged in.");
      navigate("/dashboard");
    } else {
      // Returning user logic
      if (email === storedEmail) {
        if (password === storedPassword) {
          alert("Login successful");
          navigate("/dashboard");
        } else {
          alert("Invalid credentials. If you forgot your password, reset it.");
        }
      } else {
        alert("Email not found. Please sign up.");
      }
    }
  };

  return (
    <Box
      sx={{
        // minHeight: "100vh",
        // backgroundImage: `url(${Loginbac})`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
        // width: "100%",
        // display: "flex",
        // justifyContent: "flex-start",
        // alignItems: "center",
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
    boxShadow: 3,
    height: { xs: "auto", sm: "400px" }, // Adjust height for small screens
    mx: "auto", // Centers the card horizontally for smaller screens
    mt: { xs: 5, sm: 10, lg: 4, xl: 4 }, // Margin-top set to 4 for lg and xl
    ml: { lg: 16, xl: 10 }, // Adds left margin for lg and xl screens
  }}
>
  {/* Logo and Title */}
  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 4 }}>
    <Box
      sx={{
        backgroundColor: "#001F3F",
        borderRadius: "50%",
        width: 38,
        height: 38,
        mr: 1,
      }}
    />
    <Typography
      sx={{
        fontSize: { xs: "0.9rem", sm: "1rem",lg:"1rem" },
    borderLeft: "2px solid #D1D8C5",
    pl: 2,
    color: "#3D3D3D",
    height: "50px", width:"100px",
    // textAlign: "center",
    display: "flex", // Enables flexbox
    alignItems: "center", // Centers text vertically
      }}
    >
      Beast Forces Gym
    </Typography>
  </Box>

  <Typography
    variant="h5"
    align="center"
    sx={{ fontSize: { xs: "1.3rem", sm: "1.3rem" }, color: "#4A4947", mb: 2 }}
  >
    <u >Log</u>in
  </Typography>

  {/* Email Input */}
  <TextField
    sx={{mb:2.7,
      backgroundColor: "#EEEEEE",
      borderRadius: "12px",
      "& .MuiOutlinedInput-root": {
        backgroundColor: "#EEEEEE",
        borderRadius: "12px",
        "& fieldset": { border: "none" },
      },
      "& .MuiInputBase-input": {
        fontSize: { xs: "14px", sm: "16px" },
        padding: "10px 5px",
      },
    }}
    placeholder="Email"
    fullWidth
    margin="normal"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <EmailIcon sx={{ fontSize: "20px" }} />
        </InputAdornment>
      ),
    }}
  />

  {/* Password Input */}
  <TextField
    sx={{
      backgroundColor: "#EEEEEE",
      borderRadius: "12px",
      "& .MuiOutlinedInput-root": {
        backgroundColor: "#EEEEEE",
        borderRadius: "12px",
        "& fieldset": { border: "none" },
      },
      "& .MuiInputBase-input": {
        fontSize: { xs: "14px", sm: "16px" },
        padding: "10px 5px",
      },
    }}
    placeholder="Password"
    variant="outlined"
    type="password"
    fullWidth
    margin="normal"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <LockIcon sx={{ fontSize: "20px" }} />
        </InputAdornment>
      ),
    }}
  />

  {/* Forgot Password Button */}
  <Box sx={{ textAlign: "right" }}>
    <Button
      onClick={() => navigate("/forgot-password")}
      variant="text"
      sx={{ textTransform: "none", color: "black", fontSize: { xs: "12px", sm: "14px" } }}
    >
      Forgot Password?
    </Button>
  </Box>

  {/* Login Button */}
  <Box sx={{ textAlign: "center" }}>
    <Button
      variant="contained"
      sx={{
        mt: 2,
        backgroundColor: "#E4003A",
        textTransform: "capitalize",
        padding: { xs: "5px 30px", sm: "5px 40px" },
        fontSize: { xs: "14px", sm: "16px" },
      }}
      onClick={handleLogin}
    >
      Login
    </Button>
  </Box>
</Box>


    </Box>
  );
}

export default LoginPage;
