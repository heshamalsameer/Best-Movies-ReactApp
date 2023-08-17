import React from 'react'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom';

type NavItem = {
  item:string,
  to:string
}[];
const navItems:NavItem = [{item:'Home',to:'/'},{item:'WatchList',to:'/watchList'},{item:'Watched',to:'/watched'}];
export const Header = () => {
  return (
    <>
    <AppBar component="nav" sx={{bgcolor:'primary.dark' ,color:'black'}}>
    <Toolbar>
      <Typography
        variant="h4"
        component="div"
        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' },fontWeight:'bold' }}
        >
        Best Movies
      </Typography>
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        {navItems.map((item) =>(
          <Link to={item.to}>
          <Button size='large' key={item.item} sx={{ color:'black',fontSize:'25px' }}>
            {item.item}
          </Button>
        </Link>

)
)} 
      </Box>
    </Toolbar>
  </AppBar>
  <Toolbar/>
</>
  )
}
