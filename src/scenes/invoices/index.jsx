import { useTheme } from '@emotion/react';
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from '@mui/icons-material';
import { Box, Typography, } from '@mui/material';
import { mockDataInvoices } from "../../data/mockData"
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import React from 'react'
import { tokens } from '../../theme';
import Header from "../../components/Header"

const Invoices = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        { field: "id", headerName: "ID", },
        {field: "registrarId", headerName: "Registrar ID"},
        {
            field: "name",
            headerName: "Nome",
            flex: 1,
            cellClassName: "name-column--cell"
        },

        {
            field: "phone",
            headerName: "Número de Telefone",
            flex: 1,
        },
        {
            field: "date",
            headerName: "Data",
            flex: 1,
        },
        {
            field: "cost",
            headerName: "Custo",
            flex: 1,
            renderCell: (params) => (
                <Typography color={colors.greenAccent[500]}>
                    ${params.row.cost}
                </Typography>
            )
        },

        {
            field: "email",
            headerName: "E-mail",
            flex: 1,
        },
          
        

    ]
    return (
        <Box m = "20px">
            <Header title="Faturas" subtitle="Veja suas Faturas" />
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
                "$ .MuiCheckbox-root":{
                    color: `${colors.greenAccent[200]} !important`
                }
            }}
            >
                <DataGrid
                checkboxSelection
                    rows={mockDataInvoices}
                    columns={columns}
                />
            </Box>
        </Box>

    )
}

export default Invoices