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
    const DateFormat=(date)=>{
        const dt = new Date(date);
        return dt.toUTCString();
      }
    const PerMileRate = (rate, dh, milage) =>{
    return Number((parseFloat(rate)/(parseFloat(dh)+parseFloat(milage))).toFixed(2))
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
                    <LocationDateSpan>{DateFormat(props.invoice.date)}</LocationDateSpan>
                </LocationContainer>
                <MdOutlineMultipleStop size={20} color="#054a48" style={{marginLeft:"15px"}}/>
                <LocationContainer>
                    <LocationSpan>{props.invoice.destination}</LocationSpan>
                    <LocationDateSpan>{DateFormat(props.invoice.date_end)}</LocationDateSpan>
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
                <LocationDateSpan style={{marginLeft:"5px"}}>{PerMileRate(props.invoice.trip_rate, props.invoice.dh, props.invoice.milage)}$/mi</LocationDateSpan>

            </MidleContainer>
        </Container>
    );
}

export default InvoiceItem;