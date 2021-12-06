import styled from "styled-components";

export const Container = styled.div`
box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
background: #fff;
border-radius: 10px;
margin: 15px;
`;


export const FilterByContainer = styled.div`
    margin: 15px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
`;

export const Text = styled.span`
    font-size: 17px;
    color: #054a48;
    margin: 15px;
    margin-left:25px;
`;

export const ButtonFilter = styled.button`
    width: 200px;
    margin-bottom: 10px;
    height: 36px;
    outline: none;
    border: none;
    align-self: center;
    cursor: pointer;
    color: #054a48;
    font-size: 15px;
`;

export const CalcItem = styled.div`
    display: flex;
    margin: 5px;
    margin-left:25px;
    flex-direction: row;
    align-content: center;

`;

export const ItemText = styled.span`
    font-size: 17px;
    color: #054a48;
    cursor: pointer;
    margin-left: 10px;
`;