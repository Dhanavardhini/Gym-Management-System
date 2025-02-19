import React, { useState } from 'react'
import DashboardStyles from '../DashboardStyles'
import { Box, Button, Card, CardContent, Stack, Typography,   
 Grid, 
 useMediaQuery,
 TextField} from '@mui/material'
import EditIcon from "@mui/icons-material/Edit";
import profilepic from "../../../assets/profilepic.png"
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Navigate, useNavigate } from 'react-router-dom';

// export function RenewelPop1() {
//   return (
//     <div>
//       <DashboardStyles>
//       <Box
//   sx={{
//     mt: 10, ml: 2, mr: 2,
//   }}
//   className="ViewRegister-3"
// >

// <Card sx={{ maxWidth: "380px", maxHeight: "210px", mt: 16, p: 5, }}>
//       <CardContent>
//         <Typography variant="body2" sx={{ color: "#4C585B" ,width:"180px",textAlign:"center",mb:1,lineHeight:"33px"}}>
//           Are you sure you want to renewel?
//         </Typography>
//       </CardContent>
//       <Stack
//         direction="row"
//         sx={{
//           flexWrap: "wrap",
//           justifyContent: "center",
//           gap: 2,
//           px: { xs: 1, sm: 2, md: 3 },
//         }}
//       >
//         <Button
          
//           sx={{
//             padding: {
//               xs: "3px 5px",
//               sm: "3px 5px",
//               md: "3px 5px",
//               lg: "3px 5px",
//             },
//             // backgroundColor: activeBtn1 ?"white"  : "#4C585B",
//             // color: activeBtn1 ? "#4C585B" :" white",
//             textTransform: "capitalize",
//             width: { xs: "80%", sm: "auto", lg: "30%", md: "30%" },
//           }}
//         >
//           Logout
//         </Button>

//         <Button
//           sx={{
//             padding: {
//               xs: "3px 5px",
//               sm: "3px 5px",
//               md: "3px 5px",
//               lg: "3px 5px",
//             },
//             // backgroundColor: activeBtn2 ?"#4C585B"  : "white",
//             // color: activeBtn2 ?  "white":"#4C585B" ,
//             // border: activeBtn2 ? "1px solid white" : "1px solid #4C585B",
//             textTransform: "capitalize",
//             width: { xs: "80%", sm: "auto", lg: "30%", md: "30%" },
//           }}
//         >
//           Cancel
//         </Button>
//       </Stack>
//     </Card>

// </Box>
//       </DashboardStyles>
      
//     </div>
//   )
// }


// ------------------

export function Download1({ onClose }) {
  return (
    <Card sx={{ maxWidth: "380px", maxHeight: "210px", mt: 16, p: 5 }}>
      <CardContent>
        <Typography variant="body2" sx={{ color: "#4C585B", width: "180px", textAlign: "center", mb: 1, lineHeight: "33px" }}>
          Are you sure you want to Download?
        </Typography>
      </CardContent>

      <Stack direction="row" sx={{ justifyContent: "center", gap: 2 }}>
        <Button 
          sx={{ backgroundColor: "#4C585B", color: "white" }}
          onClick={() => {
            const data = localStorage.getItem("registerData");
            if (data) {
              const blob = new Blob([data], { type: "application/json" });
              const link = document.createElement("a");
              link.href = URL.createObjectURL(blob);
              link.download = "RegisteredData.json";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }
            onClose();
          }}
        >
          Download
        </Button>

        <Button sx={{ border: "1px solid #4C585B", color: "#4C585B" }} onClick={onClose}>
          Cancel
        </Button>
      </Stack>
    </Card>
  );
}


// ----------------------

export function Delete() {
  return (
    <div>
      <DashboardStyles>
      <Box
  sx={{
    mt: 10, ml: 2, mr: 2,
  }}
  className="ViewRegister-3"
>

<Card sx={{ maxWidth: "380px", maxHeight: "210px", mt: 16, p: 5, }}>
      <CardContent>
        <Typography variant="body2" sx={{ color: "#4C585B" ,width:"180px",textAlign:"center",mb:1,lineHeight:"33px"}}>
          Are you sure you want to Delete?
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
      </DashboardStyles>
      
    </div>
  )
}

// ---------------------



