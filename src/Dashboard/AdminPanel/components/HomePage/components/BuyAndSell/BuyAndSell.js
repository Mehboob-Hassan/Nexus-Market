import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Buy } from './Buy';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}




export const BuyAndSell = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
  return (
    <div>
        <Box>
        <Box sx={{ width: '100%' }}>
      <Box 
    sx={{
        borderBottom: 0,
      }}
    >
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
        textColor="#1A1824"
        padding="0px"
        TabIndicatorProps={{
          style: {
            backgroundColor: "#FF744F",
            paddingTop: "0px",
            margin: "0px",
          },
        }}
        sx={{
          "& .MuiTabs-indicator": {
            backgroundColor: "#FF744F",
            height: "2px",
          },
          "& .MuiTab-root": {
            color: "#9EA3AE",
            fontSize: { lg: "14px", md: "14px", sm: "14px", xs: "10px" },
            fontWeight: "400",
            lineHeight: "25.6px",
            paddingBottom: "0px",
            paddingLeft: { lg: "15px", md: "15px", sm: "auto", xs: "0px" },
            backgroundColor: "#CED9ED",
            //   paddingTop : "0px"
          },
          "& .Mui-selected": {
            color: "#FF744F",
            fontSize: { lg: "14px", md: "14px", sm: "14px", xs: "12px" },
            fontWeight: "400",
            lineHeight: "25.6px",
            backgroundColor: "#FFFFFF",
          },
        }}
        
        >
          <Tab label="Buy" {...a11yProps(0)} sx={{width: "50%"}} />
          <Tab label="Sell" {...a11yProps(1)} sx={{width: "50%"}}/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} >
        <Buy/>
      </TabPanel>
      <TabPanel value={value} index={1}>
       Sell
      </TabPanel>
 
    </Box>
        </Box>
    </div>
  )
}
