export const telephoneFormat = ( cell:string ) => {
    
    const array = cell?.split("")

    const size = cell?.length

    if( size >= 12 ){
        array.splice(0,0,"(")
        array.splice(3,0,")")
    }

    if( size <= 12 ){
        
        if( size > 7 ){
            array.splice(4,0," ")
            array.splice(7,0," ")
        }

        if( size === 12 ){
            array.splice(12,0,"-")
        }
    }
    if( size === 13 ){

        if( size > 7 ){
            array.splice(4,0," ")
            array.splice(7,0," ")
        }

        array.splice(13,0,"-")
    }
    if( size === 14 ){

        if( size > 8 ){
            array.splice(4,0," ")
            array.splice(8,0," ")
        }
        array.splice(14,0,"-")
    }

    return array?.join("")
}

export const removeTelephoneFormat = ( cell:string ) => {

    const array = cell?.split("")?.filter( item => Number( item ) || item == "0")

    return array.join("")?.slice(0,14)
}