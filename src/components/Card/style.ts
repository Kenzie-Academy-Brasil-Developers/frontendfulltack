import styled from "styled-components"
import { motion } from "framer-motion"

export const CardStyled = styled(motion.div)`
    box-sizing: border-box;

    width: calc(100% - 20px);
    height: auto;
    
    background-color: #323232;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

    margin: 0px 10px 5px 10px;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    padding: 20px;

    .card__name{
        box-sizing: border-box;

        align-self: flex-start;
        
        font-family: 'Inter';
        font-weight: 600;
        font-size: 20px;

        color: #F5F5F5;
    }

`