import React, { useState } from 'react'
import { Container, Tab, TabItem, Panel, PanelItem, SetUpNew } from './StaffTab';
import DriverListPanel from '../DriverList';
import DispatcherListPanel from '../DispatcherList';
import OperatorListPanel from '../OperatorList';
import SetUpDriverModal from '../SetUpDriver';




const StaffTab = () =>{
    const [tabItem, setTabItem] = useState('driver');
    const [driverModalOpen, setDriverModalOpen] = useState(false);
    return(
        <Container>
            <Tab>
                <TabItem className={tabItem==='driver'?'active':null} onClick={()=>setTabItem('driver')}>Driver List</TabItem>
                <TabItem className={tabItem==='dispatcher'?'active':null}   onClick={()=>setTabItem('dispatcher')}>Dispatcher List</TabItem>
                <TabItem className={tabItem==='operator'?'active':null}   onClick={()=>setTabItem('operator')}>Operator List</TabItem>
                <SetUpNew onClick={()=>setDriverModalOpen(!driverModalOpen)}>Set Up New</SetUpNew>
            </Tab>
            <Panel>
                {tabItem === 'driver'?
                <PanelItem>
                    <DriverListPanel/>
                </PanelItem>:tabItem === 'dispatcher'?
                <PanelItem><DispatcherListPanel/></PanelItem>:tabItem === 'operator'? 
                <PanelItem><OperatorListPanel/></PanelItem>:null}
            </Panel>
            <SetUpDriverModal isOpen={driverModalOpen} SetOpen={setDriverModalOpen}/>
        </Container>
    );
}

export default StaffTab;