import { useLocation } from "react-router-dom"
import Input from "../../components/Input"
import { LoginStyled } from "./style"
import { useForm } from "react-hook-form"
import Button from "../../components/Button"
import Icons from "../../service/icons"
import { IDataInitSessionUser } from "../../service/api/user/user.interface"
import { yupResolver } from "@hookform/resolvers/yup"
import { schemaInitSession } from "../../validation/user.validation"
import { useAuth } from "../../context/auth"

const Login = () => {

    const { handleSubmit, register, formState:{ errors } } = useForm<IDataInitSessionUser>({
        resolver:yupResolver(schemaInitSession)
    })

    const { pathname } = useLocation()
    const size = ( pathname.includes("entrar") || pathname.includes("registro") ) ? 120 : 160

    const { initSessionAuth } = useAuth()

    return (
        <LoginStyled
            size={size}
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ duration:0.4 }}
            exit={{ opacity:0 }}
        >   
            <form className="login__form" onSubmit={handleSubmit(initSessionAuth)}>
                <h2 className="login__title">Entrar</h2>

                <Input
                    placeholder="Email"
                    register={register}
                    name="email"
                    message={errors?.email?.message}
                />
                <Input
                    placeholder="Senha"
                    register={register}
                    name="password"
                    type="password"
                    message={errors?.password?.message}
                />

                <Button
                    text="Entrar"
                    size="large"
                    color="blue"
                    type="submit"
                />
            </form>
            <Button
                size="small"
                color="blue"
                onRoute="/"
                Svg={Icons.ArrowLeft}
                line    
            />
        </LoginStyled>
    )
}

export default Login