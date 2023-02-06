

export interface IDataInitSessionUser {
    email: string
	password: string
}
export interface IInitSessionUser {
    data: IDataInitSessionUser
}
export interface IDataResponseIInitSessionUser {
	id: string
	fullName: string
	email: string
	telephone: string
	createdAt: string
	updatedAt: string
}
export interface IResponseInitSessionUser {
    message: string
	token: string
	user: IDataResponseIInitSessionUser
}



export interface IResponseListMyUser {
    message: string
	amountOfContacts: number
	user: IDataResponseIInitSessionUser
}




export interface IDataCreateUser {
    fullName: string
    email: string
    confirmEmail?:string
    password: string
    confirmPassword?: string
    telephone: string
}
export interface ICreateUser {
    data:IDataCreateUser
}
export interface IResponseCreateUser {
    message: string
    user:IDataResponseIInitSessionUser
}



export interface IDataUpdateMyUser  {
    fullName?: string
    email?: string
    password?: string
    telephone? : string
}
export interface IUpdateMyUser {
    data:IDataUpdateMyUser
}
export interface IResponseUpdateMyUser {
    message: string
    user:IDataResponseIInitSessionUser
}




export interface IResponseRemoveMyUser {
    message: string
}