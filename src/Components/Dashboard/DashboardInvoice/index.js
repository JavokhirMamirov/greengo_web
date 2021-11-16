import React from 'react'
import { Container, TopList, TextTop, Input } from './DashboardInvoice';

const DashboardInvoice = () =>{
    return (
        <Container>
            <TopList>
                <TextTop>Trip List</TextTop>
                <Input type="text" placeholder="Search by ID, location, driver"/>
                <span>Start</span>
                <Input type="date"/>
                <span>End</span>
                <Input type="date"/>
            </TopList>
        </Container>
    );
}

export default DashboardInvoice;