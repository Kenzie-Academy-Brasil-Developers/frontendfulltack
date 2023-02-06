import styled from "styled-components"
import { motion } from "framer-motion"

export const InputStyled = styled(motion.div)`
    box-sizing: border-box;

    width: 100%;
    max-width: 500px;

    display: flex;
    flex-direction: column;

    position: relative;

    margin: 5px 0px;

    

    .block__label{
        box-sizing: border-box;

        font-family: 'Inter';
        font-weight: 600;
        font-size: 16px;

        color: #323232;

        padding: 10px;
    }


    .block__eye{
        box-sizing: border-box;

        position: absolute;
        right: 0;
        bottom: 0;

        width: 48px;
        height: 48px;

        border: none;
        outline: 0;

        border-radius: 8px;

        font-size: 25px;
        color: #323232;

        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;
    }
`

interface IPropsInputBlock {
    typeInitial?:string
    message:boolean
}

export const InputBlock = styled(motion.input)<IPropsInputBlock>`
    box-sizing: border-box;

    width: 100%;
    height: 48px;

    border: none;
    outline: 0;
    border-radius: 8px;
    padding: ${ ({ typeInitial }) => typeInitial === "password" ? "10px 58px 10px 10px" : "10px" };

    font-family: 'Inter';
    font-weight: 600;
    font-size: 16px;

    color: #323232;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

    :focus::placeholder{
        transition: 300ms;

        opacity: 0;
    }

    ::placeholder{
        color: ${({ message }) => message ? "#F94B4B" : "#323232" };
    }
`