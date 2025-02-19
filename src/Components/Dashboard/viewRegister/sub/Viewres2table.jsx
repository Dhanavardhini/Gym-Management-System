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
  {
    field: 'action',
    headerName: 'Action',
    width: 150,
    headerAlign: 'center',
    align: 'center',
    renderCell: (params) => (
      <input type="checkbox" style={{ cursor: 'pointer' }} />
    ),
  },
  { field: 'sNo', headerName: 'S.No', width: 170, headerAlign: 'center', align: 'center' },
  {
    field: 'profile',
    headerName: 'Profile',width: 170, headerAlign: 'center', align: 'center',
    renderCell: (params) => (
      <ProfileLink profileData={params.row} />
    ),
  },
  { field: 'name', headerName: 'Name', width: 180, headerAlign: 'center', align: 'center' },
  { field: 'age', headerName: 'Age', width: 170, headerAlign: 'center', align: 'center' },
  { field: 'gender', headerName: 'Gender', width: 180, headerAlign: 'center', align: 'center' },
  { field: 'phoneNo', headerName: 'Phone No', width: 190, headerAlign: 'center', align: 'center' },
];

const initialRows= [
  {
    id: 1,
    sNo: 1,
    profile: profileImage,
    name: 'Krishna',
    age: 24,
    gender: 'Male',
    phoneNo: '9876543212',
  },
  {
    id: 2,
    sNo: 2,
    profile: profileImage,
    name: 'Mahes',
    age: 24,
    gender: 'Male',
    phoneNo: '9876543212',
  },
  {
    id: 3,
    sNo: 3,
    profile: profileImage,
    name: 'Ammu',
    age: 24,
    gender: 'Female',
    phoneNo: '9876543212',
  },
  {
    id: 4,
    sNo: 4,
    profile: profileImage,
    name: 'A.Dhanam',
    age: 24,
    gender: 'Female',
    phoneNo: '9876543212',
  },
  {
    id: 5,
    sNo: 5,
    profile: profileImage,
    name: 'A.Dhanam',
    age: 24,
    gender: 'Female',
    phoneNo: '9876543212',
  },
  {
    id: 6,
    sNo: 6,
    profile: profileImage,
    name: 'A.Dhanam',
    age: 24,
    gender: 'Female',
    phoneNo: '9876543212',
  },
];

export default function DataTable1( { searchQuery }) {
  const filteredRows = initialRows.filter((row) =>
    row.name.toLowerCase().includes(searchQuery.toLowerCase())
  //  || 
    // row.phoneNo.includes(searchQuery) ||
    // row.city.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <TableStyles>
      <div className="datatable">
      <StyledDataGrid rows={filteredRows} columns={columns} />
      </div>
    </TableStyles>
  );
}
