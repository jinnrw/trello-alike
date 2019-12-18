import styled from "styled-components";

const Button = styled.button`
    display: inline-block;
    font-weight: 400;
    line-height: 20px;
    margin: 0;
    padding: 6px 12px;
    text-align: center;
    background-color: #5aac44;
    box-shadow: none;
    border: none;
    color: #fff;
    -webkit-appearance: none;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
        background-color: #61bd4f;
    }
`

const ButtonClose = styled.span`
    width: 32px;
    height: 32px;
    font-size: 18px;
    line-height: 32px;
    color: #6b778c;
    text-align: center;
    cursor: pointer;
`

export {Button, ButtonClose};