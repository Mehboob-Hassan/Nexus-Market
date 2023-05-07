import React from 'react'
import {useState} from 'react'
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { YourTransactionBox } from '../Exchange/components/YourTransactionBox';
import { YourTransactionTabs } from './components/YourTransactionTabs';
import TransactionDialog from '../TransactionDialog';


const YourTransactions = () => {


    const [open, setOpen] = useState(false);



  return (
    <div>
        <Box 
        sx={{
            backgroundColor: "#FFFFFF",
          }}
        >
            <Box sx={{}}>
                <YourTransactionBox setOpen={setOpen} />
            </Box>

            <Box mt="20px" sx={{p: 3}}>
                <YourTransactionTabs/>
            </Box>

            <Box>
                {open &&
                <TransactionDialog  open = {open} setOpen={setOpen} />
                }
            </Box>


        </Box>
    </div>
  )
}

export default YourTransactions;
