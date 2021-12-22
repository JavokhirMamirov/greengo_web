import React from 'react'
import { Container, Logo, Text,Toggle } from './TopBar';
import logo from '../../images/logo.png'
const TopBar = ({setMenuOpen, menuOpen}) =>{
    return (
        <Container>
            <Logo src={logo}/>
            <Toggle onClick={()=>setMenuOpen(!menuOpen)}>
                <span/>
                <span/>
                <span/>
            </Toggle>
            <Text>USDOT#3279627 | MC#1036726</Text>
        </Container>
    );
}

export default TopBar;