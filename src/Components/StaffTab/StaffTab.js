import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin: 30px;
`;


export const Tab = styled.div`
    display: flex;
    flex-direction: row;
    height: 60px;
    width: 100%;
`;


export const Panel = styled.div`
    display: flex;
    width: 100%;
`;

export const PanelItem = styled.div`
    display: flex;
    width: 100%;
`;

export const TabItem = styled.button`
    padding: 10px 30px;
    font-size: 14px;
    border: none;
    text-align:center;
    background-color: white;
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