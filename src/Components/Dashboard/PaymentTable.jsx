import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';// Path relative to your component
import renewal from "../../assets/renewal.png";  // Path relative to your component

import profileImage from "../../assets/profile.png";
import { useNavigate } from 'react-router-dom';
import TableStyles from './viewRegister/TableStyles';

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  fontFamily: 'Roboto',
  width: '100%',
  overflowY: 'hidden', // Hide vertical scrollbar
  overflowX: 'hidden', // Hide horizontal scrollbar
  '&::-webkit-scrollbar': {
    width: 0,  // Hide the scrollbar
    height: 0, // Hide the scrollbar
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
        src={profileData.profile} // Access profile image from profileData
        alt="Profile"
        style={{ width: '40px', height: '40px', borderRadius: '50%' }}
      />
    </span>
  );
};

const columns = [
  { field: 'sNo', headerName: 'S.No', width: 210, headerAlign: 'center', align: 'center' },
  {
    field: 'profile', width: 230,headerAlign: 'center', align: 'center' ,
    headerName: 'Profile',
    renderCell: (params) => (
      <ProfileLink profileData={params.row} />
    ),
  },
  { field: 'name', headerName: 'Name', width: 240, headerAlign: 'center', align: 'center' },
  { field: 'joiningDate', headerName: 'Joining Date', width: 240, headerAlign: 'center', align: 'center' },
  { field: 'feesAmount', headerName: 'Fees Amount', width: 270, headerAlign: 'center', align: 'center' },
 
];

const initialRows = [
    {
        id: 1,
        sNo: 1,
        profile: profileImage,
        name: 'Krishna',
        phoneNo: '9876543212',
        city: 'Kumbakonam',
        joiningDate: '28 Nov 2023',
        expired: '28 Apr 2024',
        feesAmount:"10,000",
      },
      {
        id: 2,
        sNo: 2,
        profile: profileImage,
        name: 'Mahes',
        phoneNo: '9876543212',
        city: 'Ariyalur',
        joiningDate: '28 June 2025',
        feesAmount:"20,000",
        expired: '28 Apr 2026',
      },
      {
        id: 3,
        sNo: 3,
        profile: profileImage,
        name: 'Ammu',
        phoneNo: '9876543212',
        city: 'Ariyalur',
        joiningDate: '26 Nov 2025',
        feesAmount:"30,000",
        expired: '26 May 2026',
      },
      {
        id: 4,
        sNo: 4,
        profile: profileImage,
        name: 'A.Dhanam',
        phoneNo: '9876543212',
        city: 'Kumbakonam',
        joiningDate: '28 Nov 2023',
        feesAmount:"50,000",
        expired: '28 May 2024',
      },
      {
        id: 5,
        sNo: 5,
        profile: profileImage,
        name: 'A.Dhanam',
        phoneNo: '9876543212',
        city: 'Kumbakonam',
        joiningDate: '28 Nov 2023',
        feesAmount:"50,000",
        expired: '28 May 2024',
      },
      {
        id: 6,
        sNo: 6,
        profile: profileImage,
        name: 'A.Dhanam',
        phoneNo: '9876543212',
        city: 'Kumbakonam',
        joiningDate: '28 Nov 2023',
        feesAmount:"10,000",
        expired: '28 May 2024',
      }, {
        id: 7,
        sNo: 7,
        profile: profileImage,
        name: 'Krishna',
        phoneNo: '9876543212',
        city: 'Kumbakonam',
        joiningDate: '28 Nov 2023',
        expired: '28 Apr 2024',
        feesAmount:"10,000",
      },
      {
        id: 8,
        sNo: 8,
        profile: profileImage,
        name: 'Mahes',
        phoneNo: '9876543212',
        city: 'Ariyalur',
        joiningDate: '28 June 2025',
        feesAmount:"20,000",
        expired: '28 Apr 2026',
      },
     
  // More rows as required
];

export function PaymemtTable({ searchQuery }) {
  const filteredRows = initialRows.filter((row) =>
    row.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    row.phoneNo.includes(searchQuery) ||
    row.city.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <TableStyles>
      <div className="databox3">  {/* Set width to 70vw */}
      <StyledDataGrid sx={{backgroundColor:"white"}} rows={filteredRows} columns={columns} />
      </div>
    </TableStyles>
  );
}
