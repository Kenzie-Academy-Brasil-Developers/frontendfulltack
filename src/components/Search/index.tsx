import { useState } from "react";
import { Input, Organization } from "./style";
import { motion } from "framer-motion";

interface IPropsSearch {
    placeholder:string
    onClick:Function
}

const Search = ( { placeholder, onClick }:IPropsSearch ) => {

    const [ value, setValue ] = useState("")

    return (
        <Organization>
            <Input 
                onChange={( value )=>{setValue( value.target.value )}}
                placeholder={ placeholder }
                onKeyPress={( e  )=>e.code === "Enter"&&onClick(value)}
            />
            <motion.button
                className="organization__button"
                onClick={()=>onClick( value )}
            >
                Buscar
            </motion.button>
        </Organization>
    )
}

export default Search