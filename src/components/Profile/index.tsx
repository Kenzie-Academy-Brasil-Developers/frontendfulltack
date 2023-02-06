import { ProfileStyled } from "./style"
import { AnimatePresence } from "framer-motion"
import { memo } from "react"
import Icons from "../../service/icons"
import { useLocation } from "react-router-dom"

const Profile = () => {

    const { pathname } = useLocation()

    const size = ( pathname.includes("entrar") || pathname.includes("registro") ) ? 120 : 160

    const sizeInitial = 160
    const sizeModal = 120

    const initial = size === 120 ?
        { width:`${sizeInitial}px`, height:`${sizeInitial}px`, fontSize:`${sizeInitial / 2}px` }
        :
        { width:`${sizeModal}px`, height:`${sizeModal}px`, fontSize:`${sizeModal / 2}px` }

    const animate = size === 120 ?
        { width:`${sizeModal}px`, height:`${sizeModal}px`, fontSize:`${sizeModal / 2}px` }
        :
        { width:`${sizeInitial}px`, height:`${sizeInitial}px`, fontSize:`${sizeInitial / 2}px` }

    return (
        <AnimatePresence>
            <ProfileStyled
                initial={initial}
                animate={animate}
                transition={{ duration:0.3 }}
                exit={{ opacity:0 }}
            >
                <Icons.User/>
            </ProfileStyled>
        </AnimatePresence>
        
    )
}

export default memo( Profile )