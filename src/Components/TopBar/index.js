import React from 'react'
import { Container, Logo, Text } from './TopBar';

const TopBar = () =>{
    return (
        <Container>
            <Logo src='/images/logo.png'/>
            <Text>USDOT#3279627 | MC#1036726</Text>
        </Container>
    );
}

export default TopBar;