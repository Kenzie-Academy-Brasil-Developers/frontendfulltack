import styled, { css } from "styled-components"
import { motion } from "framer-motion"

interface IPropsButtonStyled {
    size: "large" | "small"
    color?: "black" | "red" | "blue"
    line?: boolean
    margin?:string
}

export const ButtonStyled = styled(motion.button)<IPropsButtonStyled>`
    box-sizing: border-box;

    border: none;
    outline: 0;
    margin: ${({ margin }) => margin ? margin : "5px"};

    width: 100%;
    max-width: ${({ size }) => size === "large" ? "500px" : "125px"};
    min-width: ${({ size }) => size === "large" ? "100%" : "60px"};

    height: 48px;
    min-height: 48px;

    border-radius: 8px;
    
    color: ${({ line, color }) => line ? 
        color === "red" ? "#F94B4B" :
        color === "blue" ? "#3F89F9" :
        "#323232" : "#F5F5F5" 
    };

    ${({ line, color }) => !line ?
        css`
            background-color: ${ 
                color === "red" ? "#F94B4B" :
                color === "blue" ? "#3F89F9" :
                "#323232"
            };
        `
        :
        css`
            background-color: transparent;

            border: 2px solid ${ 
                color === "red" ? "#F94B4B" :
                color === "blue" ? "#3F89F9" :
                "#323232" 
            };
        `
    }

    font-family: 'Inter';
    font-weight: 600;
    font-size: 16px;

    display:flex;
    justify-content:center;
    align-items:center;

    cursor:pointer;
`