import { AppBar,Button, Toolbar, Typography,IconButton} from '@mui/material'
import {ShoppingCart} from '@mui/icons-material'
import React from 'react'
// import {Link} from 'react-router-dom'  

function Header() {
  return (
    <AppBar position='static'>
        <Toolbar>
            <Typography variant="h6" component='div'sx={{flexGrow:1}}>
                <a>Trip Planner</a>
            </Typography>
            <a><Button style={{color:"inherit"}}>Login</Button></a>
        </Toolbar>

    </AppBar>
  )
}

export default Header