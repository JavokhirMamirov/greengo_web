import React, { useState, useEffect } from 'react'
import { Container, Tab, TabItem, Panel, PanelItem, SetUpNew } from './StaffTab';
import DriverListPanel from '../DriverList';
import DispatcherListPanel from '../DispatcherList';
import OperatorListPanel from '../OperatorList';
import SetUpDriverModal, { SetUpDispatcherModal, SetUpOperatorModal } from '../SetUpDriver';
import { GetDispatchers, GetDrivers, GetOperators } from '../../api/requests';




const StaffTab = () =>{
    const [tabItem, setTabItem] = useState('driver');
    const [driverModalOpen, setDriverModalOpen] = useState(false);
    const [drivers, setDrivers] = useState([])
    const [dispatchers, setDispatchers] = useState([])
    const [operators, setOperators] = useState([])

    useEffect(() => {
        const get_drivers = async () =>{
            const res_dr = await GetDrivers(false);
            setDrivers(res_dr);
        }
        get_drivers();
        
    }, [])

    useEffect(() => {
        const get_dispatchers = async () =>{
            const res_dp = await GetDispatchers(false);
            setDispatchers(res_dp);
        }
        get_dispatchers();
        
    }, [])

    useEffect(() => {
        const get_operators = async () =>{
            const res_op = await GetOperators(false);
            setOperators(res_op);
        }
        get_operators();
        
    }, [])

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
                <DriverListPanel data={drivers}/>
            </PanelItem>:tabItem === 'dispatcher'?
            <PanelItem><DispatcherListPanel data={dispatchers}/></PanelItem>:tabItem === 'operator'? 
            <PanelItem><OperatorListPanel data={operators}/></PanelItem>:null}
        </Panel>
        {tabItem === 'driver'?
        <SetUpDriverModal showModal={driverModalOpen} setShowModal={setDriverModalOpen}/>:
        tabItem === "dispatcher"?
        <SetUpDispatcherModal showModal={driverModalOpen} setShowModal={setDriverModalOpen}/>:
        tabItem === "operator"?
        <SetUpOperatorModal showModal={driverModalOpen} setShowModal={setDriverModalOpen}/>:null}
    </Container>
    );
}

export default StaffTab;