import React, {useState} from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import TopBar from './Components/TopBar';
import SideBar from './Components/SideBar';
import styled from 'styled-components';

import Dashboard from './Pages/Dashboard';
import Invoice from './Pages/Invoice';
import DriverList from './Pages/DriverList';
import SignIn from './Components/SignIn';
function App() {
  const [logedIn, setLogedIn] = useState(false);
  return (
    <>
    {
      logedIn === true ?
    <Router>
      <TopBar/>
      <Container>
        <SideBar/>
        <Routes>
          <Route exact path="/" element={<Dashboard/>} />
          <Route  path="/invoice" element={<Invoice/>} />
          <Route  path="/driver-list" element={<DriverList/>} />
          </Routes>
      </Container>
    </Router>:<SignIn/>
    }
    </>
  );
}

export default App;


const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;