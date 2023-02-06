import { BaseURL, headerAuthorizationConfig } from "../config"
import { ICreateUser, IInitSessionUser, IResponseCreateUser, IResponseInitSessionUser, IResponseListMyUser, IResponseRemoveMyUser, IResponseUpdateMyUser, IUpdateMyUser } from "./user.interface"

export const initSessionUser = async ( { data }:IInitSessionUser ):Promise<IResponseInitSessionUser> => {
    try {
        const sucess = await BaseURL.post(`/session`, data, headerAuthorizationConfig())
        return sucess.data
    } catch (error:any) {
        throw new Error(error.response.data.message)
    }
}

export const listMyUser = async ():Promise<IResponseListMyUser> => {
    try {
        const sucess = await BaseURL.get(`/user`, headerAuthorizationConfig())
        return sucess.data
    } catch (error:any) {
        throw new Error(error.response.data.message)
    }
}

export const createUser = async ( { data }:ICreateUser ):Promise<IResponseCreateUser> => {
    try {
        const sucess = await BaseURL.post(`/user`, data, headerAuthorizationConfig())
        return sucess.data
    } catch (error:any) {
        throw new Error(error.response.data.message)
    }
}

export const updateMyUser = async ( { data }:IUpdateMyUser ):Promise<IResponseUpdateMyUser> => {
    try {
        const sucess = await BaseURL.patch(`/user`, data, headerAuthorizationConfig())
        return sucess.data
    } catch (error:any) {
        throw new Error(error.response.data.message)
    }
}

export const removeMyUser = async ():Promise<IResponseRemoveMyUser> => {
    try {
        const sucess = await BaseURL.delete(`/user`, headerAuthorizationConfig())
        return sucess.data
    } catch (error:any) {
        throw new Error(error.response.data.message)
    }
}


