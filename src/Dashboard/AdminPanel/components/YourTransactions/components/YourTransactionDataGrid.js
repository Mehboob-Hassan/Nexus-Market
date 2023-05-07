import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from '@mui/material/IconButton';

const columns = [
  { field: "id", headerName: "Created At", minWidth: 100,  width: 300 },
  {
    field: "cHN",
    headerName: "Total CHN",
    width: 230,
  },
  {
    field: "btc",
    headerName: "BTC Amount",
    width: 230,
  },
  {
    field: "chnBonus",
    headerName: "CHN Bonus",
    width: 230,
  },
  {
    field: "confirm",
    headerName: "",
    // type: 'number',
    width: 230,
    renderCell: (params) => (
      <div>
        <Typography sx={{ color: `${params.value.color}` }}>{params.value.title}</Typography>
      </div>
    ),
  },
];

const rows = [
  { id: "2017 - 12 - 14  10:58:40", btc: "0.3", cHN: "35", chnBonus: "10%", confirm: {title: "Confirm", color: "#E55235"} },
  { id: "2017 - 12 - 14  10:58:42", btc: "0.3", cHN: "35", chnBonus: "10%", confirm: {title: "Confirm", color: "#E55235"} },
  { id: "2017 - 12 - 14  10:58:43", btc: "0.3", cHN: "35", chnBonus: "10%", confirm: {title: "Confirm", color: "#00CE7D"} },
  { id: "2017 - 12 - 14  10:58:44", btc: "0.3", cHN: "35", chnBonus: "10%", confirm: {title: "Confirm", color: "#00CE7D"} },

];

export default function YourTransactionDataGrid() {
  return (
    <Box >
     
     
      <Box sx={{ height: 525, width: "100%",}}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          hideFooterRowCount
          hideFooter
          rowsPerPageOptions={[10]}
          hideFooterPagination
          hideFooterSelectedRowCount
          // checkboxSelection
          // disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
          sx={{
            color: "#1F2552",
            fontSize: "14px",
            fontWeight: "400",
            borderTop: "0px",
            borderRadius: "0px",
            borderColor: "#E6EAEE",
            backgroundColor: "#F0F2F5",
            ".MuiDataGrid-columnSeparator": {
              display: "none",
              // color: "#E6EAEE"
              borderBottom: "1px solid #E6EAEE",
            },
            "&.MuiDataGrid-root": {
              // border: "none",
              borderBottom: "none",
              // color: "#E6EAEE",
            },
            "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
              outline: "none !important",
            },
            "& .MuiDataGrid-columnHeaders": {
              border: "0px",
              borderLeft: "0px",
              background: "#F0F2F5",
              padding: "30px",
            },
            "& .MuiDataGrid-columnHeaderTitle": {
              fontWeight: 400,
              fontSize: "14px",
              color: "#1F2552",
            },
            "& .MuiDataGrid-row": {
              background: "#FFFFFF",
              borderLeft: "1px solid #E6EAEE",
              borderTop: "1px solid #E6EAEE",
              paddingLeft: "30px",
            },
            "& .MuiDataGrid-cell": {
              boxSizing: "none",
              borderBottomColor: "#E6EAEE",
            },
            "& .MuiPaginationItem-root": {
              borderRadius: 0,
            },
          }}
        />
      </Box>
    </Box>
  );
}
