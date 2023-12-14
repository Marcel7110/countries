import { createContext, useState, useEffect } from "react";

export const listContext = createContext()

const ListProvider = ({children}) => {
    const [data, setData] = useState(null)
    const [error,setError] = useState(false)

    useEffect(() => {
        if(data === null){
            const fetchCountries = async () => {
                try{
                    const response = await fetch('https://restcountries.com/v3.1/all')
                    const respData = await response.json()
                    setData(respData)
                }catch(err){
                    setError(true)
                }
            }
            fetchCountries()
        }
    },[])

    return <listContext.Provider value={{data,error}}>
        {children}
    </listContext.Provider>
}

export default ListProvider