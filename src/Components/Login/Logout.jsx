import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {  useNavigate } from 'react-router-dom';
import DashboardStyles from '../Dashboard/DashboardStyles';
import { Button, Card, CardContent, Stack } from '@mui/material';
import Dashboard1 from '../Dashboard/GymMainDashboard';


export default function Logout1() {

  const navigate = useNavigate ();

 
  const [activeBtn1, setActiveBtn1] = React.useState(false);
  const [activeBtn2, setActiveBtn2] = React.useState(false);

  const handleSureClick = () => {
    setActiveBtn1(true);
    navigate("/");
  };

  const handleCancelClick = () => {
    setActiveBtn2(true);
    // No navigation, just updating state
  };

  return (
    <DashboardStyles>

    <Box className="Box-1">
     <Dashboard1/>
{/* ------------------------------------ */}

<Box
  sx={{
    mt: 10, ml: 2, mr: 2,
  }}
  className="ViewRegister-3"
>

<Card sx={{ maxWidth: "380px", maxHeight: "210px", mt: 16, p: 5, }}>
      <CardContent>
        <Typography variant="body2" sx={{ color: "#4C585B" ,width:"180px",textAlign:"center",mb:1,lineHeight:"33px"}}>
          Are you sure you want to Logout?
        </Typography>
      </CardContent>
      <Stack
        direction="row"
        sx={{
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
          px: { xs: 1, sm: 2, md: 3 },
        }}
      >
        <Button
          onClick={handleSureClick}
          sx={{
            padding: {
              xs: "3px 5px",
              sm: "3px 5px",
              md: "3px 5px",
              lg: "3px 5px",
            },
            backgroundColor: activeBtn1 ?"white"  : "#4C585B",
            color: activeBtn1 ? "#4C585B" :" white",
            textTransform: "capitalize",
            width: { xs: "80%", sm: "auto", lg: "30%", md: "30%" },
          }}
        >
          Logout
        </Button>

        <Button
          onClick={handleCancelClick}
          sx={{
            padding: {
              xs: "3px 5px",
              sm: "3px 5px",
              md: "3px 5px",
              lg: "3px 5px",
            },
            backgroundColor: activeBtn2 ?"#4C585B"  : "white",
            color: activeBtn2 ?  "white":"#4C585B" ,
            border: activeBtn2 ? "1px solid white" : "1px solid #4C585B",
            textTransform: "capitalize",
            width: { xs: "80%", sm: "auto", lg: "30%", md: "30%" },
          }}
        >
          Cancel
        </Button>
      </Stack>
    </Card>

</Box>
    </Box>

    </DashboardStyles>
  );
}

