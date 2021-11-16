import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-height: 500px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    border-radius: 10px;
    margin: 15px;
`;


export const TopList = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px;
    align-items: center;
    height: 50px;
`;

export const TextTop = styled.span`
    font-size: 18px;
    color: #054a48;
`;

export const Input = styled.input`
    border:1px solid #eee;
    outline: none;
    height: 32px;
    margin-left: 30px;
    width: 250px;
    font-size: 14px;
    padding-right: 25px;
`;

export const DateText = styled.span`
    font-size: 13px;
    color: #979999;
    margin-right: 10px;
`;

export const DateInput = styled.input`
    border:none;
    border-bottom: 1px solid #eee;
    outline: none;
    margin-right: 10px;
    font-size: 14px;
`;

export const InvoiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
`;