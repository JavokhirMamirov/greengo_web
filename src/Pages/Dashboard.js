import React from 'react'
import styled from 'styled-components';
import DashBoardTopBar from '../Components/Dashboard/TopBar';
const Dashboard = () =>{
    return(
        <Container>
            <DashBoardTopBar/>
        </Container>
    );
}

export default Dashboard;

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin: 20px;
`;