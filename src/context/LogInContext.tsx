import { createContext, useContext, useEffect, useState } from "react";
import { TChilde } from "./ShoopingCartContext";
import { useNavigate, useNavigation } from "react-router-dom";
import { useLocalStorage } from "../Hooks/useLocalStorage";
import { getAuthentication } from "../services/api";
interface TLogin {
    logIn: boolean,
    handleLogin: (username : string,password: string) => void
    handleLogout: () => void
}
const LogInContext = createContext<TLogin>({} as TLogin)
export const useLogInContext = () => {
    return useContext(LogInContext)
}
export const LogInProvider = ({children} : TChilde) => {
    const [logIn,setLogIn] = useState(false)
    const [token,setToken] = useLocalStorage<string>('TOKEN','')
    const navigate = useNavigate()
    const handleLogin = (username:string,password:string) => {
        getAuthentication(username,password).finally(() => {
            setToken('ADASDASDASDASDEWQEQWEQWEWQET')
            setLogIn(true)
            navigate('/')
        })
    }
    const handleLogout = () => {
        setLogIn(false)
        navigate('/login')
        setToken('')

    }
    useEffect(() => {
        if(token){
            setLogIn(true)
            
        }
    },[token])
    return(
        <LogInContext.Provider value={{logIn, handleLogin,handleLogout}}>
        {children}
    </LogInContext.Provider>
    )
}