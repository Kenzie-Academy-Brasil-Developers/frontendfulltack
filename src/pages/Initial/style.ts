import styled from "styled-components"
import { motion } from "framer-motion"

export const InitialStyled = styled.div`
    box-sizing: border-box;

    width: 100%;
    height: 100%;
    min-height: 100vh;

    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);

    .initital__block{
        box-sizing: border-box;

        width: 100%;
        height: 100%;
        min-height: calc(100vh - 52px);

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        @media( min-width: 600px ){
            flex-direction: row;
        }

        .block__image{
            box-sizing: border-box;

            width: 100%;
            height: auto;

            padding: 30px 20px;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .image__text{
                
                display: none;

                @media ( min-width: 600px ){
                    display: unset;

                    box-sizing: border-box;

                    max-width: 600px;

                    font-family: 'Inter';
                    font-weight: 400;
                    font-size: 26px;

                    color: #323232;

                    text-align: center;

                    margin: 20px;
                }
            }
        }
    }
`

interface IPropsModal {
    size:number
}

export const Modal = styled(motion.div)<IPropsModal>`
    box-sizing: border-box;

    width: 100%;
    max-width: 500px;
    height: 100%;
    min-height: 300px;

    transition: 1s;

    background: #E7E7E7;

    border-radius: 36px 36px 0px 0px;

    display: flex;
    justify-content: center;
    align-items: flex-end;
    justify-content: center;
    
    @media( min-width: 600px ){
        min-height: ${({ size }) => size === 160 ? "300px" : "calc(100vh - 72px)"} ;
        align-self: flex-end;

        border-radius: 36px;

        margin:0px 20px 20px 0px;
    }
    .modal__navegation{
        box-sizing: border-box;

        width: 100%;
        height: 300px;
        
        display: flex;
        flex-direction: column;
        align-items: center;    
        justify-content: center;

        padding: 15px;
    }
`