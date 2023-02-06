import styled from "styled-components"
import { motion } from "framer-motion"

interface IPropsLoginStyled {
    size: number
}

export const LoginStyled = styled(motion.div)<IPropsLoginStyled>`
    box-sizing: border-box;

    width: 100%;
    min-height: 300px;

    padding: 40px 20px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    border-radius: 36px 36px 0px 0px;

    @media( min-width: 600px ){
        min-height: ${({ size }) => size === 160 ? "300px" : "calc(100vh - 92px)"} ;
        align-self: flex-end;

        border-radius: 36px;

        margin:0px 20px 20px 0px;
    }

    .login__title{
        box-sizing: border-box;

        font-family: 'Inter';
        font-weight: 700;
        font-size: 24px;

        color: #323232;

        margin: 20px 0px;

        text-align: center;
    }

    .login__form{
        box-sizing: border-box;

        width: 100%;
    }
`