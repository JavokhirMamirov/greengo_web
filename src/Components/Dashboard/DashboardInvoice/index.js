import React, { useEffect } from 'react'
import { Container, TopList, TextTop, Input, DateInput,DateText, InvoiceContainer, BoardContainer, BoardText, TotalDataContainer } from './DashboardInvoice';
import {MdOutlineSearch} from 'react-icons/md'
import InvoiceItem from '../Invoice';
import { GetInvoices } from '../../../api/requests';
import { useState } from 'react/cjs/react.development';




const DashboardInvoice = () =>{
    const [invoices, setInvoices] = useState([]);
    const [dateStart, setDateStart] = useState('');
    const [search, setSearch] = useState('');
    const [dateEnd, setDateEnd] = useState('');
    useEffect(() => {
        const get_invoices = async (filter={}) =>{
            const res_dr = await GetInvoices(filter);
            console.log(res_dr);
            setInvoices(res_dr);
        }
        get_invoices();
        
        
    }, [])
    const get_invoiceFilter = async(filter)=>{
        const res_dr = await GetInvoices(filter);
        setInvoices(res_dr);
    }

    const onChageSearch=(value)=>{
        setSearch(value)
        var filter = {
            search:value,
            date__gte:dateStart !== ''? dateStart+" 00:00":null,
            date__lte:dateEnd !== ''? dateEnd + " 00:00":null
        }
        get_invoiceFilter(filter)
    }

    const onChageDateStart = (value)=>{
        setDateStart(value)
        var filter = {
            search:search,
            date__gte:value !== ''? value+" 00:00":null,
            date__lte:dateEnd !== ''? dateEnd + " 00:00":null
        }
        get_invoiceFilter(filter)
    }
    const onChageDateEnd = (value)=>{
        setDateEnd(value)
        var filter = {
            search:search,
            date__gte:dateStart !== ''? dateStart+" 00:00":null,
            date__lte:value !== ''? value + " 00:00":null
        }
        get_invoiceFilter(filter)
    }

    return (
        <Container>
            <TopList>
                <TextTop>Trip List</TextTop>
                <MdOutlineSearch size={20} style={{position:'absolute', marginLeft:"350px"}} color="#979999" />
                <Input type="text" placeholder="Search by ID, location, driver"  onChange={v => onChageSearch(v.target.value)}/>
                <div style={{marginLeft:"auto"}}>
                    <DateText>Start:</DateText>
                    <DateInput type="date" onChange={v=>onChageDateStart(v.target.value)}/>
                    <DateText>End:</DateText>
                    <DateInput type="date" onChange={v=>onChageDateEnd(v.target.value)}/>
                </div>
            </TopList>
            <InvoiceContainer>
                {invoices.data !== undefined?invoices.data.map((invoice, index)=>(
                    <InvoiceItem key={index} invoice={invoice}/>
                )):null}
            </InvoiceContainer>
            <BoardContainer>
                {invoices.board_data !== undefined? invoices.board_data.map((board, index)=>(
                    <BoardText key={index}>{board.name} Groos: {board.gross} $</BoardText>
                )):null}
                    
            </BoardContainer>
            <TotalDataContainer>
                <BoardText>Total Gross: {invoices.total_gross} $</BoardText>
                <BoardText>Total milies: {invoices.total_miles}</BoardText>
                <BoardText>Avrage: {invoices.total_average}$/per mile</BoardText>
            </TotalDataContainer>
        </Container>
    );
}

export default DashboardInvoice;