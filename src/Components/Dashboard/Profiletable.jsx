import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import { Box, Grid,  Typography, } from "@mui/material";
import DashboardStyles from './DashboardStyles';
import inputfronticon from '../../assets/inputfronticon.png';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import DeleteIcon from "@mui/icons-material/Delete";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import DataTableComponent from './TableProfile1';
import Dashboard1 from './GymMainDashboard';


export default function TableProfile12() {

  React.useEffect(() => {
    const storedData = localStorage.getItem("registerData");
    if (storedData) {
      // setUserData(JSON.parse(storedData));
    }
  }, []);

  return (
    <DashboardStyles>

    <Box className="Box-1">
     <Dashboard1/>
{/* ----------------- */}

    <Box
      sx={{
        mt: 10, ml: 2, mr: 2,
      }}
      className="ViewRegister-1"
    >
      <Grid container spacing={2} alignItems="center" className="ViewRegister-2">
        
        {/* Left Side Typography - Stays on Top-Left */}
        <Grid item xs={12} md={6}> 
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "0.95rem", sm: "0.95rem", md: "0.95rem" },
              textAlign: "left",
              mt: { xs: 1, sm: 1, md: 1.3 }, // Reduced margin-top on smaller screens
            }}
          >
            View Registered
          </Typography>
        </Grid>

        {/* Search Bar - Positioned at Top-Right */}
        <Grid 
          item 
          xs={6} 
          sm={12} 
          md={6} 
          lg={6} 
          xl={6}
          sx={{
            display: "flex", 
            flexDirection: "column", 
            alignItems: "flex-end", // Keep everything aligned to the right for all screen sizes
            justifyContent: "flex-start", // Align items to the top
            flexWrap: "wrap" // Allow wrapping for smaller screens
          }}
        >
          {/* Search Bar */}
          <div 
            className="search-container" 
            style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "8px", 
              justifyContent: "flex-end" // Align the search bar to the right
            }}
          >
            {/* Input Icon - Positioned at the Front */}
            <img 
              src={inputfronticon} 
              alt="" 
              className="inputfronticonimg" 
              style={{ width: "24px", height: "24px" }} 
            />

            {/* Search Bar */}
            <div className="searchiconinput" style={{ display: "flex", alignItems: "center" }}>
              <SearchRoundedIcon className="searchicon" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="inputfronticon-1" 
                style={{ marginBottom: 0 }} 
              />
            </div>
          </div>

          {/* Delete & Download Icons - Positioned Below Input */}
        <div 
      className="delete-download-icons">
      <IconButton 
        color="error" 
        className="deletei"
    >
        <DeleteIcon />
      </IconButton>

      <IconButton className='download'
        color="primary"
      >
        <FileDownloadOutlinedIcon />
      </IconButton>
    </div>

        </Grid>
      </Grid>
    <DataTableComponent/>

    




    </Box>

{/* ----- */}
    </Box>

    </DashboardStyles>
  );
}