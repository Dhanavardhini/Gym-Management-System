import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import renewal from "../../assets/renewal.png";
import profileImage from "../../assets/profile.png";
import { useNavigate } from 'react-router-dom';
import TableStyles from './viewRegister/TableStyles';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Select, MenuItem, Box, Grid, TextField } from '@mui/material';

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  fontFamily: 'Roboto',
  width: '100%',
  overflowY: 'hidden',
  overflowX: 'hidden',
  '&::-webkit-scrollbar': {
    width: 0,
    height: 0,
  },
}));

const ProfileLink = ({ profileData }) => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.stopPropagation();
    navigate('/viewReg2', { state: { profileData } });
  };

  return (
    <span onClick={handleClick} style={{ cursor: 'pointer' }}>
      <img
        src={profileData.profile}
        alt="Profile"
        style={{ width: '40px', height: '40px', borderRadius: '50%' }}
      />
    </span>
  );
};

export function DashAccounts1() {
  const [open, setOpen] = React.useState(false);
  const [openRenewal, setOpenRenewal] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState(null);
  const [duration, setDuration] = React.useState('');
  const [newExpiryDate, setNewExpiryDate] = React.useState('');

  const handleOpenPopup = (row) => {
    setSelectedRow(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSureClick = () => {
    setOpen(false);
    setOpenRenewal(true);
    calculateExpiryDate(selectedRow.joiningDate, duration);
  };

  const handleCloseRenewal = () => {
    setOpenRenewal(false);
  };

  const calculateExpiryDate = (joiningDate, duration) => {
    const joining = new Date(joiningDate.split('/').reverse().join('/'));
    let newDate = new Date(joining);

    if (duration === '12 months') {
      newDate.setFullYear(newDate.getFullYear() + 1);
    } else if (duration === '6 months') {
      newDate.setMonth(newDate.getMonth() + 6);
    } else if (duration === '1 month') {
      newDate.setMonth(newDate.getMonth() + 1);
    }

    setNewExpiryDate(newDate.toLocaleDateString('en-GB')); // Formatting the expiry date as DD/MM/YYYY
  };

  const columns = [
    { field: 'sNo', headerName: 'S.No', width: 70, headerAlign: 'center', align: 'center' },
    {
      field: 'profile',
      headerName: 'Profile',
      renderCell: (params) => <ProfileLink profileData={params.row} />,
    },
    { field: 'name', headerName: 'Name', width: 150, headerAlign: 'center', align: 'center' },
    { field: 'phoneNo', headerName: 'Phone No', width: 150, headerAlign: 'center', align: 'center' },
    { field: 'joiningDate', headerName: 'Joining Date', width: 160, headerAlign: 'center', align: 'center' },
    { field: 'expired', headerName: 'Expired', width: 180, headerAlign: 'center', align: 'center' },
    {
      field: 'renewal',
      headerName: 'Renewal',
      width: 100,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <img
          src={renewal}
          alt="Renewal"
          style={{ width: '24px', height: '24px', cursor: 'pointer' }}
          onClick={() => handleOpenPopup(params.row)}
        />
      ),
    },
  ];

  const rows = [
    { id: 1, sNo: 1, profile: profileImage, name: 'Krishna', phoneNo: '9876543212', joiningDate: '28/11/2023', expired: '28/04/2024' },
    { id: 2, sNo: 2, profile: profileImage, name: 'Mahes', phoneNo: '9876543212', joiningDate: '28/06/2025', expired: '28/04/2026' },
    { id: 3, sNo: 3, profile: profileImage, name: 'Ammu', phoneNo: '9876543212', joiningDate: '26/11/2025', expired: '26/05/2026' },
    { id: 4, sNo: 4, profile: profileImage, name: 'A.Dhanam', phoneNo: '9876543212', joiningDate: '28/11/2023', expired: '28/05/2024' },
    { id: 5, sNo: 5, profile: profileImage, name: 'A.Dhanam', phoneNo: '9876543212', joiningDate: '28/11/2023', expired: '28/05/2024' },
    { id: 6, sNo: 6, profile: profileImage, name: 'A.Dhanam', phoneNo: '9876543212', joiningDate: '28/11/2023', expired: '28/05/2024' },
  ];

  return (
    <TableStyles>
      <div className="databox2">
        <StyledDataGrid rows={rows} columns={columns} />
      </div>

      {/* Dialog Popup */}
      <Dialog open={open} onClose={handleClose} sx={{ padding: '0px' }}>
        <DialogContent>
          {selectedRow && (
            <Typography>
              Are you sure you want to renew <b>{selectedRow.name}</b>?
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSureClick} style={{ backgroundColor: 'grey', color: 'white' }}>
            Sure
          </Button>
          <Button onClick={handleClose} color="grey" style={{ border: '2px solid grey' }}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      {/* Renewal Duration Popup */}
      <Dialog 
  open={openRenewal} 
  onClose={handleCloseRenewal} 
  sx={{ 
    "& .MuiDialog-paper": { 
      width: "350px", 
      height: "auto", 
      padding: "20px"
    } 
  }}
>
  <DialogContent>
    {/* Duration Row */}
    <Box display="flex" alignItems="center" mb={2} gap={2}>
      <Typography sx={{ minWidth: "100px", fontWeight: "bold" }}>Duration</Typography>
      <Select
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        displayEmpty
        fullWidth
        sx={{ maxWidth: "180px", borderRadius: "5px" }}
      >
        <MenuItem value="12 months">12 Months</MenuItem>
        <MenuItem value="6 months">6 Months</MenuItem>
        <MenuItem value="1 month">1 Month</MenuItem>
      </Select>
    </Box>

    {/* Joining Date and Expiry Date in a Grid Layout */}
    <Grid container spacing={2}>
      {/* Joining Date Row */}
      <Grid item xs={12} display="flex" alignItems="center">
        <Typography sx={{ minWidth: "120px", fontWeight: "bold" }}>Joining Date</Typography>
        <TextField
          type="date"
          variant="outlined"
          fullWidth
          size="small"
          value={selectedRow?.joiningDate || ""}
          onChange={(e) => setSelectedRow({ ...selectedRow, joiningDate: e.target.value })}
          sx={{ borderRadius: "5px" }}
        />
      </Grid>

      {/* Expiry Date Row */}
      <Grid item xs={12} display="flex" alignItems="center">
        <Typography sx={{ minWidth: "120px", fontWeight: "bold" }}>Expiry Date</Typography>
        <TextField
          type="date"
          variant="outlined"
          fullWidth
          size="small"
          value={newExpiryDate || ""}
          onChange={(e) => setNewExpiryDate(e.target.value)}
          sx={{ borderRadius: "5px" }}
        />
      </Grid>
    </Grid>
  </DialogContent>

  <DialogActions>
    <Button 
      onClick={handleCloseRenewal} 
      sx={{ backgroundColor: 'grey', color: 'white', "&:hover": { backgroundColor: "#5a5a5a" } }}
    >
      Okey
    </Button>
  </DialogActions>
</Dialog>


    </TableStyles>
  );
}
