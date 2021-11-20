import React from 'react'
import { MdComment, MdOutlineMultipleStop } from 'react-icons/md';
import { Container,LocationContainer,LocationDateSpan,LocationSpan,MidleContainer,Mile,PdfSpan,SpanTop,TopData, TrakNumber, TripRateSpan } from './Invoice';
import Swal from 'sweetalert2'


const InvoiceItem = (props) =>{

    const get_message = (message) => {
        Swal.fire({  
            title: 'Notes!',  
            text:message,
            icon: 'info'
          }); 
    }

    return (
        <Container attached={props.invoice.documents.length <= 0?false:true} onClick={props.onClick}>
            <TopData>
                <SpanTop>Dispatcher: {props.invoice.dispatcher.name}</SpanTop>
                <SpanTop>Board: {props.invoice.board.name}</SpanTop>
                <SpanTop>Owner: {props.invoice.owner.name}</SpanTop>
                <SpanTop>Driver: {props.invoice.driver.name}</SpanTop>
                {props.invoice.notes !== ""?
                <MdComment size={20} style={{marginLeft:'auto', marginRight:"10px", cursor:'pointer'}} onClick={()=>get_message(props.invoice.notes)} color="#006565"/>:null}
            </TopData>
            <MidleContainer>
                <TrakNumber>{props.invoice.driver.track_number}</TrakNumber>
                <LocationContainer>
                    <LocationSpan>{props.invoice.origin}</LocationSpan>
                    <LocationDateSpan>{props.invoice.date} EDT</LocationDateSpan>
                </LocationContainer>
                <MdOutlineMultipleStop size={20} color="#054a48" style={{marginLeft:"15px"}}/>
                <LocationContainer>
                    <LocationSpan>{props.invoice.destination}</LocationSpan>
                    <LocationDateSpan>{props.invoice.date_end} EDT</LocationDateSpan>
                </LocationContainer>
                {props.invoice.documents.length <= 0?
                <div style={{display:'flex', flexDirection:'column'}}>
                <PdfSpan color="#bb1d3b">NO PDF</PdfSpan>
                <PdfSpan color="#bb1d3b">ATTACHED</PdfSpan></div>:
                <div style={{display:'flex', flexDirection:'column'}}>
                <PdfSpan color="#19c773">PDF</PdfSpan>
                <PdfSpan color="#19c773">ATTACHED</PdfSpan></div>}
                <div style={{display:'flex', flexDirection:'column', marginLeft:"15px"}}>
                    <Mile>{props.invoice.milage}mi</Mile>
                    <LocationDateSpan>Total miles</LocationDateSpan>
                </div>
                <TripRateSpan>{props.invoice.trip_rate}$|</TripRateSpan>
                <LocationDateSpan style={{marginLeft:"5px"}}>3.36$/mi</LocationDateSpan>

            </MidleContainer>
        </Container>
    );
}

export default InvoiceItem;