import React,{ useRef, useState } from 'react'
import { MdDone, MdRestoreFromTrash, MdUploadFile } from 'react-icons/md';
import styled from 'styled-components';
import {DocContainer,File,FileInput,FilesContainer,FilesLink,ItemContainer, Span, UploadFile } from './Content';


const DocItem = ({doc}) => {
    const [isOpen, setOpen] = useState(false);
    const InputRef = useRef();
    const [file, setFile] = useState(null);
    const handleFileUpload = event => {
        setFile(event.target.files[0])
      };
    return (
        <Container>
            <ItemContainer onClick={()=>setOpen(!isOpen)}>
                <Span>View Docs |</Span>
                <Span>{doc.name}</Span>
            </ItemContainer>
            {isOpen?
            <DocContainer>
                <FileInput onClick={()=>InputRef.current.click()}>
                    <MdUploadFile size={28} color="#005951"/>
                    <span style={{color:"#005951", fontSize:"10px"}}>Upload</span>
                    <input type="file" style={{display:'none'}} ref={InputRef} onChange={handleFileUpload}/>
                </FileInput>
                {file !== null?
                <UploadFile>
                    <div style={{display:'flex', flexDirection:'column'}}>
                    <MdDone style={{cursor:'pointer'}} color="#005951" size={20}/>
                    <MdRestoreFromTrash onClick={()=>setFile(null)}  style={{cursor:'pointer', marginTop:"5px"}} color="red" size={20}/>
                    </div>
                    <File  src="/images/pdf.png" alt={file.name} title={file.name}/>
                </UploadFile>:null}
                <FilesContainer>
                    <UploadFile>
                        <div style={{display:'flex'}}>
                        <MdRestoreFromTrash  color="red" size={20}/>
                        </div>
                        <FilesLink href="#" target="_blank">
                            <File src="/images/pdf.png" alt="name" title="Name"/>
                        </FilesLink>
                    </UploadFile>
                    
                </FilesContainer>
            </DocContainer>
            :null}

        </Container>
    );
}

export default DocItem;


const Container = styled.div`
    display: flex;
    flex-direction: column;
`;