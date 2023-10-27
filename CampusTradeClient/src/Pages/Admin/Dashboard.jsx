
import { Box, Container, Grid, Paper, Typography, styled } from '@mui/material'
import React from 'react'

const Item = styled(Paper) ({
    position:'relative',
    width:'200px',
    height:'200px',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
})

const Text = styled(Typography) ({
    color:'#333',
    position:'absolute',
    fontWeight:'800',
    top:'10px',
    left:'10px',
})

const Dashboard = () => {
  return (
    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'20px'}}>
        <Typography variant='h4'>Admin DashBoard</Typography>
        <Box sx={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center', backgroundColor:''}}>
            
            <Box sx={{margin:'0px 70px'}}>
            <Grid container rowSpacing={4} columnSpacing={4}>
            <Grid item  >
                <Item sx={{backgroundColor:'plum',color:'darkviolet'}}><Text>Products</Text><Typography variant='h3'># 33</Typography></Item>
            </Grid>
            <Grid item  >
            
                <Item sx={{backgroundColor:'lightsalmon',color:'darkred'}}><Text>Active Users</Text><Typography variant='h3'>23%</Typography></Item>
            </Grid>
            <Grid item  >
                <Item sx={{backgroundColor:'beige',color:'orange'}}><Text>Revenue</Text><Typography variant='h3'>482 $</Typography></Item>
            </Grid>
            <Grid item  >
                <Item sx={{backgroundColor:'lightblue',color:'navyblue'}}><Text>Sold Out</Text><Typography variant='h3'>10</Typography></Item>
            </Grid>
            </Grid>
            </Box>
            
        </Box>
    </Box>
    
  )
}

export default Dashboard