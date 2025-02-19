import * as React from 'react';
import {  useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {  useNavigate } from 'react-router-dom';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import { Button, Grid, Stack } from '@mui/material';
import DashboardStyles from './DashboardStyles';
import { DashAccounts} from './DashAccounts';
import { DashAccounts1 } from './DashAccounts1';
import Dashboard1 from './GymMainDashboard';

export default function Dashboard() {
  const [activeBtn1, setActiveBtn1] = React.useState(true); // Initially active
  const [activeBtn2, setActiveBtn2] = React.useState(false);
  const [showDashAccounts, setShowDashAccounts] = React.useState(true); // Show DashAccounts initially
  const [showDashAccounts1, setShowDashAccounts1] = React.useState(false);
  const theme = useTheme();
  
  const handleClickBtn1 = () => {
    setActiveBtn1(true);
    setActiveBtn2(false);
    setShowDashAccounts(true);
    setShowDashAccounts1(false);
  };

  
  const handleClickBtn2 = () => {
    setActiveBtn2(true);
    setActiveBtn1(false);
    setShowDashAccounts1(true);
    setShowDashAccounts(false);
  };

  const navigate = useNavigate ();

  const handleRegisterClick = () => {
    navigate('/register'); 
  };

  return (
    <DashboardStyles>

    <Box className="Box-1">
      <Dashboard1/>


{/* ------------------------------------ */}

<Box component="main" sx={{ flexGrow: 1, p: 3 ,mt:8, bgcolor: theme.palette.mode === 'light' ? '#f5f5f5' : '#121212',}}> {/* Removed inline styles */}
      {/* First Box */}
    

      <Box
  sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    bgcolor: theme.palette.mode === 'light' ? '#F1F0E8' : '#212121',
    boxShadow: 3,
    borderRadius: 2,
    mr: 2,
    mb: { xs: 2, sm: 3, md: 3 },
    p: 3,
    height: 'auto',
    width: '91vw', // Width set to 91% of viewport width
  }}
>
  <Stack direction="row" spacing={2} mb={4} sx={{ justifyContent: 'center', width: '100%' }}>
    <Button
      sx={{
        padding: { xs: '12px 40px', sm: '14px 70px' },
        backgroundColor: '#001F3F',
        color: 'white',
        textTransform: 'capitalize',
        width: { xs: '65%', sm: 'auto',lg:"25%" }, // Full width on xs
      }}
      onClick={handleRegisterClick}
      startIcon={<PersonAddAltRoundedIcon />}
    >
      New Register
    </Button>
  </Stack>

  <Stack
    direction="row"
    spacing={2}
    sx={{
      flexWrap: 'wrap', // Allow buttons to wrap on small screens
      justifyContent: 'center',
      gap: 2,
      px: { xs: 1, sm: 2, md: 3 },
      width: { xs: '80%', sm: 'auto',lg:"100%"  }, // Full width on xs

    }}
  >
    <Button
      onClick={handleClickBtn1}
      sx={{
        padding: { xs: '10px 20px', sm: '12px 40px', md: '14px 90px' },
        backgroundColor: activeBtn1 ? 'green' : 'white',
        color: activeBtn1 ? 'white' : '#727D73',
        textTransform: 'capitalize',
        borderBottom: activeBtn1 ? '4px solid green' : '4px solid green',
        width: { xs: '80%', sm: '70%', md: '35%', }, // Full width on xs, 100% on sm, 35% on md and above
        minWidth: '200px', // Ensures buttons are not too small
      }}
    >
      Accounts are going to expire within 3 days
    </Button>

    <Button
      onClick={handleClickBtn2}
      sx={{
        padding: { xs: '10px 20px', sm: '12px 40px', md: '12px 90px' },
        backgroundColor: activeBtn2 ? 'red' : 'white',
        color: activeBtn2 ? 'white' : '#727D73',
        textTransform: 'capitalize',
        borderBottom: activeBtn2 ? '4px solid #E4003A' : '4px solid #E4003A',
        width: { xs: '80%', sm: '70%', md: '35%' }, // Full width on xs, 100% on sm, 35% on md and above
        minWidth: '200px', // Ensures buttons are not too small
      }}
    >
      Accounts Expired
    </Button>
  </Stack>
      </Box>


      {showDashAccounts && (
        <Box
          sx={{
            display: 'flex',
                        flexDirection: 'column',
                        // Responsive background color for the second box:
                        bgcolor: theme.palette.mode === 'light' ? '#F1F0E8' : '#212121',//Example dark mode color
                        boxShadow: 3,
                        borderRadius: 2,
                        ml: 2,
                        mr: 2,
                        pl: 2,
                        mt: { xs: 2, sm: 3, md: 3 },
                        mb: { xs: 2, sm: 0, md: 0 },

          }}
        >
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "0.95rem", sm: "0.95rem", md: "0.95rem" },
                textAlign: "left",
                mt: { xs: 1, sm: 1, md: 1.3 },
              }}
            >
              Accounts are going to expire within 3 days crt
            </Typography>
          </Grid>
          <DashAccounts /> {/* Render DashAccounts component */}
        </Box>
      )}

      {showDashAccounts1 && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            // Responsive background color for the third box:
            bgcolor: theme.palette.mode === 'light' ? '#F1F0E8' : '#212121',//Example dark mode color
            boxShadow: 3,
            borderRadius: 2,
            ml: 2,
            mr: 2,
            p: 3,
            // mt: { xs: 1, sm: 3, md: 3 },
          }}
        >
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "0.95rem", sm: "0.95rem", md: "0.95rem" },
                textAlign: "left",
                // mt: { xs: 0.67, sm: 1, md: 1.3 },
              }}
            >
              Accounts Expired
            </Typography>
          </Grid>
          <DashAccounts1/>
        </Box>
      )}
    
    </Box>
    </Box>

    </DashboardStyles>
  );
}
