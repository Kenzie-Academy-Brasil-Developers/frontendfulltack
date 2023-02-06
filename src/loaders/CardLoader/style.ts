import styled from "styled-components"
import { motion } from "framer-motion"

export const CardLoaderStyled = styled(motion.div)`
    box-sizing: border-box;

    width: calc(100% - 20px);
    height: 100%;
    max-height: 118px;
    
    margin: 0px 10px 5px 10px;
    padding: 20px;

    background-color: #323232;
    border-radius: 8px;

    display: flex;

    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    .basic{    
        box-sizing: border-box;

        padding: none;
        margin: none;

        display: flex;
        align-items: center;
        
        width: auto;
    }
    .item_1, .item_5{
        width: 125px;

        align-self: flex-end;
    }
`