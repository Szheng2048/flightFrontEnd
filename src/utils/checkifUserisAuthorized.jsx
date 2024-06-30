import setAxiosAuthToken from './setAxiosAuthToken'
import {jwtDecode} from 'jwt-decode'

const checkIfUserIsAuth = ()=>{
    //check if there is a token, if not return false
    //if token exists, make sure its not expired else return false
    //otherwise it returns true

    const jwt = window.localStorage.getItem('jwt')
    if(jwt){
        const currentTime = Date.now()/1000
        const decodedJwt = jwtDecode(jwt)
        if(decodedJwt.exp > currentTime){
            setAxiosAuthToken(jwt)
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

export default checkIfUserIsAuth