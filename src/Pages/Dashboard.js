import React from 'react'
import styled from 'styled-components';
import DashboardInvoice from '../Components/Dashboard/DashboardInvoice';
import DriverActivity from '../Components/Dashboard/DriverActivity';
import DashBoardTopBar from '../Components/Dashboard/TopBar';


const Dashboard = () =>{
    return(
        <Container>
            <DashBoardTopBar/>
            <ContentDiv>
                <DashboardInvoice/>
                <DriverActivity/>
            </ContentDiv>
        </Container>
    );
}

export default Dashboard;

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin: 20px;
`;


const ContentDiv = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap:20px;
`;