import { styled } from '@mui/material'
import React from 'react'

const TableStyles = styled("div")(() => ({

        ".datatable":{
             width: '90vw', 
             height: '67vh', 
             backgroundColor: "white" 
        },
        ".databox1": {
          backgroundColor: "white" ,
                boxShadow: 3,
                height: "43vh",
                width: "80vw",
                flexGrow: 1,
                borderRadius: 9,
                display: "flex",
                justifyContent: "center",   /* This centers the table horizontally */
                alignItems: "center",       /* This centers the table vertically */
                position: "relative",
                overflowY: "auto",
                overflowX: "auto",
                "&::-webkit-scrollbar": {
                  width: 0,
                  height: 0,
                },
                flexWrap: "wrap",
                margin: "0 auto",           /* Horizontally centers the box */
              },
              ".databox2": {
                backgroundColor: "white" ,
                boxShadow: 3,
                height: "43vh",
                width: "68vw",
                flexGrow: 1,
                borderRadius: 9,
                display: "flex",
                justifyContent: "center",   /* This centers the table horizontally */
                alignItems: "center",       /* This centers the table vertically */
                position: "relative",
                overflowY: "auto",
                overflowX: "auto",
                "&::-webkit-scrollbar": {
                  width: 0,
                  height: 0,
                },
                flexWrap: "wrap",
                margin: "0 auto",           /* Horizontally centers the box */
              }, ".databox3": {
                backgroundColor: "#EFF3EA",
                boxShadow: 3,
                height: "73vh",
                width: "88vw",
                flexGrow: 1,
                borderRadius: 9,
                display: "flex",
                justifyContent: "center",   /* This centers the table horizontally */
                // alignItems: "center",       /* This centers the table vertically */
                position: "relative",
                overflowY: "auto",
                overflowX: "auto",
                "&::-webkit-scrollbar": {
                  width: 0,
                  height: 0,
                },
                flexWrap: "wrap",
                margin: "0 auto",           /* Horizontally centers the box */
              },
              '.custom-row-class':{
                backgroundColor: "white" 
              }
              
    

}));

export default TableStyles;
