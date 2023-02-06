import * as yup from "yup"
import { removeTelephoneFormat } from "../service/format"

export const schemaInitSession = yup.object().shape({
    email: yup
        .string()
        .required("Deve conter um email"),
	password: yup
        .string()
        .required("Deve conter uma senha"),
})

export const schemaCreateUser = yup.object().shape({
    fullName: yup
        .string()
        .required("Deve conter o nome completo"),
    telephone: yup
        .string()
        .transform(( t ) => removeTelephoneFormat(t))
        .min(12, "Deve conter no minimo 12 digitos")
        .max(14, "Deve conter no máximo 14 digitos")
        .required("Deve conter um numero de telefone"),
    email: yup
        .string()
        .required("Deve conter um email"),
    confirmEmail: yup
        .string()
        .oneOf([yup.ref<string>("email")], "Email deve ser igual")
        .required("Deve confirmar o email"),
    password: yup
        .string()
        .required("Deve conter uma senha"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref<string>("password")], "Email deve ser igual")
        .required("Deve confirmar a senha"),
})

export const schemaUpdateUser = yup.object().shape({
    fullName: yup
        .string()
        .notRequired(),
    telephone: yup
        .string()
        .transform(( t ) => removeTelephoneFormat(t))
        .min(12, "Deve conter no minimo 12 digitos")
        .max(14, "Deve conter no máximo 14 digitos")
        .notRequired(),
    email: yup
        .string()
        .notRequired(),
    password: yup
        .string()
        .notRequired()
})