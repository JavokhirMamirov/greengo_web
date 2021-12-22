import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    max-height: 500px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    border-radius: 10px;
    margin: 15px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
    display: none;}
`;

export const TopContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 15px 20px;
`;

export const TopText = styled.span`
    font-size: 20px;
    color: #054a48;
`;

export const MidleContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 20px;
`;

export const DriverContainer = styled.div`
    display: grid;
    grid-template-columns: 20% 20% 40% 20%;
    background-color: #92b588;
    border-left: 5px solid ${props=>props.color};
    margin-bottom: 3px;
    
`;


export const DriverTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props=>props.bg?props.bg:null};
`;

export const Title = styled.span`
    font-size: 14px;
    color: white;
    margin: 4px;
    text-align:center;
    @media (max-width: 1525px) {
        font-size:11px;
    }
`;

export const SubTitle = styled.span`
    font-size: 16px;
    color: #054a48;
    text-align:center;
    @media (max-width: 1525px) {
        font-size:11px;
    }
`;

export const StatusText = styled.span`
    font-size: 15px;
    text-align:center;
    color: white;
    text-transform: uppercase;
    @media (max-width: 1525px) {
        font-size:11px;
    }
`;