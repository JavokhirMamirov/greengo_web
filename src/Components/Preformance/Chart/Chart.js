import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #f3f3f3;
    justify-content: center;
    margin-top: 10px;
    
`;

export const Title = styled.span`
    font-size: 16px;
    color: #054a48;
    margin: 10px;
    font-weight: 500;
`;

export const ChartContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 50px;
    
`;

export const ItemContainer = styled.div`
    display: grid;
    grid-template-columns: 20% 80%;
`;

export const ChartDataContainer = styled.div`
    display: flex;
    background-color: white;
    padding: 10px;
    
`;

export const UserContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
`;

export const Name = styled.span`
    font-size: 14px;
    color: #054a48;
    font-style: italic;
    padding-left: 10px;

`;

export const ChartSpan = styled.span`
    color: white;
    background-color: ${props=>props.color?props.color:"green"};
    font-style: italic;
    font-size: 14px;
    padding: 5px;
    text-align: center;
    width: ${props=>props.width?props.width:"60"}%;
    border-radius: 4px;

`;