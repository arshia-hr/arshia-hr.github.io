import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";
interface TChildren {
    children: React.ReactNode
}
interface TTheme {
    theme: boolean,
    handleTheme: () => void
}
const ThemeContext = createContext<TTheme>( {} as TTheme)
export const useThemeContext = () => {
    return useContext(ThemeContext)
}
export const ThemeContextProvider = ({children} : TChildren) => {
    const [theme,setTheme] = useLocalStorage<boolean>('Theme',false)
    const handleTheme = () => {
        setTheme(theme => theme ? false : true)
    }
    return(
    <ThemeContext.Provider  value={{theme,handleTheme}}>
        {children}
    </ThemeContext.Provider>
        
    )
}