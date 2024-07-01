import {useReducer, createContext} from 'react'
import Axios from '../utils/Axios'
import {jwtDecode} from 'jwt-decode'


const reducer = async (oldState,action)=>{
    switch(action.type){
        case "CREATE_NEW_USER":{
            const {username,email,firstName,lastName,password} = action.payload
            try {
                await Axios.post("/user/sign-up",{username,email,firstName,lastName,password})
                const response = await Axios.post("/user/sign-in",{user:email,password})
                window.localStorage.setItem("jwt",response.data.payload)
                return {...oldState,user:response.data.payload}
            } catch (error) {
                console.log(error.message)
            }
        }
        case "SIGN_IN_USER":{
            const {user,password} =action.payload
            try {
                const response = await Axios.post('/user/sign-in',{user,password})
                console.log(response)
                window.localStorage.setItem("jwt",response.data.payload)
                return {...oldState,user:checkIfUserExist()}
            } catch (error) {
                console.log(error.message)
            }
        }
        case "LOG_OUT_USER":{
            window.localStorage.removeItem("jwt")
            console.log(oldState)

            return {...oldState,user:null}
        }
        default: return oldState
    }
}

const checkIfUserExist = ()=>{
    const jwt = window.localStorage.getItem("jwt")
    const decodedUser = jwt? jwtDecode(jwt):null
    if(decodedUser && decodedUser.exp > (Date.now()/1000)){
        return decodedUser
    } else {
        return null
    }
}



export const UserContext = createContext()

export const UserContextProvider =({children})=>{

    const initialState = {user:checkIfUserExist()}
    

    const [user, dispatch] = useReducer(reducer, initialState)

    return(
        <UserContext.Provider value={{user,dispatch}}>
            {children}
        </UserContext.Provider>
    )
}