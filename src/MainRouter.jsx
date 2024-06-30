import {BrowserRouter as Router,Route,Routes, Navigate} from "react-router-dom"
import SignUp from "./SignUp/SignUp"
import SignIn from './SignIn/SignIn'


function MainRouter() {
  return (
    <Router>
        <Routes>
          {/* <Route path="/" element={<Home/>}/> */}
          <Route path="sign-in" element={<SignIn/>}/>
          <Route path="sign-up" element={<SignUp/>}/>
        </Routes>
    </Router>
  )
}

export default MainRouter