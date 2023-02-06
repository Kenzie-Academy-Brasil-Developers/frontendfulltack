import { CardStyled } from "./style"
import { AnimatePresence } from "framer-motion"
import { memo } from "react"
import Icons from "../../service/icons"
import Button from "../Button"
import { useModal } from "../../context/modal"
import { IDataResponseAddContact } from "../../service/api/contact/contact.interface"

interface IPropsCard {
    contact:IDataResponseAddContact
}

const Card = ( { contact }:IPropsCard ) => {

    const { setIsOpenModal, setData, setId } = useModal()

    return (
        <AnimatePresence>
            <CardStyled>
                <p
                    className="card__name"
                >
                    { contact.fullName }
                </p>
                <Button
                    color="blue"
                    Svg={Icons.ArrowRigth}
                    onClickFunction={()=>{setIsOpenModal("myContact");setData( contact );setId(contact.id)}}
                    size="small"
                    line
                />
            </CardStyled>
        </AnimatePresence>
    )
}

export default memo(Card)