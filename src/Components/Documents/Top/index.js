import React from 'react'
import { Container, SetUpNew, TabItem } from './Top';


const DocumentTop = ({type, setType, GetDocsTypes}) => {

    const handleClick = async(type) =>{
        await GetDocsTypes(type);
        setType(type)
    }

    return (
        <Container>
            <TabItem 
                className={type===1?"active":null}
                onClick={()=>handleClick(1)}
            
                >Documents</TabItem>
            <TabItem 
                className={type===2?"active":null}
                onClick={()=>handleClick(2)}
                >Drivers Aplications</TabItem>
            <TabItem 
                className={type===3?"active":null}
                onClick={()=>handleClick(3)}
                >Existing Trucks Docs</TabItem>
            <SetUpNew>Add More</SetUpNew>
        </Container>
    );
}

export default DocumentTop;