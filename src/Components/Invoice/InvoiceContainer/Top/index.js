import React from 'react'
import { Container, DateInput, DateText, SearchInput, SortButton, SortContainer, SotrText, TopHistory } from './Top';


const InvoiceTop = () =>{
    return (
        <Container>
            <TopHistory>Top History</TopHistory>
            <SearchInput type="text" placeholder="Owner/Driver name"/>
            <div style={{float:"left"}}>
                <DateText>Start:</DateText>
                <DateInput type="date" />
                <DateText>End:</DateText>
                <DateInput type="date" />
            </div>
            <SortContainer>
                <SotrText>Sort by</SotrText>
                <SortButton>Date</SortButton>
                <SortButton>Price</SortButton>
                <SortButton>Status</SortButton>
            </SortContainer>
        </Container>
    );
} 

export default InvoiceTop;