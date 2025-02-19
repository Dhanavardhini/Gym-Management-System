import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link, useNavigate } from 'react-router-dom';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import { Button, Grid, Stack } from '@mui/material';
// import { useState } from 'react';
import DashboardStyles from './DashboardStyles';
// import DataTable from './viewRegister/sub/ViewTable';
import { DashAccounts} from './DashAccounts';
import dash from "../../assets/dash.png";
import user3 from "../../assets/database.png";
import coins from "../../assets/coins.png";
import LogoutIcon from '@mui/icons-material/Logout';import { useState } from 'react';
import { DashAccounts1 } from './DashAccounts1';
// import {
//     Dialog,
//     DialogActions,
//     DialogContent,
//     DialogContentText,
//     DialogTitle,
//     Button,
//   } from '@mui/material';



const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

export default function Dashboard1() {
  const [activeBtn1, setActiveBtn1] = React.useState(true); // Initially active
  const [activeBtn2, setActiveBtn2] = React.useState(false);
  const [showDashAccounts, setShowDashAccounts] = React.useState(true); // Show DashAccounts initially
  const [showDashAccounts1, setShowDashAccounts1] = React.useState(false);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  
  const handleClickBtn1 = () => {
    setActiveBtn1(true);
    setActiveBtn2(false);
    setShowDashAccounts(true);
    setShowDashAccounts1(false);
  };

  
  const handleClickBtn2 = () => {
    setActiveBtn2(true);
    setActiveBtn1(false);
    setShowDashAccounts1(true);
    setShowDashAccounts(false);
  };

  const navigate = useNavigate ();

  const handleRegisterClick = () => {
    navigate('/register'); 
  };



  return (
    <DashboardStyles>

    <Box className="Box-1">
      <CssBaseline />
      <AppBar position="fixed" open={open}>
   <Toolbar  className=' Toolbar-1'
    sx={{gap: { xs: 1, sm: 2, md: 2, lg: 2 }, }}>
    <IconButton color="inherit"
      aria-label="open drawer"
      onClick={handleDrawerOpen}
      edge="start"
      sx={[
        {
          p: 0, 
          display: "flex",
          alignItems: "center",
        },
        open && { display: "none" },
      ]}
    >
      <Box sx={{ backgroundColor: "#001F3F", borderRadius: "50%",
          width: { xs: 24, sm: 30, md: 30, lg: 30 }, 
          height: { xs: 24, sm: 30, md: 30, lg: 30 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }} />  </IconButton>

    <Typography
      variant="h6"
      noWrap
      component="div"
      color="#5E686D"
      sx={{ fontSize: { xs: "1rem", sm: "1.2rem", md: "1.3rem" } }} // Responsive font size
    >
      Beast Forces
    </Typography>
   </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
  <DrawerHeader>
    <IconButton onClick={handleDrawerClose}>
      {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
    </IconButton>
  </DrawerHeader>

  <Divider />

  <List className='drawer'>
  {['Dashboard', 'View-Registered'].map((text, index) => (
    <ListItem key={text} disablePadding sx={{ display: 'block' }}>
      {/* Link for Dashboard and View-Registered */}
      <Link to={index === 0 ? "/dashboard" : "/view-registered"} style={{ textDecoration: 'none' }}>
        <ListItemButton
          sx={[
            { minHeight: 48, px: 2.5 },
            open ? { justifyContent: 'initial' } : { justifyContent: 'center' },
          ]}
        >
          <ListItemIcon
            sx={[
              { minWidth: 0, justifyContent: 'center' },
              open ? { mr: 3 } : { mr: 'auto' },
            ]}
          >
            {index === 0 ? (
              <img
                src={dash}
                alt=""
                className="inputfronticonimg"
                style={{ width: '20px', height: '20px' }}
              />
            ) : (
              <img
                src={user3}
                alt=""
                className="inputfronticonimg"
                style={{ width: '21px', height: '21px' }}
              />
            )}
          </ListItemIcon>
          <ListItemText
            primary={text}
            sx={[
              { color: 'white', opacity: open ? 1 : 0 }, // Text will be white
              index === 1 && { marginLeft: open ? '0' : '8px' }, // Adjust margin for View-Registered
            ]}
          />
        </ListItemButton>
      </Link>
    </ListItem>
  ))}
</List>


  <List className='drawer'>
  {['Payment History', 'Logout'].map((text, index) => (
    <ListItem key={text} disablePadding sx={{ display: 'block' }}>
      {/* Link for Payment History and Logout */}
      <Link to={index === 0 ? "/payment-history" : "/logout" } style={{ textDecoration: 'none' }}>
        <ListItemButton
          sx={[
            { minHeight: 48, px: 2.5 },
            open ? { justifyContent: 'initial' } : { justifyContent: 'center' },
          ]}
        >
          <ListItemIcon
            sx={[
              { minWidth: 0, justifyContent: 'center' },
              open ? { mr: 3 } : { mr: 'auto' },
            ]}
          >
            {index === 0 ? (
              <img
                src={coins}
                alt=""
                className="inputfronticonimg"
                style={{ width: '21px', height: '21px' }}
              />
            ) : (
              <LogoutIcon
                sx={{
                  color: 'white',
                  fontSize: open ? '28px' : '24px',
                  marginTop:  '55.5vh',
                }}
              />
            )}
          </ListItemIcon>
          <ListItemText
            primary={text}
            sx={[
              { color: 'white', opacity: open ? 1 : 0 },
              index === 1 && {
                marginLeft: open ? '0' : '8px',  // Align Logout text closer to the icon
              },
            ]}
          />
        </ListItemButton>
      </Link>
    </ListItem>
  ))}
</List>
</Drawer>


{/* ------------------------------------ */}


    </Box>

    </DashboardStyles>
  );
}


