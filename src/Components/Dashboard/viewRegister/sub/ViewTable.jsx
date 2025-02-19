import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import renewal from "../../../../assets/renewal.png"; // No extra space
import profileImage from "../../../../assets/profile.png";
import TableStyles from '../TableStyles';
import { useNavigate } from 'react-router-dom';

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  fontFamily: 'Roboto',
 
}));
const ProfileLink = ({ profileData }) => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.stopPropagation();
    navigate('/view-profile-main', { state: { profileData } });
  };

  return (
    <span onClick={handleClick} style={{ cursor: 'pointer' }}>
      <img
        src={profileData.profile} // Access profile image from profileData
        alt="Profile"
        style={{ width: '40px', height: '40px', borderRadius: '50%' }}
      />
    </span>
  );
};


const columns = [
  { field: 'sNo', headerName: 'S.No', width: 70, headerAlign: 'center', align: 'center' },
  {
    field: 'profile',
    headerName: 'Profile',
    renderCell: (params) => (
      <ProfileLink profileData={params.row} />
    ),
  },
  { field: 'name', headerName: 'Name', width: 120, headerAlign: 'center', align: 'center' },
  { field: 'age', headerName: 'Age', width: 70, headerAlign: 'center', align: 'center' },
  { field: 'gender', headerName: 'Gender', width: 80, headerAlign: 'center', align: 'center' },
  { field: 'phoneNo', headerName: 'Phone No', width: 150, headerAlign: 'center', align: 'center' },
  { field: 'city', headerName: 'City', width: 120, headerAlign: 'center', align: 'center' },
  { field: 'joiningDate', headerName: 'Joining Date', width: 150, headerAlign: 'center', align: 'center' },
  { field: 'duration', headerName: 'Duration', width: 100, headerAlign: 'center', align: 'center' }, // Added Duration
  { field: 'expired', headerName: 'Expired', width: 150, headerAlign: 'center', align: 'center' }, // Added Expired
  { field: 'type', headerName: 'Type', width: 200, headerAlign: 'center', align: 'center' }, // Added Type
  {
    field: 'renewal',
    headerName: 'Renewal',
    width: 100,
    headerAlign: 'center',
    align: 'center',
    renderCell: (params) => (
      <img src={renewal} alt="Renewal" style={{ width: '24px', height: '24px' }} /> // Use imported renewal icon
    ),
  },
  { field: 'paymentHistory', headerName: 'Payment History', width: 150, headerAlign: 'center', align: 'center' },
];

const initialRows = [
  {
    id: 1,
    sNo: 1,
    profile: profileImage,
    name: 'Krishna',
    age: 24,
    gender: 'Male',
    phoneNo: '9876543212',
    city: 'Kumbakonam',
    joiningDate: '28 Nov 2023',
    duration: '6 Months',  // Add duration
    expired: '28 Apr 2024', // Add expired date
    type: 'Personal Trainer', // Add type
    paymentHistory: 'Paid',
  },
  {
    id: 2,
    sNo: 2,
    profile: profileImage,
    name: 'Mahes',
    age: 24,
    gender: 'Male',
    phoneNo: '9876543212',
    city: 'Ariyalur',
    joiningDate: '28 June 2025',
    duration: '12 Months', // Add duration
    expired: '28 Apr 2026', // Add expired date
    type: 'Trainer', // Add type
    paymentHistory: 'Pending',
  },
   {
    id: 3,
    sNo: 3,
    profile: profileImage,
    name: 'Ammu',
    age: 24,
    gender: 'Female',
    phoneNo: '9876543212',
    city: 'Ariyalur',
    joiningDate: '26 Nov 2025',
    duration: '6 Months',  // Add duration
    expired: '28 Apr 2026', // Add expired date
    type: 'Personal Trainer', // Add type
    paymentHistory: 'Paid',
  },
  {
    id: 4,
    sNo: 4,
    profile: profileImage,
    name: 'A.Dhanam',
    age: 24,
    gender: 'Female',
    phoneNo: '9876543212',
    city: 'Kumbakonam',
    joiningDate: '28 Nov 2023',
    duration: '6 Months',  // Add duration
    expired: '28 Apr 2024', // Add expired date
    type: 'Personal Trainer', // Add type
    paymentHistory: 'Paid',
  },{
    id: 5,
    sNo: 5,
    profile: profileImage,
    name: 'A.Dhanam',
    age: 24,
    gender: 'Female',
    phoneNo: '9876543212',
    city: 'Kumbakonam',
    joiningDate: '28 Nov 2023',
    duration: '6 Months',  // Add duration
    expired: '28 Apr 2024', // Add expired date
    type: 'Personal Trainer', // Add type
    paymentHistory: 'Paid',
  },{
    id: 6,
    sNo: 6,
    profile: profileImage,
    name: 'A.Dhanam',
    age: 24,
    gender: 'Female',
    phoneNo: '9876543212',
    city: 'Kumbakonam',
    joiningDate: '28 Nov 2023',
    duration: '6 Months',  // Add duration
    expired: '28 Apr 2024', // Add expired date
    type: 'Personal Trainer', // Add type
    paymentHistory: 'Paid',
  },
  // ... more rows with all the required data
];

export default function DataTable({ searchQuery }) {
  const filteredRows = initialRows.filter((row) =>
    row.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.phoneNo.includes(searchQuery) ||
    row.city.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    
    <TableStyles>
    <div className="datatable">
        <StyledDataGrid rows={filteredRows} columns={columns} />
      </div>
  </TableStyles>
  );
}