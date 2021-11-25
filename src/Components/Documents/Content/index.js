import React from 'react'
import { Container } from './Content';
import DocItem from './DocItem';


const DocumentContent = ({docs,GetDocsTypes}) => {
    return (
        <Container>
            {docs?.map((doc, index)=>(
                <DocItem key={index} doc={doc} GetDocsTypes={GetDocsTypes}/>
            ))}
        </Container>
    );
}

export default DocumentContent;