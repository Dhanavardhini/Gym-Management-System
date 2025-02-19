import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import { Box, Grid, Dialog, Typography, Button, Stack, Card, CardContent } from "@mui/material";
import DashboardStyles from '../DashboardStyles';
import inputfronticon from '../../../assets/inputfronticon.png';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import DeleteIcon from "@mui/icons-material/Delete";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import DataTable from './sub/ViewTable';
import Dashboard1 from '../GymMainDashboard';
import { useState, useEffect } from "react";

export default function ViewResgister() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openDownloadPopup, setOpenDownloadPopup] = useState(false); // Popup State

  useEffect(() => {
    const storedData = localStorage.getItem("registerData");
    if (storedData) {
      // setUserData(JSON.parse(storedData));
    }
  }, []);

  // Function to handle file download
  const handleDownload = () => {
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
    setOpenDownloadPopup(false); // Close popup after download
  };

  return (
    <DashboardStyles>
      <Box className="Box-1">
        <Dashboard1 />

        <Box sx={{ mt: 10, ml: 2, mr: 2 }} className="ViewRegister-1">
          <Grid container spacing={2} alignItems="center" className="ViewRegister-2">
            {/* Left Side Typography */}
            <Grid item xs={12} md={6}> 
              <Typography variant="h5" sx={{ fontSize: { xs: "0.95rem", md: "0.95rem" }, textAlign: "left", mt: 1.3 }}>
                View Registered
              </Typography>
            </Grid>

            {/* Search Bar & Icons */}
            <Grid item xs={6} sm={12} md={6} sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
              <div className="search-container" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <img src={inputfronticon} alt="" className="inputfronticonimg" style={{ width: "24px", height: "24px" }} />
                <div className="searchiconinput" style={{ display: "flex", alignItems: "center" }}>
                  <SearchRoundedIcon className="searchicon" />
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    className="inputfronticon-1" 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)} 
                  />
                </div>
              </div>

              {/* Delete & Download Icons */}
              <div className="delete-download-icons">
                <IconButton color="error" className="deletei">
                  <DeleteIcon />
                </IconButton>

                {/* Download Icon */}
                <IconButton color="primary" onClick={() => setOpenDownloadPopup(true)}>
                  <FileDownloadOutlinedIcon />
                </IconButton>
              </div>
            </Grid>
          </Grid>

          {/* Data Table */}
          <DataTable searchQuery={searchQuery} />
        </Box>

        {/* Popup Dialog */}
        <Dialog open={openDownloadPopup} onClose={() => setOpenDownloadPopup(false)}>
          <Card sx={{ maxWidth: "380px", maxHeight: "210px", mt: 5, p: 3 }}>
            <CardContent>
              <Typography variant="body2" sx={{ color: "#4C585B", textAlign: "center", mb: 2 }}>
                Are you sure you want to download?
              </Typography>
            </CardContent>

            <Stack direction="row" sx={{ justifyContent: "center", gap: 2 }}>
              <Button sx={{ backgroundColor: "#4C585B", color: "white" }} onClick={handleDownload}>
                Sure
              </Button>
              <Button sx={{ border: "1px solid #4C585B", color: "#4C585B" }} onClick={() => setOpenDownloadPopup(false)}>
                Cancel
              </Button>
            </Stack>
          </Card>
        </Dialog>

      </Box>
    </DashboardStyles>
  );
}
