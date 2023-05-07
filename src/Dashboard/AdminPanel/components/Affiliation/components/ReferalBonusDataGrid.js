
import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";

const columns = [
  {
    field: "id",
    headerName: "Period",
    width: 150,
  },
  {
    field: "rate",
    headerName: "Rate",
    // type: 'number',
    width: 110,
    
  },
  {
    field: "bonus",
    headerName: "Bonus",
    width: 150,
  },
  {
    field: "date",
    headerName: "Date",
    width: 150,
  },
  
];

const rows = [
  { id: "161015354…", bonus: 0.5678, rate: "$5474", date: 35 },
  { id: "161015354…", bonus: 0.5678, rate: "$5474", date: 42 },
  { id: "161015354…", bonus: 0.5678, rate: "$5474", date: 45 },
  { id: "161015354…", bonus: 0.5678, rate: "$5474", date: 16 },
  { id: "161015354…", bonus: 0.5678, rate: "$5474", date: 18 },
  { id: "161015354…", bonus: 0.5678, rate: "$5474", date: 150 },
  { id: "161015354…", bonus: 0.5678, rate: "$5474", date: 44 },
  { id: "161015354…", bonus: 0.5678, rate: "$5474", date: 36 },
  { id: "161015354…", bonus: 0.5678, rate: "$5474", date: 65 },
];

export default function ReferalBonusDataGrid() {
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
              background: "#ffffff",
              paddingLeft: "20px",
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
              paddingLeft: "20px",
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
