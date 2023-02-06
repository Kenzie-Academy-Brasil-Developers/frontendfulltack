import { createContext, ReactNode, useContext, useState } from "react"
import { IDataResponseIInitSessionUser } from "../../service/api/user/user.interface"

interface IModalContext {
    id: string
    setId: Function
    isOpenModal: IOpenModalType
    setIsOpenModal: React.Dispatch<React.SetStateAction<IOpenModalType>>
    isModifierModal: IModifierModalType
    setIsModifierModal: React.Dispatch<React.SetStateAction<IModifierModalType>>
    data:IDataResponseIInitSessionUser
    setData: React.Dispatch<React.SetStateAction<IDataResponseIInitSessionUser>>
}

export type IOpenModalType = 
    "myProfile" |
    "myContact" |
    undefined

export type IModifierModalType = 
    "create" | 
    "update" | 
    "remove" | 
    undefined

interface IModalProps {
    children: ReactNode
}

const ModalContext = createContext<IModalContext>({} as IModalContext)

export const ModalProvider = ({ children }:IModalProps) => {

    const [ isOpenModal, setIsOpenModal ] = useState<IOpenModalType>(undefined as IOpenModalType)
    const [ isModifierModal, setIsModifierModal ] = useState<IModifierModalType>(undefined as IModifierModalType)
    const [ id, setId ] = useState<string>("")
    const [ data, setData ] = useState<IDataResponseIInitSessionUser>({} as IDataResponseIInitSessionUser)

    return (
        <ModalContext.Provider
            value={{
                id, 
                setId,
                isOpenModal,
                setIsOpenModal,
                isModifierModal,
                setIsModifierModal,
                data,
                setData
            }}
        >
            { children }
        </ModalContext.Provider>
    )
}

export const useModal = () => useContext(ModalContext)