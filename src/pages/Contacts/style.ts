import styled from "styled-components"

interface IPropsContactsStyled {
    isPagination:boolean
}

export const ContactsStyled = styled.div<IPropsContactsStyled>`
    box-sizing: border-box;

    width: 100%;
    height: 100%;
    min-height: 100vh;

    position: relative;

    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);

    .contacts__modal{
        box-sizing: border-box;

        width: 100%;
        height: 100%;
        min-height: ${({ isPagination }) => isPagination ? "calc(100vh - 92px)" : "calc(100vh - 52px)"} ;

        transition: 1s;

        background: #E7E7E7;

        display: flex;
        flex-direction: column;

        .modal__buttons{
            box-sizing: border-box;

            width: 100%;

            padding: 10px 20px 20px 20px;

            display: flex;
            justify-content: space-between;

            .buttons__nav{
                box-sizing: border-box;

                display: flex;

            }
        }
    }
`