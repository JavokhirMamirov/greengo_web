import React,{ useRef, useState } from 'react'
import { MdDone, MdRestoreFromTrash, MdUploadFile } from 'react-icons/md';
import styled from 'styled-components';
import api from '../../../api/api';
import {DocContainer,File,FileInput,FilesContainer,FilesLink,ItemContainer, Span, UploadFile } from './Content';
import { BASE_URL_FILE } from '../../../api/base_url';
import pdf from '../../../images/pdf.png';

const token = localStorage.getItem('token')


const DocItem = ({doc, GetDocsTypes}) => {
    const [isOpen, setOpen] = useState(false);
    const InputRef = useRef();
    const [file, setFile] = useState(null);
    const handleFileUpload = event => {
        setFile(event.target.files[0])
      };

      const delete_pdf = async(file_id)=>{
        var formdata = new FormData();
        formdata.append("file_id", file_id);
        formdata.append("doc_id", doc.id);
        const response = await api.post('/delete-doc-file/',formdata)
        if(response.data.success === true){
            GetDocsTypes();
        }
      }


      const UploadDocument = async (id) =>{
        if (file !== null){
            let formData = new FormData();
            formData.append("file", file);
            formData.append("doc_id", id);
            const response = await api.post('/document-file/', formData,{
              headers:{
                'Content-Type': 'multipart/form-data',
                'Authorization': `Token ${token}` 
              }
            })
            if (response.data.success === true){
              GetDocsTypes();
              setFile(null)
            }
        }
        
      }
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
                    <MdDone style={{cursor:'pointer'}} onClick={()=>UploadDocument(doc.id)} color="#005951" size={20}/>
                    <MdRestoreFromTrash onClick={()=>setFile(null)}  style={{cursor:'pointer', marginTop:"5px"}} color="red" size={20}/>
                    </div>
                    <File  src={pdf} alt={file.name} title={file.name}/>
                </UploadFile>:null}
                <FilesContainer>
                    {doc.file.map((fl, index)=>(
                        <UploadFile key={index}>
                            <div style={{display:'flex'}}>
                            <MdRestoreFromTrash onClick={()=>delete_pdf(fl.id)} style={{cursor:'pointer'}}  color="red" size={20}/>
                            </div>
                            <FilesLink href={BASE_URL_FILE+fl.file} target="_blank">
                                <File src={pdf} alt={fl.name} title={fl.name}/>
                            </FilesLink>
                        </UploadFile>
                    ))}
                    
                    
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