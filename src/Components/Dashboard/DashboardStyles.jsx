import { styled } from '@mui/material'
import React from 'react'
import registerbac from '../../assets/register.png';

const DashboardStyles = styled("div")(() => ({
    ".Box-1": {
        display: 'flex',
    },
    ".Toolbar-1": {
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
    }, ".drawer": {
        backgroundColor: "red",
    },
    ".Register-1": {
        backgroundImage: `url(${registerbac})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: 3,
        backgroundRepeat: "no-repeat",
        height: "85vh",
        flexGrow: 1,
        padding: 15,
        borderRadius: 9,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflowY: "auto",
        "&::-webkit-scrollbar": {
            width: 0,
            height: 0,
        },
        flexWrap: "wrap",
    },
    ".Register-2": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
    },
    ".Register-3": {
        color: "white",
    },
    ".Register-4": {
        color: "white",
        textTransform: "capitalize",
        position: "absolute",
        top: 20,
        right: 20,
        fontSize: "16px",
    },
    ".Register-5": {
        width: "60%",
        borderRadius: 2,
        height: "80vh",
    },
    ".Register-6": {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        padding: 30,
        borderRadius: 12,
        height: "440px",
        overflowY: "auto",
        "&::-webkit-scrollbar": {
            width: 0,
            height: 0,
        },
        display: "flex",
        flexWrap: "wrap",
    },
    ".inputField": {
        backgroundColor: "white",
        borderRadius: "7px",
        "& .MuiInputBase-input": { color: "grey" },
        "& .MuiInputLabel-root": { color: "grey" },
        "& .MuiOutlinedInput-root": {
            backgroundColor: "white",
        },
    },
    ".Register-7": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 2,
        backgroundColor: "#E4003A",
        width: "50%",
        margin: "auto",
        borderRadius: "30px",
        padding: "2px 30px",
        
    },
    ".Register-8": {
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center" 
    },
    ".Register-9": {
        width: "200px",
        height: "200px",
        backgroundColor: "white", 
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
    },
    ".Register-12": {
        width: "300px",
        height: "300px",
        backgroundColor: "white", 
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
    },
    ".Register-10": {
        width: "18%",
        height: "auto"
    },
    ".Register-11": {
        backgroundColor: "white", 
        textTransform: "capitalize",
        color: "black",
        
    },
    // --------------------------

    ".ViewRegister-1": {
        backgroundColor:"#EFF3EA",
        boxShadow: 3,
        height: "85vh",
        flexGrow: 1,
        padding: 15,
        borderRadius: 9,
        display: "flex",
        justifyContent: "center",
        position: "relative",
        overflowY: "auto",
        "&::-webkit-scrollbar": {
            width: 0,
            height: 0,
        },
        flexWrap: "wrap",
    },
    ".ViewRegister-2": {
        display: "flex", 
      alignItems: "flex-start", // Align to top
      justifyContent: "flex-start", // Align to left
      flexWrap: "wrap"
    },
    ".inputfronticon-1":{
        outline:'none',
        border:'none',
        paddingLeft: "23px", // To make space for the icon
          height: "33px",
          width: "200px",
          borderRadius: "8px",
    },
    ".searchicon":{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          color: "#666",paddingLeft:"5px"
    },
     ".searchiconinput":{
        position: "relative", 
        display: "inline-block",
        marginLeft:"12px",
  },
   ".deletei":{
    display: "flex", 
    justifyContent: "flex-end",
        backgroundColor: "white", 
        borderRadius: "5px",
        padding: "5px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", 
      
   },
   ".delete-download-icons":{ 
    display: "flex", 
    justifyContent: "flex-end", 
    gap: "5px", 
    marginTop: "5px",
    marginBottom: "15px",
    flexWrap: "wrap" 

  },
  ".DeleteIcon":{ width: "24px", height: "24px" ,padding:"3px" },
  ".download":{
    backgroundColor: "white", 
    borderRadius: "5px", 
    padding: "3px", 
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    fontSize:"18px",
    color:"rgba(0, 0, 0, 0.84)"
  },
  ".download1":{
    backgroundColor: "white", 
    borderRadius: "5px", 
    padding: "3px 2px 0 2px", 
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    fontSize:"18px",
    color:"rgba(0, 0, 0, 0.84)",
    display: "inline-block" ,
  visibility: "visible" ,
  },
  ".databox": {
    backgroundColor:"#EFF3EA",
    boxShadow: 3,
    height: "43vh",
    flexGrow: 1,
    borderRadius: 9,
    display: "flex",
    justifyContent: "center",
    position: "relative",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
        width: 0,
        height: 0,
    },
    flexWrap: "wrap",
},
".ViewRegister-3": {
    backgroundColor:"#EFF3EA",
    boxShadow: 3,
    height: "85vh",
    flexGrow: 1,
    padding: 15,
    borderRadius: 9,
    display: "flex",
    justifyContent: "center",
    position: "relative",
    overflowY: "auto",
    
    "&::-webkit-scrollbar": {
        width: 0,
        height: 0,
    },
    flexWrap: "wrap",
},

}));

export default DashboardStyles;
