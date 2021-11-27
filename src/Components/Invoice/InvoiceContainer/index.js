import React from 'react'
import InvoiceItem from '../../Dashboard/Invoice';
import { BoardContainer, BoardItem, BottomDataContainer, Container, InvoiceDiv, Span, TotalContainer } from './InvoiceContainer';
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
            <BottomDataContainer>
                <BoardContainer>
                    <BoardItem style={{borderTop:"1px solid #999999"}}>
                        DAT Gross: 45
                    </BoardItem>
                    <BoardItem>
                        DAT Gross: 45
                    </BoardItem>
                </BoardContainer>
                <TotalContainer>
                    <Span>Total Miles: 1425</Span>
                    <Span>Total Groos: 4800$</Span>
                    <Span>Avrage Per Mile/ 3.36$</Span>
                </TotalContainer>
            </BottomDataContainer>
        </Container>
    );
}

export default InvoiceContainer;