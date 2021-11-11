import styled from "styled-components";

export const  Container = styled.div`
    display: flex;
    flex-direction: column;
    top: 0;
    width: 230px;
    background-color: #005951;
    height: 100%;
`;

export const MenuItem = styled.a`
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
    color: white;
    padding: 20px;
    padding-right: 0px;
    padding-left: 40px;
    font-family: 'Roboto';

    &:hover{
        background-color: #0a6f67;
    }
`;


export const DropMenu = styled.div`
    display: ${props=>props.dropMenuOpen? 'flex':'none'};
    flex-direction: column;

`;

export const DropMenuItem = styled.a`
    text-decoration: none;
    font-size: 14px;
    cursor: pointer;
    color: white;
    font-family: 'Roboto';
    padding: 15px;
    padding-right: 0px;
    padding-left: 80px;

    &:hover{
        background-color: #0a6f67;
    }
`;

export const Label = styled.span`
    padding-left: 40px;
    padding-top: 60px;
    padding-bottom: 20px;
    font-family: 'Roboto';
    font-size: 13px;
    color: white;

`;

export const QuickLink = styled.a`
    background-color: #0a6f67;
    font-size: 16px;
    padding: 15px;
    font-family: 'Roboto';
    margin: 10px 40px;
    text-align:center;
    color: white;
    cursor: pointer;
`;