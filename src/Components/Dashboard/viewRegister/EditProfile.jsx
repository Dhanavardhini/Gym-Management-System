import * as React from 'react';
import { Box, Card,} from "@mui/material";
import DashboardStyles from '../DashboardStyles';
import { EditProfile} from '../Renewel pop/RenewelPop';
import Dashboard1 from '../GymMainDashboard';


export default function EditProfileMain() {

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
        
        <EditProfile/>
        <Card>


        </Card>

        </Box>

{/* ----- */}
    </Box>

    </DashboardStyles>
  );
}