import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    margin: 10px;
    width: 100%;
`;


export const ActiveSpan = styled.span`
    color: white;
    background-color: #34eb37;
    padding: 5px 10px;
    border-radius: 5px;
    
`;

export const DeactiveSpan = styled.span`
    color: white;
    background-color:#eb3434;
    padding: 5px 10px;
    border-radius: 5px;
`;

export const ActiveBtn = styled.button`
    color: white;
    border-radius: 5px;
    width: 40px;
    height: 26px;
    background-color: #34eb37;
    border:none;
    text-align:center;
    cursor: pointer;
    &:hover{
        background-color:#5cfa8e;
    }
`;

export const DeActiveBtn = styled.button`
    color: white;
    border-radius: 5px;
    background-color:#eb3434;
    border:none;
    width: 40px;
    height: 26px;
    text-align:center;
    cursor: pointer;
    &:hover{
        background-color:#fa5c62;
    }
`;

