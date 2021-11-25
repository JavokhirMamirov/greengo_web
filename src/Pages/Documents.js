import React from 'react'
import styled from 'styled-components';
import DocumentContent from '../Components/Documents/Content';
import DocumentTop from '../Components/Documents/Top';

const Documents = () =>{
    return(
        <Container>
            <DocumentTop/>
            <DocumentContent/>
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