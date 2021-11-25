import React, { useEffect } from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import DocumentContent from '../Components/Documents/Content';
import DocumentTop from '../Components/Documents/Top';
import api from '../api/api'
import DocAddModal from '../Components/Documents/DocAddModal';
const token = localStorage.getItem('token')
const Documents = () =>{
    const [type, setType] = useState(1);
    const [docs, setDocs] = useState([]);
    const [showModal, setShowModal] = useState(false)
    const GetDocsTypes = async (doctype) =>{
        const response = await api.get(`/documents/?type=${doctype}`)
        console.log(response);
        if (response.data.success === true){
            setDocs(response.data.data);
        }
    }

    useEffect(()=>{
        GetDocsTypes(type);
    },[])

    const SetUpDoc = async (data) =>{
        console.log(data);
        const response = await api.post('/documents/', data,{
        headers: {
            'Authorization': `Token ${token}` 
          }
        }
        )
        if (response.data.success){
            
            await GetDocsTypes(parseInt(data.type))
            setType(parseInt(data.type))
        }
    }
    return(
        <Container>
            <DocumentTop 
                type={type} 
                setType={setType} 
                GetDocsTypes={GetDocsTypes}
                setShowModal={setShowModal}
                />
            <DocumentContent docs={docs} setDocs={setDocs} GetDocsTypes={()=>GetDocsTypes(type)}/>
            <DocAddModal 
                setShowModal={setShowModal}
                showModal={showModal}
                SetUpDoc={SetUpDoc}
            />
        </Container>
        
    );
}

export default Documents;

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin: 20px;
    margin-left: 240px;
    margin-right: 30px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    @media (max-width:968px){
        margin-left: 30px;
    }
`;