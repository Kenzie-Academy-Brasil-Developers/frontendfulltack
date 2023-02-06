import { IDataResponseIInitSessionUser } from "./api/user/user.interface"

export const userStorageOrError = ( logout:Function ) => {

    const storge = localStorage.getItem("@SaveContacts:User") 
    let user:IDataResponseIInitSessionUser = {} as IDataResponseIInitSessionUser

    if( storge !== "undefined" ){
        try {
            user = JSON.parse( storge as string) as IDataResponseIInitSessionUser
        } catch (error) {
            logout()
        }
    }

    return user
}