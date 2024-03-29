import { useTheme } from '@emotion/react';
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from '@mui/icons-material';
import { Box, Typography, } from '@mui/material';
import { mockDataTeam } from "../../data/mockData"
import { DataGrid } from '@mui/x-data-grid';
import React from 'react'
import { tokens } from '../../theme';
import Header from "../../components/Header"

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        { field: "id", headerName: "ID", },
        {
            field: "name",
            headerName: "Nome",
            flex: 1,
            cellClassName: "name-column--cell"
        },
        {
            field: "age",
            headerName: "Idade",
            type: "number",
            headerAlign: "left",
            align: "left",
        },
        {
            field: "phone",
            headerName: "Número de Telefone",
            flex: 1,
        },
        {
            field: "email",
            headerName: "E-mail",
            flex: 1,
          },
          
        {
            field: "acessLevel",
            headerName: "Acesso", 
            flex: 1,
            renderCell: ({row:{access}}) =>{
                return(
                    <Box
                    width = "60%"
                    m ="0 auto"
                    p ="5px"
                    display="flex"
                    justifyContent="center"
                    backgroundColor = {
                        access === "admin" ? colors.greenAccent[600] : colors.greenAccent[700]

                    }
                    borderRadius= "4px"
                    >
                        {access === "admin" && <AdminPanelSettingsOutlined />}  
                        {access === "admin" && <SecurityOutlined />}  
                        {access === "admin" && <LockOpenOutlined />}  
                        <Typography color={colors.grey[100]} sx= {{ml: "5px"}}>
                            {access}
                        </Typography>

                    </Box>
                )
            }
        },

    ]
    return (
        <Box m = "20px">
            <Header title="EQUIPE" subtitle="Aqui você pede ver e gerenciar a sua equipe" />
            <Box 
            m="40px 0 0 0 "
            height="75vh"
            sx = {{
                "& .MuiDataGrid-root":{
                    border: "none",
                },
                "& .MuiDataGrid-cell": {
                    borderBottom: "none"
                },
                "& .name-column--cell": {
                    color: colors.greenAccent[300]
                },
                "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: colors.blueAccent[700],
                    borderBottom: "none"
                },
                "& .MuiData-grid-virtualScroller": {
                    backgroundColor: colors.primary[400]
                },
                "& .MuiDataGrid-footerContainer": {
                    borderTop: "none",
                    backgroundColor: colors.blueAccent[700]
,

                }
            }}
            >
                <DataGrid
                    rows={mockDataTeam}
                    columns={columns}
                />
            </Box>
        </Box>

    )
}

export default Team