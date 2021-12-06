import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { GetInvoices } from '../api/requests';
import FilterContainer from '../Components/Invoice/FilterContainer';
import InvoiceContainer from '../Components/Invoice/InvoiceContainer';

const Invoice = () =>{
    const [invoices, setInvoices] = useState([]);
    const [invoiceFilter, setInvoiceFilter] = useState({});
    const get_invoices = async () =>{
        var date = new Date();
        var dateStart = new Date(date.getFullYear(), date.getMonth(), date.getDate()-3)
        var dateEnd = new Date(date.getFullYear(), date.getMonth(), date.getDate())
        var filter = {
            date__gte:dateStart !== ''? `${dateStart.getFullYear()}-${dateStart.getMonth()+1}-${dateStart.getDate()} 00:00`:null,
            date__lte:dateEnd !== ''? `${dateEnd.getFullYear()}-${dateEnd.getMonth()+1}-${dateEnd.getDate()} 23:59`:null,
        }
        setInvoiceFilter(filter);
        const res_dr = await GetInvoices(filter);
        setInvoices(res_dr);
    }

    useEffect(() => {
        
        get_invoices();
        
        
    }, [])
    return(
        <Container>
            <InvoiceContainer invoices={invoices} invoiceFilter={invoiceFilter} setInvoiceFilter={setInvoiceFilter} setInvoices={setInvoices}/>
            <FilterContainer />
        </Container>
        
    );
}

export default Invoice;

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin: 20px;
    margin-left: 240px;
    margin-right: 30px;
    display: grid;
    gap: 20px;
    grid-template-columns: 70% 30%;
    @media (max-width:968px){
        margin-left: 30px;
        grid-template-columns: 100%;
    }
`;