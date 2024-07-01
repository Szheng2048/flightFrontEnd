import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useState} from 'react'
import {toast, ToastContainer} from 'react-toastify'
import "./SignUp.css"
import {UserContext} from '../context/userContext'
import {Navigate} from 'react-router-dom'

import {
  validFirstName,
  validLastName,
  validUserName,
  validEmail,
  validPassword
} from "./SignUpHelperFunc"
import { useContext } from 'react';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.


export default function SignUp() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const {dispatch} = useContext(UserContext)

  const toastMessage =(item)=>{
    return toast.warn(`Your ${item} is not accceptable, please try another`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {username,email,firstName,lastName,password}
    if(validFirstName(firstName)&&validLastName(lastName)&&validEmail(email)&&validUserName(username)&&validPassword(password)&&password===confirmPassword){
      dispatch({type:"CREATE_NEW_USER",payload:data})
      toast.success("signed In",{
        position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      })
    } else {
      if(!validFirstName(firstName)){
        toastMessage("First Name")
      }
      if(!validLastName(lastName)){
        toastMessage("Last Name")
      }
      if(!validEmail(email)){
        toastMessage("Email")
      }
      if(!validUserName(username)){
        toastMessage("Username")
      }
      if(!validPassword(password)){
        toastMessage("Password")
      } else {
        if(password !== confirmPassword){
          toast.warn(`Your passwords do not match please reenter your passwords`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        }
      }
      <Navigate to="/home"/>
    }
  };

  return (
    <Box sx={{
      backgroundImage:"url(https://jetinternational.com/wp-content/uploads/2016/11/iStock-177708665-5.jpg)",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      paddingTop:"1px",
      paddingBottom:30
      }}>
      <ToastContainer/>
      <Container sx={{marginTop:"20px"}}  maxWidth="xs" component={Paper} elevation={10} square>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main', marginTop:8 }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid  container columns={12} spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={(event)=>setFirstName(event.target.value)}
                  value={firstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(event)=>{setLastName(event.target.value)}}
                  value={lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(event)=>{setEmail(event.target.value)}}
                  value={email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="userName"
                  label="UserName"
                  name="userName"
                  autoComplete="username"
                  onChange={(event)=>{setUsername(event.target.value)}}
                  value={username}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(event)=>{setPassword(event.target.value)}}
                  value={password}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="new-password"
                  onChange={(event)=>{setConfirmPassword(event.target.value)}}
                  value={confirmPassword}
                />
              </Grid>
              <Grid item xs={12}>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </Box>
  );
}