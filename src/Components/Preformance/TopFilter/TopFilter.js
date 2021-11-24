import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    background-color: #f3f3f3;
    align-items: center;
`;

export const Title = styled.span`
    padding: 20px 30px;
    background-color: #ddddde;
    font-size: 15px;
    color: #054a48;
`;

export const SubTitle = styled.span`
    font-size: 13px;
    color: #979999;
    margin-left: 15px;
`;

export const DateInput = styled.input`
    font-size: 13px;
    background-color: white;
    margin-left: 15px;
    outline: none;
    border: 1px solid #979999;
    height: 32px;
`;

export const FilterBtn = styled.button`
    height: 32px;
    width: 40px;
    border: none;
    background-color: #1467ef;
    margin-left: 10px;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        background-color: green; 
    }
`;