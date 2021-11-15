import styled from "styled-components";

export const  Container = styled.div`
    display: flex;
    top: 0;
    height: 50px;
    background-color: #005951;
    align-items: center;
    @media (max-width:968px){
        justify-content: space-between;
    }
`;

export const Text = styled.span`
    color: #33cccc;
    font-size: 16px;
    margin: 5px;
    padding-left: 40px;
    @media (max-width:968px){
        display: none;
    }
`;

export const Logo = styled.img`
    margin: 5px;
    width: 170px;
    height: 50px;
`;

export const Toggle = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;
    span{
        height: 2px;
        width: 25px;
        background-color: #ffffff;
        margin-bottom: 4px;
        border-radius: 5px;
    }
    @media (max-width:968px){
        display: flex;
        padding-right: 20px;
    }
`;