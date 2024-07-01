import { AppBar,Button, Toolbar, Typography} from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import {Link} from 'react-router-dom' 
import {UserContext} from '../context/userContext'
 

function Header() {
  const {dispatch, user} = useContext(UserContext)
  function signOut (){
    console.log("hello")
    dispatch({type:"LOG_OUT_USER"})
  }
  
  return(
    <AppBar position='static'>
            <Toolbar>
                <Typography variant="h6" component='div'sx={{flexGrow:1}}>
                    <a>Trip Planner</a>
                </Typography>
                {user?(
                  <a><Button style={{color:"inherit"}} onClick={signOut}>Logout</Button></a>
                ):(
                  <>
                    <a><Button style={{color:"inherit"}}>SignUp</Button></a>
                    <a><Button style={{color:"inherit"}}>SignIn</Button></a>
                  </>
                )}
            </Toolbar>
          </AppBar>
  )


}

export default Header