import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from "react-router-dom";
import { options } from "../../service/toast"
import { createUser, initSessionUser, listMyUser } from "../../service/api/user/user.request";
import { IDataCreateUser, IDataInitSessionUser } from "../../service/api/user/user.interface";

interface IAuthContext {
    isAutentication: boolean
    verificationValidToken: () => Promise<void>
    logoutAuth: () => void
    initSessionAuth: ( data:IDataInitSessionUser ) => Promise<void>
    registerUserAuth: ( data:IDataCreateUser ) => Promise<void>
}

interface IAuthProps {
    children: ReactNode
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthProvider = ({ children }:IAuthProps) => {

    const [ isAutentication, setIsAutentication ] = useState( false )
    const navigate = useNavigate()

    const verificationValidToken = async () => { 
        try {
            const sucess = await listMyUser()

            localStorage.setItem("@SaveContacts:User", JSON.stringify(sucess.user))
            setIsAutentication(true)
        } catch (error) {
            setIsAutentication(false)

            localStorage.removeItem("@SaveContacts:Token")
            localStorage.removeItem("@SaveContacts:User")
            navigate("/")
        }
    }

    const initSessionAuth = async ( data:IDataInitSessionUser ) => {
        (async()=>{
            const idToast = toast.loading("Buscando", options)

            try {
                const { message, user, token } = await initSessionUser({ data })

                localStorage.setItem("@SaveContacts:Token", token)
                localStorage.setItem("@SaveContacts:User", JSON.stringify(user))

                toast.update(idToast, {render: message, type: "success", isLoading: false, ...options })
                
                navigate("/contatos")
            } catch (error:any) {
                setIsAutentication(false)

                toast.update(idToast, {render: error.message, type: "error", isLoading: false,...options}) 
            }
        })()
    }

    const logoutAuth = () => {
        setIsAutentication(false)

        localStorage.removeItem("@SaveContacts:Token")
        localStorage.removeItem("@SaveContacts:User")

        navigate("/")
    }

    const registerUserAuth = async ( data:IDataCreateUser ) => {
        const id = toast.loading("Aguardando", options)

        try {
            const sucess = await createUser( { data } )

            toast.update(id, {render: sucess.message, type: "success", isLoading: false, ...options })

            const dataSession:IDataInitSessionUser = {} as IDataInitSessionUser
            dataSession.email = data!.email!
            dataSession.password = data!.password!

            await initSessionAuth( dataSession )

        } catch (error:any) {

            toast.update(id, {render: error.message, type: "error", isLoading: false, ...options })
        }
    }

    return (
        <AuthContext.Provider
            value={{
                isAutentication,
                verificationValidToken,
                logoutAuth,
                initSessionAuth,
                registerUserAuth,
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)