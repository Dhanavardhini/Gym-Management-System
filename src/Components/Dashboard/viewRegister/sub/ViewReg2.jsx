import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import { Box, Grid, Typography, Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@mui/material";
import inputfronticon from '../../../../assets/inputfronticon.png';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import DeleteIcon from "@mui/icons-material/Delete";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import DashboardStyles from '../../DashboardStyles';
import { useState } from 'react';
import DataTable1 from './Viewres2table';
import Dashboard1 from '../../GymMainDashboard';

export default function ViewReg2() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [openDownloadDialog, setOpenDownloadDialog] = useState(false); // State for download confirmation popup
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false); 
  React.useEffect(() => {
    const storedData = localStorage.getItem("registerData");
    if (storedData) {
      // setUserData(JSON.parse(storedData));
    }
  }, []);

  const [selectedRows, setSelectedRows] = useState([]); // State for selected rows
  const [allSelected, setAllSelected] = useState(false); // State for select all checkbox

  const handleDelete = () => {
    setOpenDeleteDialog(true); // Open the delete confirmation dialog
  };

  const handleDownload = () => {
    setOpenDownloadDialog(true); // Open the dialog when the button is clicked
  };
  const confirmDelete = () => {
    console.log("Deleted rows:", selectedRows);
    setSelectedRows([]); 
    setAllSelected(false);
    setOpenDeleteDialog(false); // Close the dialog after confirming
  };

  const confirmDownload = () => {
    console.log("Download confirmed for rows:", selectedRows);
    setOpenDownloadDialog(false); // Close the dialog after confirming
  };

  const handleSelectAllChange = (event) => {
    setAllSelected(event.target.checked);
    if (event.target.checked) {
      setSelectedRows(DataTable1.rows.map(row => row.id)); // Select all row IDs
    } else {
      setSelectedRows([]);
    }
  };


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
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)} 
                  />
              </div>
            </div>

            {/* Delete & Download Icons - Positioned Below Input */}
            <div className="delete-download-icons">
            <IconButton className='download1' color="primary">
                  <CheckBoxOutlineBlankOutlinedIcon 
                    checked={allSelected}
                    onChange={handleSelectAllChange}
                  />
                </IconButton>

                <IconButton color="error" className="deletei" onClick={handleDelete} >
                  <DeleteIcon />
                </IconButton>

                <IconButton className='download' color="primary" onClick={handleDownload} >
                  <FileDownloadOutlinedIcon />
                </IconButton>
              </div>
          </Grid>
        </Grid>
        <DataTable1 searchQuery={searchQuery} />
      </Box>

      <Dialog open={openDownloadDialog} onClose={() => setOpenDownloadDialog(false)}>
        <DialogTitle>Confirm Download</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to download?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDownloadDialog(false)} color="error">Cancel</Button>
          <Button onClick={confirmDownload} color="primary">Sure</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openDeleteDialog} onClose={() => setOpenDeleteDialog(false)}>
  <DialogTitle>Confirm Deletion</DialogTitle>
  <DialogContent>
    <Typography>Are you sure you want to delete?</Typography>
  </DialogContent>
  <DialogActions>
    <Button onClick={() => setOpenDeleteDialog(false)} color="error">Cancel</Button>
    <Button onClick={confirmDelete} color="primary">Sure</Button>
  </DialogActions>
</Dialog>

{/* ----- */}
    </Box>

    </DashboardStyles>
  );
}