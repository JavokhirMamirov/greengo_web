import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import { Background, Button, DriverContainer, ModalContent, ModalWrapper, Title, TopBar,
  TruckContainer,InvoiceContainer, Text, LocationContainer, SubText, DetailContainer, DetailItem, DetailText, BottomContainer, DocumentContainer, FileInput, FilesContainer, FilesLink, File, UploadFile } from './InvoiceModal';
import { MdOutlineLocalShipping, MdPersonOutline, MdOutlineLocationOn, MdClose, MdUploadFile, MdDone, MdRestoreFromTrash } from "react-icons/md";
import { useState } from 'react/cjs/react.development';
import api from '../../../api/api';
const token = localStorage.getItem('token')



export function InvoiceModal ({ showModal, setShowModal, invoice, deleteInvoice,setInvoice, closeModal2}){
  const modalRef = useRef();
  const fileInputRef = useRef();
  const [documentShow, setDocumentShow] = useState(false);
  const [file, setFile] = useState(null);
  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  const DateFormat=(date)=>{
    const dt = new Date(date);
    return dt.toUTCString();
  }

  const PerMileRate = (rate, dh, milage) =>{
    return Number((parseFloat(rate)/(parseFloat(dh)+parseFloat(milage))).toFixed(2))
  }

  const Delete_Invoice=(id)=>{
    deleteInvoice(id);
    setShowModal(false);
  }

  const handleFileUpload = event => {
    setFile(event.target.files[0])
  };

  const delete_pdf = async(file_id)=>{
    var formdata = new FormData();
    formdata.append("file_id", file_id);
    formdata.append("invoice_id", invoice.id);
    const response = await api.post('/delete-pdf-file/',formdata)
    if(response.data.success === true){
      let a = []
      for (let dc of invoice.documents){
        if (String(dc.id) !== String(file_id)){
          a.push(dc)
        } 
      }
      invoice.documents = a
      setInvoice({...invoice})
      closeModal2();
    }
  }

  const UploadDocument = async (id) =>{
    if (file !== null){
        let formData = new FormData();
        formData.append("file", file);
        formData.append("invoice_id", id);
        const response = await api.post('/pdf-file/', formData,{
          headers:{
            'Content-Type': 'multipart/form-data',
            'Authorization': `Token ${token}` 
          }
        })
        console.log(response); 
        if (response.data.success === true){
          setFile(null)
          invoice.documents=[response.data.data, ...invoice.documents]
          setInvoice({...invoice})
        }
    }
    
  }


  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>
                  <TopBar>
                      <Title>Trip detail</Title>
                      <Button>Edit</Button>
                      <Button onClick={()=>Delete_Invoice(invoice.id)}>Remove</Button>
                      <MdClose size={26} color="#fff" style={{marginRight:"10px", cursor:"pointer"}} onClick={()=>setShowModal(false)}/>
                  </TopBar>
                  <InvoiceContainer>
                        <TruckContainer>
                            <MdOutlineLocalShipping  color="white" size={32}/>
                            <Text>Truck | {invoice.driver.track_number}</Text>
                        </TruckContainer>
                        <DriverContainer>
                            <MdPersonOutline  color="white" size={32}/>
                            <Text>{invoice.driver.name}</Text>
                        </DriverContainer>
                        <LocationContainer>
                            <TruckContainer style={{margin:"0px"}}>
                                <MdOutlineLocationOn  color="white" size={26}/>
                                <Text>{invoice.origin}</Text>
                            </TruckContainer>
                            <SubText>{DateFormat(invoice.date)}</SubText>
                        </LocationContainer>
                        <LocationContainer style={{alignItems:'end'}}>
                            <Text style={{fontSize:"20px", fontWeight:"600"}}>{invoice.trip_rate}$</Text>
                            <SubText>{PerMileRate(invoice.trip_rate, invoice.dh, invoice.milage)}$/per mile</SubText>
                        </LocationContainer>
                        <LocationContainer>
                            <TruckContainer style={{margin:"0px"}}>
                                <MdOutlineLocationOn  color="white" size={26}/>
                                <Text>{invoice.destination}</Text>
                            </TruckContainer>
                            <SubText>{DateFormat(invoice.date_end)}</SubText>
                        </LocationContainer>
                        <LocationContainer  style={{alignItems:'end', justifyContent:'center'}}>
                            <Text>Download PDF</Text>
                        </LocationContainer>
                  </InvoiceContainer>
                  <DetailContainer>
                        <DetailItem>
                            <DetailText style={{cursor:'pointer'}} onClick={()=>setDocumentShow(!documentShow)}>View Docs</DetailText>
                            {invoice.documents?.length > 0?
                            <DetailText style={{color:"#32a852"}}>PDF attached</DetailText>:
                            <DetailText style={{color:"#a83232"}}>No PDF attached</DetailText>
                          }
                        </DetailItem>
                        {documentShow === true?
                        <DocumentContainer>
                          <FileInput onClick={()=>fileInputRef.current.click()}>
                            <MdUploadFile size={28} color="#005951"/>
                            <span style={{color:"#005951", fontSize:"10px"}}>Upload</span>
                            <input type="file" style={{display:'none'}} ref={fileInputRef} onChange={handleFileUpload}/>
                          </FileInput>
                          {file !== null?
                          <UploadFile>
                            <div style={{display:'flex', flexDirection:'column'}}>
                              <MdDone style={{cursor:'pointer'}} onClick={()=>UploadDocument(invoice.id)} color="#005951" size={20}/>
                              <MdRestoreFromTrash onClick={()=>setFile(null)}  style={{cursor:'pointer', marginTop:"5px"}} color="red" size={20}/>
                            </div>
                            <File  src="/images/pdf.png" alt={file.name} title={file.name}/>
                          </UploadFile>:null}
                          <FilesContainer>
                            {invoice.documents?.map((doc, index)=>(
                              <UploadFile key={index}>
                                <div style={{display:'flex'}}>
                                <MdRestoreFromTrash onClick={()=>delete_pdf(doc.id)}  key={index} style={{cursor:'pointer'}} color="red" size={20}/>
                                </div>
                                <FilesLink href={doc.file} target="_blank">
                                    <File src="/images/pdf.png" alt={doc.name} title={doc.name}/>
                                </FilesLink>
                              </UploadFile>
                            ))}
                            
                          </FilesContainer>
                        </DocumentContainer>:null}
                        <DetailItem>
                            <DetailText>Dispatcher Name</DetailText>
                            <DetailText>{invoice.dispatcher.name}</DetailText>
                        </DetailItem>
                        <DetailItem>
                            <DetailText>Load Board</DetailText>
                            <DetailText>{invoice.board.name}</DetailText>
                        </DetailItem>
                        <DetailItem>
                            <DetailText>Owner Name</DetailText>
                            <DetailText>{invoice.owner.name}</DetailText>
                        </DetailItem>
                        <DetailItem>
                            <DetailText>Driver Name</DetailText>
                            <DetailText>{invoice.driver.name}</DetailText>
                        </DetailItem>
                        <DetailItem>
                            <DetailText>Truck Number</DetailText>
                            <DetailText>{invoice.driver.track_number}</DetailText>
                        </DetailItem>
                        <DetailItem>
                            <DetailText>Trailer Number</DetailText>
                            <DetailText>{invoice.driver.trailer_number}</DetailText>
                        </DetailItem>
                        <DetailItem>
                            <DetailText>Dead Head </DetailText>
                            <DetailText>{invoice.dh}</DetailText>
                        </DetailItem>
                        <DetailItem>
                            <DetailText>Loaded Miles</DetailText>
                            <DetailText>{invoice.milage}</DetailText>
                        </DetailItem>
                        <DetailItem>
                            <DetailText>Special Notes</DetailText>
                            <DetailText>{invoice.notes}</DetailText>
                        </DetailItem>
                        <BottomContainer>
                            <DetailText>Makropoınt requıred remınd to drıver to accept lınk</DetailText>
                        </BottomContainer>

                  </DetailContainer>
              </ModalContent>
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};