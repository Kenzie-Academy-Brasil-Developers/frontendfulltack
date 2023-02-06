import { Outlet, useLocation } from "react-router-dom"
import Button from "../../components/Button"
import Logo from "../../components/Logo"
import Profile from "../../components/Profile"
import { InitialStyled, Modal } from "./style"
import { AnimatePresence } from "framer-motion"

const Initial = () => {

    const { pathname } = useLocation()

    const size = ( pathname.includes("entrar") || pathname.includes("registro") ) ? 120 : 160
    const messageDesktop = size === 120 ? 
        "" 
            : 
        "Olá, SaveContacts é o lugar aonde poderá armazenar seus contatos, podendo ter uma fonte confiável e segura."

    return (
        <InitialStyled>
            <Logo/>
            <div className="initital__block">
                <div className="block__image">
                    <Profile/>
                    <p className="image__text">
                        { messageDesktop }
                    </p>
                </div>
                <AnimatePresence>
                    <Modal
                        size={size}
                        initial={{ opacity:0 }}
                        animate={{ opacity:1 }}
                        transition={{ duration:0.4 }}
                        exit={{ opacity:0 }}
                    >
                        {size === 160   ?
                            <div className="modal__navegation">
                                <Button
                                    text="Entrar"
                                    size="large"
                                    onRoute="/entrar"
                                />
                                <Button
                                    text="Registrar"
                                    size="large"
                                    onRoute="/registro"
                                    line
                                />
                            </div>      :
                            <Outlet/>
                        }
                    </Modal>
                </AnimatePresence>
            </div>
        </InitialStyled>
    )
}

export default Initial