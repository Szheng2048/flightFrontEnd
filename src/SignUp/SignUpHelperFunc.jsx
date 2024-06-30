import {isAlpha,isAlphanumeric,isStrongPassword,isEmail} from 'validator'

export const validFirstName = (str)=>{
    return isAlpha(str)
}
export const validLastName = (str)=>{
    return isAlpha(str)
}
export const validUserName =(str)=>{
    return isAlphanumeric(str)
}
export const validEmail =(str)=>{
    return isEmail(str)
}
export const validPassword = (str)=>{
    return isStrongPassword(str)
}