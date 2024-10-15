import { useEffect, useState } from "react"

export const useLocalStorage = <T>(key: string,InitialValue: T) => {
    const [value,setValue] = useState<T>(() => {
        const localstorage = localStorage.getItem(key)
        if(localstorage !== null){
            return JSON.parse(localstorage)
        }
        else{
            return InitialValue
        }
    })
    useEffect(() => {
        localStorage.setItem(key,JSON.stringify(value))
    },[key,value])

    return [value,setValue]  as [typeof value,typeof setValue]
    
}