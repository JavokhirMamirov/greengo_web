import React, { useState } from 'react'
import { Mediadiv, Container, TopList, TextTop, Input, DateInput, DateText, InvoiceContainer, BoardContainer, BoardText, TotalDataContainer } from './DashboardInvoice';
import { MdOutlineSearch } from 'react-icons/md'
import InvoiceItem from '../Invoice';

import { UpdateInvoiceModal } from '../IvoiceUpdatemodal';

import { GetInvoices } from '../../../api/requests';
import { InvoiceModal } from '../InvoiceModal';
import api from '../../../api/api';




const DashboardInvoice = ({ invoices, setInvoices, invoiceFilter, setInvoiceFilter }) => {

    const [dateStart, setDateStart] = useState('');
    const [search, setSearch] = useState('');
    const [dateEnd, setDateEnd] = useState('');
    const [modalInvoiceData, setModalInvoiceData] = useState('');
    const [openInvoiceModal, setOpenInvoiceModal] = useState(false);
    const [updatemodalshow, setupdatemodalshow] = useState(false)

    const get_invoiceFilter = async () => {
        const res_dr = await GetInvoices(invoiceFilter);
        setInvoices(res_dr);
    }

    const onChageSearch = (value) => {
        setSearch(value)
        var filter = {
            search: value,
            date__gte: dateStart !== '' ? dateStart + " 00:00" : null,
            date__lte: dateEnd !== '' ? dateEnd + " 00:00" : null
        }
        setInvoiceFilter(filter)
        get_invoiceFilter()
    }

    const onChageDateStart = (value) => {
        setDateStart(value)
        var filter = {
            search: search,
            date__gte: value !== '' ? value + " 00:00" : null,
            date__lte: dateEnd !== '' ? dateEnd + " 00:00" : null
        }
        setInvoiceFilter(filter)
        get_invoiceFilter()
    }
    const onChageDateEnd = (value) => {
        setDateEnd(value)
        var filter = {
            search: search,
            date__gte: dateStart !== '' ? dateStart + " 00:00" : null,
            date__lte: value !== '' ? value + " 00:00" : null
        }
        setInvoiceFilter(filter)
        get_invoiceFilter()
    }

    const openModalInvoiceDetail = (invoice) => {
        setModalInvoiceData(invoice)
        setOpenInvoiceModal(true)
    }

    const deleteInvoice = async (id) => {
        const response = await api.delete(`/invoice/${id}/`)
        if (response.data.success === true) {
            get_invoiceFilter();
        }
    }

    const closeModal = () => {
        get_invoiceFilter()
        console.log('ok');
    };

    const EditFunction = () => {
        setupdatemodalshow(true)
        setOpenInvoiceModal(false)
    }

    return (
        <Container>
            <TopList>
                <TextTop>Trip List</TextTop>
                <MdOutlineSearch size={20} style={{ position: 'absolute', marginLeft: "280px" }} color="#979999" />
                <Input type="text" placeholder="Search by ID, location, driv.." onChange={v => onChageSearch(v.target.value)} />
                <div style={{ marginLeft: "auto", display: 'flex' }}>
                    <Mediadiv>
                        <DateText>Start:</DateText>
                        <DateInput type="date" onChange={v => onChageDateStart(v.target.value)} />
                    </Mediadiv>
                    <Mediadiv>
                        <DateText>End:</DateText>
                        <DateInput type="date" onChange={v => onChageDateEnd(v.target.value)} />
                    </Mediadiv>
                </div>
            </TopList>
            <InvoiceContainer>
                {invoices.data !== undefined ? invoices.data.map((invoice, index) => (
                    <InvoiceItem key={index} invoice={invoice} onClick={() => openModalInvoiceDetail(invoice)} />
                )) : null}
            </InvoiceContainer>
            <BoardContainer>
                {invoices.board_data !== undefined ? invoices.board_data.map((board, index) => (
                    <BoardText key={index}>{board.name} Groos: {board.gross} $</BoardText>
                )) : null}

            </BoardContainer>
            <TotalDataContainer>
                <BoardText>Total Gross: {invoices.total_gross} $</BoardText>
                <BoardText>Total milies: {invoices.total_miles}</BoardText>
                <BoardText>Avrage: {invoices.total_average}$/per mile</BoardText>
            </TotalDataContainer>
            <InvoiceModal setShowModal={setOpenInvoiceModal} showModal={openInvoiceModal}
                invoice={modalInvoiceData} deleteInvoice={deleteInvoice} setInvoice={setModalInvoiceData} closeModal2={closeModal} EditFunction={EditFunction} />
            {
                updatemodalshow ? <UpdateInvoiceModal getfilterinvoice={get_invoiceFilter} invoice={modalInvoiceData} updatemodalshow={updatemodalshow} setupdatemodalshow={setupdatemodalshow} /> : null
            }

        </Container>
    );
}

export default DashboardInvoice;