import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid,  } from '@mui/material';
import DashboardStyles from './DashboardStyles';
import inputfronticon from '../../assets/inputfronticon.png';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { PaymemtTable } from './PaymentTable';
import Dashboard1 from './GymMainDashboard';


export default function Payment1() {
  const [searchQuery, setSearchQuery] = React.useState('');
 
  return (
    <DashboardStyles>

    <Box className="Box-1">
     <Dashboard1/>
{/* ------------------------------------ */}

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
              Payment History
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
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)} 
                  />
              </div>
            </div>

            {/* Delete & Download Icons - Positioned Below Input */}
          {/* <div 
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
      </div> */}

          </Grid>
        </Grid>


      
      <Box sx={{height:"87vh",mt:3}}>
      <PaymemtTable searchQuery={searchQuery}  />
      </Box>

      </Box>
    </Box>

    </DashboardStyles>
  );
}

