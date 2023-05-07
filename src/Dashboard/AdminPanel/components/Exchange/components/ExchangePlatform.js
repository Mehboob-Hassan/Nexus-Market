import React from 'react'
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import StopIcon from '@mui/icons-material/Stop';


const Data = [
    {
        title: "Minimum transaction fee",
        subTitle: "Variations of passages of Lorem Ipsum available, but the majority have."
    },
    {
        title: "Quick updating system",
        subTitle: "Passage of Lorem Ipsum, you need to be sure there."
    },
    {
        title: "Modern security systems",
        subTitle: "Latin professor at Hampden-Sydney Colleg."
    },
    {
        title: "Per day Limits",
        subTitle: "Uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable"
    },
]


export const ExchangePlatform = () => {
  return (
    <div>

    <Box>

        <Box>
            
        <Box>
        
        <Typography sx={{
                fontSize: "30px", fontWeight: "400px", color: "#354052"
            }}>Our own exchange platform</Typography>
            <Typography sx={{color: "#1F2552", fontSize: "14px", fontWeight: "400px", width: {lg: "80%", md: "80%", sm: "100%", xs: "100%"}, mt: "10px", opacity: "80%"}}>Variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour.</Typography>
       </Box>    

       <Box  mt="60px">
        {Data.map((item) => {
            return (
                <>
                <Box mt="40px" sx={{display: "flex",}}>
            <Box>
                <StopIcon sx={{color: "#FF8B64", width: "16px", height: "16px", mt: "6px"}}/>
            </Box>
            <Box ml="12px">
            <Typography sx={{color: "#354052", fontSize: "22px", fontWeight: "300px", }}>
            {item.title}
            </Typography>
            <Typography sx={{color: "#1F2552", fontSize: "14px", fontWeight: "300px", opacity: "80%", width: "100%" }}>
                {item.subTitle}
            </Typography>
            </Box>
                </Box>
                </>
            )
        })}
       </Box>


       <Box mt="40px">
       <Button
              variant="contained"
              sx={{
                backgroundColor: "#42BBFA",
                width: "210px",
                height: "46px",
                ":hover": {
                  backgroundColor: "#42BBFA",
                },
              }}
            >
              Get Started
            </Button>
       </Box>




         </Box>




    </Box>


    </div>
  )
}
