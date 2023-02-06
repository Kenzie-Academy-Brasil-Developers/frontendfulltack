import { LogoStyled } from "./style"
import { AnimatePresence } from "framer-motion"
import { memo } from "react"

const Logo = () => {

    return (
        <AnimatePresence>
            <LogoStyled
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                exit={{ opacity:0 }}
            >
                SaveContacts
            </LogoStyled>
        </AnimatePresence>
        
    )
}

export default memo( Logo )