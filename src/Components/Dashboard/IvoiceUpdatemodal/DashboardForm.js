import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
`;

export const Today = styled.div`
    width: 150px;
    display: flex;
    flex-direction: column;
    margin:20px;
    text-align:center;
`; 
export const Day = styled.span`
    color: #006666;
    font-size: 48px;
    font-weight: 600;
    margin:3px;
`; 
export const Weekday = styled.span`
    color: #006666;
    text-transform: uppercase;
    margin:3px;
`; 
export const Month = styled.span`
    color: #006666;
    margin:3px;
`; 
export const Title1 = styled.span`
    color: #054a48;
    font-size: 13px;
    align-self: flex-start;
    margin-bottom: 5px;
`; 
export const Form = styled.div`
    display: flex;
    flex-wrap:wrap;     
    margin:20px;
    width: 100%;
    
`;
export const Form2 = styled.div`
    display: flex;
    flex-wrap:wrap;
    margin-left: 20px;
    
`;

export const Input = styled.input`
    border: 1px solid #8a8a8a;
    // height: 36px;
    font-size: 14px;
    outline: none;
    padding: 8px 8px 8px 8px;

    float: left;
    margin-top:-3px;
    @media (max-width: 900px) {
        font-size:11px
     }
`;

export const Select = styled.select`
    border: 1px solid #8a8a8a;
    // height: 38px;
    margin-top:-6px;
    outline: none;
    width:50%;
    padding: 8px 8px 8px 8px;
    float: left;
    @media (max-width: 900px) {
       font-size:11px
    }
`;

export const Option = styled.option`
    padding: 5px;
`;

export const TextDiv = styled.div`
    height: 38px;
    display: flex;
    float: left;
    flex-direction: column;
    
    margin:0px 20px 10px 0px;
`;

export const CoverBtn = styled.button`
    border:none;
    background-color:#005951;
    color: white;
    height: 38px;
    float: left;
    width: 120px;
    cursor: pointer;
    margin-top:-10px;
    &:hover{
        background-color:#018c81;
    }
`;

export const NewMedia = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    // border:1px solid red;
    @media (max-width: 1525px) {
        width:90%;
        align-items:center;
    }
`
export const NewMedia1 = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    // border:1px solid red;
    @media (max-width: 1525px) {
        width:90%;
    }
`
export const NewMedia3 = styled.div`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    // border:1px solid red;
    @media (max-width: 1525px) {
        width:85%;
        margin-left:10px;
    }
`