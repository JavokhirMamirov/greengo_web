import React from 'react'
import { Modal, customStyles } from './SetUpDriver';

const SetUpDriverModal = ({isOpen,SetOpen})=>{
    return(
        <Modal 
        isOpen={isOpen}
        style={customStyles}
        contentLabel="Example Modal"
        onRequestClose={()=>SetOpen(!isOpen)}
        >
            <h1>salom</h1>
        </Modal>
    );
}

export default SetUpDriverModal;

