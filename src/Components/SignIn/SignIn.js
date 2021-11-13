import styled from "styled-components";
import { MdAccountCircle } from 'react-icons/md';


export const userIcon = styled(MdAccountCircle)`
    position: absolute;
`;

export const Container = styled.div`
    display: flex;
    background-color: rgba(0, 89, 81,0.5);
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
`;


export const SingWindow =  styled.div`
    width: 978px;
    height: 600px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    position: relative;
    z-index: 99;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 40% 60%;
    @media (max-width:978px){
        width: 700px;
    }
    @media (max-width:720px){
        grid-template-columns: 100%;
        width: 500px;
    }
    @media (max-width:500px){
        width: 350px;
    }
    
`;

export const RightSide = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  
    
`;

export const LeftSide = styled.div`
    width: 100%;
    height: 100%;
    background-color: #005951;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    @media (max-width:720px){
        display: none;
    }
`;

export const Title = styled.h1`
    color: white;
`;

export const TitleSn = styled.h1`
    color: #005951;
`;

export const SubTitle = styled.span`
    font-size: 16px;
    color: white;
    margin-left: 30px;
    margin-right: 30px;
    text-align:center;
`;

export const Input = styled.input`
  border:1px solid #a7aaab;
  font-size: 15px;
  color: #666666;
  height: 32px;
  padding-left: 30px;
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

export const Form = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 50px;
  
`;

export const Label = styled.span`
  font-size: 15px;
  color: #005951;
  font-family: 'Roboto';
  margin-bottom: 8px;
`;


export const SubmitBtn = styled.button`
  border-radius: 10px;
  margin-top: 20px;
  align-self: center;
  border:none;
  background-color:#027570;
  font-size: 15px;
  color: white;
  height: 36px;
  cursor: pointer;
  width: 200px;
`;