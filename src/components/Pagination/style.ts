import styled from "styled-components"

export const PaginationStyled = styled.div`
    width: 100%;

    .preview_course__button_rating{
        width: 30px;
        height: 30px;

        border: 0;
        padding: 0;
        margin: 0;

        display: flex;
        justify-content: center;
        align-items: center;
        
        svg{
            font-size: 20px;
        }
    }
    
`

export const Block = styled.div`
    box-sizing: border-box;
    
    justify-self: flex-end;

    width: calc(100% - 20px);
    height: 40px;

    display: flex;
    justify-content: space-between;

    background: #E7E7E7;

    margin: 0px 10px;
    padding-bottom: 10px;
    button{
        box-sizing: border-box;

        border: none;
        outline: 0;

        width: 70px;
        min-width: 70px;

        box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.25);

        color: #3F89F9;
    }
`