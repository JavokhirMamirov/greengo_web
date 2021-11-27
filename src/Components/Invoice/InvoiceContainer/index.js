import React from 'react'
import InvoiceItem from '../../Dashboard/Invoice';
import { Container, InvoiceDiv } from './InvoiceContainer';
import InvoiceTop from './Top';


const InvoiceContainer = ({invoices}) =>{
    return (
        <Container>
            <InvoiceTop/>
            <InvoiceDiv>
            {invoices.data !== undefined?invoices.data.map((invoice, index)=>(
                    <InvoiceItem key={index} invoice={invoice} />
                )):null}

            </InvoiceDiv>
        </Container>
    );
}

export default InvoiceContainer;