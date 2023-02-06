import { InputStyled, InputBlock } from "./style"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Icons from "../../service/icons"
import { removeTelephoneFormat, telephoneFormat } from "../../service/format"
import { v4 as uuidv4 } from "uuid"

interface IPropsInput extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  message?: string | null 
  register?: any
  name?: string
  defaultValue?:string
}

const Input = ( props:IPropsInput ) => {

    const [ value, setValue ] = useState( "")
    const [ type, setType ] = useState<string | undefined>(props?.type && props?.type !== "telephone" ? props?.type : undefined)

    const isPassword = type === "password"
    const isInitialPassword = props?.type === "password"

    const idLabel = uuidv4()

    return (
        <AnimatePresence>
            <InputStyled>
                <AnimatePresence>
                    {value&&
                        <motion.label 
                            initial={{ opacity:0 }}
                            animate={{ opacity:1 }}
                            exit={{ opacity:0 }}

                            className="block__label"
                            htmlFor={idLabel}
                        >
                            { props?.message ? props?.message : props?.placeholder }
                        </motion.label>
                    }
                </AnimatePresence>
                <InputBlock
                    value={ !value ? props?.defaultValue : value}
                    {...props as any} 
                    {...props.register&&props.register(props.name, {
                        onChange: (  e:any ) => {

                            if( props?.type === "telephone" ){
                                
                                const numbers = removeTelephoneFormat(e.target.value)
                                const formating = telephoneFormat( numbers )

                                setValue(formating )
                            }else{
                   
                                setValue(e.target.value)
                            }

                        }
                    })}

                    placeholder={ props?.message ? props?.message : props?.placeholder }
                    message={!!props?.message}
                    type={type}
                    typeInitial={props?.type}
                    id={idLabel} 
                />
                {isInitialPassword&&
                <button 
                    type="button"
                    onClick={()=>{

                        if( type === "password" ){
                            setType("text")
                        }else{
                            setType("password")
                        }

                    }}
                    className="block__eye"
                >
                    { isPassword ? <Icons.Visible/> : <Icons.Invisible/> }
                </button>
                }
            </InputStyled>       
        </AnimatePresence>
    )
}

export default Input