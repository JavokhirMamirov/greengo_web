import styled from "styled-components";


export const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  border:1px solid #a7aaab;
  font-size: 15px;
  color: #666666;
  height: 32px;
  border-radius: 5px;
  margin-bottom: 8px;
  &:hover{
    border: 1px solid #329da8;
  }
  &:focus{
    outline: none; 
    border: 1px solid #329da8;
  }
  &::placeholder{
    color: #8e9191;
  }
`;


export const SubmitDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin-top: 8px;
  margin-bottom: 10px;
`;

export const Select = styled.select`
  border:1px solid #a7aaab;
  font-size: 15px;
  color: #666666;
  height: 32px;
  border-radius: 5px;
  margin-bottom: 8px;
  &:hover{
    border: 1px solid #329da8;
  }
  &:focus{
    outline: none; 
    border: 1px solid #329da8;
  }
`;

export const Label = styled.span`
  font-size: 15px;
  color: #666666;
  font-family: 'Roboto';
  margin-bottom: 8px;
`;

export const SubmitBtn = styled.button`
  border-radius: 5px;
  border:none;
  background-color: ${props=>props.color};
  font-size: 15px;
  color: white;
  height: 32px;
  cursor: pointer;
  width: 150px;
  margin-left: 20px;
`;