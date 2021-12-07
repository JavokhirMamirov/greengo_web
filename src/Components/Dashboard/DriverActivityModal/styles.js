import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const Background = styled.div`
    top:0;
    left:0;
    right: 0;
    bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const ModalWrapper = styled.div`
  width: 600px;
  max-height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  position: relative;
  z-index: 99;
  border-radius: 10px;
  height: 400px;
  background-color: rgba(84,174,97,0.5);
`;

export const ModalContent = styled.div`
  display: flex;
  padding:20px;
  flex-direction: column;
  
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 10px;
  color: white;
  right: 10px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;


export const Title = styled.p`
    font-size:24px;
    color: #666666;
    font-weight: 600;
    width: 100%;
    text-align:center;
`;


export const DriverDataContainer = styled.div`
    display: flex;
    margin-top: 20px;
    margin-left: 10px;
    justify-content: space-around;
`;

export const DateItam = styled.div`
    display: flex;
    align-items: center;
`;

export const Text = styled.span`
    font-size: 14px;
    color: white;
    margin-left:10px;
    margin-right:10px;
`;

export const StatusBtnContainer = styled.div`
    display: inline;
    margin: 20px;
`;

export const StatusBtn = styled.button`
    border: none;
    padding: 10px;
    background-color: ${props=>props.bg?props.bg:"#929292"};
    color: white;
    margin: 10px;
    text-transform: uppercase;
    &:hover{
        background-color: #eee;
        color: green;
    }
    &.active{
        border: 1px solid black;
    }
`;