export function EditProfile() {
  const isSmallScreen = useMediaQuery("(max-width:960px)");
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Dhanam",
    age: "24",
    gender: "Female",
    contactNumber: "9498440749",
    city: "Ariyalur",
    duration: "6 Months",
    joiningDate: "28 Feb 2025",
    expiredTill: "5 Days",
    expiredDate: "5 Mar 2025"
  });
  const navigate = useNavigate(); 
  // Handle edit mode toggle
  const handleEditClick = () => {
    setIsEditing(true); // Toggle edit mode
  };

  // Handle save
  const handleSaveClick = () => {
    // Simulate saving the data to a file (in real use, you would send this data to an API or save it locally)
    console.log("Saved profile data:", profileData);
    setIsEditing(false);  // Exit edit mode after saving
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  return (
    <div style={{ margin: "5px auto", padding: "0px", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Card sx={{ maxWidth: "90%", width: { xs: "100%", sm: "600px", md: "860px" }, margin: "5px auto", padding: "5px 25px" }}>
        
        {/* Header: Profile & Back Button */}
        <CardContent
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: "8px",
      }}
    >
      {/* Left Side - View Profile */}
      <Typography color="grey">View Profile</Typography>

      {/* Right Side - Back with Arrow */}
      <Button 
      sx={{ 
        display: "flex", 
        alignItems: "center", 
        textTransform: "none", // Remove uppercase text from Button
        color: "grey", 
        backgroundColor: "transparent", // Transparent background
        "&:hover": { backgroundColor: "transparent" } // No hover effect
      }}
      onClick={() => navigate("/view-registered")} // Navigate on click
    >
      <ArrowBackIcon sx={{ mr: 1 }} /> 
      <Typography color="grey">BACK</Typography>
    </Button>
    </CardContent>

        {/* Center Profile Image */}
        <CardContent sx={{ textAlign: "center", padding: "8px" }}>
          <img src={profilepic} alt="Profile" style={{ width: "90px", height: "90px", borderRadius: "50%" }} />
        </CardContent>

        {/* Name */}
        <Typography variant="h6" align="center" color="grey" sx={{ marginBottom: "5px" }}>
          {isEditing ? (
            <TextField name="name" value={profileData.name} onChange={handleInputChange} fullWidth variant="outlined" />
          ) : (
            profileData.name
          )}
        </Typography>

        {/* Responsive Details Grid */}
        <CardContent sx={{ padding: "8px" }}>
          {isSmallScreen ? (
            <Box sx={{ textAlign: "center" }}>
              {[{ label: "Age", value: profileData.age, name: "age" }, { label: "Gender", value: profileData.gender, name: "gender" }, { label: "Contact Number", value: profileData.contactNumber, name: "contactNumber" }, { label: "City", value: profileData.city, name: "city" }].map((item, index) => (
                <Typography key={index} variant="body2" sx={{ marginBottom: "8px", color: "grey" }}>
                  <strong>{item.label}:</strong> {isEditing ? (
                    <TextField name={item.name} value={item.value} onChange={handleInputChange} fullWidth variant="outlined" />
                  ) : (
                    item.value
                  )}
                </Typography>
              ))}
            </Box>
          ) : (
            <Grid container spacing={1} sx={{ textAlign: "center" }}>
              {[{ label: "Age", value: profileData.age, name: "age" }, { label: "Gender", value: profileData.gender, name: "gender" }, { label: "Contact Number", value: profileData.contactNumber, name: "contactNumber" }, { label: "City", value: profileData.city, name: "city" }].map((item, index) => (
                <Grid item xs={12} sm={3} key={index}>
                  <Typography variant="body1" sx={{ color: "grey" }}>
                    {item.label}
                  </Typography>
                  {isEditing ? (
                    <TextField name={item.name} value={item.value} onChange={handleInputChange} fullWidth variant="outlined" />
                  ) : (
                    <Typography variant="body2" sx={{ color: "grey" }}>{item.value}</Typography>
                  )}
                </Grid>
              ))}
            </Grid>
          )}
        </CardContent>

        {/* 4 Buttons Row */}
        <CardContent sx={{ padding: "8px" }}>
          <Grid container spacing={1} sx={{ justifyContent: "center" }}>
            {[{ label: "Duration", value: profileData.duration }, { label: "Joining Date", value: profileData.joiningDate }, { label: "Expired Till", value: profileData.expiredTill }, { label: "Expired Date", value: profileData.expiredDate }].map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Button fullWidth variant="contained" sx={{ backgroundColor: "white", border: "1px solid grey", color: "grey", boxShadow: "none", textTransform: "none", display: "flex", flexDirection: "column", alignItems: "center", padding: "5px", minHeight: "50px" }}>
                  {item.label}
                  <Typography variant="caption" sx={{ color: "grey", textAlign: "center" }}>{item.value}</Typography>
                </Button>
              </Grid>
            ))}
          </Grid>
        </CardContent>

        {/* Bottom Right Edit/Save Button */}
        <CardContent sx={{ display: "flex", justifyContent: "flex-end", paddingBottom: "0px", paddingTop: "8px" }}>
  {/* Edit and Save buttons visible at the same time */}
  <Button 
    variant="contained" 
    sx={{ 
      border: "1px solid grey", 
      color: "grey", 
      backgroundColor: "white", 
      marginRight: "10px", // Space between buttons
    }} 
    startIcon={<EditIcon />} 
    onClick={handleEditClick}
    disabled={isEditing} // Disable Edit button when already in editing mode
  >
    Edit
  </Button>

  <Button 
    variant="contained" 
    sx={{ 
      border: "1px solid grey", 
      color: "grey", 
      backgroundColor: "white", 
    }} 
    onClick={handleSaveClick}
    disabled={!isEditing} // Disable Save button when not in editing mode
  >
    Save
  </Button>
</CardContent>

      </Card>
    </div>
  );
}

