import styled from "styled-components";
import ReactModal from 'react-modal'; 

export const Modal = styled(ReactModal)`
    width: 500px;
    height: 400px;
    background-color: black;
`;

export const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };