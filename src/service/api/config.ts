import axios from "axios"

export const BaseURL = axios.create({
    baseURL:"http://localhost:3000"
})

export const headerAuthorizationConfig = ( ) => {
    const token = localStorage.getItem("@SaveContacts:Token")

    if( !token ){ 
        return {}
    }

    return {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      },
    };
};

export function transforObjectInQueryParms( query:object ){
    const array = Object.entries(query)
    return array.join("&").replaceAll(",", "=")
  }