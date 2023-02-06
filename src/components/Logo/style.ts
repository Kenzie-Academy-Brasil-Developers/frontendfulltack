import styled from "styled-components"
import { motion } from "framer-motion"

export const LogoStyled = styled(motion.h1)`
    box-sizing: border-box;

    width: 100%;
    padding: 10px 20px;

    text-align: center;

    font-family: 'Passion One';
    font-weight: 400;
    font-size: 32px;

    color: #323232;

    @media( min-width: 500px ){
        text-align: start;
    }
`