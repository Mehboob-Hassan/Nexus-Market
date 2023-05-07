import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const top100Films = [
  { title: "Purchase Now", year: 1994 },
  { title: "New", year: 1972 },
  { title: "Has Offers", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
];

const MarketplaceFilters = ({ filtersData }) => {
  let theme = useTheme();
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <Box
        sx={{
          height: "auto",
          width: "100%",
          border: `2px solid ${theme.palette.background.fontClr}`,
          borderRadius: "8px",
          p: "30px",
        }}
      >
        <Box sx={{ mt: "40px" }}>
          <Autocomplete
            id="size-small-standard"
            size="small"
            // sx={{ backgroundColor: "red" }}
            options={top100Films}
            getOptionLabel={(option) => option.title}
            defaultValue={top100Films[13]}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                // label="Size small"
                placeholder="Filter"
              />
            )}
          />
        </Box>
        <Box sx={{ mt: "40px" }}>
          <Autocomplete
            id="size-small-standard"
            size="small"
            // sx={{ backgroundColor: "red" }}
            options={top100Films}
            getOptionLabel={(option) => option.title}
            defaultValue={top100Films[13]}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                // label="Size small"
                placeholder="Filter"
              />
            )}
          />
        </Box>
        <Box sx={{ mt: "40px" }}>
          <Autocomplete
            id="size-small-standard"
            size="small"
            // sx={{ backgroundColor: "red" }}
            options={top100Films}
            getOptionLabel={(option) => option.title}
            defaultValue={top100Films[13]}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                // label="Size small"
                placeholder="Filter"
              />
            )}
          />
        </Box>
        <Box sx={{ mt: "40px" }}>
          <Autocomplete
            id="size-small-standard"
            size="small"
            // sx={{ backgroundColor: "red" }}
            options={top100Films}
            getOptionLabel={(option) => option.title}
            defaultValue={top100Films[13]}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                // label="Size small"
                placeholder="Filter"
              />
            )}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default MarketplaceFilters;
