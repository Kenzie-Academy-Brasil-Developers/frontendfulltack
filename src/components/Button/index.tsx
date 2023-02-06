import { ButtonStyled } from "./style"
import { AnimatePresence } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { memo } from "react"
import { IconType } from "react-icons/lib"

interface IPropsButton {
    text?: string
    size: "large" | "small"
    onRoute?: string
    line?: boolean
    color?: "black" | "red" | "blue"
    type?: "submit" | "button"
    Svg?:IconType
    onClickFunction?:Function
    margin?:string
}

const Button = ( { text, size, onRoute, line, color, Svg, type, onClickFunction, margin }:IPropsButton ) => {

    const navigate = useNavigate()

    return (
        <AnimatePresence>
            <ButtonStyled
                whileTap={{ scale: 0.95 }}
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                exit={{ opacity:0 }}

                margin={margin}
                size={size}
                line={line}
                color={color}
                onClick={()=>{onRoute&&navigate(onRoute);onClickFunction&&onClickFunction() }}
                type={type ? type  : "button"}
            >
                { text ? text :  Svg ? <Svg size={30}/> : ""}
            </ButtonStyled>
        </AnimatePresence>
    )
}

export default memo(Button)