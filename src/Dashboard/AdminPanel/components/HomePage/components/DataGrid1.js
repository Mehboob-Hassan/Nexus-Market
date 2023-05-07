import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";

const columns = [
  { field: "id", headerName: "User ID", width: 100 },
  {
    field: "total",
    headerName: "Total",
    width: 150,
    editable: true,
  },
  {
    field: "size",
    headerName: "Size (BTC)",
    width: 150,
    editable: true,
  },
  {
    field: "BID",
    headerName: "BID (USD)",
    // type: 'number',
    width: 110,
    editable: true,
    renderCell: (params) => (
        <div>
          <Typography sx={{color: "#00CE7D"}}>
            {params.value}
          </Typography>
          
        </div>
    )
  },
];

const rows = [
  { id: 1, size: "Snow", total: "$5474", BID: 35 },
  { id: 2, size: "Lannister", total: "$5474", BID: 42 },
  { id: 3, size: "Lannister", total: "$5474", BID: 45 },
  { id: 4, size: "Stark", total: "$5474", BID: 16 },
  { id: 5, size: "Targaryen", total: "$5474", BID: 18 },
  { id: 6, size: "Melisandre", total: "$5474", BID: 150 },
  { id: 7, size: "Clifford", total: "$5474", BID: 44 },
  { id: 8, size: "Frances", total: "$5474", BID: 36 },
  { id: 9, size: "Roxie", total: "$5474", BID: 65 },
];

export default function DataGrid1() {
  return (
    <Box>

  



        <Box sx={{ height: 318, width: "100%" }}>

        
<DataGrid
  rows={rows}
  columns={columns}
  pageSize={5}
  hideFooterRowCount
  hideFooter
  rowsPerPageOptions={[5]}
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
      borderBottom: "1px solid #E6EAEE"
    },
    "&.MuiDataGrid-root": {
      // border: "none",
      borderBottom: "none",
      // color: "#E6EAEE",
    },
    "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
      outline: "none !important"
  },
  '& .MuiDataGrid-columnHeaders': {

      border: '0px',
      borderLeft: "0px",
      background: '#FFFFFF',
    },
  '& .MuiDataGrid-columnHeaderTitle': {
      fontWeight: 400,
      fontSize: '14px',
      color: "#1F2552",
    },
    '& .MuiDataGrid-row': {
    
     background: '#FFFFFF',
     borderLeft: "1px solid #E6EAEE",
     borderTop: "1px solid #E6EAEE"
   
   },
   '& .MuiDataGrid-cell': {

      boxSizing: 'none',borderBottomColor: "#E6EAEE",
    },
    '& .MuiPaginationItem-root': {
      borderRadius: 0,
    }
  }}
/>
        </Box>
    </Box>
  );
}
