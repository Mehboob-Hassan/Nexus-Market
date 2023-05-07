import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from '@mui/material/IconButton';

const columns = [
  { field: "id", headerName: "User ID", minWidth: 100,  width: 300 },
  {
    field: "total",
    headerName: "Total",
    width: 320,
    editable: true,
  },
  {
    field: "size",
    headerName: "Size (BTC)",
    width: 320,
    editable: true,
  },
  {
    field: "BID",
    headerName: "BID (USD)",
    // type: 'number',
    width: 320,
    editable: true,
    renderCell: (params) => (
      <div>
        <Typography sx={{ color: `${params.value.color}` }}>{params.value.title}</Typography>
      </div>
    ),
  },
];

const rows = [
  { id: 16101535, size: "0.5678", total: "$5474", BID: {title: 35, color: "#E55235"} },
  { id: 16101536, size: "0.5678", total: "$5474", BID: {title: 42, color: "#E55235"} },
  { id: 16101537, size: "0.5678", total: "$5474", BID: {title: 45, color: "#00CE7D"} },
  { id: 16101538, size: "0.5678", total: "$5474", BID: {title: 16, color: "#00CE7D"} },
  { id: 16101539, size: "0.5678", total: "$5474", BID: {title: 18, color: "#00CE7D"} },
  { id: 16101531, size: "0.5678", total: "$5474", BID: {title: 150, color: "#00CE7D"} },
  { id: 16101532, size: "0.5678", total: "$5474", BID: {title: 44, color: "#E55235"} },
  { id: 16101533, size: "0.5678", total: "$5474", BID: {title: 36, color: "#00CE7D"} },
  { id: 161015354, size: "0.5678", total: "$5474", BID: {title: 65, color: "#E55235"} },
];

export default function DashboardDataGrid() {
  return (
    <Box >
     
     
      <Box sx={{ height: 525, width: "100%", mt: "16px" }}>
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
              background: "#FFFFFF",
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
