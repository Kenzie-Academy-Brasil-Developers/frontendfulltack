import styled from "styled-components"

interface IPropsRegisterStyled {
    size: number
}

export const RegisterStyled = styled.div<IPropsRegisterStyled>`
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


    .register__title{
        box-sizing: border-box;

        font-family: 'Inter';
        font-weight: 700;
        font-size: 24px;

        color: #323232;

        margin: 20px 0px;

        text-align: center;
    }

    .register__form{
        box-sizing: border-box;

        width: 100%;
    }
`