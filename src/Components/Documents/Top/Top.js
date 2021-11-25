import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 60px;
    border-bottom: 2px solid #eee;
    margin: 10px;
`;

export const TabItem = styled.button`
    padding: 10px 30px;
    font-size: 14px;
    border: none;
    text-align:center;
    background-color: white;
    color:#054a48;
    &:hover{
        background-color: #eee;
    }
    &.active{
        background-color: #eee;
    }
`;


export const SetUpNew = styled.button`
    padding: 10px 30px;
    font-size: 14px;
    height: 40px;
    border: none;
    text-align:center;
    background-color: #0baac7;
    color: white;
    align-self: center;
    margin-left: auto;
    order: 2;
    &:hover{
        background-color: #0a6f67;
    }
`;