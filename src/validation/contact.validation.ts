import * as yup from "yup"
import { removeTelephoneFormat } from "../service/format"

export const schemaCreateContact = yup.object().shape({
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
})

export const schemaUpdateContact = yup.object().shape({
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
})