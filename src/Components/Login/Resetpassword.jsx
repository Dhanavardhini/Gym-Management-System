import React, { useState } from "react";
import { Box, TextField, Button, Typography, InputAdornment } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LockIcon from '@mui/icons-material/Lock';
import Loginbac from '../../assets/loginpage.png';

function Resetpassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSave = () => {
    if (!password || !confirmPassword) {
      alert("Please enter both password fields!");
      return;
    }
    
    if (password === confirmPassword) {
      localStorage.setItem("password", password); // Store new password
      alert("Password reset successfully!");
      navigate("/login"); // Redirect to login page
    } else {
      alert("Passwords do not match! Please try again.");
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
         <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center", // Centers the content horizontally inside
            gap: 1,
            mb: { xs: 3, sm: 4, md: 4, lg: 3 },
          }}
        >
          <Box
            sx={{
              backgroundColor: "#001F3F",
              borderRadius: "50%",
              width: { xs: 20, sm: 32, md: 38, lg: 38 },
              height: { xs: 20, sm: 32, md: 38, lg: 38 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
          <Typography
            // variant="h6"
            sx={{ width:"130px",
                ml:1,
              fontSize: { xs: "1rem", sm: "1rem", md: "1rem" },
              borderLeft: "2px solid", // Adding 2px border to the right
              paddingLeft: 3, // Adding some padding to avoid the text being too close to the border
              borderLeftColor:"#D1D8C5",
            //   mb:1,
              color:"#3D3D3D"
            }}
          >
            Beast Forces  
            Gym
          </Typography>
        </Box>
        <Typography variant="h5" align="center" sx={{ fontSize: { xs: "1rem", sm: "1.5rem", md: "1.5rem" }, color: "#4A4947" }} mb={1}>
          Reset Password
        </Typography>

        <Box display="flex" justifyContent="center" textAlign="center">
          <Typography  
            sx={{
              width: "180px",
              fontSize: { xs: "0.70rem", sm: "0.72rem", md: "0.72rem" },
              color: "#E4003A"
            }} 
            mb={1}
          >
            Enter your new password below, we are just being extra safe
          </Typography>
        </Box>

        {/* Password Input */}
        <TextField  
          sx={{
            backgroundColor: "#EEEEEE",
            borderRadius: "12px",
            "& .MuiOutlinedInput-root": {
              backgroundColor: "#EEEEEE",
              borderRadius: "12px",
              border: "none",
              "& fieldset": { border: "none" },
            },
            "& .MuiInputBase-input": {
              fontSize: "14px",
              padding: "10px 5px",
            },
          }}
          placeholder="Enter your Password"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon sx={{ fontSize: "18px" }} />
              </InputAdornment>
            ),
          }}
        />

        {/* Confirm Password Input */}
        <TextField  
          sx={{
            backgroundColor: "#EEEEEE",
            borderRadius: "12px",
            "& .MuiOutlinedInput-root": {
              backgroundColor: "#EEEEEE",
              borderRadius: "12px",
              border: "none",
              "& fieldset": { border: "none" },
            },
            "& .MuiInputBase-input": {
              fontSize: "14px",
              padding: "10px 5px",
            },
          }}
          placeholder="Confirm Password"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon sx={{ fontSize: "18px" }} />
              </InputAdornment>
            ),
          }}
        />

        <Box sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            sx={{ mt: 2, backgroundColor: "#E4003A", textTransform: "capitalize", padding: "5px 40px" }}
            onClick={handleSave}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Resetpassword;
