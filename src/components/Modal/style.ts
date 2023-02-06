import styled from "styled-components"
import { motion } from "framer-motion"

export const Background = styled(motion.div)`
    box-sizing: border-box;

    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background: rgba(18, 18, 20, 0.4);
    backdrop-filter: blur(5px);

    .modal_form__title{
        box-sizing: border-box;

        font-size: "Inter";
        font-size: 26px;
        font-weight: 600;

        color: #323232;

        margin-bottom:20px;
        padding-left: 10px;
    }
`

export const ModalList = styled(motion.div)`
    box-sizing: border-box;

    width: 100%;
    max-width: 500px;
    
    background-color: #E7E7E7;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 8px;

    padding: 20px;

    .modal_list__nav{
        box-sizing: border-box;

        width: 100%;

        margin: 20px 0px 0px 0px;

        display: flex;
        justify-content: center;
    }
`
export const ModalForm = styled(motion.form)`
    box-sizing: border-box;

    width: 100%;
    max-width: 500px;

    background-color: #E7E7E7;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 8px;

    padding: 20px;
    margin: 10px;
`

