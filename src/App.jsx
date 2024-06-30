import "./App.css"
import 'react-toastify/dist/ReactToastify.css'
// import { Component } from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
// import Home from "./Home/Home"
import Layout from './components/Layout'
import MainRouter from "./MainRouter"
import { useEffect } from "react"
import checkIfUserIsAuth from './utils/checkifUserisAuthorized'

function App() {
  useEffect(() => {
    if(checkIfUserIsAuth()){
      
    }
  }, [])
  
  return (
    <Layout>
      <MainRouter/>
    </Layout>
  )
}

export default App