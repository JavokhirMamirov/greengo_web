import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
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
    width: 180px;
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
    width: 130px;
`;

export const InvoiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    height: 350px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
    display: none;
}
`;

export const BoardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px;
    border-bottom: 1px solid #cccccc;
`;

export const BoardText = styled.span`
    font-size: 18px;
    color: #054a48;
    margin-bottom: 7px;
`;
export const TotalDataContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
`;

export const Mediadiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;