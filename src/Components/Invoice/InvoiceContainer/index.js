import React from 'react'
import InvoiceItem from '../../Dashboard/Invoice';
import { BoardContainer, BoardItem, BottomDataContainer, Cont, Container, DetailContainer, DetailItem, Expences, ExpencesContainer, InvoiceDiv, PayOutContainer, PayOutDataContainer, Span, TotalContainer } from './InvoiceContainer';
import InvoiceTop from './Top';


const InvoiceContainer = ({invoices, setInvoiceFilter, setInvoices,invoiceFilter}) =>{
    return (
        <Container>
            <InvoiceTop setInvoiceFilter={setInvoiceFilter} setInvoices={setInvoices} invoiceFilter={invoiceFilter} />
            <InvoiceDiv>
                {invoices.data !== undefined?invoices.data.map((invoice, index)=>(
                        <InvoiceItem key={index} invoice={invoice} />
                    )):null}

            </InvoiceDiv>
            <BottomDataContainer>
                <div style={{display:'flex',boxSizing:'border-box'}}>
                    
                <Cont>
                <BoardContainer>
                    {invoices.board_data !== undefined? invoices.board_data.map((board, index)=>(
                    <BoardItem key={index} style={{borderTop: index === 0?"1px solid #999999":"none" }}>{board.name} Groos: {board.gross} $</BoardItem>
                    )):null}
                </BoardContainer>
                <TotalContainer>
                    <Span>Total Miles: {invoices.total_miles}</Span>
                    <Span>Total Groos: {invoices.total_gross} $</Span>
                    <Span>Avrage: {invoices.total_average}$/per mile</Span>
                </TotalContainer>
                </Cont>
                <ExpencesContainer>
                    <Expences>
                        <Span>-Expences</Span>
                    </Expences>
                    <DetailContainer>
                        <DetailItem>
                            <Span>COMPANY FEE 10%</Span>
                            <Span style={{marginLeft:"auto", padding:"2px"}}>480$</Span>
                        </DetailItem>
                        <DetailItem>
                            <Span>INSURANCE</Span>
                            <Span  style={{marginLeft:"auto", padding:"2px"}}>380$</Span>
                        </DetailItem>
                        <DetailItem>
                            <Span>LogBook</Span>
                            <Span style={{marginLeft:"auto", padding:"2px"}}>480$</Span>
                        </DetailItem>
                        <DetailItem style={{backgroundColor:"#ffe9a9",border:"none"}}>
                            <Span>TOTAL</Span>
                            <Span  style={{marginLeft:"auto", padding:"2px"}}>480$</Span>
                        </DetailItem>
                    </DetailContainer>
                    <PayOutContainer>
                        <Span>PAY OUT : </Span>
                    </PayOutContainer>
                    <PayOutDataContainer>
                        <Span>=3,3135</Span>
                    </PayOutDataContainer>
                    
                </ExpencesContainer>
                </div>
            </BottomDataContainer>
        </Container>
    );
}

export default InvoiceContainer;