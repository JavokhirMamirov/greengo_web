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