import { IPagination } from "../interface"

export interface IDataAddContact {
    fullName: string
    email: string
    telephone: string
}
export interface IAddContact {
    data:IDataAddContact
}
export interface IDataResponseAddContact {
    id: string
	fullName: string
	email: string
	telephone: string
	createdAt: string
	updatedAt: string
}
export interface IResponseAddContact {
    message: string
	contact: IDataResponseAddContact
}



export interface IListAllContacts {
    query?: object
    page?: string
}
export interface IResponseListAllContacts extends IPagination{
    message:string
    result:IDataResponseAddContact[]
}



export interface IDataUpdateContact {
    fullName?: string
    email?: string
    telephone?: string
}
export interface IUpdateContact {
    contactId: string
    data: IDataUpdateContact
}
export interface IResponseUpdateContact {
    message: string
	contact: IDataResponseAddContact
}



export interface IRemoveContact {
    contactId:string
}
export interface IResponseRemoveContact {
    message:string
}