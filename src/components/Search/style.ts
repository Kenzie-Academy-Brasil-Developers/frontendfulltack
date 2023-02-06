import styled from "styled-components"
import { motion } from "framer-motion"

export const Input = styled(motion.input)`
    box-sizing: border-box;

    width: 100%;
    height: 50px;

    outline: 0;
    padding: 10px 15px;
    margin: 0px;
    border: 0;

    border-radius: 8px 0px 0px 8px;
    background-color: #323232;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);   

    font-family: "Inter";
    font-size: 18px;
    font-weight: 400;
    color: #e1e1e1;
`

export const Organization = styled(motion.div)`
    box-sizing: border-box;

    width: calc(100% - 20px);
    display: flex;
    align-self: center;

    margin: 0px 20px;

    margin-bottom: 10px;

    .organization__button{
        transition: 200ms;
        
        box-sizing: border-box;

        height: 50px;
        display: flex;

        justify-content: center;
        align-items: center;

        border: 2px solid #2F76E0;
        
        margin: 0;
        padding: 10px 15px;
        border-radius: 0px 8px 8px 0px;

        color: #2F76E0;
        background-color: #323232;

        cursor: pointer;

        font-family: "Inter";
        font-size: 18px;
        
        :hover{ 
            transition: 200ms;
            
            color: #6ea8ff;
            border: 2px solid #6ea8ff;
        }
    }
`