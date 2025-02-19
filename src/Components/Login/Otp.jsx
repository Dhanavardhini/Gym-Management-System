import React, { useState } from "react";
import { Box, Button, InputAdornment,Input, TextField, Typography } from "@mui/material";
import Loginbac from '../../assets/loginpage.png';
import { useNavigate } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';



function OtpPage() 
{const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    
    // const navigate = useNavigate();
  
    // Replace with your actual credentials for validation
    const correctEmail = "test@example.com";
  
    const handleLogin = () => {
      if (email === correctEmail ) {
        // Successful login
        setError(false);
        // Navigate to the main page after successful login (or wherever you want)
        console.log("Login successful");
      } else {
        // Invalid credentials, redirect to Forgot Password page
        setError(true);
        navigate("");
      }
    };

    const [otp, setOtp] = useState(["", "", "", ""]);
    const navigate = useNavigate();
  
    const handleChange = (index, value) => {
      if (/^\d?$/.test(value)) { // Allow only single-digit numbers
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
      }
    };
  
    const handleSubmit = () => {
      if (otp.every((digit) => digit !== "")) {
        navigate("/reset-password"); // Replace with your next page route
      } else {
        alert("Please enter a 4-digit OTP.");
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
        mb: { xs: 3, sm: 4, md: 4, lg: 4 },
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
          mb:1,
          color:"#3D3D3D"
        }}
      >
        Beast Forces  
        Gym
      </Typography>
    </Box>

    <Typography variant="h5" align="center" sx={{fontSize: { xs: "1rem", sm: "1rem", md: "1.3rem" },color:"#4C585B",mb:1}} >
       Enter Your OTP
    </Typography>

   
  <Box>
  <Box sx={{ display: "flex", gap: 1, justifyContent: "center",mb:1 }}>
    {otp.map((digit, index) => (
      <Input
        key={index}
        required
        sx={{
          borderBottom: "1px solid #D9DFC6",
          width: "40px",
          textAlign: "center",
          fontSize: "1.2rem", // Increase font size for better centering
          height: "40px", // Adjust height to make the border visually centered
          lineHeight: "40px", // Align text properly
          paddingBottom: "5px", // Adjust border positioning
        }}
        value={digit}
        onChange={(e) => handleChange(index, e.target.value)}
        inputProps={{ maxLength: 1 }}
      />
    ))}
  </Box>
</Box>

{/* Login Button */}
<Box sx={{ textAlign: "center",mb:2, }}>
     <Button
      variant="contained" 
      Width="55" 
      sx={{ mt: 2, backgroundColor:"#E4003A",textTransform: "capitalize",padding:"5px 40px 5px 40px"}}
      onClick={handleSubmit}
    >
      Send
    </Button>

   </Box>

   <Typography  align="center" sx={{fontSize: { xs: "0.72rem", sm: "0.72rem", md: "0.72rem" },color:"#5E686D",cursor:"pointer"}} >
      Resend the OTP
    </Typography>
  </Box>
</Box>
  );
}

export default OtpPage;
