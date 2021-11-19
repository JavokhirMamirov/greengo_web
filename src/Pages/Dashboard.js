import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import DashboardInvoice from '../Components/Dashboard/DashboardInvoice';
import DriverActivity from '../Components/Dashboard/DriverActivity';
import DashBoardTopBar from '../Components/Dashboard/TopBar';
import { GetBoards, GetDispatchers, GetDrivers, GetInvoices, GetOperators } from '../api/requests';
import api from '../api/api';
const token = sessionStorage.getItem('token')
const Dashboard = () =>{
    const [drivers, setDrivers] = useState([])
    const [dispatchers, setDispatchers] = useState([])
    const [operators, setOperators] = useState([])
    const [boards, setBoards] = useState([])
    const [invoices, setInvoices] = useState([]);

    const SetUpInvoice = async(invoice_data)=>{
        const response = await api.post('/invoice/', invoice_data,{
            headers: {
                'Authorization': `Token ${token}` 
              }
        })
        if (response.data.success === true){
            get_invoices();
        }else{
            console.log(response.data);
        }
    }

    const get_invoices = async (filter={}) =>{
        const res_dr = await GetInvoices(filter);
        setInvoices(res_dr);
    }

    useEffect(() => {
        
        get_invoices();
        
        
    }, [])
    

    useEffect(() => {
        const get_drivers = async () =>{
            const res_dr = await GetDrivers(true);
            setDrivers(res_dr);
        }
        get_drivers();
        
    }, [])
    useEffect(() => {
        const get_boards = async () =>{
            const res_br = await GetBoards(true);
            setBoards(res_br);
        }
        get_boards();
        
    }, [])

    useEffect(() => {
        const get_dispatchers = async () =>{
            const res_dp = await GetDispatchers(true);
            setDispatchers(res_dp);
        }
        get_dispatchers();
        
    }, [])

    useEffect(() => {
        const get_operators = async () =>{
            const res_op = await GetOperators(true);
            setOperators(res_op);
        }
        get_operators();
        
    }, [])
    return(
        <Container>
            <DashBoardTopBar
                drivers={drivers} 
                dispatchers={dispatchers} 
                operators={operators} boards={boards}
                SetUpInvoice={SetUpInvoice}
            />
            <ContentDiv>
                <DashboardInvoice invoices={invoices} setInvoices={setInvoices}/>
                <DriverActivity drivers={drivers}/>
            </ContentDiv>
        </Container>
    );
}

export default Dashboard;

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin: 20px;
    margin-left: 240px;
    margin-right: 30px;
    @media (max-width:968px){
        margin-left: 30px;
    }
`;


const ContentDiv = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap:20px;
    @media (max-width:1320px){
        grid-template-columns: 1fr;
    }
`;