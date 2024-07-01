import {BrowserRouter as Router,Route,Routes, Navigate} from "react-router-dom"
import SignUp from "./SignUp/SignUp"
import SignIn from './SignIn/SignIn'
import Home from './Home/Home'
import PrivateRoute from "./PrivateRoute/PrivateRoute"


function MainRouter() {
  return (
    <Router>
        <Routes>
          <Route path="home" element={<PrivateRoute><Home/></PrivateRoute>}/>
          <Route path="sign-in" element={<SignIn/>}/>
          <Route path="sign-up" element={<SignUp/>}/>
        </Routes>
    </Router>
  )
}

export default MainRouter