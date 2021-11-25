import React from 'react'
import { Container, SetUpNew, TabItem } from './Top';


const DocumentTop = () => {
    return (
        <Container>
            <TabItem className="active">Documents</TabItem>
            <TabItem>Drivers Aplications</TabItem>
            <TabItem>Existing Trucks Docs</TabItem>
            <SetUpNew>Add More</SetUpNew>
        </Container>
    );
}

export default DocumentTop;