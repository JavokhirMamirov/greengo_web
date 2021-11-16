import React from 'react'
import { Container, TopList, TextTop, Input, DateInput,DateText, InvoiceContainer } from './DashboardInvoice';
import {MdOutlineSearch} from 'react-icons/md'
import InvoiceItem from '../Invoice';
const DashboardInvoice = () =>{
    return (
        <Container>
            <TopList>
                <TextTop>Trip List</TextTop>
                <MdOutlineSearch size={20} style={{position:'absolute', marginLeft:"350px"}} color="#979999" />
                <Input type="text" placeholder="Search by ID, location, driver"/>
                <div style={{marginLeft:"auto"}}>
                    <DateText>Start:</DateText>
                    <DateInput type="date"/>
                    <DateText>End:</DateText>
                    <DateInput type="date"/>
                </div>
            </TopList>
            <InvoiceContainer>
                <InvoiceItem attached={false}/>
                <InvoiceItem  attached={true}/>
                <InvoiceItem  attached={true}/>
            </InvoiceContainer>
        </Container>
    );
}

export default DashboardInvoice;