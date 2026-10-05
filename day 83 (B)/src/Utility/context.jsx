import { createContext, useContext, useState } from "react"

const mycontext=createContext()

export function AuthContext({children}){
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const UserData={username:"admin",password:"admin123"}
    return(
        <mycontext.Provider value={{username,setUsername,password,setPassword,UserData}}>

            {children}

        </mycontext.Provider>
    ) 
}

export function useUserData(){
    return useContext(mycontext)

}