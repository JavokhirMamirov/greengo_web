/* eslint-disable no-redeclare */
import React, { useState, useEffect } from 'react'
import { Container, Tab, TabItem, Panel, PanelItem, SetUpNew } from './StaffTab';
import DriverListPanel from '../DriverList';
import DispatcherListPanel from '../DispatcherList';
import OperatorListPanel from '../OperatorList';
import SetUpDriverModal, { SetUpDispatcherModal, SetUpOperatorModal } from '../SetUpDriver';
import { GetDispatchers, GetDrivers, GetOperators } from '../../../api/requests';
import api from '../../../api/api';

const token = sessionStorage.getItem('token')

const StaffTab = () =>{
    const [tabItem, setTabItem] = useState('driver');
    const [driverModalOpen, setDriverModalOpen] = useState(false);
    const [drivers, setDrivers] = useState([])
    const [dispatchers, setDispatchers] = useState([])
    const [operators, setOperators] = useState([])


    const ChangeStatus = async (id, name, status, type) =>{
        if (type === "driver"){
            var url = `/driver/${id}/`
        }else if(type === "operator"){
            var url = `/owner-operator/${id}/`
        }else{
            var url = `/dispatcher/${id}/`
        }
        const data = {
            name:name,
            is_active:status
        }
        const response = await api.put( url ,data,{
            headers: {
                'Authorization': `Token ${token}` 
              }
            })
        if (response.data.success === true){
            if (type === "driver"){
                var index = drivers.findIndex(x => x.id === response.data.data.id)
                drivers[index]=response.data.data;
                setDrivers([...drivers])
            }else if(type === "operator"){
                var index = operators.findIndex(x => x.id === response.data.data.id)
                operators[index]=response.data.data;
                setOperators([ ...operators])
            }else{
                var index = dispatchers.findIndex(x => x.id === response.data.data.id)
                dispatchers[index]=response.data.data;
                setDispatchers([...dispatchers])
            }
        }

    } 

    const SetUpDriver = async (data) =>{
        const response = await api.post('/driver/',data,{
            headers: {
                'Authorization': `Token ${token}` 
              }
            })
        if (response.data.success === true){
            setDrivers([response.data.data, ...drivers])
            setDriverModalOpen(false)
        }
    }
    const SetUpDsp = async (data) =>{
        const response = await api.post('/dispatcher/',data,{
            headers: {
                'Authorization': `Token ${token}` 
              }
            })
        if (response.data.success === true){
            setDispatchers([response.data.data, ...dispatchers])
            setDriverModalOpen(false)
        }
    }
    const SetUpOpr = async (data) =>{
        const response = await api.post('/owner-operator/',data,{
            headers: {
                'Authorization': `Token ${token}` 
              }
            })
        if (response.data.success === true){
            setOperators([response.data.data, ...operators])
            setDriverModalOpen(false)
        }
    }

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
                <DriverListPanel data={drivers}  ChangeStatus={ChangeStatus}/>
            </PanelItem>:tabItem === 'dispatcher'?
            <PanelItem><DispatcherListPanel data={dispatchers}   ChangeStatus={ChangeStatus}/></PanelItem>:tabItem === 'operator'? 
            <PanelItem><OperatorListPanel data={operators}   ChangeStatus={ChangeStatus}/></PanelItem>:null}
        </Panel>
        {tabItem === 'driver'?
        <SetUpDriverModal 
            showModal={driverModalOpen} 
            setShowModal={setDriverModalOpen} 
            SetUpDriver={SetUpDriver} 
            owners={operators} />:
        tabItem === "dispatcher"?
        <SetUpDispatcherModal 
            showModal={driverModalOpen} 
            setShowModal={setDriverModalOpen}
            SetUpDsp={SetUpDsp}
            />:
        tabItem === "operator"?
        <SetUpOperatorModal 
            showModal={driverModalOpen} 
            setShowModal={setDriverModalOpen}
            SetUpOpr={SetUpOpr}
            />:null}
    </Container>
    );
}

export default StaffTab;