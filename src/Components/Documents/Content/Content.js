import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ItemContainer = styled.div`
    display: flex;
    background-color: #eee;
    margin: 5px 20px;
    cursor: pointer;
`;

export const Span = styled.span`
    font-size: 17px;
    color: #054a48;
    padding: 10px;

`;

export  const DocContainer = styled.div`
    display: flex;
    margin:10px;
    margin-left: 20px;
`;

export const AddFileBtn = styled.div`
    width: 80px;
    height: 100px;
    border:1px solid #979999;
`;


export const UploadFile = styled.div`
    display: flex;
    width: 50px;
    height: 50px;
    margin-left: 10px;
`;

export const FileInput = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 50px;
    height: 50px;
    border: 1px solid #005951;
    cursor: pointer;
`;

export const FilesLink = styled.a`
    cursor: pointer;
`;

export const File = styled.img`
    width: 40px;
    height: 50px;
`;

export const FilesContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    justify-content: start;
    align-items: center;
    overflow-x: scroll;
    &::-webkit-scrollbar {
        display: none;
    } 
`;