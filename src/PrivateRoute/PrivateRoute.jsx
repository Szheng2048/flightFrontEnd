import React from 'react'
import checkIfUserIsAuth from '../utils/checkifUserisAuthorized'
import {Navigate} from 'react-router-dom'

const PrivateRoute=({children})=> {
  if(checkIfUserIsAuth()){
    return children
  } else {
    return <Navigate to="/sign-in"/>
  }
}

export default PrivateRoute