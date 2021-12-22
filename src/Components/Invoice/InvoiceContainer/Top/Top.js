import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    margin: 10px;
    justify-content:space-between;
    align-items:center;
    @media (max-width: 1600px) {
        flex-direction: column;
        // display:block;
    }
`;


export const DivSearch = styled.div`
    display: flex;
    @media (max-width: 1600px) {
        justify-content:space-between;
        align-items:center;
    }
`;

export const TopHistory = styled.span`
    font-size: 18px;
    color: #054a48;
    float: left;
    margin-top: 10px;
    margin-left: 10px;
`;
export const SotrText = styled.span`
    font-size: 15px;
    color: #054a48;
    float: left;
    // margin-top: 10px;
    margin-left: 10px;
    margin-right: 5px;
`;

export const SearchInput = styled.input`
    border: none;
    font-size: 15px;
    color: #054a48;
    outline: none;
    background-color: #eee;
    height: 30px;
    float: left;
    margin-top: 5px;
    margin-left: 10px;
`;

export const DateText = styled.span`
    font-size: 13px;
    color: #979999;
    margin-right: 10px;
    margin-top: 10px;
    margin-left: 10px;
`;

export const DateInput = styled.input`
    border:none;
    border-bottom: 1px solid #eee;
    outline: none;
    margin-right: 10px;
    font-size: 14px;
    width: 130px;
    margin-top: 10px;
    margin-left: 10px;
`;

export const SortContainer = styled.div`
    display: flex;
    // justify-content: flex-end;
    // margin-top: 15px;
    @media (max-width: 1600px) {
        margin:right;
    }
`;

export const SortButton = styled.div`
    border: none;
    background-color: #eee;
    padding: 10px;
    margin-right: 7px;
    cursor: pointer;
    height:20px;
`;