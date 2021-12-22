/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Container, CoverBtn, Day, Form, Form2, Input, Month, Option, Select, TextDiv, Title, Today, Weekday } from './DashboardForm';
import PlacesAutocomplete from '../PlacesAutoComplate';
import { Grid } from '@material-ui/core'
import './media.css'

const DashBoardForm = ({ drivers, dispatchers, operators, boards, SetUpInvoice }) => {
    var date = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const [driverData, setDriverData] = useState(null)
    const [dispatcher, setDispatcher] = useState(null);
    const [board, setBoard] = useState(null);
    const [owner, setOwner] = useState(null);
    const [driver, setDriver] = useState(null);
    const [dh, setDh] = useState('');
    const [origin, setOrigin] = useState('');
    const [milage, setMilage] = useState('');
    const [destination, setDestination] = useState('');
    const [trip_rate, setTrip_rate] = useState('');
    const [notes, setNotes] = useState('');
    const [date_end, setDate_end] = useState('');
    // const [status, setStatus] = useState(null);

    const DriverOnChange = (id) => {
        if (id === null) {
            setDriverData(null)
        } else {
            var index = drivers.findIndex(x => String(x.id) === id)
            setDriverData(drivers[index])
        }
        setDriver(id)
    }

    const onPlaceChanged = (data) => {
        console.log(data);
    }
    const SetUp = () => {
        if (dispatcher !== null && board !== null && owner !== null && driver !== null
            && dh !== '' && origin !== '' && milage !== '' && destination !== '' &&
            trip_rate !== '' && date_end !== ''
        ) {
            let invoice_data = {
                dispatcher: dispatcher,
                board: board,
                owner: owner,
                driver: driver,
                dh: dh,
                origin: origin,
                milage: milage,
                destination: destination,
                trip_rate: trip_rate,
                notes: notes,
                date_end: date_end,
                status: 1
            }
            SetUpInvoice(invoice_data)
            setDriver(null)
            setDispatcher(null)
            setDriverData(null)
            setBoard(null)
            setOwner(null)
            setDh('')
            setOrigin('')
            setMilage('')
            setDestination('')
            setTrip_rate('')
            setNotes('')
            setDate_end('')

        } else {
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
            <div style={{ display: "flex", flexDirection: 'column' }}>
                <Form className='from'>
                    <Select onChange={v => setDispatcher(v.target.value)}>
                        <Option value={null} selected={dispatcher === null ? "selected" : null}  >Dispatcher name</Option>
                        {dispatchers.map((dispatcher, index) => (
                            <Option key={index} value={dispatcher.id}>{dispatcher.name}</Option>
                        ))}
                    </Select>
                    <Select onChange={v => setBoard(v.target.value)}>
                        <Option selected={board === null ? "selected" : null} value={null}>Board</Option>
                        {boards.map((board, index) => (
                            <Option key={index} value={board.id}>{board.name}</Option>
                        ))}
                    </Select>
                    <Select onChange={v => setOwner(v.target.value)}>
                        <Option value={null} selected={owner === null ? "selected" : null}  >Owner operator</Option>
                        {operators.map((operator, index) => (
                            <Option key={index} value={operator.id}>{operator.name}</Option>
                        ))}
                    </Select>
                    <Select onChange={v => DriverOnChange(v.target.value)}>
                        <Option value={null} selected={driver === null ? "selected" : null}  >Driver name</Option>
                        {drivers.map((driver, index) => (
                            <Option key={index} value={driver.id}>{driver.name}</Option>
                        ))}
                    </Select>
                    <div>
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
                        <Input type="number" step="0.01" value={dh}
                            onChange={v => setDh(v.target.value)}
                            style={{ width: "60px" }} placeholder="D-H"
                        />
                    </div>
                </Form>
                <Form2>

                    <PlacesAutocomplete onChange={setOrigin} placeholder="Origin" value2={origin} />
                    <Input type="number" step="0.01" onChange={v => setMilage(v.target.value)}
                        style={{ width: "70px" }} value={milage} placeholder="Millage" />
                    <PlacesAutocomplete onChange={setDestination} placeholder="Destination" value2={destination} />
                    <Input type="number" step="0.01" value={trip_rate} onChange={v => setTrip_rate(v.target.value)}
                        style={{ width: "100px" }} placeholder="Trip Rate" />
                    <div style={{display:'flex'}}>
                        <Input type="datetime-local" value={date_end} onChange={v => setDate_end(v.target.value)}
                            style={{ width: "210px" }} placeholder='Delivery date & time' />
                        <Input type="text" style={{ width: "150px" }} onChange={v => setNotes(v.target.value)}
                            placeholder='Special Notes' value={notes} />
                        <CoverBtn onClick={() => SetUp()}>Cover</CoverBtn>
                    </div>
                </Form2>
            </div>

        </Container>
    );
}

export default DashBoardForm;