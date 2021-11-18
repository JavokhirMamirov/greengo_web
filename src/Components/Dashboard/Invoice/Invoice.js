import styled from "styled-components";


export const Container = styled.div`
    background-color: #eee;
    margin-bottom: 3px;
    border-left: 5px solid ${props=>props.attached?"#32a852":"#a83232"};
`;

export const TopData = styled.div`
    display: flex;
    flex-direction: row;
    margin: 10px;
`;

export const SpanTop = styled.span`
    color: #979999;
    font-size: 15px;
    margin-right: 10px;
`;

export const MidleContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin:10px;
    align-items: center;
    justify-content: space-around;
`;

export const TrakNumber = styled.span`
    font-size: 17px;
    color: #626262;
    background-color: #cecece;
    padding: 10px;
    @media (max-width:1500px){
        font-size: 16px;
    }
`;

export const LocationContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left:15px;
`;

export const LocationSpan = styled.span`
    font-size: 18px;
    color:#054a48;
    @media (max-width:1500px){
        font-size: 16px;
    }
`;

export const LocationDateSpan = styled.span`
    font-size: 14px;
    color:#979999;
    @media (max-width:1500px){
        font-size: 12px;
    }
`;

export const PdfSpan = styled.span`
    font-size: 18px;
    color: ${props=>props.color};
    text-align:center;
    margin-left: 15px;
    @media (max-width:1500px){
        font-size: 16px;
    }
`;

export const Mile = styled.span`
    font-size: 18px;
    color: #666666;
    @media (max-width:1500px){
        font-size: 16px;
    }
`;

export const TripRateSpan = styled.span`
    font-size: 18px;
    color: #005952;
    margin-left: 10px;
    @media (max-width:1500px){
        font-size: 16px;
    }
`;
