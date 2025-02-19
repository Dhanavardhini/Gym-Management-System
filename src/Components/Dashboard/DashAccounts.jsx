import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import TableStyles from './viewRegister/TableStyles';

// Import assets
import renewal from '../../assets/renewal.png';
import profileImage from '../../assets/profile.png';

// Styled DataGrid component
const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  fontFamily: 'Roboto',
  width: '100%',
  overflow: 'hidden', // Hide scrollbars
  '&::-webkit-scrollbar': {
    width: 0,
    height: 0,
  },
}));

// Profile Link Component
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

// Table Columns Definition
const columns = [
  { field: 'sNo', headerName: 'S.No', width: 70, headerAlign: 'center', align: 'center' },
  {
    field: 'profile',
    headerName: 'Profile',
    renderCell: (params) => <ProfileLink profileData={params.row} />,
  },
  { field: 'name', headerName: 'Name', width: 120, headerAlign: 'center', align: 'center' },
  { field: 'phoneNo', headerName: 'Phone No', width: 150, headerAlign: 'center', align: 'center' },
  { field: 'joiningDate', headerName: 'Joining Date', width: 160, headerAlign: 'center', align: 'center' },
  { field: 'expiredWithin', headerName: 'Expired Within', width: 180, headerAlign: 'center', align: 'center' },
  { field: 'expired', headerName: 'Expired', width: 180, headerAlign: 'center', align: 'center' },
  {
    field: 'renewal',
    headerName: 'Renewal',
    width: 100,
    headerAlign: 'center',
    align: 'center',
    renderCell: () => <img src={renewal} alt="Renewal" style={{ width: '24px', height: '24px' }} />,
  },
];

// Table Rows Data
const rows = [
  { id: 1, sNo: 1, profile: profileImage, name: 'Krishna', phoneNo: '9876543212', city: 'Kumbakonam', joiningDate: '28 Nov 2023', expiredWithin: '1 day', expired: '28 Apr 2024' },
  { id: 2, sNo: 2, profile: profileImage, name: 'Mahes', phoneNo: '9876543212', city: 'Ariyalur', joiningDate: '28 June 2025', expiredWithin: '1 day', expired: '28 Apr 2026' },
  { id: 3, sNo: 3, profile: profileImage, name: 'Ammu', phoneNo: '9876543212', city: 'Ariyalur', joiningDate: '26 Nov 2025', expiredWithin: '1 day', expired: '26 May 2026' },
  { id: 4, sNo: 4, profile: profileImage, name: 'A.Dhanam', phoneNo: '9876543212', city: 'Kumbakonam', joiningDate: '28 Nov 2023', expiredWithin: '1 day', expired: '28 May 2024' },
  { id: 5, sNo: 5, profile: profileImage, name: 'A.Dhanam', phoneNo: '9876543212', city: 'Kumbakonam', joiningDate: '28 Nov 2023', expiredWithin: '1 day', expired: '28 May 2024' },
  { id: 6, sNo: 6, profile: profileImage, name: 'A.Dhanam', phoneNo: '9876543212', city: 'Kumbakonam', joiningDate: '28 Nov 2023', expiredWithin: '1 day', expired: '28 May 2024' },
];

// Main Component
export function DashAccounts() {
  return (
    <TableStyles>
      <div className='databox1'>
        <StyledDataGrid
          rows={rows}
          columns={columns}
          onRowClick={(params, event, details) => {}}
        />
      </div>
    </TableStyles>
  );
}
