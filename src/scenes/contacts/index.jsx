import { useTheme } from '@emotion/react';
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from '@mui/icons-material';
import { Box, Typography, } from '@mui/material';
import { mockDataContacts } from "../../data/mockData"
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import React from 'react'
import { tokens } from '../../theme';
import Header from "../../components/Header"

const Contacts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        { field: "id", headerName: "ID", flex: 0.5},
        {field: "registrarId", headerName: "Registrar ID"},
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
            field: "address",
            headerName: "Endereço",
            flex: 1,
        },
        {
            field: "city",
            headerName: "Cidade",
            flex: 1,
        },

        {
            field: "zipCode",
            headerName: "Cep",
            flex: 1,
        },

        {
            field: "email",
            headerName: "E-mail",
            flex: 1,
          },
          
        

    ]
    return (
        <Box m = "20px">
            <Header title="CONTATOS" subtitle="Lista de contatos para futura interações" />
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
                },
                "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                    color: `${colors.grey[100] }!important`,
                }
            }}
            >
                <DataGrid
                    rows={mockDataContacts}
                    columns={columns}
                    components = {{ Toolbar: GridToolbar }}
                />
            </Box>
        </Box>

    )
}

export default Contacts