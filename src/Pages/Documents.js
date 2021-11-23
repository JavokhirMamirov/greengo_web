import React from 'react'
import styled from 'styled-components';

const Documents = () =>{
    return(
        <Container>
            <h1>Documents</h1>
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
    @media (max-width:968px){
        margin-left: 30px;
    }
`;