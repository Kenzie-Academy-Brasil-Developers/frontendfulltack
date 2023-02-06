import { createContext, ReactNode, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

interface IDataContext {
    searchText: object
    isLoading: boolean
    setSearchText: React.Dispatch<React.SetStateAction<{}>>
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
    search: ( text:string, objQuerySearch: object, setList:Function, methodList: Function, objId: object  ) => void
    pagination: ( page:string, setList:Function, methodList:Function, objId: object  ) => void
}

interface IDataProps {
    children: ReactNode
}

const DataContext = createContext<IDataContext>({} as IDataContext)

export const DataProvider = ({ children }:IDataProps) => {

    const navigate = useNavigate()

    const [ searchText, setSearchText ] = useState({})
    const [ isLoading, setIsLoading ] = useState<boolean>(true)

    const search = async ( text:string, objQuerySearch: object, setList:Function, methodList: Function, objId: object  ) => {

    setList({})
    setIsLoading(true)

    if( text.length !== 0 ){
        setSearchText(objQuerySearch) 
    }else{
        setSearchText({}) 
    }

    try {
        const sucess = await methodList( text.length != 0 ? { ...objId ,query:objQuerySearch} : { ...objId })
        setList(sucess)

        setIsLoading(false)
    } catch (error) {
        navigate("/")
        setIsLoading(false)
    }
    }

    const pagination = async ( page:string, setList:Function, methodList:Function, objId: object ) => {

        setList({})
        setIsLoading(true)
        try {

            const sucess = await methodList({ ...objId , query:searchText, page })

            setList(sucess)
            setIsLoading(false)
        } catch (error) {
            navigate("/")
            setIsLoading(false)
        }
    }

    return (
        <DataContext.Provider
            value={{
                searchText,
                isLoading,
                setSearchText,
                setIsLoading,
                search,
                pagination
            }}
        >
            { children }
        </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext)