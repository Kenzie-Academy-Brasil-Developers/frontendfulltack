import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import Card from "../../components/Card"
import Logo from "../../components/Logo"
import Modal from "../../components/Modal"
import Pagination from "../../components/Pagination"
import Search from "../../components/Search"
import { useAuth } from "../../context/auth"
import { useData } from "../../context/data"
import { useModal } from "../../context/modal"
import CardLoader from "../../loaders/CardLoader"
import { IDataAddContact, IResponseListAllContacts } from "../../service/api/contact/contact.interface"
import { addContact, listAllContacts } from "../../service/api/contact/contact.request"
import { IDataResponseIInitSessionUser } from "../../service/api/user/user.interface"
import Icons from "../../service/icons"
import { userStorageOrError } from "../../service/methods"
import { schemaCreateContact } from "../../validation/contact.validation"
import Modals from "./modals"
import { ContactsStyled } from "./style"

const Contacts = () => {
    
    const { verificationValidToken, logoutAuth } = useAuth()
    const navigate = useNavigate()
    const { pagination, search, isLoading, setIsLoading } = useData()
    const { setIsOpenModal, setIsModifierModal, isOpenModal, setData, isModifierModal } = useModal()

    const [ contacts, setContacts ] = useState<IResponseListAllContacts>({} as IResponseListAllContacts)

    let user = userStorageOrError( logoutAuth )

    useEffect(()=>{ user = userStorageOrError( logoutAuth ) },[isModifierModal])

    useEffect(()=>{ 
        (async()=>{
            setIsLoading(true)

            try {
                await verificationValidToken()

                const sucess = await listAllContacts({})

                setContacts(sucess)
                setIsLoading(false)
            } catch (error) {
                setIsLoading(false)
                navigate("/")
            }
        })()
    },[])

    const isPagination = !!contacts?.nextPage || !!contacts?.previousPage

    return (
        <ContactsStyled
            isPagination={isPagination}
        >
            <Logo/>
            <div className="contacts__modal">
                <div className="modal__buttons">
                    <Button
                        size="small"
                        color="black"
                        Svg={Icons.ArrowLeft}
                        onClickFunction={logoutAuth}
                        line
                    />
                    <nav className="buttons__nav">
                        <Button
                            size="small"
                            color="blue"
                            Svg={Icons.addContact}
                            onClickFunction={()=>{setIsOpenModal("myContact");setIsModifierModal("create")}}
                        />
                        <Button
                            size="small"
                            color="black"
                            Svg={Icons.User}
                            onClickFunction={()=>{setIsOpenModal("myProfile");setData(user)}}
                        />
                    </nav>
                </div>
                
                <Search  
                    placeholder="Buscar contato"
                    onClick={( text:string )=>
                        search(
                        text,
                        {
                            "partial":true,
                            "fullName": text,
                            "email": text,
                            "telephone": text,
                            "createdAt":text,
                            "updatedAt": text,
                        },
                        setContacts,
                        listAllContacts,
                        {}
                    )}
                />

                {!isLoading&&
                    contacts?.result?.map( contact =>
                    <Card
                        key={contact.id}
                        contact={contact}
                    />    
                )}
                {isLoading&&<CardLoader/>}
                
            </div>
            {isPagination&&
                <Pagination
                    previousPage={contacts?.previousPage}
                    functionPreviousPage={()=>{
                        if( contacts?.previousPage ){
                            pagination(
                                contacts?.previousPage,
                                setContacts,
                                listAllContacts,
                                {}
                            ) 
                        }
                    }}
                    nextPage={contacts?.nextPage}
                    functionNextPage={()=>{
                        if( contacts?.nextPage ){
                            pagination(
                                contacts?.nextPage ,
                                setContacts,
                                listAllContacts,
                                {}
                            ) 
                        }
                    }}
                />}
                <Modals state={[contacts, setContacts]}/>
        </ContactsStyled>
    )
}

export default Contacts