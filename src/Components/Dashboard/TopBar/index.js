import React, { useState } from 'react'
import DashBoardForm from '../DashboardForm';
import { Container, Panel, Tab, TabItem, TimeText } from './DashboardTopBar';


const DashBoardTopBar = () =>{
    const [tabItem, setTabItem] = useState('new_trip');
    return (
        <Container>
            <Tab>
                <TabItem className={tabItem==='new_trip'?'active':null}>NEW TRIP</TabItem>
                <TabItem className={tabItem==='expences'?'active':null}>EXPENCES</TabItem>
                <TimeText>TIME NOW IN: New York / 08:23 am   <i style={{paddingLeft:"20px"}}></i>  Weather Condition: RAINING: 23*</TimeText>
        </Tab>
        <Panel>
            <DashBoardForm/>
        </Panel>
        </Container>
    );
}

export default DashBoardTopBar;