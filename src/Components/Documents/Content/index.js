import React from 'react'
import { Container } from './Content';
import DocItem from './DocItem';


const DocumentContent = ({docs}) => {
    return (
        <Container>
            {docs?.map((doc, index)=>(
                <DocItem key={index} doc={doc}/>
            ))}
        </Container>
    );
}

export default DocumentContent;