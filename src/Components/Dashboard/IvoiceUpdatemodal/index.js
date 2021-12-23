import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import {
  Background, ModalContent, ModalWrapper, Title, TopBar,
   DetailContainer, DetailItem, DetailText, BottomContainer,
} from './InvoiceModal';
import NewButton from '@material-ui/core/Button'
import { MdClose,  } from "react-icons/md";
import PlacesAutocomplete from '../PlacesAutoComplate';
import { Input, Option, Select,  } from './DashboardForm';
import { GetBoards, GetDispatchers, GetDrivers, GetInvoices, GetOperators } from '../../../api/requests'
import api from '../../../api/api';
const token = localStorage.getItem('token')



export function UpdateInvoiceModal({ updatemodalshow, setupdatemodalshow, invoice, setInvoice, closeModal2,getfilterinvoice }) {
  const modalRef = useRef();
  const fileInputRef = useRef();
  const [documentShow, setDocumentShow] = useState(false);
  const [file, setFile] = useState(null);
  const [drivers, setDrivers] = useState([])
  const [dispatchers, setDispatchers] = useState([])
  const [operators, setOperators] = useState([])
  const [boards, setBoards] = useState([])
  const [invoices, setInvoices] = useState([]);
  const [invoiceFilter, setInvoiceFilter] = useState({});

  

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: updatemodalshow ? 1 : 0,
    transform: updatemodalshow ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setupdatemodalshow(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && updatemodalshow) {
        setupdatemodalshow(false);

      }
    },
    [setupdatemodalshow, updatemodalshow]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  
    const [dispatcher, setDispatcher] = useState(invoice.dispatcher.id);
    const [board, setBoard] = useState(invoice.board.id);
    const [owner, setOwner] = useState(invoice.owner.id);
    const [driver, setDriver] = useState(invoice.driver.id);
    const [dh, setDh] = useState(invoice.dh);
    const [origin, setOrigin] = useState(invoice.origin);
    const [milage, setMilage] = useState(invoice.milage);
    const [destination, setDestination] = useState(invoice.destination);
    const [trip_rate, setTrip_rate] = useState(invoice.trip_rate);
    const [notes, setNotes] = useState(invoice.notes);
    const [date, setDate] = useState(invoice.date);
    const [status, setStatus] = useState(invoice.status.id);
    const [statusData, setstatusData] = useState([])

  const SetUpInvoice = async (invoice_data) => {
    const response = await api.post('/invoice/', invoice_data, {
      headers: {
        'Authorization': `Token ${token}`
      }
    })
    if (response.data.success === true) {
      get_invoices();
    } else {
      console.log(response.data);
    }
  }

  const get_invoices = async () => {
    var date = new Date();
    var dateStart = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 3)
    var dateEnd = new Date(date.getFullYear(), date.getMonth(), date.getDate())
    var filter = {
      date__gte: dateStart !== '' ? `${dateStart.getFullYear()}-${dateStart.getMonth() + 1}-${dateStart.getDate()} 00:00` : null,
      date__lte: dateEnd !== '' ? `${dateEnd.getFullYear()}-${dateEnd.getMonth() + 1}-${dateEnd.getDate()} 23:59` : null,
    }
    setInvoiceFilter(filter);
    const res_dr = await GetInvoices(filter);
    setInvoices(res_dr);
  }

  useEffect(() => {
    get_invoices();
  }, [])

  const get_drivers = async () => {
    const res_dr = await GetDrivers(true);
    setDrivers(res_dr);
  }
  useEffect(() => {
    get_drivers();
  }, [])

  useEffect(() => {
    const get_boards = async () => {
      const res_br = await GetBoards(true);
      setBoards(res_br);
    }
    get_boards();
  }, [])

  useEffect(() => {
    const get_dispatchers = async () => {
      const res_dp = await GetDispatchers(true);
      setDispatchers(res_dp);
    }
    get_dispatchers();
  }, [])

  useEffect(() => {
    const get_operators = async () => {
      const res_op = await GetOperators(true);
      setOperators(res_op);
    }
    get_operators();
  }, [])

  const handleFileUpload = event => {
    setFile(event.target.files[0])
  };

  const delete_pdf = async (file_id) => {
    var formdata = new FormData();
    formdata.append("file_id", file_id);
    formdata.append("invoice_id", invoice.id);
    const response = await api.post('/delete-pdf-file/', formdata)
    if (response.data.success === true) {
      let a = []
      for (let dc of invoice.documents) {
        if (String(dc.id) !== String(file_id)) {
          a.push(dc)
        }
      }
      invoice.documents = a
      setInvoice({ ...invoice })
      closeModal2();
    }
  }

  const UploadDocument = async (id) => {
    if (file !== null) {
      let formData = new FormData();
      formData.append("file", file);
      formData.append("invoice_id", id);
      const response = await api.post('/pdf-file/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Token ${token}`
        }
      })
      console.log(response);
      if (response.data.success === true) {
        setFile(null)
        invoice.documents = [response.data.data, ...invoice.documents]
        setInvoice({ ...invoice })
      }
    }

  }

  useEffect(() => {
    try {
      api.get('/invoice-status/', {
        headers: {
          'Authorization': `Token ${token}`
        }
      }).then((res)=>{
        setstatusData(res.data.data)
      })
    } catch (error) {
      console.log(error);
    }
    
  }, [])

    

  const UpdateInvoice = async () => {
    var DATA = {
      dispatcher:dispatcher,
      board:board,
      owner:owner,
      driver:driver,
      dh:dh,
      origin:origin,
      milage:milage,
      destination:destination,
      trip_rate:trip_rate,
      notes:notes,
      date:date,
      status:status,
    }

    try {
      await api.put(`/invoice/${invoice.id}/`, DATA, {
        headers: {
          Authorization: `token ${token}`
        }
      }).then((res)=>{
        setupdatemodalshow(false)
        getfilterinvoice()
        
      })
    } catch (error) {
      console.log(error);
    }


  }


  return (
    <>
      {updatemodalshow ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper updatemodalshow={updatemodalshow}>
              <ModalContent>
                <TopBar>
                  <Title>Update Invoice</Title>

                  <MdClose size={26} color="#fff" style={{ marginRight: "10px", cursor: "pointer" }} onClick={() => setupdatemodalshow(false)} />
                </TopBar>
                
                <DetailContainer style={{marginTop:15}}>
                  
                  <DetailItem>
                    <DetailText>Dispatcher Name</DetailText>
                    <Select onChange={v => setDispatcher(v.target.value)}>
                      <Option value={dispatcher} selected={dispatcher === null ? "selected" : null}  >{invoice.dispatcher.name}</Option>
                      {dispatchers.map((dispatcher, index) => (
                        <Option key={index} value={dispatcher.id}>{dispatcher.name}</Option>
                      ))}
                    </Select>
                  </DetailItem>
                 
                  <DetailItem>
                    <DetailText>Load Board</DetailText>
                    <Select onChange={v => setBoard(v.target.value)}>
                            <Option selected={board === null ? "selected" : null} value={board}>{invoice.board.name}</Option>
                            {boards.map((board, index) => (
                                <Option key={index} value={board.id}>{board.name}</Option>
                            ))}
                        </Select>
                  </DetailItem>
                  <DetailItem>
                    <DetailText>Owner Name</DetailText>
                    <Select onChange={v => setOwner(v.target.value)}>
                            <Option value={owner} selected={owner === null ? "selected" : null}  >{invoice.owner.name}</Option>
                            {operators.map((operator, index) => (
                                <Option key={index} value={operator.id}>{operator.name}</Option>
                            ))}
                        </Select>
                  </DetailItem>
                  <DetailItem>
                    <DetailText>Driver Name</DetailText>
                    <Select onChange={v => setDriver(v.target.value)}>
                            <Option value={driver} selected={driver === null ? "selected" : null}  >{invoice.driver.name}</Option>
                            {drivers.map((driver, index) => (
                                <Option key={index} value={driver.id}>{driver.name}</Option>
                            ))}
                        </Select>
                  </DetailItem>
                  <DetailItem>
                    <DetailText>Dead Head </DetailText>
                    <Input type="text" value={dh} onChange={(e)=>setDh(e.target.value)} />
                  </DetailItem>
                  <DetailItem>
                    <DetailText>Origin</DetailText>
                     <PlacesAutocomplete stylenew={true} onChange={setOrigin} placeholder="Origin" value2={origin} />

                  </DetailItem>
                  <DetailItem>
                    <DetailText>Loaded Miles</DetailText>
                    <Input type="text" value={milage} onChange={(e)=>setMilage(e.target.value)} />
                  </DetailItem>
                  <DetailItem>
                    <DetailText>Destination</DetailText>
                    <PlacesAutocomplete stylenew={true} onChange={setDestination} placeholder="Origin" value2={destination} />
                  </DetailItem>
                  <DetailItem>
                    <DetailText>Trip Rate</DetailText>
                    <Input type="text" value={trip_rate} onChange={(e)=>setTrip_rate(e.target.value)}/>
                  </DetailItem>
                  <DetailItem>
                    <DetailText>Notes</DetailText>
                    <Input type="text" value={notes} onChange={(e)=>setNotes(e.target.value)}/>
                  </DetailItem>
                  <DetailItem>
                    <DetailText>Date</DetailText>
                    <Input type="datetime" value={date} onChange={(e)=>setDate(e.target.value)}/>
                  </DetailItem>
                  <DetailItem>
                    <DetailText>Status </DetailText>
                    <Select onChange={v => setStatus(v.target.value)}>
                            <Option selected={board === null ? "selected" : null} value={status}>{invoice.status.name}</Option>
                            {statusData.map((statu, index) => (
                                <Option key={index} value={statu.id}>{statu.name}</Option>
                            ))}
                        </Select>
                  </DetailItem>
                  <BottomContainer style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <NewButton style={{ backgroundColor:'#005951',color:'white'}} onClick={UpdateInvoice}>Update</NewButton>
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