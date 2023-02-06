import { BaseURL, headerAuthorizationConfig, transforObjectInQueryParms } from "../config"
import { IAddContact, IListAllContacts, IRemoveContact, IResponseAddContact, IResponseListAllContacts, IResponseRemoveContact, IResponseUpdateContact, IUpdateContact } from "./contact.interface"

export const addContact = async ( { data }:IAddContact):Promise<IResponseAddContact> => {
    try {
        const sucess = await BaseURL.post(`/contact`, data, headerAuthorizationConfig())
        return sucess.data
    } catch (error:any) {
        throw new Error(error.response.data.message)
    }
}

export const listAllContacts = async ( { query, page }:IListAllContacts ):Promise<IResponseListAllContacts> => {

    const queryParms = transforObjectInQueryParms(query ? query : {})

    page = page ? page : "page=1"

    try {
        const sucess = await BaseURL.get(`/contact?${page}${ queryParms.length > 0 ? `&${queryParms}` : "" }`, headerAuthorizationConfig())
        return sucess.data
    } catch (error:any) {
        throw new Error(error.response.data.message)
    }
}

export const updateContact = async ( { contactId, data }:IUpdateContact):Promise<IResponseUpdateContact> => {
    try {
        const sucess = await BaseURL.patch(`/contact/${contactId}`, data, headerAuthorizationConfig())
        return sucess.data
    } catch (error:any) {
        throw new Error(error.response.data.message)
    }
}

export const removeContact = async ( { contactId }:IRemoveContact):Promise<IResponseRemoveContact> => {
    try {
        const sucess = await BaseURL.delete(`/contact/${contactId}`, headerAuthorizationConfig())
        return sucess.data
    } catch (error:any) {
        throw new Error(error.response.data.message)
    }
}