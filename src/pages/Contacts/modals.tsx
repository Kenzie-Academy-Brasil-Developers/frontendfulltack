import { memo } from "react"
import Modal from "../../components/Modal"
import { useModal } from "../../context/modal"
import { IDataAddContact, IDataUpdateContact, IResponseListAllContacts } from "../../service/api/contact/contact.interface"
import { addContact, removeContact, updateContact } from "../../service/api/contact/contact.request"
import { IDataUpdateMyUser } from "../../service/api/user/user.interface"
import { removeMyUser, updateMyUser } from "../../service/api/user/user.request"
import { removeTelephoneFormat } from "../../service/format"
import { schemaCreateContact, schemaUpdateContact } from "../../validation/contact.validation"
import { schemaUpdateUser } from "../../validation/user.validation"

interface IPropsModals {
    state:[ IResponseListAllContacts, React.Dispatch<React.SetStateAction<IResponseListAllContacts>> ]
}

const Modals = ( { state:[ contacts, setContact ] }:IPropsModals ) => {

    const { data, id } = useModal()
    
    return (
        <>
            <Modal
                keyOpenModal="myContact"
                schemaCreate={schemaCreateContact}
                onFunctionSubmitCreate={ async ( data:IDataAddContact )=>{
                    try {
                        const { message, contact } = await addContact({ data })

                        const newContact = contacts
                        newContact.result = [ ...contacts.result, contact ]

                        setContact(newContact)

                        return message
                    } catch (error:any) {
                        throw new Error(error.message)
                    }
                }}
                schemaUpdate={schemaUpdateContact}
                onFunctionSubmitUpdate={ async ( data:IDataUpdateContact )=>{
                    try {
                        if(  data?.telephone ){
                            data.telephone = removeTelephoneFormat(data.telephone)
                        }

                        const { message, contact } = await updateContact({ contactId:id, data })

                        const newObj = contacts

                        const newContacts = contacts.result.map( currentContact => {

                            if( currentContact.id === contact.id ){
                                return contact
                            }else{
                                return currentContact
                            }

                        })

                        newObj.result = newContacts                    

                        setContact(newObj)

                        return message
                    } catch (error:any) {
                        throw new Error(error.message)
                    }
                }}
                onFunctionSubmitRemove={async()=>{
                    try {
                        const { message } = await removeContact({ contactId:id })

                        const newObj = contacts

                        const newContacts = contacts.result.filter( currentContact => currentContact.id !== id)

                        newObj.result = newContacts                    

                        setContact(newObj)

                        return message
                    } catch (error:any) {
                        throw new Error(error.message)
                    }
                }}
                inputs={[
                    {
                        name:"fullName",
                        placeholder:"Nome completo",
                        type:"text",
                        defaultValue:data?.fullName
                    },
                    {
                        name:"email",
                        placeholder:"Email",
                        type:"text",
                        defaultValue:data?.email
                    },
                    {
                        name:"telephone",
                        placeholder:"Telefone",
                        type:"telephone",
                        defaultValue:data?.telephone
                    },  
                ]}
            />
            <Modal
                keyOpenModal="myProfile"
                schemaCreate={schemaUpdateUser}
                onFunctionSubmitUpdate={ async ( data:IDataUpdateMyUser )=>{
                    try {
                        if(  data?.telephone ){
                            data.telephone = removeTelephoneFormat(data.telephone)
                        }

                        const { message, user } = await updateMyUser({ data })

                        localStorage.setItem("@SaveContacts:User", JSON.stringify(user))

                        return message
                    } catch (error:any) {
                        throw new Error(error.message)
                    }
                }}
                onFunctionSubmitRemove={async()=>{

                    const { message } = await removeMyUser()

                    return message
                }}
                inputs={[
                    {
                        name:"fullName",
                        placeholder:"Nome completo",
                        type:"text",
                        defaultValue:data?.fullName
                    },
                    {
                        name:"email",
                        placeholder:"Email",
                        type:"text",
                        defaultValue:data?.email
                    },
                    {
                        name:"password",
                        placeholder:"Senha",
                        type:"password"
                    },
                    {
                        name:"telephone",
                        placeholder:"Telefone",
                        type:"telephone",
                        defaultValue:data?.telephone
                    },
                ]}
            />
        </>
    )
}

export default memo(Modals)