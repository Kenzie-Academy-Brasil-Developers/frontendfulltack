import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { useLocation } from "react-router"
import Button from "../../components/Button"
import Input from "../../components/Input"
import { useAuth } from "../../context/auth"
import { IDataCreateUser } from "../../service/api/user/user.interface"
import Icons from "../../service/icons"
import { schemaCreateUser } from "../../validation/user.validation"
import { RegisterStyled } from "./style"

const Register = () => {

    const { handleSubmit, register, formState:{ errors } } = useForm<IDataCreateUser>({
        resolver:yupResolver(schemaCreateUser)
    })
    const { pathname } = useLocation()

    const size = ( pathname.includes("entrar") || pathname.includes("registro") ) ? 120 : 160
    const { registerUserAuth } = useAuth()

    return (
        <RegisterStyled
            size={size}
        >
            <form className="register__form" onSubmit={handleSubmit(registerUserAuth)}>
                <h2 className="register__title">Registro</h2>

                <Input
                    placeholder="Nome completo"
                    register={register}
                    name="fullName"
                    message={errors?.fullName?.message}
                />
                <Input
                    placeholder="Telefone"
                    register={register}
                    name="telephone"
                    type="telephone"
                    message={errors?.telephone?.message}
                />
                <Input
                    placeholder="Email"
                    register={register}
                    name="email"
                    message={errors?.email?.message}
                />
                <Input
                    placeholder="Confirmar email"
                    register={register}
                    name="confirmEmail"
                    message={errors?.confirmEmail?.message}
                />
                <Input
                    placeholder="Senha"
                    register={register}
                    name="password"
                    type="password"
                    message={errors?.password?.message}
                />
                <Input
                    placeholder="Confirmar senha"
                    register={register}
                    name="confirmPassword"
                    type="password"
                    message={errors?.confirmPassword?.message}
                />
                <Button
                    text="Registrar"
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
        </RegisterStyled>
    )
}

export default Register