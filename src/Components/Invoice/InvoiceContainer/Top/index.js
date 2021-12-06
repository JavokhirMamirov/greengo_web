import React, { useState } from 'react'
import { GetInvoices } from '../../../../api/requests';
import { Container, DateInput, DateText, DivSearch, SearchInput, SortButton, SortContainer, SotrText, TopHistory } from './Top';


const InvoiceTop = ({setInvoices,invoiceFilter, setInvoiceFilter}) =>{
    const [dateStart, setDateStart] = useState('');
    const [search, setSearch] = useState('');
    const [dateEnd, setDateEnd] = useState('');

    const get_invoiceFilter = async()=>{
        const res_dr = await GetInvoices(invoiceFilter);
        setInvoices(res_dr);
    }

    const onChageSearch=(value)=>{
        setSearch(value)
        var filter = {
            search:value,
            date__gte:dateStart !== ''? dateStart+" 00:00":null,
            date__lte:dateEnd !== ''? dateEnd + " 00:00":null
        }
        setInvoiceFilter(filter)
        get_invoiceFilter()
    }

    const onChageDateStart = (value)=>{
        setDateStart(value)
        var filter = {
            search:search,
            date__gte:value !== ''? value+" 00:00":null,
            date__lte:dateEnd !== ''? dateEnd + " 00:00":null
        }
        setInvoiceFilter(filter)
        get_invoiceFilter()
    }
    const onChageDateEnd = (value)=>{
        setDateEnd(value)
        var filter = {
            search:search,
            date__gte:dateStart !== ''? dateStart+" 00:00":null,
            date__lte:value !== ''? value + " 00:00":null
        }
        setInvoiceFilter(filter)
        get_invoiceFilter()
    }
    return (
        <Container>
            <DivSearch>
            <TopHistory>Top History</TopHistory>
            <SearchInput type="text" placeholder="Owner/Driver name"  onChange={v => onChageSearch(v.target.value)}/>
            <div style={{float:"left"}}>
                <DateText>Start:</DateText>
                <DateInput type="date" onChange={v=>onChageDateStart(v.target.value)} />
                <DateText>End:</DateText>
                <DateInput type="date" onChange={v=>onChageDateEnd(v.target.value)}/>
            </div>
            </DivSearch>
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