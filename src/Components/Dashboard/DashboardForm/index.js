import React, { useEffect, useState } from 'react'
import { Container, CoverBtn, Day, Form, Form2, Input, Month, Option, Select, TextDiv, Title, Today, Weekday } from './DashboardForm';
import { Autocomplete } from '@react-google-maps/api';



const DashBoardForm = ({drivers, dispatchers, operators, boards, SetUpInvoice}) =>{
    var date = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    const [driverData, setDriverData] = useState(null)
    const [autocomplate, setAutocomplate] = useState(null);
    const [dispatcher, setDispatcher] = useState(null);
    const [board, setBoard] = useState(null);
    const [owner, setOwner] = useState(null);
    const [driver, setDriver] = useState(null);
    const [dh, setDh] = useState(null);
    const [origin, setOrigin] = useState('');
    const [milage, setMilage] = useState(null);
    const [destination, setDestination] = useState('');
    const [trip_rate, setTrip_rate] = useState(null);
    const [notes, setNotes] = useState('');
    const [date_end, setDate_end] = useState('');
    const [status, setStatus] = useState(null);


    const onLoad = (autoC) => setAutocomplate(autoC);

    const DriverOnChange = (id) =>{
        if (id === null){
            setDriverData(null)
        }else{
            var index = drivers.findIndex(x => String(x.id) === id)
            setDriverData(drivers[index])
        }
        setDriver(id)
    }
    const SetUp = () =>{
        if (dispatcher !== null && board !== null && owner !== null && driver !== null 
            && dh !== null && origin !== '' && milage !== null && destination !== ''&&
            trip_rate !== null && date_end !== ''
            ){  
                let invoice_data = {
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
                    date_end:date_end,
                    status:1
                }
                SetUpInvoice(invoice_data)

            }else{
                alert('one of the fields is left blank')
            }
    }
    return (
        <Container>
            <Today>
                <Month>{months[date.getMonth()]}</Month>
                <Day>{date.getDate()}</Day>
                <Weekday>{weekdays[date.getDay()]}</Weekday>
            </Today>
            <div style={{display:"flex", flexDirection:'column'}}>
            <Form>
                <Select onChange={v=>setDispatcher(v.target.value)}>
                    <Option value={null}>Dispatcher name</Option>
                    {dispatchers.map((dispatcher, index)=>(
                        <Option key={index} value={dispatcher.id}>{dispatcher.name}</Option>
                    ))}
                    
                </Select>
                <Select  onChange={v=>setBoard(v.target.value)}>
                    <Option value={null}>Board</Option>
                    {boards.map((board, index)=>(
                        <Option key={index} value={board.id}>{board.name}</Option>
                    ))}
                </Select>
                <Select  onChange={v=>setOwner(v.target.value)}>
                    <Option value={null}>Owner operator</Option>
                    {operators.map((operator, index)=>(
                        <Option key={index} value={operator.id}>{operator.name}</Option>
                    ))}
                </Select>
                <Select onChange={v=>DriverOnChange(v.target.value)}>
                    <Option value={null} >Driver name</Option>
                    {drivers.map((driver, index)=>(
                        <Option key={index} value={driver.id}>{driver.name}</Option>
                    ))}
                </Select>
                <TextDiv>
                    <Title>Phone number</Title>
                    <Title>{driverData?.phone}</Title>
                </TextDiv>
                <TextDiv>
                    <Title>Truck number</Title>
                    <Title>{driverData?.track_number}</Title>
                </TextDiv>
                <TextDiv>
                    <Title>Trailer number</Title>
                    <Title>{driverData?.trailer_number}</Title>
                </TextDiv>
                <Input type="number" step="0.001" 
                 onChange={v=>setDh(v.target.value)}
                style={{width:"60px"}} placeholder="D-H"/>
            </Form>
            <Form2>
                
                <Autocomplete className="autocomplate"  onLoad={onLoad}>
                <Input type="text"  onKeyUp={v=>setOrigin(v.target.value)}
                style={{width:"150px"}}  placeholder="Orign"/>
                </Autocomplete>
                <Input  type="number" step="0.001"  onChange={v=>setMilage(v.target.value)}
                style={{width:"70px"}}  placeholder="Millage"/>
                <Autocomplete  className="autocomplate" onLoad={onLoad}>
                <Input type="text"  onKeyUp={v=>setDestination(v.target.value)}
                style={{width:"150px"}}  placeholder="Destination"/>
                </Autocomplete>
                <Input  type="number" step="0.001"  onChange={v=>setTrip_rate(v.target.value)}
                style={{width:"100px"}}  placeholder="Trip Rate"/>
                <Input type="datetime-local"  onChange={v=>setDate_end(v.target.value)}
                style={{width:"210px"}}  placeholder='Delivery date & time'/>
                <Input type="text" style={{width:"150px"}} onChange={v=>setNotes(v.target.value)}
                  placeholder='Special Notes'/>
                <CoverBtn onClick={()=>SetUp()}>Cover</CoverBtn>
            </Form2>
            </div>

        </Container>
    );
}

export default DashBoardForm;