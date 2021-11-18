import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin: 15px;
    
`;

export const Tab = styled.div`
    display: flex;
    flex-direction: row;
    height: 60px;
    width: 100%;
    align-items: center;
`;


export const Panel = styled.div`
    display: flex;
    width: 100%;
    background-color: #eee;
`;



export const TimeText = styled.span`
    font-size: 15px;
    font-weight: 600;
    color: #054a48;
    margin-left: auto;
    order: 2;
    padding: 10px 30px;
`;

export const TabItem = styled.button`
    padding: 10px 30px;
    font-size: 15px;
    font-weight: 600;
    height: 100%;
    color: #054a48;
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
