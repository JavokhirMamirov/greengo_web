import React from 'react'
import { Container, CoverBtn, Day, Form, Form2, Input, Month, Option, Select, TextDiv, Title, Today, Weekday } from './DashboardForm';



const DashBoardForm = () =>{
    return (
        <Container>
            <Today>
                <Month>September</Month>
                <Day>27</Day>
                <Weekday>Sunday</Weekday>
            </Today>
            <div style={{display:"flex", flexDirection:'column'}}>
            <Form>
                <Select>
                    <Option>Dispatcher name</Option>
                    <Option>name</Option>
                </Select>
                <Select>
                    <Option>Board</Option>
                    <Option>name</Option>
                </Select>
                <Select>
                    <Option>Owner operator</Option>
                    <Option>name</Option>
                </Select>
                <Select>
                    <Option>Driver name</Option>
                    <Option>name</Option>
                </Select>
                <TextDiv>
                    <Title>Phone number</Title>
                    <Title>9989052935</Title>
                </TextDiv>
                <TextDiv>
                    <Title>Truck number</Title>
                    <Title>9989052935</Title>
                </TextDiv>
                <TextDiv>
                    <Title>Trailer number</Title>
                    <Title>9989052935</Title>
                </TextDiv>
            </Form>
            <Form2>
                <Input type="number" step="0.001" style={{width:"60px"}} placeholder="D-H"/>
                <Input type="text" style={{width:"150px"}}  placeholder="Orign"/>
                <Input  type="number" step="0.001" style={{width:"70px"}}  placeholder="Millage"/>
                <Input type="text" style={{width:"150px"}}  placeholder="Destination"/>
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