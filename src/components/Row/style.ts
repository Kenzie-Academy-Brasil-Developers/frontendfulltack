import styled from "styled-components"

export const RowStyled = styled.div`
    box-sizing: border-box;

    display: flex;

    margin: 5px 0px;

    .row__name{
        box-sizing: border-box;

        padding: 10px;

        height: 48px;

        display: flex;
        align-items: center;

        background-color: #323232;
        color: #F5F5F5;

        font-size: 16px;
        font-weight: 600;

        border-radius: 8px 0px 0px 8px;
    }

    .row__value{
        box-sizing: border-box;

        padding: 10px 5px;

        width: 100%;

        background-color: #F5F5F5;
        color: #323232;
        font-size: 14px;

        display: flex;
        align-items: center;

        border-radius: 0px 8px 8px 0px;
    }

`