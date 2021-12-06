import styled from "styled-components";

export const Container = styled.div`
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    border-radius: 10px;
    margin: 15px;
    display: flex;
    flex-direction: column;
`;

export const InvoiceDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    height: 350px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
    display: none;
}
`;

export const BottomDataContainer = styled.div`
    display: flex;
    margin: 20px;

`;

export const BoardContainer = styled.div`
    display: flex;
    flex-direction: column;
    
`;

export const BoardItem = styled.span`
    font-size: 18px;
    color: #054a48;
    height: 100%;
    padding: 10px;
    border-bottom: 1px solid #999999;
`;

export const TotalContainer = styled.div`
    border: 1px solid #999999;
    background-color: #9df0ff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    width: 150px;
`;

export const ExpencesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    border: 1px solid #999999;
    margin-left: 10px;
`;

export const Expences = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffe9a9;
    height: 100%;
    width: 100px;
    border-right: 1px solid #999999;

`;


export const Span = styled.span`
    color: #054a48;
    font-size: 14px;
    margin: 3px;
`;

export const DetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
`;

export const DetailItem = styled.div`
    display: flex;
    border-bottom: 1px solid #999999;
`;

export const PayOutContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #b2e5b5;
    height: 100%;
    width: 100px;
`
export const PayOutDataContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 120px;
`