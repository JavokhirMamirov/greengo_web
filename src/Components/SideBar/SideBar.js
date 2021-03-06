import styled from "styled-components";
import {
    Link
} from 'react-router-dom'
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    bottom: 0;
    min-width: 230px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
    display: none;
}
    background-color: #005951;
    height: 95vh;
    position: fixed;
    margin-top: 50px;
    top: 0;
    @media (max-width:968px){
        display: ${props => props.menuOpen === false ? 'none' : 'flex'};
    }
`;

export const MenuItem = styled(Link)`
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
    color: white;
    padding: 14px;
    padding-right: 0px;
    padding-left: 40px;
    font-family: 'Roboto';

    &:hover{
        background-color: #0a6f67;
    }
`;


export const DropMenu = styled.div`
    display: ${props => props.dropMenuOpen ? 'flex' : 'none'};
    flex-direction: column;

`;

export const DropMenuItem = styled(Link)`
    text-decoration: none;
    font-size: 14px;
    cursor: pointer;
    color: white;
    font-family: 'Roboto';
    padding: 10px;
    padding-right: 0px;
    padding-left: 80px;

    &:hover{
        background-color: #0a6f67;
    }
`;

export const Label = styled.span`
    padding-left: 40px;
    padding-top: 20px;
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
    margin: 5px 40px;
    text-align:center;
    color: white;
    cursor: pointer;
    text-decoration:none;
`;