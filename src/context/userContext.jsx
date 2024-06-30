import {useReducer, createContext} from 'react'
import Axios from '../utils/Axios'
import checkIfUserIsAuth from '../utils/checkifUserisAuthorized'
import {jwtDecode} from 'jwt-decode'
import setAxiosAuthToken from '../utils/setAxiosAuthToken'


const reducer = async (oldState,action)=>{
    switch(action.type){
        case "CREATE_NEW_USER":{
            const {username,email,firstName,lastName,password} = action.payload
            try {
                await Axios.post("/user/sign-up",{username,email,firstName,lastName,password})
                await Axios.post("/user/sign-in",{user:email,password})
                
            } catch (error) {
                console.log(error.message)
            }
        }
        case "SIGN_IN_USER":{
            const {user,password} =action.payload
            try {
                await Axios
            } catch (error) {
                
            }
        }
        case "LOG_OUT_USER":{

        }
    }
}

const checkIfUserExist = ()=>{
    const jwt = window.localStorage.getItem("jwt")
    const decodedUser = jwt? jwtDecode(jwt):null
    if(decodedUser && decodedUser.exp > (Date.now()/1000)){
        return decodedUser
    }
}



export const UserContext = createContext()

export const UserContextProvider =({children})=>{

    const initialState = checkIfUserExist()
    

    const [mainUser, dispatch] = useReducer(reducer, initialState)

    return(
        <UserContext.Provider value={{mainUser,dispatch}}>
            {children}
        </UserContext.Provider>
    )
}