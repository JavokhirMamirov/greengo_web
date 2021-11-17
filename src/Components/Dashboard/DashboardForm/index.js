import React, { useEffect, useState } from 'react'
import { Container, CoverBtn, Day, Form, Form2, Input, Month, Option, Select, TextDiv, Title, Today, Weekday } from './DashboardForm';
import { Autocomplete } from '@react-google-maps/api';


const DashBoardForm = ({drivers, dispatchers, operators, boards}) =>{
    var date = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    const [driverData, setDriverData] = useState(null)
    const [autocomplate, setAutocomplate] = useState(null);

    const onLoad = (autoC) => setAutocomplate(autoC);

    const DriverOnChange = (id) =>{
        if (id === null){
            setDriverData(null)
        }else{
            var index = drivers.findIndex(x => String(x.id) === id)
            console.log(index);
            setDriverData(drivers[index])
        }
        console.log(driverData);
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
                <Select>
                    <Option value={null}>Dispatcher name</Option>
                    {dispatchers.map((dispatcher, index)=>(
                        <Option key={index} value={dispatcher.id}>{dispatcher.name}</Option>
                    ))}
                    
                </Select>
                <Select>
                    <Option>Board</Option>
                    {boards.map((board, index)=>(
                        <Option key={index} value={board.id}>{board.name}</Option>
                    ))}
                </Select>
                <Select>
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
            </Form>
            <Form2>
                <Input type="number" step="0.001" style={{width:"60px"}} placeholder="D-H"/>
                <Autocomplete className="autocomplate"  onLoad={onLoad}>
                <Input type="text" style={{width:"150px"}}  placeholder="Orign"/>
                </Autocomplete>
                <Input  type="number" step="0.001" style={{width:"70px"}}  placeholder="Millage"/>
                <Autocomplete  className="autocomplate" onLoad={onLoad}>
                <Input type="text" style={{width:"150px"}}  placeholder="Destination"/>
                </Autocomplete>
                <Input  type="number" step="0.001" style={{width:"100px"}}  placeholder="Trip Rate"/>
                <Input type="datetime-local" style={{width:"150px"}}  placeholder='Delivery date & time'/>
                <Input type="text" style={{width:"150px"}}  placeholder='Special Notes'/>
                <CoverBtn>Cover</CoverBtn>
            </Form2>
            </div>

        </Container>
    );
}

export default DashBoardForm;