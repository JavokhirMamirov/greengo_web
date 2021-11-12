import React, { useState } from 'react'
import { Container, Tab, TabItem, Panel, PanelItem } from './StaffTab';
import DriverListPanel from '../DriverList';
const StaffTab = () =>{
    const [tabItem, setTabItem] = useState('driver');
    return(
        <Container>
            <Tab>
                <TabItem className={tabItem==='driver'?'active':null} onClick={()=>setTabItem('driver')}>Driver List</TabItem>
                <TabItem className={tabItem==='dispatcher'?'active':null}   onClick={()=>setTabItem('dispatcher')}>Dispatcher List</TabItem>
                <TabItem className={tabItem==='operator'?'active':null}   onClick={()=>setTabItem('operator')}>Operator List</TabItem>
            </Tab>
            <Panel>
                {tabItem === 'driver'?
                <PanelItem>
                    <DriverListPanel/>
                </PanelItem>:tabItem === 'dispatcher'?
                <PanelItem><h1>Dispatcher list</h1></PanelItem>:tabItem === 'operator'? 
                <PanelItem><h1>Operator list</h1></PanelItem>:null}
            </Panel>
        </Container>
    );
}

export default StaffTab;