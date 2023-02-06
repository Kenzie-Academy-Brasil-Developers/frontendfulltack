import { Background, ModalForm, ModalList } from "./style"
import { AnimatePresence } from "framer-motion"
import { memo, useEffect, useState } from "react"
import Button from "../Button"
import Icons from "../../service/icons"
import { IModifierModalType, IOpenModalType, useModal } from "../../context/modal"
import Input from "../Input"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { SchemaOf } from "yup"
import { options } from "../../service/toast"
import { toast } from "react-toastify"
import { IDataResponseAddContact } from "../../service/api/contact/contact.interface"
import { IDataResponseIInitSessionUser } from "../../service/api/user/user.interface"
import Row from "../Row"
import { telephoneFormat } from "../../service/format"

interface IInput {
    placeholder: string
    name: string
    type: string
    defaultValue?: string
}

interface IPropsModal {
    keyOpenModal: IOpenModalType
    inputs?:IInput[]
    schemaCreate?:SchemaOf<object>
    schemaUpdate?:SchemaOf<object>
    onFunctionSubmitCreate?: ( data:any ) => Promise<string>
    onFunctionSubmitUpdate?: ( data:any ) => Promise<string>
    onFunctionSubmitRemove?: () => Promise<string>
}

const Block = ( { inputs, schemaCreate, schemaUpdate, ...onSubmitF }:IPropsModal ) => {

    const { setIsModifierModal, setIsOpenModal, isOpenModal, isModifierModal, data, setData, setId, id } = useModal()
    const [ isOpenModifierModal, setIsOpenModifierModal ] = useState(false)

    const newData = data as IDataResponseIInitSessionUser

    const closeModal = () => {

        if( isModifierModal?.includes("create") ){
            setIsOpenModal(undefined)
            setIsModifierModal(undefined)
            setData({} as IDataResponseIInitSessionUser)
            setId("")

            return 
        }

        if( isModifierModal ){
            setIsModifierModal(undefined)

        }else{
            setIsOpenModal(undefined)
            setIsModifierModal(undefined)
            setData({} as IDataResponseIInitSessionUser)
            setId("")
        }  
    }

    const whatSchema = isModifierModal?.includes("create") ? schemaCreate : schemaUpdate

    const { handleSubmit, register, formState:{ errors } } = useForm<any>( 
        whatSchema ? 
        { resolver:yupResolver( whatSchema ) } : {}
    )

    const hasListUserOrContact = !isModifierModal?.includes("create") ? isOpenModal?.includes("Contact") ? "contact" : "user" : undefined 

    useEffect(()=>{
        (async()=>{

            if( !hasListUserOrContact ){
                setIsOpenModifierModal(true)
            }

        })()
    },[])

    const closeModalInBackground = ( e:any ) => {
        if( e.target.id === "close" ){
            closeModal()
        }
    }

    const title = isOpenModal?.includes("myProfile") ? "Meu perfil" : "Contato"
    const nameButton = isModifierModal?.includes("create") ? "Adicionar" : isModifierModal?.includes("update") ? "Atualizar" : "Remover"

    const isModific = isModifierModal && isOpenModal

    const onSubmit = ( data:any ) => {
            ( async () => {

                const idToast = toast.loading("Aguardando", options)

                const { 
                    onFunctionSubmitCreate, 
                    onFunctionSubmitUpdate, 
                    onFunctionSubmitRemove 
                } = onSubmitF

                try {

                    let message:string = ""

                    if( isModifierModal?.includes("create") && onFunctionSubmitCreate){
                        message = await onFunctionSubmitCreate( data )
                    }
                    if( isModifierModal?.includes("update") && onFunctionSubmitUpdate){
                        message = await onFunctionSubmitUpdate( data )
                    }
                    if( isModifierModal?.includes("remove") && onFunctionSubmitRemove){
                        message = await onFunctionSubmitRemove()
                    }

                    toast.update(idToast, {render: message, type: "success", isLoading: false, ...options })

                    setIsOpenModal(undefined)
                    setIsModifierModal(undefined)

                } catch (error:any) {
                    toast.update(idToast, {render: error.message, type: "error", isLoading: false,...options})
                    
                    setIsOpenModal(undefined)
                    setIsModifierModal(undefined)
                }
            })()
    }

    const isRemove = isModifierModal?.includes("remove")

    return (
        <AnimatePresence>
            <Background
                initial={{ backdropFilter:"blur(0px)" }}
                animate={{ backdropFilter:"blur(5px)" }}
                transition={{ duration:0.5 }}
                exit={{ backdropFilter:"blur(0px)" }}
                id="close"
                onClick={closeModalInBackground}
            >
                {!isModific&&
                    <ModalList>
                        <Button
                            Svg={Icons.ArrowLeft}
                            onClickFunction={closeModal}
                            size="small"
                            type="button"
                            margin="0px 0px 20px 0px"
                        />

                        <h2 className="modal_form__title">
                                { title }
                        </h2>

                        <Row  name="Nome" value={ newData?.fullName }/>
                        <Row  name="Email" value={ newData?.email }/>
                        <Row  name="Telefone" value={ telephoneFormat( newData?.telephone ) }/>
                        <Row  name="Criado" value={  newData?.createdAt }/>
                        <Row  name="Atualizado" value={  newData?.updatedAt }/>

                        <nav className="modal_list__nav">
                            <Button
                                Svg={Icons.Update}
                                onClickFunction={()=>{setIsModifierModal("update")}}
                                size="small"
                                color="blue"
                            />
                            <Button
                                Svg={Icons.Remove}
                                onClickFunction={()=>{setIsModifierModal("remove")}}
                                size="small"
                                color="red"
                            />
                        </nav>

                    </ModalList>
                }
                {isModific&&<ModalForm
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Button
                        Svg={Icons.ArrowLeft}
                        onClickFunction={closeModal}
                        size="small"
                        type="button"
                        margin="0px 0px 20px 0px"
                    />

                    <h2 className="modal_form__title">
                        { title }
                    </h2>

                    {!isRemove&&
                        inputs?.map( ({ placeholder, name, type, defaultValue }) => 
                            <Input
                                placeholder={ placeholder }
                                register={register}
                                name={ name }
                                type={ type }
                                defaultValue={ nameButton === "Atualizar" ? defaultValue : ""}
                                message={errors?.[name]?.message ? `${errors?.[name]?.message}` : undefined}
                            />
                        )
                    }

                    <Button
                        text={ nameButton }
                        size="large"
                        color="blue"
                        type="submit"
                        margin="20px 0px 0px 0px"
                    />
                </ModalForm>}
            </Background>
        </AnimatePresence>
    )
}

const Modal = ( props:IPropsModal ) => {

    const { isOpenModal } = useModal()

    const isOpen = isOpenModal === props.keyOpenModal 
       
    return (
        <>
            {isOpen&&<Block  {...props}/>}
        </>
    )
}

export default Modal