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

export const DocumentContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 70px;
    margin-left: 20px;
    margin-right: 20px;
    border-bottom: 1px solid #005951;
    justify-content: start;
    align-items: center;
`;

export const TopBar = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #005951;
    height: 50px;
    width: 100%;
    border-top-left-radius:9px;
    border-top-right-radius:9px;
    align-items: center;
    justify-content: end;
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

export const InvoiceContainer = styled.div`
    display: grid;
    grid-template-columns: 60% 40%;
    background-color: #54ae61;
    width: 100%;
`;

export const TruckContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin:15px;
    align-items: center;
`;

export const DriverContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin:15px;
    align-items: center;
    justify-content:end;
`;

export const Text = styled.span`
    font-size: 14px;
    color: white;
    margin-left:10px;
    margin-right:10px;
`;

export const LocationContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left:20px;
    margin-right:20px;
    margin-bottom: 20px;
`;

export const SubText = styled.span`
    font-size: 12px;
    color: white;
`;

export const DetailContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
export const BottomContainer = styled.div`
    display: flex;
    padding: 20px;
    justify-content: center;
    align-items: center;
`;
export const DetailItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 36px;
    border-bottom: 1px solid #005951;
    align-items: center;
    margin-left: 20px;
    margin-right: 20px;
`;


export const  DetailText = styled.span`
    font-size: 14px;
    color: #666666;
`;

export const ModalWrapper = styled.div`
    width: 420px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    position: relative;
    z-index: 99;
    border-radius: 10px;
`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`;


export const Title = styled.span`
    font-size:14px;
    color:white;
    margin-left: 15px;
    margin-right: auto;
`;

export const Button = styled.span`
    font-size:15px;
    color:white;
    cursor: pointer;
    margin-right: 14px;
`;


