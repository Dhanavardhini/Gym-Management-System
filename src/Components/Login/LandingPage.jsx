import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Landingbac from '../../assets/landingpage.png';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useNavigate } from "react-router-dom";

function LandingPage() {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate("/login"); 
    };

  return (
    <Box
      sx={{
        minHeight: "100vh", 
        backgroundImage: `url(${Landingbac})`,
        backgroundSize: "cover", 
        backgroundPosition: "top", 
        backgroundRepeat: "no-repeat", 
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          p: { xs: 2, sm: 4, md: 4, lg: 4, xl: 4 }, 
          color: "white",
          ml:4,
        }}
      >
        {/* Header */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: { xs: 12, sm: 12, md: 12, lg: 19 } }}>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "50%",
              width: { xs: 20, sm: 30, md: 28, lg: 28 },
              height: { xs: 20, sm: 30, md: 28, lg: 28 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
          <Typography variant="h6" sx={{ fontSize: { xs: "1rem", sm: "1.2rem", md: "1.2rem" } }}>Beast Forces</Typography>
        </Box>

        {/* Main Content */}
        <Box sx={{ width: { xs: "auto", sm: 500 }, mb: 16 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.3rem", sm: "2.3rem", md: "2.45rem", lg: "2.50rem" },
              mb: 1.5,
              fontfamily: "Jost,serif ",letterSpacing:"2px"}}
          >
            Get Ready
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.1rem" } ,fontStyle:"normal",fontfamily: "Jost,serif "}}>
            Shape your body
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontStyle: "italic",
              fontSize: { xs: "0.8rem", sm: "0.95rem", md: "0.90rem" },
              mt: 1,
            }}
          >
            "The harder you work and the more prepared you are for something, you're going to be able to persevere
            through anything."
          </Typography>

          {/* Button */}
          <Button
            variant="contained"
            sx={{
                backgroundColor: "#E4003A",
                borderRadius: "20px",
                mt: 2,
                paddingX: { xs: 2, sm: 3, md: 4 },
                fontSize: { xs: "0.9rem", sm: "0.8rem", md: "0.95rem" },
                boxShadow: 2,
                textTransform: "capitalize", 
            }}onClick={handleClick}
            >
            Get Started
            </Button>


        </Box>

        <Box
      sx={{
        display: "flex",
        justifyContent: "center", 
        alignItems: "center", 
        gap: { xs: 2, sm: 3, md: 4 },
        p: { xs: 2, sm: 3 }, 
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: "50%", 
          padding: { xs: 1, sm: 0.75 }, 
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#E4003A", 
          boxShadow: 1, 
        }}
      >
        <FacebookOutlinedIcon sx={{ fontSize: { xs: 30, sm: 29, md: 29 } }} />
      </Box>
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: "50%",
          padding: { xs: 1, sm: 0.75  },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#E4003A",
          boxShadow: 1,
        }}
      >
        <GoogleIcon sx={{ fontSize: { xs: 30, sm: 29, md: 29 } }} />
      </Box>
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: "50%",
          padding: { xs: 1, sm: 0.75  },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#E4003A",
          boxShadow: 1,
        }}
      >
        <InstagramIcon sx={{ fontSize: { xs: 30, sm: 29, md: 29} }} />
      </Box>
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: "50%",
          padding: { xs: 1, sm:0.75  },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#E4003A",
          boxShadow: 1,
        }}
      >
        <WhatsAppIcon sx={{ fontSize: { xs: 30, sm: 29, md: 29} }} />
      </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default LandingPage;
